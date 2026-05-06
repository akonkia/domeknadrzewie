# How To Publish Cards

Use this when you add a new weekly card.

## Steps

1. Add the new images.
2. Add or update the blog posts.
3. Update `assets/js/cards-data.js`.
4. Run:

```bash
cd "/Users/akonkia/Documents/New project/domeknadrzewie-github"
bash scripts/publish_cards.sh
```

Or, if you want to provide the commit message up front:

```bash
cd "/Users/akonkia/Documents/New project/domeknadrzewie-github"
bash scripts/publish_cards.sh "Add week 19 card"
```

## What the script does

- rebuilds the urban bathing pages from `assets/js/cards-data.js`
- stages the card-related files
- ignores `.DS_Store`
- shows the staged changes
- asks for a commit message if you did not provide one
- asks whether to push to `origin/main`
- skips the push prompt automatically when run non-interactively

## Files it prepares

- `assets/js/cards-data.js`
- `materialy/kapiele_miejskie/index.html`
- `en/materials/urban-bathing/index.html`
- card images in `materialy/kapiele_miejskie/`
- card images in `en/materials/urban-bathing/`
- posts in `_posts/`
