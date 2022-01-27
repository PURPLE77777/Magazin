const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "index.js",
        assetModuleFilename: "images/[name].[ext]",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /server/],
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: "asset/inline",
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
        new SourceMapDevToolPlugin({
            filename: "[file].map",
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
