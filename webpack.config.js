var paths = require('path');
module.exports = {
    entry : './entry.js',
    output : {
        path : __dirname,
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.sass$/,
                include: paths.appSrc,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
