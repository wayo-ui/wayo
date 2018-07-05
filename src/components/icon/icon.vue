<template>
  <i :class="`wayo-icon wayo-icon-${name}`" :style="`color:${color||'#6d6d6d'};`"></i>
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
      default: '#6d6d6d'
    }
  }
};
</script>