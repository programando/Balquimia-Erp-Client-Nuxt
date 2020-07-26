
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
     [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]

  ],
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
