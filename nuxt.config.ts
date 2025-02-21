// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-27",
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },

  modules: [
    "@nuxt/ui",
    "@hebilicious/vue-query-nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],

  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/apiClient.ts"],

  runtimeConfig: {
    public: {
      API_BASE: process.env.API_BASE,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
  },
  ui: {
    colorMode: true,
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
});
