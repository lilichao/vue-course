# Vue 课程

## 第一部分 预备知识 —— git

1. 安装（略）

2. 配置

    1. 配置 name 和 email

        ```bash
        git config --global user.name "xxxx"
        git config --global user.email "xxx@xxx.xxx"
        ```

3. 使用 git：

    - 查看当前仓库的状态

        ```bash
        git status
        ```

    - 初始化仓库

        ```bash
        git init
        ```

    - 文件状态：

        1. 未跟踪
        2. 已跟踪
        3. 暂存
        4. 未修改
        5. 已修改

    - 未跟踪 → 暂存

        ```bash
        git add <filename> 将文件切换到暂存的状态
        git add * 将所有已修改（未跟踪）的文件暂存
        ```

    - 暂存 → 未修改

        ```bash
        git commit -m "xxxx" 将暂存的文件存储到仓库中
        git commit -a -m "xxxx" 提交所有已修改的文件（未跟踪的文件不会提交）
        ```

    - 未修改 → 修改

        - 修改代码后，文件会变为修改状态

4. 常用的命令

    1. 重置文件

    ```bash
    git restore <filename> # 恢复文件
    git restore --staged <filename> # 取消暂存状态
    ```

    2. 删除文件

    ```bash
    git rm <filename> # 删除文件
    git rm <filename> -f # 强制删除
    ```

    3. 移动文件

    ```bash
    git mv from to # 移动文件 重命名文件
    ```

    ### 分支

    git 在存储文件时，每一次代码代码的提交都会创建一个与之对应的节点，git 就是通过一个一个的节点来记录代码的状态的。节点会构成一个树状结构，树状结构就意味着这个树会存在分支，默认情况下仓库只有一个分支，命名为 master。在使用 git 时，可以创建多个分支，分支与分支之间相互独立，在一个分支上修改代码不会影响其他的分支。

    ```bash
    git branch # 查看当前分支
    git branch <branch name> # 创建新的分支
    git branch -d <branch name> # 删除分支
    git switch <branch name> # 切换分支
    git switch -c <branch name> # 创建并切换分支
    git merge <branch name> # 和并分支
    ```

    在开发中，都是在自己的分支上编写代码，代码编写完成后，在将自己的分支合并到主分支中。

    ### 变基（rebase）

    在开发中除了通过 merge 来合并分支外，还可以通过变基来完成分支的合并。

    我们通过 merge 合并分支时，在提交记录中会将所有的分支创建和分支合并的过程全部都显示出来，这样当项目比较复杂，开发过程比较波折时，我必须要反复的创建、合并、删除分支。这样一来将会使得我们代码的提交记录变得极为混乱。

    原理（变基时发生了什么）：

    1. 当我们发起变基时，git 会首先找到两条分支的最近的共同祖先
    2. 对比当前分支相对于祖先的历史提交，并且将它们提取出来存储到一个临时文件中
    3. 将当前部分指向目标的基底
    4. 以当前基底开始，重新执行历史操作

    变基和 merge 对于合并分支来说最终的结果是一样的！但是变基会使得代码的提交记录更整洁更清晰！注意！大部分情况下合并和变基是可以互换的，但是如果分支已经提交给了远程仓库，那么这时尽量不要变基。

    ### 远程仓库（remote）

    目前我对于 git 所有操作都是在本地进行的。在开发中显然不能这样的，这时我们就需要一个远程的 git 仓库。远程的 git 仓库和本地的本质没有什么区别，不同点在于远程的仓库可以被多人同时访问使用，方便我们协同开发。在实际工作中，git 的服务器通常由公司搭建内部使用或是购买一些公共的私有 git 服务器。我们学习阶段，直接使用一些开放的公共 git 仓库。目前我们常用的库有两个：GitHub 和 Gitee（码云）

    将本地库上传 git：

    ```bash
    git remote add origin https://github.com/lilichao/git-demo.git
    # git remote add <remote name> <url>

    git branch -M main
    # 修改分支的名字的为main

    git push -u origin main
    # git push 将代码上传服务器上
    ```

    将本地库上传 gitee：

    ```bash
    git remote add gitee https://gitee.com/ymhold/vue-course.git
    git push -u gitee main
    ```

    ### 远程库的操作的命令

    ```bash
    git remote # 列出当前的关联的远程库
    git remote add <远程库名> <url> # 关联远程仓库
    git remote remove <远程库名>  # 删除远程库
    git push -u <远程库名> <分支名> # 向远程库推送代码，并和当前分支关联
    git push <远程库> <本地分支>:<远程分支>
    git clone <url> # 从远程库下载代码

    git push # 如果本地的版本低于远程库，push默认是推不上去
    git fetch # 要想推送成功，必须先确保本地库和远程库的版本一致，fetch它会从远程仓库下载所有代码，但是它不会将代码和当前分支自动合并
    		 # 使用fetch拉取代码后，必须要手动对代码进行合并
    git pull  # 从服务器上拉取代码并自动合并

    ```

    注意：推送代码之前，一定要先从远程库中拉取最新的代码

    ### tag 标签

