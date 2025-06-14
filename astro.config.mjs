import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

// @ts-check
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  base: "mea",

  integrations: [react()],
  site: "https://chrisachoo.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
})
