<script setup>
import { ref } from "vue"

const isShow = ref(true)
</script>
<template>
    <h1>App组件</h1>
    <button @click="isShow = !isShow">切换</button>

    <!-- 
      v-show 可以根据值来决定元素是否显示（通过display来切换元素的显示状态）
      v-if 可以根据表达式的值来决定是否显示元素（会直接将元素删除）
        - v-show通过css来切换组件的显示与否，切换时不会涉及到组件的重新渲染
            切换的性能比较高。
            
            但是初始化时，需要对所有组件进行初始化（即使组件暂时不显示）
            所以它的初始化的性能要差一些！

        - v-if通过删除添加元素的方式来切换元素的显示，切换时反复的渲染组件，
            切换的性能比较差。

            v-if只会初始化需要用到的组件，所以它的初始化性能比较好

            v-if可以和 v-else-if 和 v-else结合使用

            v-if可以配合template使用


    -->
    <!-- <div v-if="isShow">
        <h2>我是if中的内容</h2>
    </div>
    <div v-else>
        <h2>我是else中的内容！</h2>
    </div> -->

    <template v-if="isShow">
        <h2>我是一个h2</h2>
        <h3>我是h3</h3>
    </template>
</template>
