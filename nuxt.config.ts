export default {
  ssr: true,
  devtools: true,
  app: {
    head: {
      script: [
        { type: 'text/javascript', hid: "main", body: true, src: '/js/script.js' },
        { type: 'text/javascript', hid: "main", body: true, src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' }
      ],
      title: 'Heckerbot',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          hid: 'title',
          name: 'title',
          content: 'Recluse is the only Discord bot you\'ll ever need. It has powerful latest features which can manage discord server. It contains latest discord features like buttons, forms, menu, etc'
        },
        {
          hid: 'description',
          name: 'description',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap'
        },
      ]
    },
  },

  css: ['~/assets/css/style.css'],

}


