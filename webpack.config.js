const path = require("path");
const { LoaderOptionsPlugin } = require("webpack");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./site/main.ts",
    },
    output: {
        path: path.resolve(__dirname, "./site"),
        filename: "[name]-bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
}
