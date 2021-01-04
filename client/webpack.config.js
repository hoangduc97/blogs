const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env'),
});

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'app.js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, '/public'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|woff|woff2|ttf|otf)([\?]?.*)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/font/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HWP({
            template: path.join(__dirname, '/public/index.html'),
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed),
        }),
    ],
    devServer: {
        port: dotenv.parsed.CLIENT_PORT,
        historyApiFallback: true,
        compress: true,
    },
};
