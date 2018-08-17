<template>
  <div class="m-search">
    <div class="top-left">云集</div>
    <div class="top-center">
      <div class="center-up">
        <div class="center-search">
          <img src="../assets/images/search.svg" class="search-icon-left">
          <input type="text" class="search-input" placeholder="雅思兰戴">
        </div>
        
        <div class="search-button">
          <img src="../assets/images/search_2.svg" class="search-icon">
        </div>
 
      </div>
      <div class="center-down">
        <a class="down-txt">面膜</a>
        <a class="down-txt">牛奶</a>
        <a class="down-txt">麦片</a>
      </div>
    </div>
    
    <div class="top-right"><img src="../assets/images/shop.svg" class="right-shop"> <a class="right-cart">我的购物车</a> </div>
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
  width:11.9rem;
  height: .36rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: .2rem;
}
.top-left{
  width: 2rem;
  height: .35rem;
  margin-right: .5rem;
  line-height: .35rem;
}
.top-center{
  display: flex;
  flex-flow: column;
  width: 6rem;
  height: .6rem;
}
.center-up{
  position: relative;
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
.center-search{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:5.38rem;
  height:.32rem;
  outline: none;
  border: 2px solid #EF4766; 
}
.search-input{
  width:5rem;
  height:.30rem;
  outline: none;
}
.search-button{
  position: relative;
  width: .58rem;
  height: .34rem;
  background: #EF4766;
}
.search-icon{
  position: absolute;
  top:0.08rem;
  left: .2rem;
  width: .18rem;
  height: .18rem;
}
.search-icon-left{
  width: .18rem;
  height: .18rem;
}

.top-right{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 1.85rem;
  height: .36rem;
  line-height: .36rem;
  margin-left: .5rem;
  border: 1px solid #DDDDDD;
}
.right-shop{
  width: .2rem;
  height:.2rem;
}
.right-cart{
  width:.9rem;
}
</style>
