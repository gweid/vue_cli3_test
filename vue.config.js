module.exports = {
    lintOnSave: false, // true开启 false 关闭 eslint
    productionSourceMap: true, // 生产环境是否需要源码映射

    // 配置跨域代理
    // devServer: {
    //     host: '10.8.0.116',
    //     port: 8080,
    //     disableHostCheck: true,
    //     proxy: {
    //         '/api/**': {
    //             target: 'https://merchant-19online.triumen.cn/api',
    //             pathRewrite: {
    //                 '^/api': '/'
    //             }
    //         },
    //     }
    // },

    // webpack 配置
    chainWebpack(config) {}
}