-   当头指针没有执行某个分支的头部时，这种状态我们称为分离头指针（HEAD detached），分离头指针的状态下也可以操作操作代码，但是这些操作不会出现在任何的分支上，所以注意不要再分离头指针的状态下来操作仓库。

-   如果非得要回到后边的节点对代码进行操作，则可以选择创建分支后再操作

    ```bash
    git switch -c <分支名> <提交id>
    ```

-   可以为提交记录设置标签，设置标签以后，可以通过标签快速的识别出不同的开发节点：

    ```bash
    git tag
    git tag 版本
    git tag 版本 提交id
    git push 远程仓库 标签名
    git push 远程仓库 --tags
    git tag -d 标签名 # 删除标签
    git push 远程仓库 --delete 标签名 # 删除远程标签
    ```

    ### gitignore

-   默认情况下，git 会监视项目中所有内容，但是有些内容比如 node_modules 目录中的内容，我们不希望它被 git 所管理。我们可以在项目目录中添加一个`.gitignore`文件，来设置那些需要 git 忽略的文件。

### github 的静态页面

-   在 github 中，可以将自己的静态页面直接部署到 github 中，它会给我们提供一个地址使得我们的页面变成一个真正的网站，可以供用户访问。
-   要求：
    -   静态页面的分支必须叫做：gh-pages
    -   如果希望页面可以通过 xxx.github.io 访问，则需要将库的名字配置为 xxx.github.io

### docusaurus

-   facebook 推出的开源的静态的内容管理系统，通过它可以快速的部署一个静态网站

-   使用：

    -   网址：

        -   https://docusaurus.io/

    -   安装

        -   `npx create-docusaurus@latest my-website classic`

    -   启动项目

        -   `npm start`或`yarn start`

    -   构建项目

        -   `npm run build`或`yarn build`
        -

    -   配置项目：

        -   docusaurus.config.js 项目的配置文件

    -   添加页面：

        -   在 docusaurus 框架中，页面分成三种：1.page，2.blog，3.doc

    -   案例地址：

        -   https://github.com/lilichao/lilichao.github.io

## 第二部分 预备知识 —— 构建工具

-   当我们习惯了在 node 中编写代码的方式后，在回到前端编写 html、css、js 这些东西会感觉到各种的不便。比如：不能放心的使用模块化规范（浏览器兼容性问题）、即使可以使用模块化规范也会面临模块过多时的加载问题。
-   我们就迫切的希望有一款工具可以对代码进行打包，将多个模块打包成一个文件。这样一来即解决了兼容性问题，又解决了模块过多的问题。
-   构建工具就起到这样一个作用，通过构建工具可以将使用 ESM 规范编写的代码转换为旧的 JS 语法，这样可以使得所有的浏览器都可以支持代码。

### Webpack

-   使用步骤：

    1. 初始化项目`yarn init -y`
    2. 安装依赖`webpack`、`webpack-cli`
    3. 在项目中创建`src`目录，然后编写代码（index.js）
    4. 执行`yarn webpack`来对代码进行打包（打包后观察 dist 目录）

-   配置文件（webpack.config.js）

    ```javascript
    const path = require("path")
    module.exports = {
        mode: "production",
        entry: "./src/index.js",
        output: {},
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                }
            ]
        }
    }
    ```

-   在编写 js 代码时，经常需要使用一些 js 中的新特性，而新特性在旧的浏览器中兼容性并不好。此时就导致我们无法使用一些新的特性。

-   但是我们现在希望能够使用新的特性，我们可以采用折中的方案。依然使用新特性编写代码，但是代码编写完成时我们可以通过一些工具将新代码转换为旧代码。

-   babel 就是这样一个工具，可以将新的 js 语法转换为旧的 js，以提高代码的兼容性。

-   我们如果希望在 webpack 支持 babel，则需要向 webpack 中引入 babel 的 loader

-   使用步骤

    1. 安装 `npm install -D babel-loader @babel/core @babel/preset-env`

    2. 配置：

        ```javascript
        module: {
            rules: [
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
        }
        ```

    3. 在 package.json 中设置兼容列表

        ```json
        "browserslist": [
                "defaults"
         ]
        ```

        https://github.com/browserslist/browserslist

