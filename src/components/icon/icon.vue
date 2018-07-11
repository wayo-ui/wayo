<template>
  <i :class="`wayo-icon wayo-icon-${name}`" :style="`color:${color||''};font-size:${size||''}px;`"></i>
</template>

<script>
export default {
  name: `${APPNAME}Icon`,
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: [String,undefined],
      default: undefined
    },
    size: {
      type: [Number,undefined],
      default: undefined
    }
  }
};
</script>