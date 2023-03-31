<script setup>
import Meal from "./Meal.vue"

const props = defineProps(["meals"])
</script>
<template>
    <!-- 所有的汉堡的容器 -->
    <div class="meals">
        <!-- 显示商品信息 -->
        <Meal
            :desc="$attrs.desc"
            v-for="item in props.meals"
            :meal="item"
        ></Meal>
        <h2 v-if="!props.meals || props.meals.length == 0">
            没有找到指定的商品
        </h2>
    </div>
</template>

<style scoped>
.meals {
    height: calc(100vh - 120rem);
    padding-bottom: 160rem;
    overflow: auto;
}
</style>
