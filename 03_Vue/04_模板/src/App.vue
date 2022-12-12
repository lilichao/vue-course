<script setup>
import { ref } from "vue"
const imgPath = ref("/images/messi.png")
const changeImg = () => {
    imgPath.value = "/images/neymar.png"
}
const attrs = {
    id: "box1",
    class: "hello"
}

const attrName = "title"
const attrValue = "这是一个title属性"

const isDisabled = ""
</script>

<template>
    <!-- 
      当我们需要为标签动态的设置属性时，需要使用v-bind指令,
        v-bind可以简写为 :
      当我们为一个布尔值设置属性时，
        如果值为true，则元素上有该属性（转换后为true，也算true）
        如果值为false，则元素没有该属性（转换后为false，也算false）
        特殊情况："" 空串，在这里会被当成真值


  -->
    <!-- <button @click="changeImg">切换图片</button> -->
    <img :[attrName]="attrValue" :src="imgPath" alt="梅西" />
    <div :="attrs"></div>

    <input type="text" :disabled="isDisabled" />
</template>
