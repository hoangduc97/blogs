const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/public'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: ['svg-loader'],
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
                use: ['url-loader?limit=100000'],
            },
        ],
    },
    plugins: [
        new HWP({
            template: path.join(__dirname, '/public/index.html'),
        }),
    ],
    devServer: {
        port: 80,
        // host: '0.0.0.0',
        historyApiFallback: true,
        compress: true,
    },
};
