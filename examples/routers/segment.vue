<template>
<section>
  <h4>纵向</h4>
  <wayo-segment direction="vertical">
    <wayo-segment-button size="small" :width="70">￥25</wayo-segment-button>
    <wayo-segment-button size="small" :width="70" type="primary">预定</wayo-segment-button>
  </wayo-segment>
  <h4>横向</h4>
  <wayo-segment direction="horizontal">
    <wayo-segment-button size="small" :width="70">￥25</wayo-segment-button>
    <wayo-segment-button size="small" :width="70" type="primary">预定</wayo-segment-button>
    <wayo-segment-button size="small" :width="70">￥25</wayo-segment-button>
    <wayo-segment-button size="small" :width="70" type="primary">预定</wayo-segment-button>
  </wayo-segment>
  <h4>禁用</h4>
  <wayo-segment direction="vertical" disabled>
    <wayo-segment-button size="small" :width="70">￥25</wayo-segment-button>
    <wayo-segment-button size="small" :width="70" type="primary">预定</wayo-segment-button>
  </wayo-segment>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss">

</style>