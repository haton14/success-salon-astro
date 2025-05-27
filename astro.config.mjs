import { defineConfig } from "astro/config";
import react from '@astrojs/react';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
      imageService: 'cloudflare'
  }),
  vite: {
    ssr: {
      external: [
        "node:fs/promises",
        "node:path",
        "node:url",
        "node:crypto"
      ]
    },
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },
  site: "https://success-salon.haton14.com",
  integrations: [
    react(),
    sitemap({
      customPages: [
        "https://success-salon.haton14.com/",
        "https://success-salon.haton14.com/access",
        "https://success-salon.haton14.com/concept",
        "https://success-salon.haton14.com/dressing",
        "https://success-salon.haton14.com/eyelash",
        "https://success-salon.haton14.com/head-spa",
        "https://success-salon.haton14.com/price",
        "https://success-salon.haton14.com/straight",
      ],
    }),
    partytown(),
  ],
});
