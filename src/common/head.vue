<template>
    <header id='head_top'>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">< 返回
        </section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="edit"></slot>
    </header>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        mounted(){
            //获取用户信息
            //this.getUserInfo();

        },
        props: ['headTitle', 'goBack'],
        methods: {

        },

    }

</script>

<style scoped>
    #head_top {
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: #000;
        color: #fff;
    }
    .head_goback{
        left: 0.4rem;
        width: 3.6rem;
        height: 0.8rem;
        line-height: 3.2rem;
        margin-left: .4rem;
    }
    .title_head{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        color: #fff;
        text-align: center;
    }
    .title_head.title_text{
        font-size: 0.8rem;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
</style>
