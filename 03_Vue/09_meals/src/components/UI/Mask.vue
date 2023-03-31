<script setup>
import { ref } from "vue"

const props = defineProps(["isShow"])
const emits = defineEmits(["hide"])
</script>
<template>
    <!-- Teleport可以将组件渲染到网页的指定位置 -->
    <Teleport to="body">
        <div
            :="$attrs"
            @click.self="$emit('hide')"
            class="mask"
            v-show="props.isShow"
        >
            <slot></slot>
        </div>
    </Teleport>
</template>

<style scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
</style>
