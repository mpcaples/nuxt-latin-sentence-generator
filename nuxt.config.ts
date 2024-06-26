// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-primevue',
    'nuxt-icon',
    "@nuxthub/core"
  ],
  css: ['primevue/resources/themes/lara-dark-purple/theme.css', '/assets/scss/helpme.scss']
})