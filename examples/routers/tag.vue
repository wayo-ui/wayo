<template>
<section  class="sec" style="background-color: #fff;">
  <p class="title">类型</p>
  <wayo-tag>default</wayo-tag>
  <wayo-tag type="primary">primary</wayo-tag>
  <wayo-tag type="info">info</wayo-tag>
  <wayo-tag type="success">success</wayo-tag>
  <wayo-tag type="warning">warning</wayo-tag>
  <wayo-tag type="danger">danger</wayo-tag>
  <p class="title">尺寸</p>
  <wayo-tag size="mini">mini</wayo-tag>
  <wayo-tag size="small">small</wayo-tag>
  <wayo-tag>default</wayo-tag>
  <wayo-tag size="large">large</wayo-tag>
  <p class="title">圆角</p>
  <wayo-tag round>圆角</wayo-tag>
  <p class="title">描边</p>
  <wayo-tag outline>default</wayo-tag>
  <wayo-tag type="primary" outline>primary</wayo-tag>
  <wayo-tag type="info" outline>info</wayo-tag>
  <wayo-tag type="success" outline>success</wayo-tag>
  <wayo-tag type="warning" outline>warning</wayo-tag>
  <wayo-tag type="danger" outline>danger</wayo-tag>
  <p class="title">自定义颜色</p>
  <wayo-tag size="large" text-color="#d82c2c">字体颜色</wayo-tag>
  <wayo-tag size="large" bg-color="#000000" text-color="#d82c2c">背景色</wayo-tag>
  <p class="title">自定义尺寸</p>
  <wayo-tag :width="70" :height="30">default</wayo-tag>
  <wayo-tag :width="70" :height="30" round>default</wayo-tag>
  <wayo-tag :width="70" :height="30" outline>default</wayo-tag>
</section>
</template>
<script>
export default {
  
};
</script>
<style lang="scss">

</style>