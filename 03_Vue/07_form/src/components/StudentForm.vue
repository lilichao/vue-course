<script setup>
import { ref, inject } from "vue"

const {addNewStudent} = inject("student")


// 创建一个ref来存储新的学生信息
const newStu = ref({
    name: "",
    age: 1,
    gender: "男",
    address: ""
})
const submitHandler = () => {
    // console.log(newStu.value)
    // 调用方法，将newStu添加到数组中

    addNewStudent({ ...newStu.value })

    newStu.value.name = ""
    newStu.value.age = 1
    newStu.value.gender = "男"
    newStu.value.address = ""
}
</script>
<template>
    <form @submit.prevent="submitHandler">
        <div>姓名 <input type="text" v-model="newStu.name" /></div>

        <div>年龄 <input type="number" min="1" v-model="newStu.age" /></div>

        <div>
            性别
            <input
                v-model="newStu.gender"
                type="radio"
                name="gender"
                value="男"
            />
            男
            <input
                v-model="newStu.gender"
                type="radio"
                name="gender"
                value="女"
            />
            女
        </div>

        <div>
            住址
            <input v-model="newStu.address" type="text" />
        </div>

        <div>
            <button>添加</button>
        </div>
    </form>
</template>
