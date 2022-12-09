import { reactive, ref } from "vue"

const stu = reactive({ name: "孙悟空" })
const count = ref(0) // {value:0}
const person = ref({ name: "猪八戒", age: 18 }) // {value:{ name: "猪八戒", age: 18 }}

console.log(person.value.name)
