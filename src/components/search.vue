<template>
  <div class="m-search">
    <div class="top-left">云集</div>
    <div class="top-center">
      <div class="center-up">
        <input type="text" class="search-input">
        <button class="search-button"></button>
      </div>
      <div class="center-down">
        <a class="down-txt">面膜</a>
        <a class="down-txt">牛奶</a>
        <a class="down-txt">麦片</a>
      </div>
    </div>
    
    <div class="top-right">我的购物车</div>
    <div class="top-right">我的购物车</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
.m-search{
  width:19.2rem;
  height: .36rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: .2rem;
}
.top-left{
  width: 3.6rem;
  height: .35rem;
  line-height: .35rem;
}
.top-center{
  display: flex;
  flex-flow: column;
  width: 6rem;
  height: .6rem;
}
.center-up{
  display: flex;
  width: 100%;
  height: .36rem;
}
.center-down{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: .16rem;
  line-height: .16rem;
  margin-top: .05rem;
}
.down-txt{
  display: inline-block;
  width: .49rem;
  height: .16rem;
  line-height: .16rem;
  font-family: "MicrosoftYaHei";
  color: #666666;
}
.search-input{
  width:5.38rem;
  height:.32rem;
  outline: none;
  border: 2px solid #EF4766; 
}
.search-button{
  width: .58rem;
  height: .34rem;
  border: none;
  background: #EF4766;
}

.top-right{
  width: 1.85rem;
  height: .36rem;
  line-height: .36rem;
  margin-left: .5rem;
  border: 1px solid #DDDDDD;
}
</style>
