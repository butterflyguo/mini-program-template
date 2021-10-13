const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const babel = require('@babel/core');
const less = require('less');
module.exports = {
    mode:'development',
    entry: path.resolve(__dirname,'src/app.js'),
    output:{
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    watch:true,
    plugins: [
        new CopyWebpackPlugin([
            {
                from:'**/*.png',
                to:'./'
            },{
                from:'**/*.jpg',
                to:'./'
            },{
                from:'**/*.wxml',
                to:'./'
            },{
                from:'**/*.json',
                to:'./'
            },{
                from:'**/*.less',
                to:'./',
                transform(content) {
                    return less.render(content.toString())
                    .then(function(output){
                        return output.css;
                    })
                },
                transformPath(targetPath) {//vscode插件Easy WXLESS也可将less转成wxss文件
                    return targetPath.replace('.less','.wxss')
                }
            },
            {
                from:'**/*.js',
                to:'./',
                ignore:['*.test.js'],//忽略测试文件
                transform(content,path) {
                    const newCode = babel.transformSync(content,{
                        babelrc:true,
                        "presets": ["@babel/env"]
                    }).code
                    return Promise.resolve(newCode.toString())
                }
            }
        ],{
            context:'./src'
        })
    ]
}