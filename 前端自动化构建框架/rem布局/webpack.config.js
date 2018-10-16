var webpack = require("webpack");
const glob = require('glob');
const path = require('path');

/**
 * ----------------------------------------------------
 * source configuration
 * ----------------------------------------------------
 */


var config = {
    entry: {
        vendor:['jquery','./src/js/common/wap.plugins','slick-carousel'],
        index: ['./src/js/index/index']
    },
    output: {
        path: __dirname + '/dist/js/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            ,
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     options: {
            //         loaders: {
            //             'scss': 'vue-style-loader!css-loader!sass-loader',
            //             'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            //             'js:':'babel-loader'
            //         }
            //     }
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ],
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};
/**
 * find entries
 */
var files = glob.sync('./src/js/*/index.js');
var newEntries = files.reduce(function (memo, file) {
    var name = /.*\/(.*?)\/index\.js/.exec(file)[1];
    memo[name] = entry(name);
    return memo;
}, {});
config.entry = Object.assign({}, config.entry, newEntries);
//console.log(path.resolve('./src'));
/**
 * [entry description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function entry(name) {
    return './src/js/' + name + '/index.js';
}
module.exports = config;