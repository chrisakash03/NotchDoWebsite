import { resolve } from "node:path";
import { defineConfig } from "vite";

const githubPagesBase = process.env.GITHUB_PAGES_BASE || "/NotchDoWebsite/";

export default defineConfig({
  base: githubPagesBase,
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        notchdoLandingPage: resolve(__dirname, "notchdo_landing_page/code.html"),
        featuresSync: resolve(__dirname, "features_sync/code.html"),
        pricingDownload: resolve(__dirname, "pricing_download/code.html"),
        supportFaq: resolve(__dirname, "support_faq/code.html"),
      },
    },
  },
});
