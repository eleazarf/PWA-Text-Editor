// Import necessary modules and plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// Define the webpack configuration module
module.exports = () => {
  return {
    // Set the build mode to development
    mode: "development",

    // Entry points for different JavaScript files
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },

    // Output configuration for bundled files
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },

    // List of plugins for the build process
    plugins: [
      // Webpack plugin to generate an HTML file and inject bundled scripts
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Text Editor",
      }),

      // Plugin to inject a custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),

      // Plugin to create a manifest.json file for Progressive Web App (PWA)
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Text Editor",
        short_name: "Text",
        description: "A downloadable progressive web application text editor called J.A.T.E.",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "/",
        publicPath: "/",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    // Module rules for handling CSS and JavaScript (via Babel)
    module: {
      // CSS loaders to handle styles
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          // Babel loader to enable ES6 features
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
