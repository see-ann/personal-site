// @ts-check

import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
      react({
          babel: {
              plugins: ["babel-plugin-react-compiler"],
          },
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});