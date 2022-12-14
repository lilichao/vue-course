<script setup>
import { ref } from "vue"

// 创建一个变量来记录选项卡的状态
const current = ref(0) // 0 表示球员， 1 表示球队
</script>

<template>
    <!-- 选项卡的外部容器 -->
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
        <div class="main">
            <!-- 
                current === 0 显示球员
                current === 1 显示球队
                    v-show 指令，用来设置一个内容是否显示
                        v-show是通过display来设置一个元素是否显示的
            -->
            <div v-show="current === 0">
                <!-- 球员 -->
                <div class="tab-list">
                    <div class="tab-item">
                        <!-- 图片 -->
                        <div class="photo">
                            <img src="/images/messi.png" alt="梅西" />
                            <span>1</span>
                        </div>

                        <!-- 描述 -->
                        <div class="desc">
                            <span class="name">梅西</span>
                            <div class="hot-bar">
                                <div class="inner">433760热度</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="current === 1">
                <!-- 球队 -->
                <div class="tab-list">
                    <div class="tab-item">
                        <!-- 图片 -->
                        <div class="photo">
                            <img src="/images/法国.jpg" alt="法国" />
                            <span>1</span>
                        </div>

                        <!-- 描述 -->
                        <div class="desc">
                            <span class="name">法国</span>
                            <div class="hot-bar">
                                <div class="inner">333760热度</div>
                            </div>
                        </div>
                    </div>
                </div>
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

.tab-list {
    margin: 20px;
}

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
    width: 10%;
    white-space: nowrap;
}
</style>
