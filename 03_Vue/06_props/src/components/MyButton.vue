<script setup>
const age = 18
</script>
<template>
    <button>
        <!-- slot标签，会被组件的标签体所替换 -->
        <slot></slot>
    </button>
</template>
<style scoped>
/* button {
    width: 200px;
    height: 100px;
    font-size: 26px;
} */
</style>
