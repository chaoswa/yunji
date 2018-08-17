<template>
  <div class="details-info">
    <div class="info-left">
      <div class="info-bigImg">
        <img src="../assets/images/goods.jpg">
      </div>
      <div class="info-bigMin">
        <div class="info-img_list" :class="{isActiveImg:imgIndex==index}" v-for="(list , index) in lists" :key="index" @click="select_img(index)">
          <img src="../assets/images/goods.jpg">
        </div>
      </div>
    </div>
    <div class="info-right">
      <div class="info-right-top">女王梦铝镁合金拉杆箱男金属行李箱女密码箱复古旅行箱20寸登机箱妆水 限量版 200毫升 【拍套餐享优惠】Dr. Ci:Labo 城野医生 卓...</div>
      <div class="info-prize">
        <div class="info-prize-middle">
          <div class="info-middle-name">价格</div>
          <div class="info-middle-prize"> <a>￥</a>519.00</div>
        </div>
        <div class="info-prize-title">
          <div class="info-middle-name">积分</div>
          <div class="info-middle-title">120积分</div>
        </div>
      </div>

      <select-class :title="titleList[0]" :lists="levelList"></select-class>
      <select-class :title="titleList[1]" :lists="colorList"></select-class>

      <div class="info-num">
        <div class="info-num-left">
          <div class="info-num-count">
            <div class="info-count-name">数量</div>
            
          </div>
        </div>
        <div class="info-num-right">
          <div class="info-num-buy"></div>
          <div class="info-num-cart"></div>
          <div class="info-num-save"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectClass from './select-class'
export default {
  data() {
    return {
      imgIndex:-1,
      lists:["",'','','',""],
      titleList:['残次等级','颜色'],
      levelList:['新品','一级残','二级残'],
      colorList:['黑色','一级残','二级残']
    };
  },
  components:{
    SelectClass
  },
  methods:{
    select_img(index){
      this.imgIndex=index
    }
  }
};
</script>

<style lang="less">
.details-info{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 11.9rem;
  height: 100%;
}
.info-left{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 4.9rem;
  height: 4rem;
  margin-top: 0.1rem;
}
.info-bigImg{
  width: 4rem;
  height: 100%;
  border: 2px solid #eee;
}
.info-bigImg img{
  width: 100%;
  height: 100%;
}
.info-bigMin{
  width: .74rem;
  height: 100%;
  overflow: hidden;
}
.info-img_list{
  display: flex;
  justify-content: center;
  align-items: center;
  width: .7rem;
  height: .7rem;
  margin-bottom: .09rem;
  border: 1px solid #eee;
}
.info-img_list img{
  width: 100%;
  height: 100%;
}
.isActiveImg{
  border: 1px solid #333;
}


.info-right{

  width: 6.63rem;
  height: 4.1rem;
  margin-top: 0.1rem;
}
.info-right-top{
  width: 100%;
  height: .52rem;
  font-size: .2rem;
  text-align: left;
  color: #333333;
  line-height: .25rem;
  font-weight: bold;
  overflow: hidden;
}
.info-prize{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 1.05rem;
  background: #F8F8F8;
  margin-top: .2rem;
}
.info-prize-middle{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 2.1rem;
  height: .5rem;
}
.info-prize-title{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 2.1rem;
  height: .3rem;
}
.info-middle-name{
  width: .5rem;
  height: .2rem;
  line-height: .2rem;
  font-size: .12rem;
  margin-right: .3rem;
  color: #333333;
}
.info-middle-prize{
  width: 1.1rem;
  height: .44rem;
  font-size: .3rem;
  color: #D5354A;
  font-weight: bold;
}
.info-middle-prize a{
  font-size: .14rem;
  color: #D5354A;
}
.info-middle-title{
  font-size: .14rem;
  color: #333333;
  font-weight: bold;
}
.info-num{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 5.2rem;
  height: 1.2rem;
  margin-top: .24rem;
}
.info-num-left{
  width:100%;
  height: .6rem;
}
.info-num-right{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: .5rem;
}
.info-num-buy{
  background: #FFF8F9;
  border: 1px solid #D5354A;
  width: 1.6rem;
  height: .5rem;
}
.info-num-cart{
  background-image: linear-gradient(-127deg, #EF4766 0%, #E2384E 94%);
  width: 1.6rem;
  height: .5rem;
}
.info-num-save{
  width: 1.6rem;
  height: .5rem;
  border: 1px solid #DDDDDD;
}
.info-num-count{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 3.3rem;
  height: .36rem;
  font-size: .12rem;
  color: #333333;
}
.info-count-name{
  width: .58rem;
  height: .2rem;
  font-size: .12rem;
  line-height: .2rem;
  margin-right: .2rem;
  text-align: left;
}
</style>
