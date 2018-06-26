const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BugsnagSourceMapUploaderPlugin } = require('webpack-bugsnag-plugins');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new BugsnagSourceMapUploaderPlugin({
      apiKey: '#',
    }),
  ],
  output: {
    publicPath: '/dist'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
};
