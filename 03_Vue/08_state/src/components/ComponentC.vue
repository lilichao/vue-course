<script setup>
import { ref, inject } from "vue"
// import { countStore } from "../store/count"
// const { count, increment } = inject("count")

import { useStudentStore } from "@/store/studentStore.js"
import { storeToRefs } from "pinia"

const stuStore = useStudentStore()
/* 
    store实例本身就是一个reactive对象，
        可以通过它直接访问state中的数据
    
    但是如果直接将state中数据解构出来，那么数据将会丧失响应性

    可以通过storeToRefs()来对store进行解构，
        它可以将state和getters中的属性解构为ref属性，从而保留其响应性
*/
// const { name, age } = stuStore

const { name, age, title } = storeToRefs(stuStore)

// state中的属性（方法），都可以通过store对象直接访问
</script>
<template>
    <h4>
        ComponentC -- {{ name }} -- {{ age }} -- {{ title }}
        <!-- {{ countStore.count }} --
        <button @click="countStore.increment">按钮</button> -->

        <button @click="stuStore.growUp">长大</button>
    </h4>
</template>
