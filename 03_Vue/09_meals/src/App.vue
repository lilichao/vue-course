<script setup>
import Meals from "@/components/Meals/Meals.vue"
import CartBar from "./components/Cart/CartBar.vue"
import MealsFilter from "./components/MealsFilter/MealsFilter.vue"
</script>

<template>
    <MealsFilter></MealsFilter>
    <Meals></Meals>
    <CartBar></CartBar>
</template>

<style scoped></style>
