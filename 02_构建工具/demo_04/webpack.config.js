const path = require("path")
// 引入html插件
const HTMLPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development", // 设置打包的模式，production表示生产模式  development 开发模式
    // entry: "./hello/hello.js", // 用来指定打包时的主文件 默认 ./src/index.js
    // entry: ["./src/a.js", "./src/b.js"],
    // entry: {
    //     a: "./src/a.js",
    //     b: "./src/b.js"
    // },
    // entry: "./src/a.js",

    output: {
        // path: path.resolve(__dirname, "dist"), // 指定打包的目录，必须要绝对路径
        // filename: "main.js", // 打包后的文件名
        // filename:"[name]-[id]-[hash].js",
        clean: true // 自动清理打包目录
    }, // 配置代码打包后的地址
    /* 
    webpack默认情况下，只会处理js文件，如果我们希望它可以处理其他类型的文件，则要为其引入loader

    - 以css为例：
        - 使用css-loader可以处理js中的样式
        - 使用步骤：
            1.安装：yarn add css-loader -D
            2.配置：
                module: {
                    rules: [
                        {
                            test: /\.css$/i,
                            use: "css-loader"
                        }
                    ]
                }
*/
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                type: "asset/resource" // 图片直接资源类型的数据，可以通过指定type来处理
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },

    plugins: [
        new HTMLPlugin({
            // title: "Hello Webpack",
            template: "./src/index.html"
        })
    ],

    devtool: "inline-source-map"
}
