<template>
  <div class="tab">
    <div class="tab-bar">
      <div class="bar-title" :class="{active:is_active}" @click="active">商城公告</div>
      <div class="bar-title" :class="{active:!is_active}" @click="active">求购信息</div>
    </div>
    
   
    <div class="tab-content" v-show="is_active">
      <ul class="content-ul">
        <li v-for="(list,index) in lists" :key="index" class="content-list">拼多多：成也萧何败萧何，转型转型转</li>
      </ul>
    </div>

    <div class="tab-content" v-show="!is_active">
      <ul class="content-ul">
        <li v-for="(list,index) in lists" :key="index" class="content-list">系统集成项目管理工程师考试</li>
      </ul>
    </div>

    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        is_active:true,
        lists:['','','','','','','','']
      };
    },
    methods: {
      active(){
        this.is_active=!this.is_active
      }
    }
  };
</script>

<style>
.tab{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 3.16rem;
  background: #fff;
}
.tab-bar{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: .5rem;
}
.bar-title{
  width: .7rem;
  height: .3rem;
  font-family: 'MicrosoftYaHei';
  font-size: .16rem;
  color: #333333;
  text-align: center;
  line-height: .3rem;
}
.tab-content{
  width: 100%;
  height: 2.6rem;
  font-family: 'PingFangSC-Regular';
  font-size: .14rem;
  color: #333333;
}
.content-ul{
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
}
.content-list{
  width: 2.4rem;
  height: .32rem;
  line-height: .32rem;
  text-align: left;
  overflow: hidden;
}
.active{
  color: #D5354A;
  border-bottom: 2px solid #D5354A;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
