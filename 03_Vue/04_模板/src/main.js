import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)

// app.config.globalProperties.hello = "你好，我是全局的属性"
// app.config.globalProperties.alert = alert.bind(this)

app.mount("#app")
