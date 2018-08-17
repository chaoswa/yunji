<template>
  <div class="block">
    <el-carousel height="3.88rem">
      <el-carousel-item v-for="(item,index) in lists" :key="index">
        <img :src="item" class="carousel-img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists:[require("../assets/images/img_01.jpg"),require("../assets/images/img_02.jpg"),require("../assets/images/img_03.jpg")]
    };
  }
};
</script>

<style>
  .carousel-img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__indicators{
    width: .7rem;
    bottom: 0.2rem;
    height: 0.14rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 0.07rem;
  }
  .el-carousel__indicator{
    position: relative;
    width: 0.08rem;
    height: 0.08rem;
    border-radius: 50%;
    padding: 0;
    margin: 0.02rem;
    background: #fff;
  }
  .el-carousel__button{
    width: 0.08rem;
    height: 0.08rem;
    border-radius: 50%;
    background: transparent;
  }
  .el-carousel__indicator.is-active{
    background: #E00031; 
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>