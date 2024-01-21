const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your entry point
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development', //Change to another title after dev
    }),
  ],
  devtool: 'inline-source-map', //Remove after dev
  devServer: { //Remove after dev
    static: './dist',
  },
  optimization: { //Maybe remove after dev? Does it help with loading?
    runtimeChunk: 'single',
  },
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development', // Mode can be 'development' or 'production' change to production after finishing dev
};