// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  experimental: {
    componentIslands: true, // false or 'local+remote'
  },

  modules: ["@nuxt/image", "nuxt-swiper"],
});
