// https://serversideup.net/using-laravel-sanctum-airlock-with-nuxtjs/

require('dotenv').config(); // process.env.variable-definida

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui' },
      { name: 'keywords', content: '' },
      { hid: 'http-equiv', name: 'http-equiv', content: 'text/html' },
      { hid: 'http-equiv', name: 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }

    ],
    script: [
      {
        src: 'https://use.fontawesome.com/020bc864c9.js'
      },
    ],
 
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/app-transitions'
  ],

  build: {
 
  },
    
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
      
  ],
 
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
  
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    'nuxt-i18n',    // https://tecnoxperiencia.com/aplicacion-multilenguaje-utilizando-vue-i18n-vue-nuxt/
  ],

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },
      
    purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
     
  },

  
  /*
  ** Build configuration
  */
  build: {

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extractCSS: true,
 
  }
}
