const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devMode = process.env.NODE_ENV !== 'production';
// const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/'
      },
      /* {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      }, */
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/images/'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      jquery: path.resolve('node_modules/jquery/dist/jquery.js')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default'],
      $: 'jquery',
      jQuery: 'jquery',
      moment: 'moment'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png)$/i,
      pngquant: {
        quality: '55-80'
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/images', to: './src/images' },
      { from: './src/fonts', to: './src/fonts' }
    ]),
    /* new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, '/dist'),
    routes: ['/', '/registration', '/about', '/test', '/profile', '/recovery', '/contacts'],
    renderer: new Renderer ({
        inject: {
            foo: 'bar'
        },
        headless: false,
        renderAfterDocumentEvent: 'render-event'
    })
  }), */
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
