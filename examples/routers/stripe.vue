<template>
<section class="sec">
  <p class="title">基本使用</p>
  <wayo-stripe>
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <p class="title">尺寸</p>
  <wayo-stripe size="small">
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <wayo-stripe size="default">
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <wayo-stripe size="large">
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <p class="title">禁用状态</p>
  <wayo-stripe disabled>
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <p class="title">自定义尺寸颜色</p>
  <wayo-stripe :width="80" :height="70" :font-size="18" color="#000000">
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <p class="title">自由组合</p>
  <wayo-stripe>
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
    <wayo-stripe-button>买定离手</wayo-stripe-button>
  </wayo-stripe>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss">

</style>