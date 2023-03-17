<script setup>
import { ref, inject } from "vue"
// import { countStore } from "../store/count"
// const { count, increment } = inject("count")

import { useStudentStore } from "@/store/studentStore.js"
import { storeToRefs } from "pinia"

const stuStore = useStudentStore()
/* 
    store实例本身就是一个reactive对象，
        可以通过它直接访问state中的数据
    
    但是如果直接将state中数据解构出来，那么数据将会丧失响应性

    可以通过storeToRefs()来对store进行解构，
        它可以将state和getters中的属性解构为ref属性，从而保留其响应性

    state的修改：
        1. 直接修改
        2. 通过$patch
        3. 通过$patch传函数的形式的修改
        4. 直接替换state
        5. 重置state
*/
// const { name, age } = stuStore

const { name, age, title } = storeToRefs(stuStore)

// state中的属性（方法），都可以通过store对象直接访问

const clickHandler = () => {
    stuStore.$patch({
        name: "孙小圣",
        age: 20,
        skills: ["救命毫毛"]
    })

    // stuStore.$patch((state) => {
    //     state.skills.push("救命毫毛")
    // })

    // stuStore.skills.push("哈哈")

    // stuStore.$patch({ name: "孙小圣" })
    // stuStore.$state = { name: "孙小圣" }
}

/* 
    store的订阅
        - 当store中的state发生变化时，做一些响应的操作
        - store.$subscribe(函数, 配置对象)
*/
stuStore.$subscribe(
    (mutation, state) => {
        // mutation 表示修改的信息
        // console.log(mutation.events)
        // console.log(mutation.events[0] === mutation.events[1])
        // console.log(mutation.payload)
        // if(state.token){
        //     // 登录，向本地存储中添加内容
        // }else{
        //     // 登出，从本地存储中移除内容
        // }
        // console.log("state发生变化了", state)
        // 使用订阅时不要在回调函数中直接修改state
        // state.age++
    },
    { detached: true }
)

// $onAction 用来订阅action的调用
stuStore.$onAction(({ name, store, args, after, onError }) => {
    /* 
        name 调用的action的名字
        store store的实例
        args action接收到的参数
        after() 可以设置一个回调函数，函数会在action成功调用后触发
        onError() 可以设置一个回调函数，函数会在action调用失败后触发
    */

    after(() => {
        console.log(name + "成功执行！")
    })

    onError((err) => {
        console.log(name + "执行失败！", err)
    })
})
</script>
<template>
    <h4>
        ComponentC -- {{ name }} -- {{ age }} -- {{ title }} --
        {{ stuStore.double }} --
        {{ stuStore.skills }}
        <!-- {{ countStore.count }} --
        <button @click="countStore.increment">按钮</button> -->

        <button @click="stuStore.growUp">长大</button>

        <hr />

        <button @click="stuStore.name = '孙大圣'">修改name</button>
        <button @click="clickHandler">patch修改</button>
        <button @click="stuStore.$reset()">重置</button>
    </h4>
</template>
