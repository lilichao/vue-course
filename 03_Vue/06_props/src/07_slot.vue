<script setup>
import A from "./components/A.vue"
import SlotDemo from "./components/SlotDemo.vue"

const name = "猪八戒"
</script>
<template>
    <h1>App组件</h1>
    <!-- 直接写在组件中内容是默认插槽的内容，只会出现在默认插槽中（没有name属性的插槽） -->
    <SlotDemo>
        <template #s1>s1插槽</template>
        <template v-slot:s2="{ stuName, age, gender }">
            <A :name="age"></A>
        </template>
    </SlotDemo>
</template>
