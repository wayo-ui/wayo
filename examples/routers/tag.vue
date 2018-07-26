<template>
<section style="background-color: #fff;padding: 20px;">
  <h4>类型</h4>
  <wayo-tag>default</wayo-tag>
  <wayo-tag type="primary">primary</wayo-tag>
  <wayo-tag type="info">info</wayo-tag>
  <wayo-tag type="success">success</wayo-tag>
  <wayo-tag type="warning">warning</wayo-tag>
  <wayo-tag type="danger">danger</wayo-tag>
  <h4>尺寸</h4>
  <wayo-tag size="mini">mini</wayo-tag>
  <wayo-tag size="small">small</wayo-tag>
  <wayo-tag>default</wayo-tag>
  <wayo-tag size="large">large</wayo-tag>
  <h4>圆角</h4>
  <wayo-tag round>圆角</wayo-tag>
  <h4>镂空</h4>
  <wayo-tag plain>default</wayo-tag>
  <wayo-tag type="primary" plain>primary</wayo-tag>
  <wayo-tag type="info" plain>info</wayo-tag>
  <wayo-tag type="success" plain>success</wayo-tag>
  <wayo-tag type="warning" plain>warning</wayo-tag>
  <wayo-tag type="danger" plain>danger</wayo-tag>
  <h4>自定义颜色</h4>
  <wayo-tag size="large" text-color="#d82c2c">字体颜色</wayo-tag>
  <wayo-tag size="large" bg-color="#000000" text-color="#d82c2c">背景色</wayo-tag>
  <h4>自定义尺寸</h4>
  <wayo-tag :width="70" :height="30">default</wayo-tag>
  <wayo-tag :width="70" :height="30" round>default</wayo-tag>
  <wayo-tag :width="70" :height="30" plain>default</wayo-tag>
</section>
</template>
<script>
export default {
  
};
</script>
<style lang="scss">

</style>