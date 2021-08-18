const path = require('path');
const fs = require('fs');


const getEntries = () => {
    const entry = {};
    const dirs = fs.readdirSync(path.resolve(__dirname, './components'));
    if (!dirs.length) {
        return entry;
    }
    dirs.forEach(dir => {
        entry[dir] = `@component/${dir}/index.tsx`;
    });
    return entry;
}

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
        ...getEntries()
    },
    resolve: {
        alias: {
            '@component': path.resolve(__dirname, './components'),
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/components'),
        libraryTarget: 'amd',
        library: '[name]'
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