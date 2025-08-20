const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "./app/entry.client.tsx"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "construction_app",
      filename: "remoteEntry.js",
      exposes: {
        // Fixed path - relative to current folder
        "./ProjectCostEstimator": "./app/components/project-cost-estimator/project-cost-estimator.tsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./app/index.html", // Fixed: relative to apps/construction
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@libs/ui": path.resolve(__dirname, "../../libs/ui/src"),
      "@libs/auth": path.resolve(__dirname, "../../libs/auth/src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, "src"), // app CSS
          path.resolve(__dirname, "../../styles"), // global Tailwind CSS
          path.resolve(__dirname, "../../libs/ui/src"), // shared UI lib
          path.resolve(__dirname, "../../libs/auth/src"), // shared Auth lib
          path.resolve(__dirname, "../../libs/ui/src/lib/dynamic-form"),
          path.resolve(__dirname, "../../node_modules/primereact/resources"), // PrimeReact CSS
          path.resolve(__dirname, "../../node_modules/primeicons"), // PrimeIcons CSS
        ],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require('@tailwindcss/postcss')(), // Tailwind v4 plugin
                ],
              },
            },
          },
        ],
      },
    ],
  },

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    historyApiFallback: true,
    open: true,
  },
};
