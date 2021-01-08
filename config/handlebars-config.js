const path = require('path');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const mergeJSON = require('handlebars-webpack-plugin/utils/mergeJSON');
const projectData = mergeJSON(path.join(process.cwd(),'componentlibrary', "**","*.json"))
console.log("projectdata",projectData)
// docs
// https://github.com/sagold/handlebars-webpack-plugin

module.exports = new HandlebarsPlugin({
    // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
    entry: path.join(process.cwd(), "componentlibrary","**","**", "*.hbs"),
    // output path and filename(s). This should lie within the webpacks output-folder
    // if ommited, the input filepath stripped of its extension will be used
    output: path.join(process.cwd(), "public", "[path]", "[name].html"),
    // you can als add a [path] variable, which will emit the files with their relative path, like
    // output: path.join(process.cwd(), "build", [path], "[name].html"),
    
    data:projectData,

    // globbed path to partials, where folder/filename is unique
    partials: [
      path.join(process.cwd(), "componentlibrary", "**", "*.hbs"),
      path.join(process.cwd(), "componentlibrary", "**", "**", "**.hbs"),
      path.join(process.cwd(), "componentlibrary", "**", "**", "**", "*.hbs"),
      path.join(process.cwd(), "componentlibrary", "**", "**", "**", "**.hbs"),
    ],

    // register custom helpers. May be either a function or a glob-pattern
    helpers: {
      //nameOfHbsHelper: Function.prototype,
      //projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
    },

    // hooks, leave uncommented until ready
    // getTargetFilepath: function (filepath, outputTemplate) {},
    // getPartialId: function (filePath) {}
    //onBeforeSetup: function (Handlebars) {},
    //onBeforeAddPartials: function (Handlebars, partialsMap) {},
    //onBeforeCompile: function (Handlebars, templateContent) {},
    //onBeforeRender: function (Handlebars, data, filename) {},
    //onBeforeSave: function (Handlebars, resultHtml, filename) {},
    //onDone: function (Handlebars, filename) {}
  })