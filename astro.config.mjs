import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import icon from "astro-icon";
import react from "@astrojs/react";

const { PUBLIC_SITE_URL } = loadEnv(process.env.PUBLIC_SITE_URL, process.cwd(), ``);


// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      },
      nesting: true
    }), 
    icon(), 
    react(),
  ],
  image: {
    service: passthroughImageService()
  },
  output: `static`
});