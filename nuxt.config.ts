// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@/assets/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_global.scss";',
        },
      },
    },
  }
})
