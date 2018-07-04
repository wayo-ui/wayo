<template>
<section>
  <h4>类型</h4>
  <wayo-tag>默认</wayo-tag>
  <wayo-tag type="text">文字</wayo-tag>
  <h4>尺寸</h4>
  <wayo-tag>默认</wayo-tag>
  <wayo-tag size="large">大</wayo-tag>
  <wayo-tag size="small">小</wayo-tag>
  <h4>圆角</h4>
  <wayo-tag round>默认</wayo-tag>
  <wayo-tag size="large" round>大</wayo-tag>
  <wayo-tag size="small" round>小</wayo-tag>
  <h4>满宽</h4>
  <div style="margin-top:10px;">
    <wayo-tag fit>满宽</wayo-tag>
  </div>
  <div style="margin-top:10px;">
    <wayo-tag fit round>满宽</wayo-tag>
  </div>
  <h4>自定义</h4>
  <wayo-tag size="large" text-color="red">字体颜色</wayo-tag>
  <wayo-tag size="large" bg-color="#000000" text-color="red">背景色</wayo-tag>
</section>
</template>
<script>
export default {
  
};
</script>
<style lang="scss">

</style>