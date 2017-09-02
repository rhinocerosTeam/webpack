/**
 * Created by songpeilan on 2017/9/2.
 */
var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: './src/',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['es2015']
            }
        }
        ]
    }
}