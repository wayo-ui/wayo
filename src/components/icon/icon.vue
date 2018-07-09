<template>
  <i :class="`wayo-icon wayo-icon-${name}`" :style="`color:${color||''};`"></i>
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
    }
  }
};
</script>