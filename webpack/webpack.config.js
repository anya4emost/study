module.exports = {
  entry: ["./utils.js", "./script.js"],
  output: {
    filename: "output.js"
  },
  watch: true,

  devtool: "source-map",

  module: {
    preLoaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
