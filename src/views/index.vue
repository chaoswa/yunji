<template>
  <div>
    <div class="m-top">
      <search></search>
      <div class="top-title">
        <router-link tag="div" class="title-goods" to="/index/assort">商品分类</router-link>
        <router-link tag="div" class="title-list" to="/index/secKill">秒杀</router-link>
        <router-link tag="div" class="title-list" to="/index/exchange">积分兑换</router-link>
        <router-link tag="div" class="title-list" to="/index/sale">拍卖</router-link>
        <router-link tag="div" class="title-list" to="/index/swap">闲置交换</router-link>
      </div>
    </div>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    
  </div>
  
</template>

<script>
import Search from '@/components/search'
export default {
  name: "index",
  data() {
    return {     
    };
  },
  components:{
    Search
  }
};
</script>

<style scoped>
.m-top{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 19.2rem;
  height: 1.22rem;
  font-size: .12rem;
  color: #333333;
  background: #fff;
}
.top-title{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 11.9rem;
  height: .3rem;
}
.title-goods{
  width: 2rem;
  height: .3rem;
  font-family: 'PingFangSC-Medium';
  font-size: .16rem;
  line-height: .3rem;
  color: #FFFFFF;
  background:url(../assets/images/mask.png);
  background-size:100% 100%;
  background-repeat:no-repeat;
}
.title-list{
  height: .21rem;
  line-height: .21rem;
  margin-left: .3rem;
  font-weight: bold;
  font-family: "MicrosoftYaHei-Bold";
  font-size: .16rem;
  color: #333333;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
