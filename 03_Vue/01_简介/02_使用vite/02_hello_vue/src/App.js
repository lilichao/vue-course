//引入组件
import MyButton from "./components/MyButton"

// 创建根组件
export default {
    data() {
        return {
            msg: "我爱Vue！"
        }
    },

    // 在组件中注册子组件
    components: {
        // MB:MyButton
        "my-button": MyButton
    }

    // template: `
    // <h1>{{msg}}</h1>
    // <MB></MB>
    // <MB></MB>
    // <MB></MB>
    // `
}
