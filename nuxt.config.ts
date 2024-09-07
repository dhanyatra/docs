export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ["@nuxt-themes/docus"],

  devtools: { enabled: true },

  app: {
    baseURL: "/docs/", // Set the base URL for GitHub Pages
  },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
  ],
  compatibilityDate: "2024-09-07",
});
