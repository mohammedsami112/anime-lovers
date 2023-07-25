// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass', 'assets/sass/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL,
      backendURL: process.env.BACKEND_URL
    }
  },
  modules: [
    'nuxt-swiper',
    '@pinia/nuxt', 
    'nuxt-simple-sitemap',
    ['@nuxtjs/google-fonts', {
      download: false,
      inject: true,
      fontsPath: '~/assets/fonts',
      display: 'swap',
      prefetch: true,
      useStylesheet: true,
      families: {
        'Tajawal': ['200', '300', '400', '500', '700', '800', '900'],
      }
    }],
    
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/sass/_vars.scss" as *;`
        }
      }
    }
  }
})
