const path = require("path");
var Html = require('html-webpack-plugin');
var MiniCSS = require("mini-css-extract-plugin");
var Compression = require("compression-webpack-plugin");
const Clean = require('clean-webpack-plugin');

module.exports = env => {
    const isDev = env.dev ? true : false;
    const isProd = env.prod ? true : false;

    const config = {};

    config.entry = "./js/app.js";

    config.output = {
        filename: isDev
            ? "[name].js"
            : "[name].[chunkhash].js",
        path: path.resolve(__dirname, "build")
    }

    config.mode = isProd
        ? "production"
        : "development" ;

    config.devtool = isProd
        ? false
        : "source-map" ;

    config.watchOptions = isProd
        ? {poll: false}
        : {poll: true} ;

    config.watch = isProd
        ? false
        : true ;

    config.devServer = isProd
        ? {watchContentBase: false}
        : {watchContentBase: true} ;

    const browsers = {
        dev: ['Firefox > 20'],
        prod: ['> 1%']
    }

    const js = {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['env', {
                        targets: {
                            browsers: isDev
                                ? browsers.dev
                                : browsers.prod
                        }
                    }]
                ],
                plugins: ['syntax-dynamic-import'
                ]
            }
        }
    };

    const css = {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    };

    const scss = {
        test: /\.scss$/,
        sideEffects: isProd ? false : true,
        use: [isProd
            ? MiniCSS.loader
            : 'style-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isProd ? false : true,
                    minimize: isProd ? true : false,
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [
                        new require('autoprefixer')
                        ({
                            browsers: isProd ? browsers.prod : browsers.dev
                        })
                    ]
                }
            },
            'sass-loader'
        ]
    };

    const images = {
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
    };

    const fonts = {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath: 'fonts',
                outputPath: 'fonts'
            }
        }
    };

    config.module = {};
    config.module.rules = [];
    config.module.rules.push(js);
    config.module.rules.push(css);
    config.module.rules.push(scss);
    config.module.rules.push(images);
    config.module.rules.push(fonts);

    config.plugins = [];

    if(isProd) {
        config.plugins.push( new MiniCSS(
            { filename: 'out.[chunkhash].css' } )
        )
    }

    config.plugins.push( new Html({
            filename: 'index.html',
            template: './app.html',
            minify: isProd
                ? { collapseWhitespace: true }
                : false
        })
    );

    if(isProd) {
        config.plugins.push(new Compression({
                threshold: 0,
                minRatio: 0.5
            })
        );
    }

    if(isProd) {
        config.plugins.push(
            new Clean(['build'])
        );
    }

    if(isDev) {
        config.devServer = {
            port: 8081,
            progress: true,
            overlay: true
        }
    }

    return config;
}