<script setup>
import { ref } from "vue"
const text = ref("")
const bool = ref("是")
const hobbies = ref([])
const gender = ref("女")
const friend = ref("猪八戒")

function submitHandler() {
    console.log(text.value)
    // 将text提交给服务器，在根据服务器返回的数据做后续的操作
}
</script>

<template>
    <h1>Hello Vue</h1>
    <form @submit.prevent="submitHandler">
        <!-- 
        在vue中，为我们提供了v-model了可以快速完成表单的双向数据绑定

        <input type="text" v-model="text" />
        <input type="text" :value="text" @input="event => text = event.target.value" />
      -->
        <div>信息：<input type="text" v-model="text" /></div>
        <div>
            是否：<input
                type="checkbox"
                v-model="bool"
                true-value="是"
                false-value="否"
            />
        </div>
        <div>
            爱好：
            <input
                v-model="hobbies"
                type="checkbox"
                name="hobby"
                value="足球"
            />足球
            <input
                v-model="hobbies"
                type="checkbox"
                name="hobby"
                value="篮球"
            />篮球
            <input
                v-model="hobbies"
                type="checkbox"
                name="hobby"
                value="羽毛球"
            />羽毛球
            <input
                v-model="hobbies"
                type="checkbox"
                name="hobby"
                value="乒乓球"
            />乒乓球
        </div>
        <div>
            性别：
            <input v-model="gender" type="radio" name="gender" value="男" />男
            <input v-model="gender" type="radio" name="gender" value="女" />女
        </div>
        <div>
            朋友：
            <select v-model="friend">
                <option disabled value="">请选择你的好朋友...</option>
                <option>孙悟空</option>
                <option>猪八戒</option>
                <option>沙和尚</option>
            </select>
        </div>
        <div>
            <button>提交</button>
        </div>
    </form>
</template>

<style scoped></style>
