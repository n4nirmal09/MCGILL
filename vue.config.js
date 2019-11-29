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
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js'
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
