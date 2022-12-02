// 引入vue
// 这里引入的vue，默认不支持通过template属性来设置模板
import { createApp } from "vue/dist/vue.esm-bundler.js"

// 创建一个根组件
const App = {
    data() {
        return {
            message: "我爱Vue！"
        }
    },

    template: "<h1>{{message}}</h1>"
}

// 创建应用挂载到页面
createApp(App).mount("#app")
