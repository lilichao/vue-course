<script setup>
import Meal from "./Meal.vue"
import { useMealsStore } from "@/store/meals"

// 加载store中的属性
const meals = useMealsStore()
</script>
<template>
    <!-- 所有的汉堡的容器 -->
    <div class="meals">
        <!-- 显示商品信息 -->
        <Meal v-for="item in meals.filterMeals" :meal="item"></Meal>
        <h2 v-if="meals.filterMeals.length == 0">没有找到指定的商品</h2>
    </div>
</template>

<style scoped>
.meals {
    height: calc(100vh - 120rem);
    /* padding: 120rem 0; */
    overflow: auto;
}
</style>
