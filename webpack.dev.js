
const path = require("path");
const common = require('./webpack.common');
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = merge(common, {

    mode: "development",

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. injects commonJS styles into DOM
                    'css-loader',   // 2. turns css to commonJs
                    'sass-loader',  // 1. turns scss to css
                ]
            },
        ]
    },

     // plugins
     plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html"
        }),
    
    ],


})