var path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: '../back/static/js/',
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node-modules/],
        loader: "elm-webpack"
      }
    ],
    noParse: /\.elm$/,
  }
}
