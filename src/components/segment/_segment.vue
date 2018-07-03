<template>
<div 
  class="wayo-segment"
  :class="classname">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: `${APPNAME}Segment`,
  props: {
    /**
     * @prop 方向
     * @type {string}
     * @default horizontal
     */
    direction: {
      type: String,
      default: 'horizontal',
      validator: val => {
        return ['horizontal','vertical'].indexOf(val)!==-1;
      }
    }
  },
  computed: {
    classname(){
      if(this.$slots.default.length>1){
        return `wayo-segment_direct_${this.direction}`;
      }
      return '';
    }
  }
};
</script>