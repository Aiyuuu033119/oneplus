export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3000',
    apiUrl: process.env.API_URL,
    appName: process.env.APP_NAME
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sikoma Games',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' }
    ],
    script: [
      { src: '/js/jquery-3.5.1.min.js' },
      { src: '/js/bootstrap.bundle.min.js' },
      { src: '/js/slick.min.js' },
      { src: '/js/main.js' },
      { src: '/js/fontawesome.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/'+process.env.APP_NAME+'.scss',
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/slickcarousel.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'getProfile', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    extendRoutes (routes, resolve) {
      // Update
      routes.push({
        path: '/products/:id',
        components: {
          default: resolve(__dirname, 'pages/product/_id.vue'), // or routes[index].component
        }
      })
      routes.push({
        path: '/orders/:code',
        components: {
          default: resolve(__dirname, 'pages/summary/_code.vue'), // or routes[index].component
        }
      })
      routes.push({
        path: '/news/:slug',
        components: {
          default: resolve(__dirname, 'pages/article/_slug.vue'), // or routes[index].component
        }
      })
      routes.push({
        path: '/page/:slug',
        components: {
          default: resolve(__dirname, 'pages/static/_slug.vue'), // or routes[index].component
        }
      })
      routes.push({
        path: '/store',
        components: {
          default: resolve(__dirname, 'pages/store/index.vue'), // or routes[index].component
        }
      }),
      routes.push({
        path: '/contact-us',
        components: {
          default: resolve(__dirname, 'pages/contact-us.vue'), // or routes[index].component
        }
      }),
      routes.push({
        path: '/product-details/:name',
        components: {
          default: resolve(__dirname, 'pages/product-details.vue'), // or routes[index].component
        }
      }),
      routes.push({
        path: '/login',
        components: {
          default: resolve(__dirname, 'components/Login.vue'), // or routes[index].component
        }
      }),
      routes.push({
        path: '/register',
        components: {
          default: resolve(__dirname, 'components/Register.vue'), // or routes[index].component
        }
      })
    }
  }
}
