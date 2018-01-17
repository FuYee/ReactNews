var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    loaders: [
      // js的loader
      {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
            plugins: ['react-html-attrs'], //添加组件的插件配置
          }
        },
        // css的loader，即是css的模块化的配置方法loader: 'style-loader!css-loader';loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[lacal]___[hash:base64:5]'
       {
          test: /\.css?$/,
          loader: 'style-loader!css-loader'
       }
   ]
  },
  output: {
     path: __dirname,
     filename: "./src/bundle.js"
  },
  plugins: debug ? [] : [
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
