var path = require("path");
var CommonsChunkPlugin = require("./server/public/js/CommonsChunkPlugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:  {
        app: "./client-src/app/index"
    },
    output: {
        path: path.join(__dirname, "server/public/bundles"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new CommonsChunkPlugin({
            filename: "commons.bundle.js",
            name: "commons.bundle"
        }),
        new ExtractTextPlugin('styles.css'),

    ],
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    }
};
