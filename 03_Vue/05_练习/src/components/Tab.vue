<script setup>
import { ref } from "vue"
const current = ref(0)
</script>
<template>
    <div class="tab-wrapper">
        <!-- 选项卡的头部 -->
        <header class="tab-head">
            <!-- 定义两个按钮 -->
            <div
                @click="current = 0"
                class="tab-button"
                :class="{ active: current === 0 }"
            >
                热门球员
            </div>
            <div
                @click="current = 1"
                class="tab-button"
                :class="{ active: current === 1 }"
            >
                热门球队
            </div>
        </header>
        <!-- 选项卡的主体 -->
        <!-- 
            Tab组件主要的作用就是在多个选项卡之间进行切换，
                其中显示的主要内容是 TabList
                而TabList的数据位于App组件中，
                如果还按照之前的方式编写代码，必须要在App组件中将数据传递给Tab
                    然后再由Tab传递给TabList，这样做可以但是比较麻烦
        -->
        <div class="main">
            <!-- 
                current === 0 显示球员
                current === 1 显示球队
                    v-show 指令，用来设置一个内容是否显示
                        v-show是通过display来设置一个元素是否显示的
            -->
            <div v-show="current === 0">
                <!-- 球员 -->
                <!-- <TabList :items="players" :max-hot="playerMaxHot"></TabList> -->
                <!-- 球员 -->
                <slot name="0"></slot>
            </div>
            <div v-show="current === 1">
                <!-- 球队 -->
                <!-- <TabList :items="teams" :max-hot="teamMaxHot"></TabList> -->
                <slot name="1"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tab-wrapper {
    box-sizing: border-box;
    width: 800px;
    padding: 20px;
    background-color: rgb(45, 83, 211);
}

.tab-head {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
}

.tab-button {
    background-color: #fff;
    font-size: 30px;
    padding: 10px 0;
    text-align: center;
    flex: auto;
    cursor: pointer;
    transition: 0.5s;
}

.tab-button:not(.active):hover {
    color: rgb(187, 3, 52);
}

.active {
    background-color: rgb(187, 3, 52);
    color: #fff;
}
</style>
