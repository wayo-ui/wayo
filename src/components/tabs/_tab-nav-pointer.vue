<template>
<div class="wayo-tab__nav-pointer" :style="style">
  <i class="wayo-tab__nav-pointer-bar" 
    :style="`width:${width||fullwidth}px;`"></i>
</div>
</template>

<script>
/**
 * @vue
 */
export default {
  name: `${APPNAME}TabPointer`,
  props: {
    /**
     * @prop 左偏移量
     * @type {number}
     * @default `0`
     */
    offset: {
      type: Number,
      default: 0
    },
    /**
     * @prop 显示宽度
     * @type {number}
     * @default `0`
     */
    width: {
      type: Number,
      default: 0
    },
    /**
     * @prop 实际宽度
     * @type {number}
     * @default `0`
     */
    fullwidth: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style(){
      return [
        `width:${this.fullwidth}px;`,
        `-webkit-transform: translateX(${this.offset}px);`,
        `-moz-transform: translateX(${this.offset}px);`,
        `-o-transform: translateX(${this.offset}px);`,
        `transform: translateX(${this.offset}px);`
      ].join('');
    }
  }
};
</script>