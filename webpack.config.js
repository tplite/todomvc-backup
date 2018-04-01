module.exports = {
  entry: './src/todo.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        loader: "tplite-loader"
      }
    ]
  }
};
