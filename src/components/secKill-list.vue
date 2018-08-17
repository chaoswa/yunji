<template>
  <div class="secKill-list">
    <img src="../assets/images/foot.jpg" class="secList-img" @click="go_details">
    <div class="secList-name">waterpik/洁碧美国WP-86</div>
    <div class="secList-bottom">
      <div class="secList-bottom-left">
        <div class="secList-left-money">￥129.00</div>
        <div class="secList-left-percent">
          <span class="secList-left-span">已售23%</span>
          <el-progress :percentage="30" color="#EE788D" ></el-progress>
        </div>
      </div>
      <div class="secList-bottom-right">立即抢购</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    go_details(){
      this.$router.push('/index/detailGood')
    }
  }
};
</script>

<style>
.secKill-list{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 2.3rem;
  height: 3.06rem;
  margin:0.04rem;
  background: #fff;
}
.secList-img{
  width: 100%;
  height: 2.3rem;
}
.secList-name{
  width: 2.2rem;
  height: .3rem;
  font-family: 'PingFangSC-Regular';
  text-align: left;
  overflow: hidden;
  font-size: .14rem;
  line-height: .3rem;
  color: #333333;
}
.secList-bottom{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: .43rem;
  border: 1px solid #EF4766;
}
.secList-bottom-left{
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 1.45rem;
  height: 100%;
}
.secList-bottom-right{
  width: .9rem;
  height: 100%;
  font-family: 'PingFangSC-Regular';
  line-height: .43rem;
  font-size: .14rem;
  color: #FFFFFF;
  background-image: linear-gradient(-127deg, #EF4766 0%, #E2384E 94%);
}
.secList-left-money{
  width: 100%;
  height: .22rem;
  font-family: 'HelveticaNeue-Medium';
  font-size: .16rem;
  line-height: .22rem;
  text-align: left;
  color: #D5354A;
}
.secList-left-percent{
  display: flex;
  width: 100%;
  height: .18rem;
  font-size: .12rem;
  color: #666666;
  line-height: .18rem;
  text-align: left;
}
.secList-left-span{
  padding-left: .05rem;
  font-size: .12rem;
  width: 40%;
  overflow: hidden;
}
.el-progress{
  display: flex;
  align-items: center;
  width: 40%;
}
.el-progress__text{
  display: none;
}

.el-progress-bar__outer{
  width: .6rem;
  background: #E4E4E4;
  height: .08rem !important;
}
</style>
