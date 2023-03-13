<script setup>
import StudentList from "./components/StudentList.vue"
import { ref, provide } from "vue"
import StudentForm from "./components/StudentForm.vue"

/* 
    依赖注入
        - 通过依赖注入，可以跨域多层组件向其他的组件传递数据
        - 步骤：
            1. 设置依赖（provide） provide(name, value)
            2. 注入数据 （inject） const value = inject(name, default)
*/

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

// 添加一个删除学生的方法
const delStudentByIndex = (index) => {
    STU_ARR.value.splice(index, 1)
    // console.log("删除学生")
}

// 添加学生的方法
const addNewStudent = (student) => {
    const lastId = STU_ARR.value.at(-1)?.id
    const newId = !isNaN(lastId) ? lastId + 1 : 1
    student.id = newId
    STU_ARR.value.push(student)
}

provide("student", {
    students: STU_ARR,
    delStudentByIndex,
    addNewStudent
})
</script>

<template>
    <!-- 可以将组件中的方法以自定义事件的形式发送给其他的组件 -->
    <StudentList></StudentList>
    <hr />
    <StudentForm></StudentForm>
</template>

<style scoped></style>
