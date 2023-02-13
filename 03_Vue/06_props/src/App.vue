<script setup>
import C from "./components/C.vue"

/* 
    透传属性
        - 在组件上设置属性，会自动传递给组件的根元素
        - 这样一来可以方便我们在父组件中为子组件来设置属性
        - 透传会发生在没有被声明为props和emit的属性上
        - 自动的透传只适用单根组件
*/
function showMsg() {
    alert("hello")
}
</script>

<template>
    <h1>属性的透传</h1>
    <h2 class="box1">我是h2</h2>
    <C class="box2" style="color: red" @click="showMsg"></C>
    <!-- <h2>我是组件C</h2> -->
</template>
<style scoped></style>
