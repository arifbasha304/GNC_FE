const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

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
        "./ProjectCostEstimator":
          "./app/components/project-cost-estimator/project-cost-estimator.tsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./app/index.html",
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

      // ✅ Rule for your own CSS (with Tailwind/PostCSS)
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "../../styles"),
          path.resolve(__dirname, "../../libs/ui/src"),
          path.resolve(__dirname, "../../libs/auth/src"),
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
                plugins: [require("@tailwindcss/postcss")()],
              },
            },
          },
        ],
      },

      // ✅ Rule for vendor CSS (like primereact, primeicons)
      {
        test: /\.css$/i,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },

      // ✅ Handle fonts/icons from primeicons
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "static/fonts/[name][ext]",
        },
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
