<template>
<section>
  <h4>指示器类型</h4>
  <wayo-card>
    <wayo-slides>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-card>
  <wayo-card>
    <wayo-slides indicator-type="square">
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-card>
  <wayo-card>
    <wayo-slides indicator-type="none">
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-card>
  
  <h4>循环切换</h4>
  <wayo-card>
    <wayo-slides loop>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-card>
  <h4>自动切换(同时强制开启循环模式)</h4>
  <wayo-card>
    <wayo-slides autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-card>
</section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.slides__item{
  height: 80px;
  text-align: center;
  line-height: 80px;
  &-1{
    background-color: #6fa3f3;
  }
  &-2{
    background-color: #067ffa;
  }
  &-3{
    background-color: #48c6b0;
  }
}
</style>