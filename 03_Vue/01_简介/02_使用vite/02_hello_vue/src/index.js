// import { createApp } from "vue/dist/vue.esm-bundler.js"
import { createApp } from "vue"
import App from "./App.vue"

// 创建应用并挂载
// mount()的返回值是跟组件的实例
const vm = createApp(App).mount("#root")
