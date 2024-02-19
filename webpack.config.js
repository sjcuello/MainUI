const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const deps = require('./package.json').dependencies;

const PORT = 3000;
const COMPONENT_LIBRARY_PORT = 3001;

module.exports = (env, argv) => ({
  output: {
    publicPath:
      argv.mode === 'development'
        ? `http://localhost:${PORT}/`
        : 'https://main-ui-lovat.vercel.app/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: PORT,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'MainUI',
      filename: 'remoteEntry.js',
      remotes: {
        ComponentLibrary:
          argv.mode === 'development' && !env.local
            ? `ComponentLibrary@http://localhost:${COMPONENT_LIBRARY_PORT}/remoteEntry.js`
            : `ComponentLibrary@https://component-library-lake.vercel.app/remoteEntry.js`,
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        '@mui/material': { singleton: true },
        '@mui/system': { singleton: true },
        '@mui/lab': { singleton: true },
        '@mui/icons-material': { singleton: true },
        '@mui/x-data-grid-generator': { singleton: true },
        '@mui/x-data-grid-pro': { singleton: true },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
});
