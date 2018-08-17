<template>
  <div class="assort">
    <div class="container">

      <div class="assort-top">
        <div class="top-left">
          <good-class v-for="(list,index) in lists" :key='index'></good-class>
        </div>

        <div class="top-center">
          <m-carousel></m-carousel>
        </div>

        <div class="top-right">
          <good-tab></good-tab>

          <div class="right-notice">闲置、拍卖、求购信息发布</div>
        </div>
        
      </div>

      <div class="assort-kill">
        <div class="kill-top">
          <div class="kill-left">
            <div class="kill-time">
              <a class="kill-pd">秒杀频道</a>
              <a class="kill-hs">本场还剩</a>
              <a class="kill-tm">23</a>:<a class="kill-tm">34</a>:<a class="kill-tm">23</a>
            </div>
          </div>
          <div class="kill-right">进入特卖</div>
        </div>

        <div class="kill-list">
          <div class="kill-good">
            <kill-good v-for="(list,index) in kills" :key="index"></kill-good>
          </div>
          <div class="kill-ad"></div>
        </div>
      </div>

      <div class="assort-rank">
        <div class="kill-top">
          <div class="kill-left">
            <div class="kill-time">
              <a class="kill-rank">本周人气排行</a>
            </div>
          </div>
        </div>

        <div class="hot-list">
          <hot-good class="hot-item" v-for="(list,index) in hots" :key="index"></hot-good>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import GoodClass from '@/components/goodClass'
import GoodTab from '@/components/goodTab'
import MCarousel from '@/components/m-carousel'
import KillGood from '@/components/kill-good'
import HotGood from '@/components/hot-good'
export default {
  name: "assortment",
  data() {
    return {
      msg: "",
      lists:['','','','','','','','','',''],
      kills:["","","","",""],
      hots:["","","","","","","","","",""]
    };
  },
  components:{
    GoodClass,
    GoodTab,
    MCarousel,
    KillGood,
    HotGood
  }
};
</script>

<style>
.assort{
  display: flex;
  justify-content: center;
  margin-top: .1rem;
}
.container{
  width: 11.9rem;
}
.assort-top{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.88rem;  
}
.top-left{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  width: 2rem;
  height: 100%;
  background: #fff;
}
.top-center{
  width: 6.9rem;
  height: 100%;
  background: #fff;
}
.top-right{
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 2.8rem;
  height: 100%;
}
.right-notice{
  width: 100%;
  height: .62rem;
  font-family: 'MicrosoftYaHei';
  font-size: .16rem;
  color: #FFFFFF;
  line-height: .62rem;
  background-image: linear-gradient(-90deg, #EF4766 10%, #E2384E 87%);
}

.assort-kill{
  width: 100%;
  height: 3.26rem;
  margin-top: .1rem;
  background: #fff;
}
.kill-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: .51rem;
}
.kill-left{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 4rem;
  height: 100%;
}
.kill-time{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 3rem;
  font-size:.12rem;
  height: .2rem;
  margin-left: .1rem;
  border-left: 2px solid #D6364A;
}
.kill-pd{
  font-family: 'PingFangSC-Medium';
  font-size: .14rem;
  color: #D7374A;
  line-height: .2rem;
  padding: 0 .1rem;
  height: 100%;
}
.kill-right{
  width: 1.25rem;
  height: 100%;
  line-height: .51rem;
  font-family: 'PingFangSC-Medium';
  font-size: .12rem;
  color: #9A9A9A;
}
.kill-hs{
  font-family: 'PingFangSC-Regular';
  font-size: .12rem;
  color: #9A9A9A;
  line-height: .2rem;
  padding: 0 .1rem;
  height: 100%;
}
.kill-tm{
  background: #D5354A;
  border-radius: 2px;
  width: .2rem;
  height: 100%;
  margin: 0 .02rem;
  font-family: 'PingFangSC-Medium';
  font-size: .12rem;
  color: #FFFFFF;
  line-height: .2rem;
}
.kill-list{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2.7rem;
}
.kill-good{
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 10rem;
  height: 100%;
}
.kill-ad{
  width: 1.9rem;
  height: 100%;
  background: #E2384E;
}


.assort-rank{
  width: 100%;
  height: 7.1rem;
  margin-bottom: .8rem;
  margin-top: .1rem;
  background: #fff;
}
.kill-rank{
  font-family: 'PingFangSC-Medium';
  font-size: .14rem;
  color: #E55318;
  line-height: .2rem;
  padding: 0 .1rem;
  height: 100%;
}
.hot-list{
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 6.8rem;
}
</style>
