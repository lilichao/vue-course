<script setup>
const props = defineProps(["meal"])
const meal = props.meal
</script>
<template>
    <div>
        {{ meal.img }}
        {{ meal.title }}
        {{ meal.desc }}
        {{ meal.price }}
    </div>
</template>
