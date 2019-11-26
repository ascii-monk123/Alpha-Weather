//To include the html webpack plugin
const htmlWebpackPlugin = require('html-webpack-plugin');
//This includes the current absolute path in the config
const path = require('path');
//This is the configuration object
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      //The name of the dist html where we want to inject our html
      filename: 'index.html',
      //The src html file from where we can send it to the distribution folder
      template: './src/index.html'
    })
    /*new htmlWebpackPlugin({
      filename: 'pokemon.html',
      template: './src/pokemon.html',
      chunks: [] //We can define which build artifacts should be injected into it
    })
    */
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
