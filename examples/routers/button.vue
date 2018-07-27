<template>
<section class="sec sec-type">
  <p class="title">按钮类型</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="default">默认按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="primary">主要按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info">信息按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success">成功按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning">警告按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger">危险按钮</wayo-button>
    </li>
  </ul>
  <p class="title">图标</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="primary" icon="bus">路线</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" icon="map">地址</wayo-button>
    </li>
  </ul>
  <p class="title">描边模式(默认类型此模式无效)</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="primary" outline>主要按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" outline>信息按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success" outline>成功按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning" outline>警告按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger" outline>危险按钮</wayo-button>
    </li>
  </ul>
  <p class="title">圆角</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="default" round>默认按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="primary" round>主要按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" round>信息按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success" round>成功按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning" round>警告按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger" round>危险按钮</wayo-button>
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
  <p class="subtitle">默认类型（无语义）</p>
  <ul class="list">
    <li class="item">
      <wayo-button disabled>默认按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button outline disabled>默认+描边</wayo-button>
    </li>
  </ul>
  <p class="subtitle">语义类型</p>
  <ul class="list">
    <li class="item">
      <wayo-button type="primary" disabled>主要按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="info" disabled>信息按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="success" disabled>成功按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="warning" disabled>警告按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button type="danger" disabled>危险按钮</wayo-button>
    </li>
  </ul>
  <p class="title">加载状态</p>
  <ul class="list">
    <li class="item">
      <wayo-button size="default" loading>加载中</wayo-button>
    </li>
    <br>
    <li class="item">
      <wayo-button size="default" type="primary" loading>加载中</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="default" type="primary" loading outline>加载中</wayo-button>
    </li>
    <br>
    <li class="item">
      <wayo-button size="default" type="info" loading>加载中</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="default" type="info" loading outline>加载中</wayo-button>
    </li>
    <br>
    <li class="item">
      <wayo-button size="default" type="success" loading>加载中</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="default" type="success" loading outline>加载中</wayo-button>
    </li>
    <br>
    <li class="item">
      <wayo-button size="default" type="warning" loading>加载中</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="default" type="warning" loading outline>加载中</wayo-button>
    </li>
    <br>
    <li class="item">
      <wayo-button size="default" type="danger" loading>加载中</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="default" type="danger" loading outline>加载中</wayo-button>
    </li>
  </ul>
  <p class="title">尺寸</p>
  <ul class="list">
    <li class="item">
      <wayo-button>默认按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="medium">Medium按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="large">Large按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="small">Small按钮</wayo-button>
    </li>
    <li class="item">
      <wayo-button size="mini">Mini按钮</wayo-button>
    </li>
    <li class="item fit">
      <wayo-button size="fit">Fit按钮</wayo-button>
    </li>
  </ul>
  <p class="title">自定义颜色尺寸</p>
  <wayo-button size="default" bg-color="#ffffff" font-color="#ed5026" border-color="#cccccc" :width="70" :height="40" :font-size="14">默认</wayo-button>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.sec{
  .title{
    font-size: 14px;
    margin-bottom: 10px;
  }
  .subtitle{
    color: #5f5f5f;
    padding-left: 5px;
    font-size: 13px;
    margin-top: -5px;
    margin-bottom: 10px;
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