<script setup>
import { useMealsStore } from "../../store/meals"
import Meals from "../Meals/Meals.vue"
import Mask from "../UI/Mask.vue"
const meals = useMealsStore()
</script>
<template>
    <Mask>
        <div class="cart-details">
            <div class="header">
                <h2>餐品详情</h2>
                <a href="javascript:;">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <Meals :desc="false" :meals="meals.cartMeals"></Meals>
        </div>
    </Mask>
</template>

<style scoped>
.cart-details {
    position: absolute;
    bottom: 0;
    width: 750rem;
    background-color: #fff;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
}

.meals {
    height: auto;
    max-height: calc(280rem * 4);
}

.header {
    display: flex;
    background-color: #fff;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
    justify-content: space-between;
    padding: 20rem 40rem;
}

.header h2 {
    font-size: 28rem;
}

.header a {
    display: flex;
    align-items: center;
    color: #9f9f9f;
    font-size: 22rem;
}

.header i {
    font-size: 26rem;
    margin-right: 6rem;
}
</style>
