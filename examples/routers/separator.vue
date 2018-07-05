<template>
<section>
  <h4>横向</h4>
  <wayo-separator></wayo-separator>
  <wayo-separator color="red"></wayo-separator>
  <h4>纵向</h4>
  <wayo-separator direction="column" :height="20"></wayo-separator>
  <wayo-separator direction="column" :height="20" color="red"></wayo-separator>
  <h4>绝对定位</h4>
  <div class="absolute-box absolute-box_row">
    <wayo-separator color="red" absolute></wayo-separator>
  </div>
  <div class="absolute-box absolute-box_column">
    <wayo-separator color="red" absolute direction="column"></wayo-separator>
  </div>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.absolute-box{
  position: relative;
  &_row{
    width: 200px;
    height: 20px;
    margin: 0 auto;
  }
  &_column{
    height: 50px;
    text-align: center;
  }
}
</style>