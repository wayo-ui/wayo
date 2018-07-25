<template>
<section>
  <h4>纵向</h4>
  <wayo-stripe>
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <h4>尺寸</h4>
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
  <h4>禁用</h4>
  <wayo-stripe disabled>
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <h4>自定义(尺寸&颜色))</h4>
  <wayo-stripe :width="80" :height="70" :font-size="18" color="#000000">
    <wayo-stripe-button icon="cny">25</wayo-stripe-button>
    <wayo-stripe-button type="fill">预定</wayo-stripe-button>
  </wayo-stripe>
  <h4>自由组合</h4>
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