-   插件（plugin）

    -   插件用来为 webpack 来扩展功能

    -   html-webpack-plugin

        -   这个插件可以在打包代码后，自动在打包目录生成 html 页面

        -   使用步骤：

            1. 安装依赖
            2. 配置插件

            ```javascript
            plugins: [
                new HTMLPlugin({
                    // title: "Hello Webpack",
                    template: "./src/index.html"
                })
            ]
            ```

-   开发服务器（webpack-dev-server）

    -   安装：
        -   `yarn add  -D webpack-dev-server`
        -   启动：`yarn webpack serve --open`

-   `devtool:"inline-source-map"`配置源码的映射

## Vite

-   Vite 也是前端的构建工具

-   相较于 webpack，vite 采用了不同的运行方式：

    -   开发时，并不对代码打包，而是直接采用 ESM 的方式来运行项目
    -   在项目部署时，在对项目进行打包

-   除了速度外，vite 使用起来也更加方便

-   基本使用：

    1. 安装开发依赖 vite

    2. vite 的源码目录就是项目根目录

    3. 开发命令：

        vite 启动开发服务器

        vite build 打包代码

        vite preview 预览打包后代码

-   使用命令构建

    ```bash
    npm create vite@latest
    yarn create vite
    pnpm create vite
    ```

-   配置文件：`vite.config.js`

-   格式：

    ```javascript
    import { defineConfig } from "vite"
    import legacy from "@vitejs/plugin-legacy"

    export default defineConfig({
        plugins: [
            legacy({
                targets: ["defaults"]
            })
        ]
    })
    ```

## 第三部分 Vue

### vue

-   vue 是一个前端的框架，主要负责帮助我们构建用户的界面
-   MVVM：Model - View - View Model
-   vue 负责 vm 的工作（视图模型），通过 vue 可以将视图和模型相关联。
    -   当模型发生变化时，视图会自动更新
    -   也可以通过视图去操作模型
-   vue 思想：
    -   组件化开发
    -   声明式的编程

### HelloWorld

1. 直接在网页中使用（像 jQuery 一样）

    - `        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

2. 使用 vite

    - `yarn add vite -D`

3. 代码：

    ```javascript
    // 组件，就是一个普通js对象
    const App = {}

    // 创建应用
    const app = createApp(App)

    // 挂载到页面
    app.mount("#root")
    ```

4. 自动创建项目
    - `npm init vue@latest`
    - `yarn create vue`

## 网页的渲染

-   浏览器在渲染页面时，做了那些事：

    1. 加载页面的 html 和 css（源码）
    2. html 转换为 DOM，css 转换为 CSSOM
    3. 将 DOM 和 CSSOM 构建成一课渲染树
    4. 对渲染树进行 reflow（回流、重排）（计算元素的位置）
    5. 对网页进行绘制 repaint（重绘）

-   渲染树（Render Tree）

    -   从根元素开始检查那些元素可见，以及他们的样式
    -   忽略那些不可见的元素（display:none）

-   重排、回流

    -   计算渲染树中元素的大小和位置
    -   当页面中的元素的大小或位置发生变化时，便会触发页面的重排（回流）
    -   width、height、margin、font-size ......
    -   注意：每次修改这类样式都会触发一次重排！所以如果分词修改多个样式会触发重排多次，而重排是非常耗费系统资源的操作（昂贵），重排次数过多后，会导致网页的显示性能变差，在开发时我们应该尽量的减少重排的次数
    -   在现代的前端框架中，这些东西都已经被框架优化过了！所以使用 vue、react 这些框架这些框架开发时，几乎不需要考虑这些问题，唯独需要注意的时，尽量减少在框架中直接操作 DOM

-   重绘

    -   绘制页面
    -   当页面发生变化时，浏览器就会对页面进行重新的绘制

-   例子：

    ```html
    <!DOCTYPE html>
    <html lang="zh">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Document</title>
            <style>
                .box1 {
                    width: 200px;
                    height: 200px;
                    background-color: orange;
                }

                .box2 {
                    background-color: tomato;
                }

                .box3 {
                    width: 300px;
                    height: 400px;
                    font-size: 20px;
                }
            </style>
        </head>
        <body>
            <button id="btn">点我一下</button>
            <hr />
            <div id="box1" class="box1"></div>
            <script>
                btn.onclick = () => {
                    // box1.classList.add("box2")
                    // 可以通过修改class来间接的影响样式，来减少重排的次数
                    // box1.style.width = "300px"
                    // box1.style.height = "400px"
                    // box1.style.fontSize = "20px"
                    // box1.classList.add("box3")
                    // box1.style.display = "none"
                    // box1.style.width = "300px"
                    // box1.style.height = "400px"
                    // box1.style.fontSize = "20px"
                    // div.style.display = "block"
                }
            </script>
        </body>
    </html>
    ```
