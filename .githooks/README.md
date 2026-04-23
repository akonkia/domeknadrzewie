# Git Hooks

This repository keeps the urban-bathing structured-data hook in `.githooks/pre-commit`.

One important note: Git does not automatically use versioned hooks in a fresh clone.
After cloning, set the local hooks path once:

```bash
git config core.hooksPath .githooks
```

After that, commits that change `assets/js/cards-data.js` or `scripts/generate_urban_bathing_structured_data.mjs` will automatically regenerate and stage the structured data for:

- `materialy/kapiele_miejskie/index.html`
- `en/materials/urban-bathing/index.html`
