<script setup>
function clickHandler(text) {
    // event.stopPropagation()
    alert(text)
}
/* 
    事件修饰符：
        .stop 停止事件的传播？似乎stop只能停止冒泡
        .capture 在捕获阶段触发事件
        .prevent 取消默认行为
        .self 只有事件由自身触发时才会有效
        .once 绑定一个一次性的事件
        .passive 主要用于提升滚动事件的性能
*/
</script>
<template>
    <h1>Hello Vue</h1>
    <div @click.self="clickHandler('box1')" class="box1">
        <div @click="clickHandler('box2')" class="box2">
            <div @click="clickHandler('box3')" class="box3"></div>
        </div>
    </div>
</template>
<style scoped>
.box1 {
    width: 300px;
    height: 300px;
    background-color: yellowgreen;
}

.box2 {
    width: 200px;
    height: 200px;
    background-color: yellow;
}

.box3 {
    width: 100px;
    height: 100px;
    background-color: #bfa;
}
</style>
