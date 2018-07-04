<template>
<section>
  <h4>默认</h4>
  <wayo-rate/>
  <h4>初始分值</h4>
  <wayo-rate :score='0'/>
  <wayo-rate :score='4'/>
  <wayo-rate :score='4.6'/>
  <h4>显示分值</h4>
  <wayo-rate :score='4' :show-score="true"/>
  <wayo-rate :score='4.5' score-label="分" :show-score="true"/>
  <h4>自定义颜色</h4>
  <wayo-rate :score='4' :show-score="true" chosen-color="#067ffa"/>
  <wayo-rate :score='4' :show-score="true" chosen-color="#ff0000" unchosen-color="#000000"/>
  <h4>自定义尺寸</h4>
  <wayo-rate :score='4' :show-score="true" :size="20" :label-size="30"/>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss">

</style>