var path = require('path');
var Html = require('html-webpack-plugin');
var MiniCSS = require("mini-css-extract-plugin");

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    mode: "development",
    devtool: "source-map",
    watchOptions: {
        poll: true
    },
    watch: true,
    devServer: {
        watchContentBase: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            targets: {
                                browsers: [
                                    '> 1%' //translate from
                                ]
                            }
                        }]
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            sideEffects: true,
            use: [MiniCSS.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            new require('autoprefixer')
                            ({
                                browsers: [
                                    'ie 11' //translate from
                                ]
                            })
                        ]
                    }
                },
                'sass-loader'
            ]
        },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'img',
                            outputPath: 'img'
                        }
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            },
        ]
    },
    plugins: [
        new Html({
            filename: 'index.html',
            template: './app.html'
        }),
        new MiniCSS({
            filename: "out.css",
        })
    ]
}