<template>
    <div class="login">
        <head-top head-title="帐号绑定" >
        </head-top>
        <div class="login-div">
            <div class="login-border">
                <div class="login-input">
                    <div class="fa fa-user fa-lg"></div>
                    帐号
                </div>
                <div class="login-input">
                    <input class="weui-input" placeholder="请输入APP账号" />
                </div>
            </div>
            <div class="login-border">
                <div class="login-input">
                    <div class="fa fa-lock fa-lg"></div>
                    密码
                </div>
                <div class="login-input">
                    <input class="weui-input" placeholder="请输入APP密码" type="password" />
                </div>
            </div>
            <button class="login-btn" @click="toDatepage">绑定</button>
        </div>
        <div class="login-font">输入APP帐号和密码绑定后，可接收更多的用户信息</div>
    </div>
</template>

<script>
import headTop from '../common/head.vue';

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components:{
      headTop
    },
  methods: {
    toDatepage () {
      this.$router.replace({path: '/clockin'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
    .login-div{
        background-color: #fff;
        padding-top: 0.7rem;
    }
    .login-input{
        display: inline-block;
        color: #CDCDCD;
    }
    .login-border{
        width: 100%;
        height: 2rem;
        border-bottom: 1px solid #888;
        margin-top: 0.5rem;
    }
    .login-btn{
        width: 70%;
        height: 2rem;
        margin: 2rem auto;
        border: none;
        background-color: #00CD00;
        border-radius: 4%;
        color: white;
        font-size: 1.1rem;
    }
    .login-font{
        margin-top: 0.5rem;
        color: #bbb;
        font-size: 0.9rem;
    }

</style>
