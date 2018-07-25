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
          <li class="subitem"><router-link to="/button">Button-按钮</router-link></li>
          <li class="subitem"><router-link to="/icon">Icons-矢量图标</router-link></li>
          <li class="subitem"><router-link to="/stripe">stripe-条纹按钮</router-link></li>
          <li class="subitem"><router-link to="/image">Image-图片</router-link></li>
          <li class="subitem"><router-link to="/tag">Tag-标签</router-link></li>
          <li class="subitem"><router-link to="/rate">Rate-评分</router-link></li>
          <li class="subitem"><router-link to="/flex">Flex-弹性容器</router-link></li>
          <li class="subitem"><router-link to="/separator">Separator-1像素直线</router-link></li>
          <li class="subitem"><router-link to="/card">Card-卡片</router-link></li>
          <li class="subitem"><router-link to="/tabs">Tabs-标签页</router-link></li>
          <li class="subitem"><router-link to="/lath">Lath-满宽横条</router-link></li>
          <li class="subitem"><router-link to="/toast">Toast-短提示</router-link></li>
          <li class="subitem"><router-link to="/slides">Slides-幻灯片</router-link></li>
        </ul>
      </nav>
    </li>
    <li class="list list_busi"
      :class="{'expand': expandedList.indexOf('busi')!==-1}">
      <p class="title" @click="toggleExpand('busi')">业务组件</p>
      <nav class="panel">
        <ul class="sublist">
          <li class="subitem"><router-link to="/showcase">Showcase-橱窗</router-link></li>
          <li class="subitem"><router-link to="/imageviewer">Imageviewer-图片浏览</router-link></li>
        </ul>
      </nav>
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