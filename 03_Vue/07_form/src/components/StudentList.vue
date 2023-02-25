<script setup>
// 通过defineProps定义的属性在attrs中就不存在了
// 使用自定义属性时，最好通过defineProps来声明一下
const props = defineProps(["students"])
const emits = defineEmits(["delStu"])

// 定义一个删除学生的方法
const delStuHandler = (index) => {
    if (confirm("该操作不可恢复，请确认！")) {
        // 删除当前的学生
        // props.students.splice(index, 1)
        // props.delStu(index)
        emits("delStu", index)
    }
}
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
        <tbody>
            <tr v-for="(stu, index) in props.students">
                <td>{{ stu.id }}</td>
                <td>{{ stu.name }}</td>
                <td>{{ stu.age }}</td>
                <td>{{ stu.gender }}</td>
                <td>{{ stu.address }}</td>
                <td>
                    <!-- 在模板中可以通过$emit()来触发自定义事件 -->
                    <!-- <a href="#" @click.prevent="$emit('delStu', index)">删除</a> -->
                    <a href="#" @click.prevent="delStuHandler(index)">删除</a>
                </td>
            </tr>
        </tbody>
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

th,
td {
    border: 1px solid black;
    font-size: 24px;
}
</style>
