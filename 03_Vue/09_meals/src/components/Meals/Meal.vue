<script setup>
const props = defineProps(["meal"])
const meal = props.meal
</script>
<template>
    <div class="meal">
        <div class="img">
            <img :src="meal.img" :alt="meal.title" />
        </div>

        <div class="info">
            <div class="desc">
                <h2>{{ meal.title }}</h2>
                <p>{{ meal.desc }}</p>
            </div>
            <!-- 
            
            {{ meal.price }} -->
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
</style>
