// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
          "nuxt-delay-hydration",
          "@nuxt/image", 
          "vue3-carousel-nuxt",
          
    ],
  css: ["~/assets/css/app.css", "~/assets/scss/app.scss"],

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
    build: {
      sourcemap: true,
    },
  },
  delayHydration: {
    mode: "init", //   'mount' or "manual"
  },
  image: {
    format: ["webp"],
    provider: "twicpics",
    twicpics: {
      baseURL: "",
    },
  },
  
});
