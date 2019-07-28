const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
  filename: 'style.css'
});

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [extractPlugin]
};

module.exports = config;