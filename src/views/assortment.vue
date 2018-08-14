<template>
  <div class="assort">
    <div class="container">

      <div class="assort-top">
        <div class="top-left"></div>
        <div class="top-center"></div>
        <div class="top-right"></div>
      </div>

      <div class="assort-kill"></div>

      <div class="assort-rank"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "assortment",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped>
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
  height: 3.38rem;  
}
.top-left{
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
  width: 2.8rem;
  height: 100%;
  background: #fff;
}

.assort-kill{
  width: 100%;
  height: 3.26rem;
  margin-top: .1rem;
  background: #fff;
}
.assort-rank{
  width: 100%;
  height: 6.58rem;
  margin-bottom: .8rem;
  margin-top: .1rem;
  background: #fff;
}
</style>
