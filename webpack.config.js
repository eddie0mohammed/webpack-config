
const path = require("path");

module.exports = {

    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },


    // adding loaders
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. injects commonJS styles into DOM
                    'css-loader',   // 2. turns css to commonJs
                    'sass-loader',  // 1. turns scss to css
                ]
            }
        ]
    },

    // plugins
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html"
    }),
    
    ],
}