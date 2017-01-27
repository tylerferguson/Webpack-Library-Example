module.exports = {
    entry: __dirname + '/src/index.js',
    externals: ['jquery'],
    output: {
        library: 'common',
        libraryTarget: 'umd',
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
        ],
    },
}