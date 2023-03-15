<script setup>
import { ref, inject } from "vue"
import { countStore } from "../store/count"

// const { count, increment } = inject("count")
</script>
<template>
    <h4>
        ComponentC --
        {{ countStore.count }} --
        <button @click="countStore.increment">按钮</button>
    </h4>
</template>
