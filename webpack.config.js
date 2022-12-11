const htmlWebpackPlugin = require('html-webpack-plugin')
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

const path = require('path');

module.exports = {
  watch: true,
  mode: mode,
  plugins: [new htmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};