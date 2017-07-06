'use strict';

const IS_PRD_MODE = (process.env.NODE_ENV === 'production' ? true : false);

// 清除生成目录文件
let exec = require('child_process').execSync;
exec('rm -rf build/*');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let path = require('path');
let webpack = require('webpack');

module.exports = {
    //devtool: 'cheap-module-eval-source-map',
    entry: {
        main: ['./src/index.js']
    },
	resolve: {
		extensions: ['.vue', '.js'],
		alias: {
            vue: 'vue/dist/vue.js',
			utils: path.join(__dirname, '/src/utils'),
			style: path.join(__dirname, '/src/style'),
			components: path.join(__dirname, '/src/components'),
			pages: path.join(__dirname, '/src/pages'),
			modules: path.join(__dirname, '../modules'),
            tunk: path.join(__dirname, '../tunkjs/tunk/tunk.js'),
            'tunk-vue': path.join(__dirname, '../tunkjs/tunk-vue/tunk-vue.js'),
		}
	},
    output: {
        path: __dirname + '/build/',
        filename: '[name].bundle.js',
        publicPath: '/build/',
        chunkFilename: '[id].bundle.js?[chunkhash]',
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }, {
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json',
			}, {
				test: /\.(css)$/,
				loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' }),
			}, {
                test: /\.styl$/,
                loader: 'style!css!stylus?paths=' + path.resolve(__dirname, './node_modules/nib/lib/'),
            },{
                test : /\.(less)$/,
                loader : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader','less-loader'] }),
            }, {
				test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=8192'
			}
        ],

    },

	plugins:  (function () {
        // 由于插件太多，所以通过IIFE方式返回
        const r = [];

        r.push(new webpack.LoaderOptionsPlugin({
            options: {
                vue: {
                    loaders: {
                        css: ExtractTextPlugin.extract({ fallbackLoader:'vue-style-loader', loader: ['css-loader']}),
                        js: 'babel-loader',
                        html: 'vue-html-loader',
                    }
                },
            }
        }));

        // 生成环境清空冗余文件
        if (IS_PRD_MODE) {
            // r.push(new webpack.optimize.UglifyJsPlugin({
            //     minimize : true,
            // }));
            r.push(new webpack.optimize.CommonsChunkPlugin({
                name : "common",
                filename : "common.js",
                minChunks: 2,
            }));
        }

        r.push(new ExtractTextPlugin('[name].bundle.css'));

        // r.push(new webpack.HotModuleReplacementPlugin());
        // r.push(new webpack.NoEmitOnErrorsPlugin());

        r.push(new HtmlWebpackPlugin({
            minify : {
                removeComments : IS_PRD_MODE, // 生产环境开启删除注释
                collapseWhitespace : IS_PRD_MODE, // 生产环境开启压缩
            },
            filename : 'index.html',
            inject : 'html',
            hash : !IS_PRD_MODE, // 开发环境添加query hash
            template : 'index.template.html',
        }));

        return r;
    })(),

};
