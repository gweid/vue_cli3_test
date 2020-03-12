module.exports = {
    // true开启 false 关闭 eslint
    lintOnSave: false,

    // 生产环境是否需要源码映射
    productionSourceMap: true,

    // 配置跨域代理
    // devServer: {
    //     open: false, // 是否自动打开浏览器页面
    //     host: '0.0.0.0',
    //     port: 8080,
    //     disableHostCheck: true,
    //     proxy: {
    //         '/api': {
    //             changOrigin: true, // 是否跨域
    //             target: 'https://merchant-19online.triumen.cn/api', // 需要代理到的目标地址
    //             pathRewrite: {
    //                 '^/api': '/'  // 重写路径
    //             }
    //         },
    //     }
    // },
    

    // webpack 配置
    // chainWebpack(config) {},

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: false
      }
    }
}
