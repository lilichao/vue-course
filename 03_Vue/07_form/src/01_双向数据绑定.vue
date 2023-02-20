<script setup>
import { ref } from "vue"
let text = ref("")

function submitHandler() {
    console.log(text.value)
    // 将text提交给服务器，在根据服务器返回的数据做后续的操作
}
</script>

<template>
    <h1>Hello Vue</h1>
    <form @submit.prevent="submitHandler">
        <!-- 
        这里我们将表单项的value属性和变量text做了绑定，
          当value发生变化时，text变量会随之变化（单向绑定）

          当value或text任意一个发生变化，另一个也会随之变化（双向绑定）
      -->
        <div>
            <input
                type="text"
                @input="(event) => (text = event.target.value)"
                :value="text"
            />
        </div>
        <div>
            <input
                type="text"
                @input="(event) => (text = event.target.value)"
                :value="text"
            />
        </div>
        <div>
            <button>提交</button>
        </div>
    </form>
</template>

<style scoped></style>
