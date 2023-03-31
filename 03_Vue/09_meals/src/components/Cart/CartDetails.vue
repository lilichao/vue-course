<script setup>
import { useMealsStore } from "../../store/meals"
import Meals from "../Meals/Meals.vue"
import Mask from "../UI/Mask.vue"
import Dialog from "../UI/Dialog.vue"
import { ref } from "vue"
const meals = useMealsStore()
const showDialog = ref(false)
const emits = defineEmits()

const okHandler = () => {
    /* 
        ① 把购物车清空
            meals.clearCart()
        ② 关闭对话框 Dialog
        ③ 关闭 CartDetails
    */

    meals.clearCart()
    emits("hide")
}
</script>
<template>
    <Mask style="z-index: 999">
        <Dialog
            @ok="okHandler"
            msg="确认清空购物车吗？"
            @hide="showDialog = false"
            :is-show="showDialog"
        ></Dialog>

        <div class="cart-details">
            <div class="header">
                <h2>餐品详情</h2>
                <a @click="showDialog = true" href="javascript:;">
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
