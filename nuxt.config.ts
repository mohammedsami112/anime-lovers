// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {children: `(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://inklinkor.com/tag.min.js',6165755,document.body||document.documentElement)`},
        {
          src: '//pl20168992.highwaycpmrevenue.com/b6/dc/36/b6dc3695b99827885c84cf3d7548bf18.js'
        },
        {
          src: '//dgyrizngtcfck.cloudfront.net/?irygd=994512',
          'data-cfasync': false,
        },
        {
          src: 'https://richinfo.co/richpartners/pops/js/richads-pu-ob.js',
          'data-pubid': '888350',
          'data-siteid': '332711',
          async: true,
          'data-cfasync': false
        }
      ]
    }
  },
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
