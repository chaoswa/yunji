<template>
  <div class="secKill">
    <div class="container">
      <div class="kill-top"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "secKill",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped>
.secKill{
  display: flex;
  margin-top: .1rem;
  justify-content: center;
}
.container{
  width: 11.9rem;
  background: #fff;
}
.kill-top{
  width: 100%;
  height: .4rem;
  background-image: linear-gradient(-90deg, #EE3D51 10%, #E2384E 88%);
}
</style>
