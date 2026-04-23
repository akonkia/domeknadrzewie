import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const repoRoot = process.cwd();
const baseUrl = "https://domeknadrzewie.edu.pl";

const cardsDataPath = path.join(repoRoot, "assets/js/cards-data.js");
const cardsSource = fs.readFileSync(cardsDataPath, "utf8");
const cardsDataVersion = crypto
  .createHash("sha1")
  .update(cardsSource)
  .digest("hex")
  .slice(0, 10);

const sandbox = {
  window: {},
  console,
};

vm.createContext(sandbox);
vm.runInContext(cardsSource, sandbox, { filename: cardsDataPath });

const cardsByLang = sandbox.window.weeklyCardsData;

if (!cardsByLang?.pl || !cardsByLang?.en) {
  throw new Error("Could not load weekly card data from assets/js/cards-data.js");
}

const pageConfigs = [
  {
    lang: "pl",
    file: path.join(repoRoot, "materialy/kapiele_miejskie/index.html"),
    pageUrl: `${baseUrl}/materialy/kapiele_miejskie/`,
    name: "Miejskie kąpiele leśne",
    description:
      "Miejskie kąpiele leśne: całoroczny cykl kart uważności inspirowanych naturą. Zobacz, jak praktykować Shinrin-yoku w mieście, mindfulness w parku i ćwiczenia uważności w naturze tydzień po tygodniu.",
    breadcrumbItems: [
      { name: "Materiały", url: `${baseUrl}/materialy/` },
      { name: "Miejskie kąpiele leśne", url: `${baseUrl}/materialy/kapiele_miejskie/` },
    ],
    uiText: {
      reflection: "Refleksja:",
      image: "Obraz",
      task: "Zadanie",
      copy: "🔗 Kopiuj link",
      blog: "Blog",
    },
  },
  {
    lang: "en",
    file: path.join(repoRoot, "en/materials/urban-bathing/index.html"),
    pageUrl: `${baseUrl}/en/materials/urban-bathing/`,
    name: "Urban forest bathing",
    description:
      "Urban forest bathing: a year-long series of mindfulness cards inspired by nature. Explore Shinrin-yoku in the city, mindfulness in the park, and practical ways to deepen nature connection in the city week by week.",
    breadcrumbItems: [
      { name: "Materials", url: `${baseUrl}/en/materials/` },
      { name: "Urban forest bathing", url: `${baseUrl}/en/materials/urban-bathing/` },
    ],
    uiText: {
      reflection: "Reflection:",
      image: "Image",
      task: "Reflection",
      copy: "🔗 Copy link",
      blog: "Blog",
    },
  },
];

const pageConfigByLang = Object.fromEntries(pageConfigs.map((config) => [config.lang, config]));

function toAbsoluteUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//.test(url)) return url;
  return `${baseUrl}/${url.replace(/^\/+/, "")}`;
}

function toImageUrl(imageName) {
  return `${baseUrl}/materialy/kapiele_miejskie/${imageName}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderCardList(config) {
  const cards = [...cardsByLang[config.lang]].sort((a, b) => b.id - a.id);

  return cards
    .map((card) => {
      const reflections = card.reflection
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");

      const imageUrl = `https://cdn.jsdelivr.net/gh/akonkia/domeknadrzewie@main/materialy/kapiele_miejskie/${card.img}?v=2026`;
      const taskUrl = `https://cdn.jsdelivr.net/gh/akonkia/domeknadrzewie@main/materialy/kapiele_miejskie/${card.imgB}?v=2026`;
      const blogUrl = toAbsoluteUrl(card.blog || "#");

      return `
        <article id="tydzien-${card.id}" class="material-item">
          <div class="material-visual"><img src="${imageUrl}" alt="${escapeHtml(card.title)}"></div>
          <div class="material-content">
            <header>
              <span class="material-meta">${escapeHtml(card.season)} • ${escapeHtml(card.month)} • ${escapeHtml(card.theme)}</span>
              <h3>${config.lang === "pl" ? "Tydzień" : "Week"} ${String(card.id).padStart(2, "0")} - ${escapeHtml(card.title)}</h3>
            </header>
            <div class="material-body">${escapeHtml(card.body)}</div>
            <div class="material-reflection">
              <strong>${config.uiText.reflection}</strong>
              <ul>${reflections}</ul>
            </div>
            <div class="download-links">
              <a href="${imageUrl}" download class="btn-main">${config.uiText.image}</a>
              <a href="${taskUrl}" download class="btn-alt">${config.uiText.task}</a>
              <button onclick="copyLink(event, ${card.id})" class="btn-copy">${config.uiText.copy}</button>
              <a href="${blogUrl}" target="_blank" rel="noopener" class="btn-blog">${config.uiText.blog}</a>
            </div>
          </div>
        </article>`
        .trim();
    })
    .join("\n");
}

