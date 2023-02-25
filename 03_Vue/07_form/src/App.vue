<script setup>
import StudentList from "./components/StudentList.vue"
import { ref } from "vue"

// 发送请求来向服务器加载数据
const STU_ARR = ref([
    {
        id: 1,
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "花果山"
    },
    {
        id: 2,
        name: "猪八戒",
        age: 28,
        gender: "男",
        address: "高老庄"
    },
    {
        id: 3,
        name: "沙和尚",
        age: 38,
        gender: "男",
        address: "流沙河"
    },
    {
        id: 4,
        name: "唐僧",
        age: 16,
        gender: "男",
        address: "女儿国"
    }
])
</script>

<template>
    <StudentList :students="STU_ARR"></StudentList>
</template>

<style scoped></style>
