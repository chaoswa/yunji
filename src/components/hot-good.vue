<template>
  <div class="hot-good-list">
    <div class="good-hot">
      <img src="../assets/images/img_02.jpg" class="hot-img">
      <div class="hot-name">北欧实木简约现代餐桌椅餐厅小户型原木4人桌组合长方形饭桌1.2米</div>
      <div class="hot-bottom">
        <div class="hot-prize">￥1299</div>
        <div class="hot-bay"><img class="hot-icon" src="../assets/images/hot.svg">300</div>
      </div>
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
.hot-good-list{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 3.3rem;
  border: 1px solid #eee;
}
.good-hot{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 1.98rem;
  height: 2.9rem;
}
.hot-img{
  width: 100%;
  height: 1.98rem;
}
.hot-name{
  width: 100%;
  height: .4rem;
  margin-top: .1rem;
  text-align: left;
  overflow: hidden;
  line-height: .2rem;
  font-family: 'PingFangSC-Medium';
  font-size: .12rem;
  color: #333333;
}
.hot-bottom{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: .28rem;
}
.hot-prize{
  width: .8rem;
  height: 100%;
  font-size: .16rem;
  color: #D5354A;
  line-height: .28rem;
  text-align: left;
}
.hot-bay{
  width: .8rem;
  height: 100%;
  font-size: .12rem;
  color: #9A9A9A;
  line-height: .28rem;
  text-align: right;
}
.hot-icon{
  width: .15rem;
  height: .17rem;
}
</style>
