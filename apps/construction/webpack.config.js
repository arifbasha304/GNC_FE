

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './app/entry.client.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'auto', // Let Webpack figure out the URL at runtime
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'construction_app', // Remote app name
            filename: 'remoteEntry.js', // Endpoint exposed to others
            exposes: {
                './ProjectCostEstimator': './apps/construction/app/components/project-cost-estimator/project-cost-estimator.tsx', // Expose the component for remote usage
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^18.2.0',
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^18.2.0',
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './apps/construction/app/index.html',
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
