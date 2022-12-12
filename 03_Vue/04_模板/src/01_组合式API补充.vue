<script setup>
import { ref, reactive, computed } from "vue"

const msg = ref("Hello Vue")

// {value: obj}
// obj.value.name
const obj = ref({
    name: "孙悟空",
    age: 18
})

// obj2.name.value
const obj2 = {
    name: ref("孙悟空"), // {value:"孙悟空"}
    age: ref(18) // // {value:18}
}

const { name, age } = obj2

const changeMsgHandler = () => {
    // 修改ref对象时，必须通过value
    // msg.value = "哈哈"
    name.value = "你看我变不变"
}

// computed 用来生成计算属性
const newMsg = computed(() => {
    return msg.value + "-我爱Vue！"
})
</script>

<template>
    <!-- ref对象在模板中可以自动解包（要求ref对象必须是顶层对象） -->
    <h1>{{ msg }}</h1>
    <h1>{{ newMsg }}</h1>
    <h2>{{ obj.name }}</h2>
    <!-- name不是顶层响应式对象，所以不能自动解包 -->
    <!-- <h2>{{ obj2.name.value }}</h2> -->
    <h2>{{ name }}</h2>
    <hr />
    <h2>{{ obj.age + 1 }}</h2>
    <!-- <h2>{{ obj2.age.value + 1 }}</h2> -->
    <h2>{{ age + 1 }}</h2>
    <button @click="changeMsgHandler">点我一下</button>
</template>
