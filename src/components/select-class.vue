<template>
  <div class="select-good">
    <div class="select-name">{{title}}</div>
    <div class="select-list" :class='{select_active:childrenIndex == index}' v-for="(list,index) in lists" :key="index" @click="select(index)" >{{list}}</div>
  </div>
</template>

<script>
export default {
  props:{
    title:String,
    lists:Array
  },
  data() {
    return {
      childrenIndex:-1
    };
  },
  methods:{
    select(index){
      this.childrenIndex=index
    }
  }
};
</script>

<style lang="less">
.select-good{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 3.3rem;
  height: .36rem;
  margin-top: .2rem;
  font-size: .12rem;
  color: #333333;
}
.select-name{
  width: .58rem;
  height: .2rem;
  line-height: .2rem;
  margin-right: .2rem;
  text-align: left;
}
.select-list{
  width: .56rem;
  height: .3rem;
  line-height: .3rem;
  margin-right: .1rem;
  border: 1px solid #CFCFCF;
}
.select_active{
  border: 1px solid #D5354A;
}
</style>
