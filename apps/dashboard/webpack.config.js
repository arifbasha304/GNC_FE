const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./app/entry.client.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto", // Let Webpack figure out URL at runtime
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard_app", // Unique name for dashboard remote
      filename: "remoteEntry.js",
      exposes: {
        // Update with actual component you want to expose
        "./Dashboard":
          "./apps/dashboard/app/components/dashboard/dashboard.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./apps/dashboard/app/index.html",
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
    port: 8081, // Different port than construction app
    historyApiFallback: true,
    open: true, // Opens browser automatically
  },
};
