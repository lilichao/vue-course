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
        <Meal v-for="item in meals.data" :meal="item"></Meal>
    </div>
</template>

<style scoped>
.meals {
    height: 100vh;
    padding: 120rem 0;
    background-color: #bfa;
    overflow: auto;
}
</style>
