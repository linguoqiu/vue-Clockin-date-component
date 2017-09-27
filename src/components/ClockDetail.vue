<template>
    <div class="clockDetail">
        <head-top head-title="我的考勤" goBack="true"></head-top>
        <pick-date></pick-date>
        <div class="mark-div">
            <div class="kaoqin-div">
                <div class="kaoqin-title">
                    <i class="fa fa-calendar"></i>
                    <span>考勤统计</span>
                </div>
                <div class="retract">收起 ^</div>
            </div>
            <div class="kaoqin-state"><span class="clock-state clock-normal"> </span><span>正常: 18天</span></div>
            <div class="kaoqin-state"><span class="clock-state clock-late"></span>迟到: 1次</div>
            <div class="kaoqin-state"><span class="clock-state clock-zao"></span>早退: 1次</div>
        </div>
    </div>
</template>

<script>
import headTop from '../common/head.vue';
import pickDate from '../common/Date.vue';

export default {
  name: 'clockin',
  data () {
    return {
    }
  },
    components:{
      headTop,pickDate
    },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mark-div{
        margin-top: 1rem;
        background-color: white;
    }
    .kaoqin-div{
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #cdcdcd;
        font-size: .9rem;
    }
    .kaoqin-title{
        width: 87%;
        text-align: left;
    }
    .retract{
        color: #cdcdcd;
    }
    .kaoqin-state{
        text-align: left;
        margin-top: .5rem;
        font-size: .9rem;
    }
    .mark-div:last-child{
        padding-bottom: .5rem;
    }
    .clock-state{
        margin: 0.4rem 0.37rem 0 .47rem;
        float: left;
        width: 0.375rem;
        height: .375rem;
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
    }
    .clock-normal{
        background-color: #85CF56;
    }
    .clock-late{
        background-color: #FF9900;
    }
    .clock-zao{
        background-color: #FF0304;
    }
</style>
