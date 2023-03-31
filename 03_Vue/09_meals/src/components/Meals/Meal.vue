<script setup>
import Counter from "../UI/Counter.vue"
const props = defineProps(["meal", "desc"])
</script>
<template>
    <div class="meal">
        <div class="img">
            <img :src="props.meal.img" :alt="props.meal.title" />
        </div>

        <div class="info">
            <div class="desc">
                <h2>{{ props.meal.title }}</h2>
                <p v-show="desc">{{ props.meal.desc }}</p>
            </div>

            <div class="price-btn">
                <span class="price">{{ props.meal.price }}</span>

                <Counter :meal="props.meal"></Counter>
            </div>
        </div>
    </div>
</template>
<style scoped>
.meal {
    display: flex;
    align-items: center;
    height: 280rem;
    border-bottom: 1px #e6e6e6 solid;
    padding: 0 20rem;
}

.img {
    width: 200rem;
}

.info {
    width: 450rem;
    margin-left: 20rem;
}

.info h2 {
    color: #000;
    font-size: 30rem;
    font-weight: normal;
}

.info p {
    font-size: 24rem;
    color: #9f9f9f;
}

.price-btn {
    display: flex;
    margin-top: 40rem;
    justify-content: space-between;
}

.price {
    font-size: 30rem;
    font-weight: bold;
}

.price::before {
    content: "￥";
}
</style>
