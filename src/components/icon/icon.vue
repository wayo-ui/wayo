<template>
  <i :class="`wayo-icon wayo-icon-${name}`" :style="`color:${color};`"></i>
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
      type: String,
      default: '#c6c6c6'
    }
  }
};
</script>