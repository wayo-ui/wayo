<template>
<section class="sec sec-type">
  <p class="title">按钮类型</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="default">默认</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="primary">主要</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info">信息</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success">成功</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning">警告</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger">危险</wayo-button>
    </li>
  </ul>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.sec{
  padding: 0 15px;
  .title{
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    border-bottom: solid 1px #999;
    margin-bottom: 10px;
  }
  .list{
    padding: 0 5px;
  }
  .item{
    margin-bottom: 10px;
  }
}
</style>