<script setup>
import { inject, ref } from "vue"
// import { countStore } from "@/store/count"
// 引入store钩子
import { useCountStore } from "../store/countStore"

// const {count, increment} = inject("count")

// 获取store实例
const countStore = useCountStore()

/* 
    状态管理
        - 状态（state）
            - 应用当中的数据就是状态
            - 状态即数据
        - 视图（view）
            - 视图用来呈现数据，用户通过视图访问数据
        - 交互（actions）
            - 用户的操作
            - 状态会根据用户在视图中的操作发生变化

    提升状态
        - 当有多个组件需要使用到同一个state时，可以将state提升到这些组件共同的祖先组件中声明
            这样一来所有这些组件便都可以通过祖先元素来访问到这个state
*/
</script>
<template>
    <!-- <h3>
        ComponentA --
        {{ countStore.count }} --
        <button @click="countStore.increment">按钮</button>
    </h3> -->

    <h3>
        ComponentA2 --
        {{ countStore.count }} -- {{ countStore.double }} --
        {{ countStore.name }} --
        <button @click="countStore.increment">按钮</button>
    </h3>
</template>
