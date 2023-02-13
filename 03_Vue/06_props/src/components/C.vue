<script setup>
import { useAttrs } from "vue"

/* 
    在script中，可以通过useAttrs()来获取透传过来的属性
*/
const attrs = useAttrs()

console.log(attrs)
</script>

<script>
export default {
    inheritAttrs: false
}
</script>

<template>
    <h2 class="box3" style="font-size: 60px">我是组件C</h2>

    <!-- <h2 class="box3" :class="$attrs.class" style="font-size: 60px">
        我是组件C
    </h2> -->
    <!-- <h3 :class="$attrs.class" :style="$attrs.style">我也是组件C</h3> -->

    <!-- <h3 :="$attrs">我是h3</h3> -->
    <!-- 
        在模板中，可以通过$attrs来访问透传过来的属性，
            可以手动指定透传过来的属性要添加到哪些元素
    -->
    <!-- {{ $attrs }} -->
</template>
