
const path = require("path");
const common = require('./webpack.common');
const merge = require("webpack-merge");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = required('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {

    mode: "production",

    output: {
        filename: "name.[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].[ext]",
        }),

        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),

    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract CSS into files
                    'css-loader',   // 2. turns css to commonJs
                    'sass-loader',  // 1. turns scss to css
                ]
            },
        ]
    },

    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin(),
        ],
    },

});