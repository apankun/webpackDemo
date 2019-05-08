const webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline:true,
        port:9000
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin("潘潘所有，翻版必究！"),
        new HtmlWebpackPlugin(
            {
                template:'./app/index.html'
            }
        )
    ]
}