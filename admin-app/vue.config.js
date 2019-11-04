const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  parallel: false,
  publicPath: undefined,
  assetsDir: 'assets',
  runtimeCompiler: true,
  css: {
    requireModuleExtension: true
  },
  chainWebpack: (config) => {
    config
      .module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({}, options, {name: 'img/[name].[ext]'}));
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: './src/assets/fonts/', to: './assets/fonts/' }
      ])
    ]
  }
};