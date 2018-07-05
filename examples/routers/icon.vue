<template>
<section>
  <wayo-flex-box :wrap="true">
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="clock"/>
      <label class="cell__label">icon-clock</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="cny"/>
      <label class="cell__label">icon-cny</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="phone"/>
      <label class="cell__label">icon-phone</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="location"/>
      <label class="cell__label">icon-location</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="arrow-right"/>
      <label class="cell__label">icon-arrow-right</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="scene"/>
      <label class="cell__label">icon-scene</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="bus"/>
      <label class="cell__label">icon-bus</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="food"/>
      <label class="cell__label">icon-food</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="cinema"/>
      <label class="cell__label">icon-cinema</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="more"/>
      <label class="cell__label">icon-more</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="station"/>
      <label class="cell__label">icon-station</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="nav"/>
      <label class="cell__label">icon-nav</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="share"/>
      <label class="cell__label">icon-share</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="star-stroke"/>
      <label class="cell__label">icon-star-stroke</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="star-half"/>
      <label class="cell__label">icon-star-half</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="star-fill"/>
      <label class="cell__label">icon-star-fill</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="location-mistake"/>
      <label class="cell__label">icon-location-mistake</label>
    </wayo-flex-cell>
    <wayo-flex-cell :span="4" class="cell">
      <wayo-icon name="location-around"/>
      <label class="cell__label">icon-location-around</label>
    </wayo-flex-cell>
  </wayo-flex-box>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.cell{
  color: #5f5f5f;
  text-align: center;
  border: solid 1px #ccc;
  box-sizing: border-box;
  font-size: 24px;
}
.cell__label{
  display: block;
  font-size: 12px;
}
</style>