# Stitch Site (Vite + GitHub Pages)

This project is a static multi-page site. Vite is used for local testing and production builds. GitHub Pages serves the generated static output.

## Local development

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## GitHub Pages base path

`vite.config.js` defaults to `base: "/stitch/"`, which is correct for a project page like `https://<user>.github.io/stitch/`.

- For project pages, keep the default.
- For user/org pages (`https://<user>.github.io/`), build with:

```bash
GITHUB_PAGES_BASE=/ npm run build
```

## Deploying to GitHub Pages

Deploy the static build output in `dist/`, not the Vite dev server.

- Manual: upload/publish `dist/`.
- Automated: use the included GitHub Actions workflow.
