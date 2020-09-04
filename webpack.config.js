const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.jsx', '.js', ".ts", ".tsx",'.css'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [{
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }]

    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
