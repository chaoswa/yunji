<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/components/m-header'
export default {
  components:{
    MHeader
  }
};
</script>

<style lang="less">
body,html{
  width: 100%;
  height: 100%;
  background: #eee;
}
#app {
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
