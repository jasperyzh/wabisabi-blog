export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "JasperYong.com",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&display=swap",
      },
    ],
    script: [
      {
        hid: "p5js",
        src: "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js",
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/main.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: ["~/components", "~/content/p5js"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/content",
    // '@nuxt/http',
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    scss: [
      "~/node_modules/bootstrap/scss/_functions.scss",
      "~/assets/scss/style-override.scss",

      "~/node_modules/bootstrap/scss/_variables.scss",
      "~/node_modules/bootstrap/scss/_mixins.scss",
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  content: {
    // options
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // ADDING POSTCSS
    // https://nuxtjs.org/docs/features/configuration#postcss-plugins
    /* postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    } */
  },
  // https://nuxtjs.org/docs/features/file-system-routing#the-router-property
  // router: {
  //   // customize the Nuxt router
  // }
  // https://nuxtjs.org/docs/features/loading#customizing-the-progress-bar
  loading: {
    color: "#eee",
    height: "3px",
  },
};
