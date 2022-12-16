<script setup>
import { reactive } from "vue"

// 创建一个响应式对象
/* 
    子组件中的数据通常不会在子组件中直接定义，这样会导致数据和视图发生耦合！
    子组件中的数据通常会在创建组件实例时确定！
    父组件可以通过 props 来将数据传递给子组件

    使用props
        - 先在子组件中定义props
*/

// const props = defineProps(["a", "b", "c"])
const props = defineProps(["item"])
const item = props.item

// console.log(props.item.name, props.item.img)
// const item = reactive({
//     name: "梅西",
//     img: "/images/messi.png",
//     rate: 1,
//     hot: 433760
// })
</script>

<template>
    <div class="tab-item">
        <!-- 图片 -->
        <div class="photo">
            <img :src="item.img" :alt="item.name" />
            <span>{{ item.rate }}</span>
        </div>

        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <div class="hot-bar">
                <div class="inner">{{ item.hot }}热度</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-item {
    display: flex;
    margin-bottom: 40px;
}

/* 容器 */
.photo {
    width: 150px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

/* 图片 */
.photo img {
    width: 100%;
    vertical-align: top;
}

/* 排名 */
.photo span {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgb(245, 102, 1);
    top: 0;
    left: 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
}

.desc {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    font-size: 30px;
    color: #fff;
    flex: auto;
    margin-left: 30px;
}

.hot-bar {
    background-color: rgb(3, 37, 103);
    border-radius: 20px;
    text-indent: 0.5em;
    overflow: hidden;
}

.inner {
    border-radius: 20px;
    background-image: linear-gradient(
        90deg,
        rgb(187, 3, 52) 50%,
        rgb(66, 2, 12)
    );
    white-space: nowrap;
}
</style>
