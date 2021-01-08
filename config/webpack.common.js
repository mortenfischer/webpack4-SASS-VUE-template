const path = require('path');
const ExtractTextPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const handlebarsconfig = require('./handlebars-config');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
    // Issue with outputting unwanted jsfiles based on entry.
    // The following plugin can delete unwanted files, but it seems too early to include at this point 2018-03-01.
    // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/518
});

module.exports = {
    entry: {
        app: './src/index.js',
        styling: './src/style.scss',
        clibapp: './componentlibrary/index.js',
        clibstyles: './componentlibrary/styles/main.scss'
    },
    output: {
        //filename: '[name].js',
        path: path.resolve(__dirname, '../public/assets')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'store': path.resolve(__dirname, '../src/store/index.js')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] 
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, "../src/scss")
                ],
                use: [
                    'vue-style-loader',
                    'css-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                    loader: ExtractTextPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        handlebarsconfig,
        extractSass,
        new VueLoaderPlugin(),
    ]
};

