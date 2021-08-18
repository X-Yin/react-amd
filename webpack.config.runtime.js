const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
        runtime: path.resolve(__dirname, './runtime/runtime.js'),
        render: path.resolve(__dirname, './render/render.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.[j|t]sx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    esmodules: true
                                }
                            }
                        ],
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        // '@babel/plugin-transform-runtime',
                        // '@babel/plugin-transform-async-to-generator'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}