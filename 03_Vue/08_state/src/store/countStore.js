// 引入函数 defineStore()
import { defineStore } from "pinia"

// 通过函数来创建store
// defineStore("store的id", 配置对象)
// 配置对象：state，是一个函数，将需要由pinia维护的数据以对象的形式返回
export const useCountStore = defineStore("count", {
    // 数据
    state: () => ({
        count: 100,
        name: "猪八戒"
    }),

    // 计算属性
    getters: {
        double: (state) => state.count * 2
    },

    // 方法
    actions: {
        increment() {
            this.count++
        }
    }
})
