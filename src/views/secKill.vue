<template>
  <div class="secKill">
    <div class="container">

      <div class="kill-top">
        <div class="kills-time">
          <div class="secKill-time">12：00</div>
          <div class="secKill-txt">正在秒杀</div>
        </div>
        <div class="kills-timeR">
          <div class="secKill-timeR">12：00</div>
          <div class="secKill-txtR">即将开始</div>
        </div>
      </div>

      <div class="secKill-contetn">
        <secKill-list v-for="(list ,index) in lists" :key="index"></secKill-list>
      </div>
    </div>
  </div>
</template>

<script>
import secKillList from '../components/secKill-list'
export default {
  name: "secKill",
  data() {
    return {
      lists:["","","","","","","",""]
    };
  },
  components:{
    secKillList
  }
};
</script>

<style scoped>
.secKill{
  display: flex;
  margin-top: .1rem;
  margin-bottom: .5rem;
  justify-content: center;
}
.container{
  width: 11.9rem;
}
.kill-top{
  display: flex;
  justify-content: center;
  width: 100%;
  height: .4rem;
  margin-bottom: .1rem;
  background-image: linear-gradient(-90deg, #EE3D51 10%, #E2384E 88%);
}
.kills-time{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 100%;
}
.kills-timeR{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 100%;
}
.secKill-time{
  width: 100%;
  height: .24rem;
  font-family: 'MicrosoftYaHei-Bold';
  font-weight: bold;
  font-size: .18rem;
  color: #FFFFFF;
  line-height: .24rem;
}
.secKill-txt{
  width: 100%;
  height: .16rem;
  font-size: .12rem;
  line-height: .16rem;
  color: #FFFFFF;
}
.secKill-timeR{
  width: 100%;
  height: .24rem;
  font-family: 'MicrosoftYaHei-Bold';
  font-weight: bold;
  font-size: .18rem;
  color: #FF9292;
  line-height: .24rem;
}
.secKill-txtR{
  width: 100%;
  height: .16rem;
  font-size: .12rem;
  line-height: .16rem;
  color: #FF9292;
}
.secKill-contetn{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
</style>
