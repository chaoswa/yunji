<template>
  <div class="goods-list">
    <ul class="list-item">
      <li v-for="(item , index) in lists" :key="index">{{item}}<span v-if="index<2" class="item-icon"> / </span></li>
    </ul>
    <div class="list-icon">
      <img src="../assets/images/right.svg">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists:["童装玩具","孕产","用品"]
    };
  }
};
</script>

<style lang="less">
.goods-list{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 2rem;
  height: .34rem;
}
.list-item{
  font-family: 'PingFangSC-Regular';
  font-size: .14rem;
  color: #666666;
  width: 1.5rem;
  display:flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}
.list-item li{
  height: 100%;
  line-height: .34rem;
}
.item-icon{
  display: inline-block;
  width: .15rem;
  height: .15rem;
}
.list-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  width: .20rem;
  height: 100%;
  img{
    width: .12rem;
    height: .12rem;
  }
}
</style>
