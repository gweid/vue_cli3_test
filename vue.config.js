module.exports = {
    // true开启 false 关闭 eslint
    lintOnSave: false,

    // 生产环境是否需要源码映射
    productionSourceMap: true,

    // 配置跨域代理gau
    // devServer: {
    //     open: false, // 是否自动打开浏览器页面
    //     host: '0.0.0.0',
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
    chainWebpack(config) {},
}