const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // or 'production'
    entry: path.resolve(__dirname, './app/entry.client.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', // important for SPA fallback
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: './apps/construction/app/index.html', // or wherever your template is
    }),
  ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            ui: path.resolve(__dirname, '../../libs/ui/src'),
            auth: path.resolve(__dirname, '../../libs/auth/src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true,
        open: true, // automatically open the browser
    },
};
