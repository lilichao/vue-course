<script>
    export default {
        data(){
            return {
                count:0
            }
        }
    }
</script>

<template>

    <button @click="count++">{{count}}</button>

</template>