<script setup>
import TabItem from "./TabItem.vue"
// 定义参数
const props = defineProps(["items", "maxHot"])
</script>
<template>
    <div class="tab-list">
        <TabItem
            v-for="player in props.items"
            :item="player"
            :max-hot="props.maxHot"
        ></TabItem>
    </div>
</template>
<style scoped>
.tab-list {
    margin: 20px;
}
</style>
