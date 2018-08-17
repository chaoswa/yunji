<template>
  <div class="detail-good">
    <div class="details-top">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/index">首页</el-breadcrumb-item>
        <el-breadcrumb-item>美妆</el-breadcrumb-item>
        <el-breadcrumb-item>dyson 戴森 V8 HEPA滤网5吸头 animal V8宠物版 海外版</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <div class="details-content">
      <detail-info></detail-info>
    </div>
  </div>
</template>

<script>
import DetailInfo from '../components/detail-info'
export default {
  name: "detailGood",
  data() {
    return {
    };
  },
  components:{
    DetailInfo
  }
};
</script>

<style>
.detail-good{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
}
.details-top{
  width: 11.9rem;
  margin: .1rem 0;
}
.details-content{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4.7rem;
  background: #fff;
}
.el-breadcrumb__inner{
  font-size: .14rem !important;
  color: #333333;
}
</style>
