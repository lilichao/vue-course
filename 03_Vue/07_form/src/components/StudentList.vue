<script setup>
// 通过defineProps定义的属性在attrs中就不存在了

import StudentItem from "./StudentItem.vue"

import { inject, provide } from "vue"

// 使用自定义属性时，最好通过defineProps来声明一下
// const props = defineProps(["students"])
// const emits = defineEmits(["delStu"])
</script>
<template>
    <table>
        <caption>
            学生列表
        </caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>

        <StudentItem></StudentItem>
    </table>
</template>

<style scoped>
table {
    width: 80%;
    border-collapse: collapse;
    text-align: center;
}

caption {
    font-size: 30px;
    font-weight: bold;
}

th {
    border: 1px solid black;
    font-size: 24px;
}
</style>
