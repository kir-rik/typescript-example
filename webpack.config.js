const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.ts",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    modules: [path.resolve(__dirname, "src")],
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node-modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
