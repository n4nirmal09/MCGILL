// vue.config.js
module.exports = {
  // css: {
  // 	extract: {filename: 'css/main.css'}
  // },

  pwa: {
    name: 'mcgill',
    themeColor: "#003228",
    iconPaths:{
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      msTileImage: 'img/icons/mstile-150x150.png',
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  },
  
  filenameHashing: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
