<template>
  <div class='m-header'>
    <div class="header-content">
      <div class="header-user">吴杰吴杰吴杰</div>
      <div class="header-list">
        <router-link tag="div" class="list-item" to="/index">商城首页</router-link>
        <router-link tag="div" class="list-item" to="/user">个人中心</router-link>
        <router-link tag="div" class="list-item" to="/integral">前往积分</router-link>
        <router-link tag="div" class="list-item" to="/collect">我的收藏</router-link>
        <router-link tag="div" class="list-item" to="/order">我的订单</router-link>
        <router-link tag="div" class="list-item" to="/admin">前往后台</router-link>
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

<style scoped>
.m-header{
  display: flex;
  justify-content: center;
  width: 19.2rem;
  height: .34rem;
  color: #FFFFFF;
  font-size: 12px;
  background: #3E3B3B;
}
.header-content{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 11.9rem;
  height: 100%;
}
.header-user{
  width: 1.34rem;
  text-align: left;
  overflow: hidden;
}
.header-list{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 4.46rem;
  height: 100%;
}
.list-item{
  height: 100%;
  line-height: .34rem;
}
</style>
