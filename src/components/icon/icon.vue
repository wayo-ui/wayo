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
      default: '#6d6d6d'
    }
  }
};
</script>