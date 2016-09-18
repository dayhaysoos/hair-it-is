const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'src/client/app'),
  build: path.join(__dirname, 'src/client/build')
};

process.env.BABEL_ENV = TARGET;

const config = {
  entry: {
    app: PATHS.app + '/index'
  },
  resolve: { 
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['jshint'],
        // define an include so we check just the files we need
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'sass'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.json?$/,
        loaders: ['json'],
        include: PATHS.app
      }
    ]
  }
}

if(TARGET ==='start' || !TARGET) {
  module.exports = merge(config, { 
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      //display only errors to reduce the amount of output
      stats: 'errors-only',

      //parse host and port from env so this is 
      //easy to customize
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || '8080'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin ({
        save: true //--save
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(config, {});
}