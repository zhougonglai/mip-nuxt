export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'zh-cn',
      mip: true
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,minimum-scale=1,initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://c.mipcdn.com/static/v2/mip.css'
      }
    ],
    script: [
      {
        src: 'https://c.mipcdn.com/static/v2/mip.js'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv'],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
}
