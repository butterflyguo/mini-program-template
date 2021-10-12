const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');//复制文件
const babel = require('@babel/core');//es6转es5
const less = require('less');//es6转es5
module.exports = {
	mode: 'development',
    entry: './src/app.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
	
  },
  watch: true,
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     hot: true
//   },
  plugins:[
  	new CopyWebpackPlugin([{
  		from: '**/*.wxml',
  		to: './',
  	},{
  		from: '**/*.json',
  		to: './',
  	},{
  		from: '**/*.css',
  		to: './',
  		
  	},{
  		from: '**/*.jpg',
  		to: './',
  	},{
  		from: '**/*.png',
  		to: './',
  	},{
  		from: '**/*.less',
  		to: './',
  		transform(content,path) {
  			return less.render(content.toString())
  			.then(function(output){
  				return output.css
  			})
  		},
  		transformPath(targetPath, absolutePath) {
		return targetPath.replace('.less', '.wxss')
	}
  	},{
  		from: '**/*.js',
  		to: './',
  		ignore: ['*.test.js','*.spec.js'],//忽略不需要复制的测试文件
  		// context:'./src',
  		transform(content,path) {//复制文件前对文件内容处理
  			const newCode = babel.transformSync(content,{
  				babelrc:true,
  				"presets":["@babel/env"]
  			}).code
  			return Promise.resolve(newCode.toString())
  		}
  	}],{
  		context:'./src',
  	}
  )
  
  ]
};