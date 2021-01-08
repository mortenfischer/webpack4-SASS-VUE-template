const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const handlebarsconfig = require('./handlebars-config');


module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    plugins: [
       handlebarsconfig
    ]
});