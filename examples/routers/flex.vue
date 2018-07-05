<template>
<section>
  <h4>栅格</h4>
  <wayo-flex-box class="box">
    <wayo-flex-cell class="cell">
      span: 12
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="6" class="cell">
      span: 6
    </wayo-flex-cell>
    <wayo-flex-cell :span="6" class="cell">
      span: 6
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box" justify="end">
    <wayo-flex-cell :span="6" class="cell">
      span: 6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      span: 4
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box" justify="space-between">
    <wayo-flex-cell :span="6" class="cell">
      span: 6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      span: 4
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box" justify="space-evenly">
    <wayo-flex-cell :span="3" class="cell">
      span: 3
    </wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">
      span: 3
    </wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">
      span: 3
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box" justify="space-around">
    <wayo-flex-cell :span="3" class="cell">
      span: 3
    </wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">
      span: 3
    </wayo-flex-cell>
    <wayo-flex-cell :span="3" class="cell">
      span: 3
    </wayo-flex-cell>
  </wayo-flex-box>
  <h4>列偏移</h4>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="6" :offset="4" class="cell">
      offset: 4
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="6" class="cell">
      offset: 0
    </wayo-flex-cell>
    <wayo-flex-cell :span="2" :offset="4" class="cell">
      offset: 4
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box">
    <wayo-flex-cell :span="4" :offset="1" class="cell">
      offset: 2
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" :offset="2" class="cell">
      offset: 2
    </wayo-flex-cell>
  </wayo-flex-box>
  <h4>垂直排列</h4>
  <wayo-flex-box class="box" direction="column" :height="100">
    <wayo-flex-cell :span="8" class="cell">
      span: 8
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      span: 4
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box" direction="column" :height="100">
    <wayo-flex-cell :span="6"  class="cell">
      offset: 0
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" :offset="2" class="cell">
      offset: 2
    </wayo-flex-cell>
  </wayo-flex-box>
  <h4>反向排列</h4>
  <wayo-flex-box class="box" direction="row-reverse">
    <wayo-flex-cell :span="6" class="cell">
      span: 6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      span: 4
    </wayo-flex-cell>
    <wayo-flex-cell :span="2" class="cell">
      span: 2
    </wayo-flex-cell>
  </wayo-flex-box>
  <wayo-flex-box class="box" direction="column-reverse" :height="200">
    <wayo-flex-cell :span="6" class="cell">
      span: 6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      span: 4
    </wayo-flex-cell>
    <wayo-flex-cell :span="2" class="cell">
      span: 2
    </wayo-flex-cell>
  </wayo-flex-box>
  <h4>九宫格</h4>
  <wayo-flex-box class="box" direction="row" :wrap="true">
    <wayo-flex-cell :span="4" class="cell">
      1
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      2
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      3
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      4
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      5
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      7
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      8
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      9
    </wayo-flex-cell>
  </wayo-flex-box>
  <h4>九宫格-纵向</h4>
  <wayo-flex-box class="box" direction="column" :wrap="true" :height="300">
    <wayo-flex-cell :span="4" class="cell cell-column">
      1
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      2
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      3
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      4
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      5
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      6
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      7
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      8
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell cell-column">
      9
    </wayo-flex-cell>
  </wayo-flex-box>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.box{
  margin-bottom: 15px;
}
.cell{
  text-align: center;
  color: #fff;
  background-color: #ed5026;
  height: 30px;
  line-height: 28px;
  border: dashed 1px #999;
  box-sizing: border-box;
  padding: 0 5px;
  font-size: 12px;
  &-column{
    width: 33.33%
  }
}
</style>