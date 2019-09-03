const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    index: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'hi-lib.js',
    library: 'HiLib',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        options: { quiet: true }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    hammerjs: 'Hammer'
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      'src/assets/favicon.ico'
    ])
  ]
}
