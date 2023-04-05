<script setup>
import { useMealsStore } from "../../store/meals"

const props = defineProps(["isShow"])
const emits = defineEmits(["close"])
const meals = useMealsStore()
</script>

<template>
    <div v-show="props.isShow" class="checkout">
        <div class="close">
            <i @click="$emit('close')" class="ri-close-fill"></i>
        </div>

        <!-- 设置订单详情 -->
        <div class="details">
            <header>餐品详情</header>
            <div class="list">
                <div v-for="item in meals.cartMeals">
                    {{ item.title }}
                </div>
            </div>
            <footer>
                合计￥<span>{{ meals.amount }}</span>
            </footer>
        </div>
    </div>
</template>

<style>
.checkout {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(240, 240, 240);
    z-index: 99999;
}

.close {
    height: 60rem;
    line-height: 60rem;
    padding-left: 20rem;
    font-size: 36rem;
    font-weight: bold;
}

.details {
    background-color: #fff;
    margin: 0 20rem;
    border-radius: 40rem;
    padding: 0 20rem;
}

.details header {
    height: 100rem;
    line-height: 100rem;
    font-size: 30rem;
    font-weight: bold;
    border-bottom: 1px dashed #e6e6e6;
}

.details footer {
    position: relative;
    height: 140rem;
    line-height: 140rem;
    text-align: right;
    font-size: 26rem;
    border-top: 1px dashed #e6e6e6;
}

.details footer::before,
.details footer::after {
    content: "";
    position: absolute;
    width: 20rem;
    height: 20rem;
    background-color: rgb(240, 240, 240);
    border-radius: 50%;
    left: -30rem;
    top: -10rem;
}

.details footer::after {
    left: auto;
    right: -30rem;
}

.details footer span {
    font-weight: bold;
    font-size: 30rem;
}
</style>
