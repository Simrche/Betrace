export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'betrace',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firestore.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-buefy',
    'nuxtjs-mdi-font',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBWrm8vCcnq2aDZDivI1KbBK9kFfsKEoOM",
          authDomain: "betrace-d88e6.firebaseapp.com",
          projectId: "betrace-d88e6",
          storageBucket: "betrace-d88e6.appspot.com",
          messagingSenderId: "992930789688",
          appId: "1:992930789688:web:e0d30c472f50da7d96a9cd"
        },
        services: {
          firestore: true,
        }
      }
    ],
    ['nuxt-buefy', { /* buefy options */ }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}