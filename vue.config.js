const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const CompressionWebpackPlugin = require("compression-webpack-plugin")

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  // true开启 false 关闭 eslint
  lintOnSave: false,

  // 生产环境是否需要源码映射
  productionSourceMap: false,

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

  configureWebpack(config) {
    if (IS_PROD) {
      // 开启 gzip
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css|svg|woff|ttf|json|html|txt|ico)(\?.*)?$/i,
          threshold: 10240, // 大于10kb的会压缩
          deleteOriginalAssets: false, //压缩后删除原文件
          minRatio: 0.8,
        })
      );
    }
  },

  // webpack 配置
  chainWebpack(config) {
    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@common", resolve("src/common"))
      .set("@components", resolve("src/components"))
      .set("@config", resolve("src/config"))
      .set("@mixins", resolve("src/mixins"))
      .set("@pages", resolve("src/pages"))
      .set("@plugins", resolve("src/plugins"))

    // 拆包
    if (IS_PROD) {
      config.optimization.splitChunks({
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 300000, // 依赖包超过300000bit将被单独打包
        automaticNameDelimiter: '-',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `chunk.${packageName.replace('@', '')}`;
            },
            priority: 10
          }
        }
      })
    }
  },

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