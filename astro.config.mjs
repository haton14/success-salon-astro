import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  site: "https://success-salon.haton14.com",
  integrations: [
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
