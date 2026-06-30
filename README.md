# NotchDo Website (Vite + GitHub Pages)

Static multi-page site for NotchDo. Vite is used for local testing and production builds. GitHub Pages serves the generated static output from `dist/`.

**Live URL:** https://chrisakash03.github.io/NotchDoWebsite/

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

`vite.config.js` defaults to `base: "/NotchDoWebsite/"` for the project page at `https://chrisakash03.github.io/NotchDoWebsite/`.

For a user/org page (`https://<user>.github.io/`), build with:

```bash
GITHUB_PAGES_BASE=/ npm run build
```

## Deploying to GitHub Pages

1. In the repo, go to **Settings → Pages → Build and deployment** and set the source to **GitHub Actions**.
2. Push to `main` — the [deploy workflow](.github/workflows/deploy.yml) builds `dist/` and publishes it automatically.

The workflow sets `GITHUB_PAGES_BASE` from the repository name so asset paths stay correct if the repo is renamed.
