#!/usr/bin/env python3

from __future__ import annotations

import ast
import os
import re
import shutil
from pathlib import Path
from typing import Dict, List, Optional, Tuple


ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "_posts"
PL_TAG_DIR = ROOT / "blog" / "tag"
EN_TAG_DIR = ROOT / "blog" / "en" / "tag"


FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n?", re.DOTALL)


def slugify(value: str) -> str:
    replacements = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z",
        "Ą": "a",
        "Ć": "c",
        "Ę": "e",
        "Ł": "l",
        "Ń": "n",
        "Ó": "o",
        "Ś": "s",
        "Ź": "z",
        "Ż": "z",
    }
    normalized = "".join(replacements.get(char, char) for char in value)
    normalized = normalized.lower()
    normalized = re.sub(r"[^a-z0-9]+", "-", normalized)
    return normalized.strip("-")


def parse_scalar(raw: str) -> str:
    value = raw.strip()
    if value.startswith(("'", '"')) and value.endswith(("'", '"')) and len(value) >= 2:
        return value[1:-1]
    return value


def parse_list(raw: str) -> List[str]:
    value = raw.strip()
    if value.startswith("[") and value.endswith("]"):
        try:
            parsed = ast.literal_eval(value)
            if isinstance(parsed, list):
                return [str(item).strip() for item in parsed if str(item).strip()]
        except Exception:
            pass
        inner = value[1:-1]
        return [item.strip().strip("'\"") for item in inner.split(",") if item.strip()]
    return []


def parse_frontmatter(path: Path) -> Dict[str, object]:
    text = path.read_text(encoding="utf-8")
    match = FRONTMATTER_RE.match(text)
    if not match:
        return {}

    data: Dict[str, object] = {}
    for line in match.group(1).splitlines():
        if ":" not in line:
            continue
        key, raw_value = line.split(":", 1)
        key = key.strip()
        raw_value = raw_value.strip()
        if not raw_value:
            data[key] = ""
        elif raw_value.startswith("[") and raw_value.endswith("]"):
            data[key] = parse_list(raw_value)
        else:
            data[key] = parse_scalar(raw_value)
    return data


def detect_lang(path: Path, frontmatter: Dict[str, object]) -> str:
    raw_lang = str(frontmatter.get("lang", "")).strip()
    if raw_lang in {"pl", "en"}:
        return raw_lang
    name = path.name
    if ".en." in name:
        return "en"
    return "pl"


def load_tag_pages(base_dir: Path) -> Dict[str, Dict[str, str]]:
    pages: Dict[str, Dict[str, str]] = {}
    if not base_dir.exists():
        return pages

    for index_path in base_dir.glob("*/index.html"):
        frontmatter = parse_frontmatter(index_path)
        slug = index_path.parent.name
        pages[slug] = {
            "title": str(frontmatter.get("title", "")).strip() or slug,
            "tag": str(frontmatter.get("tag", "")).strip() or slug,
            "translation_id": str(frontmatter.get("translation_id", "")).strip(),
        }
    return pages


def build_existing_translation_lookup() -> Dict[Tuple[str, str], str]:
    lookup: Dict[Tuple[str, str], str] = {}
    pl_pages = load_tag_pages(PL_TAG_DIR)
    en_pages = load_tag_pages(EN_TAG_DIR)

    for slug, meta in pl_pages.items():
        translation_id = meta.get("translation_id", "")
        if translation_id:
            lookup[("pl", meta["tag"])] = translation_id
            lookup[("pl", slug)] = translation_id

    for slug, meta in en_pages.items():
        translation_id = meta.get("translation_id", "")
        if translation_id:
            lookup[("en", meta["tag"])] = translation_id
            lookup[("en", slug)] = translation_id

    return lookup


def collect_tags() -> Dict[str, List[str]]:
    tags_by_lang: Dict[str, List[str]] = {"pl": [], "en": []}
    seen = {"pl": set(), "en": set()}

    for post_path in sorted(POSTS_DIR.glob("*")):
        if not post_path.is_file():
            continue
        frontmatter = parse_frontmatter(post_path)
        tags = frontmatter.get("tags", [])
        if not isinstance(tags, list):
            continue
        lang = detect_lang(post_path, frontmatter)
        for tag in tags:
            tag_str = str(tag).strip()
            if tag_str and tag_str not in seen[lang]:
                seen[lang].add(tag_str)
                tags_by_lang[lang].append(tag_str)

    tags_by_lang["pl"].sort(key=lambda value: slugify(value))
    tags_by_lang["en"].sort(key=lambda value: slugify(value))
    return tags_by_lang


def make_translation_id(lang: str, tag: str) -> str:
    return f"tag-{lang}-{slugify(tag)}"


def render_archive(tag: str, lang: str, translation_id: str) -> str:
    slug = slugify(tag)
    permalink = f"/blog/tag/{slug}/" if lang == "pl" else f"/blog/en/tag/{slug}/"
    return (
        "---\n"
        "layout: tag\n"
        f'title: "{tag}"\n'
        f"lang: {lang}\n"
        f'tag: "{tag}"\n'
        f"translation_id: {translation_id}\n"
        f"permalink: {permalink}\n"
        "---\n"
    )


def write_archives(base_dir: Path, lang: str, tags: List[str], translation_lookup: Dict[Tuple[str, str], str]) -> None:
    if base_dir.exists():
        shutil.rmtree(base_dir)
    base_dir.mkdir(parents=True, exist_ok=True)

    for tag in tags:
        slug = slugify(tag)
        translation_id = translation_lookup.get((lang, tag)) or translation_lookup.get((lang, slug)) or make_translation_id(lang, tag)
        target_dir = base_dir / slug
        target_dir.mkdir(parents=True, exist_ok=True)
        (target_dir / "index.html").write_text(render_archive(tag, lang, translation_id), encoding="utf-8")


def main() -> None:
    translation_lookup = build_existing_translation_lookup()
    tags_by_lang = collect_tags()
    write_archives(PL_TAG_DIR, "pl", tags_by_lang["pl"], translation_lookup)
    write_archives(EN_TAG_DIR, "en", tags_by_lang["en"], translation_lookup)


if __name__ == "__main__":
    main()
