const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackRequireFrom = require("webpack-require-from");

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackRequireFrom({
            // path: 'https://custom.domain',
            variableName: "__globalCustomDomain",
            // methodName: "__globalCustomDomain",
            // replaceSrcMethodName: "__replaceWebpackDynamicImport"
        })
    ],
    output: {
        filename: 'pgnv.js',
        path: path.resolve(__dirname, 'lib'),
        //publicPath: '/pgnv-assets/',
        library: 'PGNV',
        libraryTarget: "var",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};