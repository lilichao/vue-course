<script setup>
import { ref } from "vue"
import ComponentC from "./ComponentC.vue"

const isShow = ref(true)
</script>
<template>
    <h3>ComponentB</h3>
    <ul>
        <li v-if="isShow"><ComponentC></ComponentC></li>
    </ul>
</template>
