const path = require("path"); // import path from "path"(same thing but webpack can understand es6 js)
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ENTRY_FILE,
    mode: MODE,
    module: {
        rules:[
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "scss-loader",
                    },
                ]),
            },
        ],
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]",
    },
};

module.exports = config;
