<script>
    import MyButton from './components/MyButton.vue';

    /* 编写组件的代码 */
    export default{
        data(){
            return {
                msg:"我超级爱Vue！"
            }
        },

        components:{
            MyButton
        }
    }
</script>

<template>
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
</template>