export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtJS Forum',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],

    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', type: 'text/javascript' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', type: 'text/javascript' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', type: 'text/javascript' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/styles/main.css",  '@fortawesome/fontawesome-svg-core/styles.css'],

  router: {
    middleware: ["clearValidationErrors"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    "./plugins/mixins/user.js",
    "./plugins/mixins/validation.js",
    "./plugins/axios.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',   
    '@nuxtjs/vuetify',
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  
  axios: {
    // proxy: true
    baseUrl: 'http://127.0.0.1:8000/api/',
  },
  auth: {
    // Options  
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'http://127.0.0.1:8000',
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: "meta.token"
          },
          register: {
            url: '/api/auth/register',
            method: 'post',
          },
          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'logout',
            method: 'post'
          }
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60 * 24 * 30 // 1month
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30, // 1 month
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
