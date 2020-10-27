// https://serversideup.net/using-laravel-sanctum-airlock-with-nuxtjs/

require('dotenv').config(); // process.env.variable-definida

export default {
  //mode: 'universal',
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
      {
        rel:  'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;1,400&display=swap'
      },
      {
        rel: 'stylesheet',
        href:'@/node_modules/vue-good-table/dist/vue-good-table.css'
      }

      
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
    '@/assets/css/app-transitions',
    '@/assets/css/sass/app.scss',
 
  ],

 
    
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ 
       
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
  ** https://github.com/Etheryte/nuxt-dropzone
   https://github.com/wemake-services/nuxt-imagemin
  */
  modules: [
    '@nuxtjs/axios',            // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    'nuxt-i18n',                // https://tecnoxperiencia.com/aplicacion-multilenguaje-utilizando-vue-i18n-vue-nuxt/
    'nuxt-sweetalert2',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',    // https://www.npmjs.com/package/cookie-universal-nuxt
    '@nuxtjs/toast',           // https://github.com/nuxt-community/modules/tree/master/packages/toast
 /*     "nuxt-imagemin",          
      {
        optipng: { optimizationLevel: 5 },
        gifsicle: { optimizationLevel: 2 },
    }
       */
  ],

  styleResources: {
          scss: [
              '@/assets/css/sass/app.scss', 
          ]
      },
    
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
  axios: { },

  
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
