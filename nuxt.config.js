import {sassResources, cssoWebpackPlugin, svgExcludeRuleFromLoaders, vueSvgLoaderRule} from './webpack/shared';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-js-boiler',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', hid: 'description', content: ''},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/base.scss'],

  // Inject style resources in each file: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: sassResources('nuxt').map(path => `~/${path}.scss`),
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/variables.js',
    // { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  /**
   * Bootstrap style
   * @see https://go.nuxtjs.dev/config-modules */
  bootstrapVue: {
    // bootstrapCSS: false,
    // bootstrapVueCSS: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseWhitespace: true, // https://github.com/nuxt/nuxt.js/issues/5800#issuecomment-570110683
        removeComments: true,
      },
    },
    extend(config, ctx) {
      // Exclude SVG from Storybook file-loader
      config.module.rules = svgExcludeRuleFromLoaders(config.module.rules);

      // React SVG Loader
      config.module.rules.push(vueSvgLoaderRule());

      // CSS optimizations
      if (!ctx.isDev) {
        config.plugins.push(cssoWebpackPlugin());
      }

      return config;
    },
  },
};
