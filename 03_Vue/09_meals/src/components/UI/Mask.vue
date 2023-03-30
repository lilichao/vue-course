<script setup>
import { ref } from "vue"

const props = defineProps(["isShow"])
const emits = defineEmits(["hide"])
</script>
<template>
    <div @click.self="$emit('hide')" class="mask" v-show="props.isShow">
        <slot></slot>
    </div>
</template>

<style scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
}
</style>
