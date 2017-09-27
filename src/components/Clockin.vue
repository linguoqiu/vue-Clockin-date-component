<template>
    <div class="clockin">
        <head-top head-title="今日考勤">
            <Button slot="edit" class="nav-btn" @click="toDatailpage"><i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
            </Button>
        </head-top>
        <div class="work-time-div">
            <div class="date-div">{{today}}</div>
            <div>你已经工作 {{workTime}} 小时</div>
        </div>
        <div class="work-title gray-color">弹性工作</div>
        <div class="clockin-div">
            <div class="work-time-div border-bottom">
                <div class="clock-title">
                    <div>签到</div>
                    <div class="gray-color">{{clockinTime}}</div>
                </div>
                <div><button class="clockin-btn">签到</button></div>
            </div>
            <div class="work-time-div">
                <div class="clock-title">
                    <div>签退</div>
                    <div class="gray-color">{{clockoutTime}}</div>
                </div>
                <div><button class="clockout-btn">签退</button></div>
            </div>
        </div>
        <div class="bottom-font-div border-bottom">当日已签到: {{clockinTime}}</div>
        <div class="bottom-font-div">签到/签退成功后，列表才会有当日签到信息</div>
    </div>
</template>

<script>
import headTop from '../common/head.vue';

export default {
  name: 'clockin',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        today:"2017-6-17 星期五",
        workTime:0,
        clockinTime:'9:00',
        clockoutTime:'18:00'
    }
  },
    components:{
      headTop
    },
  methods: {
    toDatailpage () {
      this.$router.push({path: '/clockDetail'});
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
    .nav-btn{
        position: absolute;
        right: 0;
        top: 50%;
        border: none;
        background-color: black;
        color: white;
        transform: translate(-50%, -50%);
    }

    .work-time-div{
        display: flex;
        padding: 0.8rem 0;
        background-color: white;
        align-items: center;
    }

    .date-div{
        width: 65%;
        text-align: left;
    }
    .work-title{
        text-align: right;
        margin: 0.5rem;
    }
    .clock-title{
        width: 84%;
        text-align: left;
        margin-left: 0.5rem;
    }
    .border-bottom{
        border-bottom: 1px solid #cdcdcd;
    }
    .gray-color{
        color: #cdcdcd;
    }
    .clockin-btn{
        background-color: #00CD00;
        border-radius: 7%;
        color: white;
        height: 1.8rem;
        border: none;
    }
    .clockout-btn{
        border-radius: 7%;
        height: 1.8rem;
        background-color: white;
        border: 1px solid #666;;
    }
    .bottom-font-div{
        text-align: left;
        margin: 0.5rem;
        color: #cdcdcd;
        padding-bottom: 0.3rem;
    }
</style>
