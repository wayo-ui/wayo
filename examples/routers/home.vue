<template>
<section>
  <section class="info">
    <div class="title">
      Wayo
    </div>
    <p class="subtitle">搜狗地图移动端Vue组件库</p>
  </section>
  <ul class="content">
    <li class="list list_base"
      :class="{'expand': expandedList.indexOf('base')!==-1}">
      <p class="title" @click="toggleExpand('base')">基础组件</p>
      <nav class="panel">
        <ul class="sublist">
          <li class="subitem"><router-link to="/button">Button</router-link></li>
          <li class="subitem"><router-link to="/icon">Icons</router-link></li>
          <li class="subitem"><router-link to="/segment">Segment</router-link></li>
        </ul>
      </nav>
    </li>
    <li class="list list_busi"
      :class="{'expand': expandedList.indexOf('busi')!==-1}">
      <p class="title" @click="toggleExpand('busi')">业务组件</p>
    </li>
  </ul>
</section>
</template>
<script>
export default {
  data(){
    return {
      expandedList: []
    }
  },
  methods: {
    toggleExpand(name){
      if(this.expandedList.indexOf(name)===-1){
        this.expandedList.push(name);
      }else{
        this.expandedList = this.expandedList.filter(i => i!==name);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.info{
  text-align: center;
  margin: 40px 0;
  .title{
    font-size: 30px;
    font-weight: bold;
    color: #333;
  }
  .subtitle{
    font-size: 14px;
    margin-top: 15px;
    color: #504e4e;
    letter-spacing: 1px;
  }
}
.content{
  padding: 0 20px;
}
.list{
  border: solid 1px #999;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  -webkit-box-shadow: 1px -1px 5px #999;
  box-shadow: 1px -1px 5px #999;
  &.expand{
    .panel{
      height: auto !important;
    }
  }
  .panel{
    height:0;
    overflow: hidden;
  }
  .title{
    font-size: 15px;
    height: 45px;
    line-height: 45px;
  }
  .subitem{
    font-size: 15px;
    height: 35px;
    line-height: 35px;
    border-top: solid 1px #999;
    padding: 0 10px;
    box-sizing: border-box;
    a,a:visited{
      color: #333;
      text-decoration: none;
    }
  }
}
</style>