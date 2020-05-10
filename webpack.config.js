var path = require('path');

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    watch: true,
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
            use: ['style-loader', 'css-loader',
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
                    },
                ],
            },
        ]
    }
}