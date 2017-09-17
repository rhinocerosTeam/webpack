/**
 * Created by songpeilan on 2017/9/2.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    /**
     * entry选项用来配置要打包的入口文件
     * **/
    entry: {
        bodyIndex:'./src/index.js',
        headIndex:'./src/user2.js',
    },

    /**
     *输出信息
     * **/
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name]-[hash].js',
        publicPath:'',
    },


    /**
     * module选项用来进行模块加载相关配置
     * **/
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),

        /**
         * 自动将js打到html中
         * **/
        new htmlWebpackPlugin({
            filename:'index.html', //文件名字:可加hash值 index-[hash].html
            template:'index.html', //文件模板
            inject:false,//head 生成到头部 FALSE,不执行
            title:'webpack is good', //参数
            minify:{
                removeComments:true,
                collapseWhitespace:true,

            }
        }),
    ]
}