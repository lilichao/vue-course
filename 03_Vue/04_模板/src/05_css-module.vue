<script setup>
import MyBox from "./components/MyBox.vue"
</script>

<template>
    <div class="app">
        <h1>今天天气真不错！</h1>
        <div :class="classes.box1">App中的box1</div>
        <MyBox></MyBox>
    </div>
</template>
<!-- 
  css 模块
    - 自动的对模块中的类名进行hash化来确保类名的唯一性
    - 在模板中可以通过 $style.类名 使用
    - 也可以通过module的属性值来指定变量名

-->
<style module="classes">
.box1 {
    background-color: #bfa;
}
</style>
