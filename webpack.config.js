module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }/*,
  vue: {
    loaders: {
      js: 'babel'
    }
  }*/
}