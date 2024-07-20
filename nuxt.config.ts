// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    buildAssetsDir: 'assets',
    head: {
      title: 'rutwik hiwalkar',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/plant.png' }]
    },
  },
})
