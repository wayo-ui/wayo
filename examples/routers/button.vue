<template>
<section class="sec sec-type">
  <p class="title">按钮类型</p>
  <ul class="list">
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
  <p class="title">图标</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="primary" icon="bus">公交</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" icon="map">地址</wayo-button>
    </li>
  </ul>
  <p class="title">镂空</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="primary" plain>主要</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" plain>信息</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success" plain>成功</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning" plain>警告</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger" plain>危险</wayo-button>
    </li>
  </ul>
  <p class="title">圆边</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="primary" round>主要</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" round>信息</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success" round>成功</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning" round>警告</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger" round>危险</wayo-button>
    </li>
  </ul>
  <p class="title">圆形（不能含文字）</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="primary" circle icon="bus"></wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" circle icon="search"></wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success" circle icon="camera"></wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning" circle icon="map"></wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger" circle icon="close"></wayo-button>
    </li>
  </ul>
  <p class="title">禁用状态</p>
  <ul class="list">
    <li class="item">
      <wayo-button size="default" disabled>默认</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="primary" disabled>主要</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" disabled>信息</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success" disabled>成功</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning" disabled>警告</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger" disabled>危险</wayo-button>
    </li>
  </ul>
  <p class="title">加载状态</p>
  <ul class="list">
    <li class="item">
      <wayo-button size="default" loading>默认</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="default" loading plain>默认</wayo-button>
    </li>
  </ul>
  <p class="title">尺寸</p>
  <ul class="list">
    <li class="item">
      <wayo-button size="default">默认</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="large">large</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="small">small</wayo-button>
    </li>
    <li class="item fit">
      <wayo-button size="fit">fit</wayo-button>
    </li>
  </ul>
  <p class="title">自定义颜色</p>
  <ul class="list">
    <li class="item">
      <wayo-button size="default" bg-color="#48c6b0" font-color="#000000" border-color="#ff0000">默认</wayo-button>
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
    display: inline-block;
    &.fit{
      display: block;
    }
  }
}
</style>