function renderCurrentCard(config) {
  const cards = cardsByLang[config.lang];
  const latestCard = [...cards].sort((a, b) => b.id - a.id)[0];
  const blogUrl = toAbsoluteUrl(latestCard.blog || "#");
  const imageUrl = `https://cdn.jsdelivr.net/gh/akonkia/domeknadrzewie@main/materialy/kapiele_miejskie/${latestCard.img}?v=2026`;

  return [
    "<!-- AUTO-GENERATED CURRENT CARD:BEGIN -->",
    '<div class="series-current-card-figure">',
    `  <img id="currentCardImage" src="${imageUrl}" alt="${escapeHtml(latestCard.title)}">`,
    "</div>",
    "<div>",
    `  <p class="series-current-card-kicker">${config.lang === "pl" ? "Bieżąca karta" : "Current card"}</p>`,
    `  <h3 id="currentCardTitle">${config.lang === "pl" ? "Tydzień" : "Week"} ${String(latestCard.id).padStart(2, "0")} — ${escapeHtml(latestCard.title)}</h3>`,
    `  <p id="currentCardMeta">${escapeHtml(latestCard.season)} • ${escapeHtml(latestCard.month)} • ${escapeHtml(latestCard.theme)}</p>`,
    "</div>",
    '<div class="series-current-card-actions">',
    `  <a id="currentCardPrimary" class="series-current-main" href="#tydzien-${latestCard.id}">${config.lang === "pl" ? "Otwórz kartę" : "Open card"}</a>`,
    `  <a id="currentCardBlog" class="series-current-alt" href="${blogUrl}" target="_blank" rel="noopener">${config.lang === "pl" ? "Czytaj na blogu" : "Read on blog"}</a>`,
    "</div>",
    "<!-- AUTO-GENERATED CURRENT CARD:END -->",
  ].join("\n");
}

function buildStructuredData(config) {
  const cards = cardsByLang[config.lang];

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${config.pageUrl}#collection`,
    url: config.pageUrl,
    name: config.name,
    description: config.description,
    inLanguage: config.lang,
    isPartOf: {
      "@type": "WebSite",
      name: "Projekt: Domek na Drzewie",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      "@id": `${config.pageUrl}#item-list`,
      name:
        config.lang === "pl"
          ? "Tygodniowe ćwiczenia uważności"
          : "Weekly mindfulness exercises",
      numberOfItems: cards.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: cards.map((card, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: toAbsoluteUrl(card.blog || `${config.pageUrl}#tydzien-${card.id}`),
        item: {
          "@type": "CreativeWork",
          name: card.title,
          inLanguage: config.lang,
          image: toImageUrl(card.img),
          keywords: [card.theme, card.season, card.month].filter(Boolean).join(", "),
        },
      })),
    },
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: config.breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return [collectionPage, breadcrumbList];
}

function renderJsonLdBlock(config) {
  const json = JSON.stringify(buildStructuredData(config), null, 2);
  return [
    "<!-- AUTO-GENERATED STRUCTURED DATA:BEGIN -->",
    '<script type="application/ld+json">',
    json,
    "</script>",
    "<!-- AUTO-GENERATED STRUCTURED DATA:END -->",
  ].join("\n");
}

function renderHreflangBlock(config) {
  const alternateLang = config.lang === "pl" ? "en" : "pl";
  const alternateConfig = pageConfigByLang[alternateLang];
  const xDefaultUrl = pageConfigByLang.pl?.pageUrl || config.pageUrl;

  return [
    "<!-- AUTO-GENERATED HREFLANG:BEGIN -->",
    `  <link rel="alternate" hreflang="${config.lang}" href="${config.pageUrl}" />`,
    `  <link rel="alternate" hreflang="${alternateLang}" href="${alternateConfig.pageUrl}" />`,
    `  <link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`,
    "<!-- AUTO-GENERATED HREFLANG:END -->",
  ].join("\n");
}

for (const config of pageConfigs) {
  const html = fs.readFileSync(config.file, "utf8");
  const block = renderJsonLdBlock(config);
  const hreflangBlock = renderHreflangBlock(config);
  const currentCard = renderCurrentCard(config);
  const cardList = [
    "<!-- AUTO-GENERATED INITIAL CARDS:BEGIN -->",
    renderCardList(config),
    "<!-- AUTO-GENERATED INITIAL CARDS:END -->",
  ].join("\n");

  if (
    !html.includes("<!-- AUTO-GENERATED HREFLANG:BEGIN -->") ||
    !html.includes("<!-- AUTO-GENERATED HREFLANG:END -->") ||
    !html.includes("<!-- AUTO-GENERATED STRUCTURED DATA:BEGIN -->") ||
    !html.includes("<!-- AUTO-GENERATED STRUCTURED DATA:END -->") ||
    !html.includes("<!-- AUTO-GENERATED CURRENT CARD:BEGIN -->") ||
    !html.includes("<!-- AUTO-GENERATED CURRENT CARD:END -->") ||
    !html.includes("<!-- AUTO-GENERATED INITIAL CARDS:BEGIN -->") ||
    !html.includes("<!-- AUTO-GENERATED INITIAL CARDS:END -->")
  ) {
    throw new Error(`Auto-generated markers not found in ${config.file}`);
  }

  let updatedHtml = html.replace(
    /<!-- AUTO-GENERATED HREFLANG:BEGIN -->[\s\S]*<!-- AUTO-GENERATED HREFLANG:END -->/,
    hreflangBlock,
  );
  updatedHtml = updatedHtml.replace(
    /<!-- AUTO-GENERATED STRUCTURED DATA:BEGIN -->[\s\S]*<!-- AUTO-GENERATED STRUCTURED DATA:END -->/,
    block,
  );
  updatedHtml = updatedHtml.replace(
    /<!-- AUTO-GENERATED CURRENT CARD:BEGIN -->[\s\S]*<!-- AUTO-GENERATED CURRENT CARD:END -->/,
    currentCard,
  );
  updatedHtml = updatedHtml.replace(
    /<!-- AUTO-GENERATED INITIAL CARDS:BEGIN -->[\s\S]*<!-- AUTO-GENERATED INITIAL CARDS:END -->/,
    cardList,
  );
  updatedHtml = updatedHtml.replaceAll("__CARDS_DATA_VERSION__", cardsDataVersion);

  fs.writeFileSync(config.file, updatedHtml);
}

console.log("Updated structured data for urban bathing pages.");
