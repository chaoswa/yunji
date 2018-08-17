<template>
  <div class="good-list">
    <img src="../assets/images/img_01.jpg" class="list-img">
    <div class="list-name">NuFACE Trinity 电波拉皮紧肤</div>
    <div class="list-bottom">
      <div class="list-prize">￥1299</div>
      <div class="list-prize">立即抢购</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="less">
.good-list{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2.7rem;
}
.list-img{
  width: 100%;
  height: 2rem;
}
.list-name{
  width: 100%;
  height: .35rem;
  line-height: .35rem;
  font-family: 'PingFangSC-Medium';
  font-size: .12rem;
  color: #333333;
}
.list-bottom{
  display: flex;
  justify-content: space-around;
  width: 1.8rem;
  height: .28rem;
  background: linear-gradient(-127deg, #EF4766 0%, #E2384E 94%);
}
.list-prize{
  width: .8rem;
  height: 100%;
  font-size: .14rem;
  color: #FFFFFF;
  line-height: .28rem;
}
</style>
