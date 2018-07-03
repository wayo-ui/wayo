<template>
<div 
  class="wayo-segment-button"
  :class="`wayo-segment-button-${type} wayo-segment-button_size_${size} ${disabled?'wayo-segment-button_disabled':''}`"
  :style="style">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: `${APPNAME}SegmentButton`,
  props: {
    /**
     * @prop 类型
     * @type {string}
     * @default default
     */
    type: {
      type: String,
      default: 'default',
      validator: val => {
        return ['default','primary','info','success','warning','danger'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 尺寸
     * @type {string}
     * @default normal
     */
    size: {
      type: String,
      default: 'normal',
      validator: val => {
        return ['normal','large','small','mini','fit'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 宽度
     * @type {number|string}
     * @default inherit
     */
    width: {
      type: [Number,String],
      default: 'inherit'
    },
    /**
     * @prop 禁用状态
     * @type {boolean}
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style(){
      if(this.width!=='inherit'){
        return `width:${this.width}px;padding:0;`
      }
      return '';
    }
  }
};
</script>