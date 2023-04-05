<script setup>
const props = defineProps(["isShow"])
const emits = defineEmits(["close"])
</script>

<template>
    <div v-show="props.isShow" class="checkout">
        <div class="close">
            <i @click="$emit('close')" class="ri-close-fill"></i>
        </div>
    </div>
</template>

<style>
.checkout {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(240, 240, 240);
    z-index: 99999;
}

.close {
    height: 60rem;
    line-height: 60rem;
    padding-left: 20rem;
    font-size: 36rem;
    font-weight: bold;
}
</style>
