export default defineNuxtConfig({
  extends: ["@nuxt-themes/docus"],

  devtools: { enabled: true },

  app: {
    baseURL: "/", // Set the base URL for GitHub Pages
  },

  modules: ["@nuxtjs/plausible"],
  compatibilityDate: "2024-09-07",
});
