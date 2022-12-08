<script>
import MyButton from "./components/MyButton.vue"
import { shallowReactive } from "vue"

export default {
    data() {
        // data返回的对象最终会被Vue所代理
        // this.$data.xxx = "xxx" 动态添加响应数据（不建议这么做）
        // 建议将那些暂时没有使用到的属性，也添加到data返回的对象中，值可以设置为null
        return {
            msg: "今天天气真不错！",
            // vue在构建响应式对象时，会同时将对象中的属性也做成响应式属性
            // 深层响应式对象
            stu: {
                name: "孙悟空",
                age: 18,
                gender: "男",
                friend: {
                    name: "猪八戒"
                }
            },
            hello: null
        }

        // 有些场景下，可以通过shallowReactive()来创建一个浅层的响应式对象
        // return shallowReactive({
        //     msg: "大闸蟹今天没去玩游戏！",
        //     stu: {
        //         name: "孙悟空",
        //         age: 18,
        //         gender: "男",
        //         friend: {
        //             name: "猪八戒"
        //         }
        //     }
        // })
    },

    components: {
        MyButton
    }
}
</script>
<template>
    <h1>{{ msg }}</h1>

    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
    <h3>{{ stu.friend.name }}</h3>
    <hr />
    <h2>{{ hello }}</h2>
    <hr />
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
</template>
