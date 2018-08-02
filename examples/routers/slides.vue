<template>
<section>
  <h4>指示器类型</h4>
  <wayo-block>
    <wayo-slides>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides indicator-type="square">
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides indicator-type="none">
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  
  <h4>循环切换</h4>
  <wayo-block>
    <wayo-slides loop>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <h4>自动切换(同时强制开启循环模式)</h4>
  <wayo-block>
    <wayo-slides autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <h4>fade动画</h4>
  <wayo-block>
    <wayo-slides animation="fade">
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides animation="fade" loop>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides animation="fade" autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <h4>无动画</h4>
  <wayo-block>
    <wayo-slides animation="none">
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides animation="none" loop>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
  <wayo-block>
    <wayo-slides animation="none" autoplay>
      <wayo-slide class="slides__item slides__item-1">1</wayo-slide>
      <wayo-slide class="slides__item slides__item-2">2</wayo-slide>
      <wayo-slide class="slides__item slides__item-3">3</wayo-slide>
    </wayo-slides>
  </wayo-block>
</section>
</template>

<script>
export default {
  methods: {
    
  }
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