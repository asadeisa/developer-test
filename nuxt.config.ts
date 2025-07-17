// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "node:url"

export default defineNuxtConfig({
  compatibilityDate: "2025-06-03",
  devtools: { enabled: true },
  modules: [
    
    "@nuxt/image",
    "vue3-carousel-nuxt",
    "@nuxt/eslint",
    "@nuxt/fonts"
  ],
  css: ["~/assets/css/app.css", "~/assets/scss/app.scss"],
  future: {
    compatibilityVersion: 4
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url))
      }
    },
    build: {
      sourcemap: true
    }
  },
 
  image: {
    format: ["webp"],
    provider: "twicpics",
    twicpics: {
      baseURL: ""
    }
  },
 app: {
    prefetchLinks: false
  }
})