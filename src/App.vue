<template>
  <div id="app">
    <transition name="anim"  mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
    body,div,dl,dt,dd,del,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td,menu {
        margin:0;
        padding:0;
    }
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 50px;
}
body{
    background-color: #F3F3F3;
}


.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
.anim-enter-active, .anim-leave-active {
  transition: opacity .5s ease;
}
.anim-enter, .anim-leave-active {
  opacity: 0;
}
</style>
