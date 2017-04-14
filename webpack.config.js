var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'public/javascripts');
var TEM_PATH = path.resolve(ROOT_PATH, 'views');
var BOWER_PATH = path.resolve(ROOT_PATH, 'bower_components');

module.exports = {
    entry: {
        startGridFunny: path.resolve(APP_PATH, 'js-es6/entry.js'),
        test_animation: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/animation.js')],
        test_animationBg: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/animationBg.js')],
        test_clone: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/clone.js')],
        test_event: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/event.js')],
        test_font: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/font.js')],
        test_grid: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/grid.js')],
        test_lineGradient: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/lineGradient.js')],
        test_radialGradient: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/radialGradient.js')],
        test_shadow: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/shadow.js')],
        test_shapes: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/shapes.js')],
        test_toDataURL: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/toDataURL.js')],
        test_transform: [path.resolve(APP_PATH, 'js-es6/GridFunny.js'), path.resolve(APP_PATH, 'js-es6/tests/transform.js')]
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            requirejs: path.resolve(BOWER_PATH, 'requirejs/require.js'),
            lodash: path.resolve(BOWER_PATH, 'lodash/lodash.js')
        }
    },
    //enable dev source map
    // devtool: 'inline-source-map',
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(APP_PATH, 'js-es6'),
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(APP_PATH, 'css')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000',
            include: path.resolve(APP_PATH, 'images')
        }]
    }
};
