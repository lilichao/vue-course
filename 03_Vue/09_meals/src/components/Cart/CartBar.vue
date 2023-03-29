<script setup>
import cartBag from "../../assets/bag.png"
</script>
<template>
    <div class="cart-bar">
        <div class="cart-bag">
            <img :src="cartBag" alt="" />
            <span class="total-count">11</span>
        </div>

        <div class="total-amount">
            <!-- <p class="no-goods">未选购商品</p> -->
            <p class="has-goods">20</p>
        </div>

        <button class="checkout">去结算</button>
    </div>
</template>

<style scoped>
.cart-bar {
    width: 710rem;
    height: 100rem;
    position: fixed;
    background-color: rgb(58, 58, 58);
    bottom: 40rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 60rem;
}

.cart-bag {
    position: absolute;
    width: 100rem;
    bottom: -10rem;
}

.total-count {
    position: absolute;
    background-color: red;
    border-radius: 50%;
    right: -20rem;
    padding: 6rem;
    color: #fff;
    font-weight: bold;
}

.total-amount {
    margin-left: 140rem;
    line-height: 100rem;
}
.no-goods,
.has-goods {
    color: rgb(148, 148, 148);
    font-size: 36rem;
    font-weight: bold;
}

.has-goods {
    color: #fff;
}

.has-goods::before {
    content: "￥";
    font-size: 26rem;
}

.checkout {
    position: absolute;
    top: 0;
    right: 0;
    width: 200rem;
    height: 100%;
    border-radius: 60rem;
    border: none;
    background-color: rgb(248, 188, 0);
    font-size: 36rem;
}
</style>
