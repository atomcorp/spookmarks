const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Spookmarks',
      template: './src/templates/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Spookmarks - Added!',
      filename: 'added/index.html',
      template: './src/templates/added.html'
    }),
    require('autoprefixer')
  ]
};
