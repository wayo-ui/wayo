<template>
<div 
  class="wayo-segment"
  :class="classname"
  v-on="$listeners">
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
     * @default `horizontal`
     */
    direction: {
      type: String,
      default: 'horizontal',
      validator: val => {
        return ['horizontal','vertical'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 禁用
     * @type {boolean}
     * @default `false`
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classname(){
      const List = [];
      if(this.$slots.default.length>1){
        List.push(`wayo-segment_direct_${this.direction}`);
      }
      this.disabled&&List.push('wayo-segment_disabled');
      return List.join(' ');
    }
  }
};
</script>