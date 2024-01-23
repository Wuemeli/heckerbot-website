export default {
  ssr: true,
  devtools: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Heckerbot 🔥',
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        { type: 'text/javascript', hid: "main", body: true, src: '/js/script.js' },
        { type: 'text/javascript', hid: "main", body: true, src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Explore Heckerbot\'s Features, Commands, and more. Heckerbot is a Discord bot created by Wuemeli, a web developer and designer.' },
        { name: 'keywords', content: 'discord, heckerbot, wuemeli' },
        { name: 'author', content: 'Wuemeli' },
        { hid: 'og:title', property: 'og:title', content: 'Heckerbot 🔥' },
        { hid: 'og:description', property: 'og:description', content: 'Explore Heckerbot\'s Features, Commands, and more. Heckerbot is a Discord bot created by Wuemeli, a web developer and designer.' },
        { hid: 'og:url', property: 'og:url', content: 'https://wuemeli.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://heckerbot.dev/img/og-image.png' },
      ],
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  routeRules: {
    '/invite': { redirect: 'https://discord.com/api/oauth2/authorize?client_id=1092475154791145542&permissions=30781964549365&scope=bot%20applications.commands' },
    '/support': { redirect: 'https://discord.gg/PfR4MX3cvz' },
    '/github': { redirect: 'https://github.com/Wuemeli/heckerbot' },
  },

  css: ['~/assets/css/style.css'],

  robots: {
    UserAgent: '*',
    Sitemap: 'https://wuemeli.com/sitemap.xml',
    CleanParam: 'query',
  },

  modules: ['@nuxtjs/robots', 'nuxt-simple-sitemap'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

}


