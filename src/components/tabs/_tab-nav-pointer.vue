<template>
<div class="wayo-tab__nav-pointer" :style="style"></div>
</template>

<script>
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
     * @prop 宽度
     * @type {number}
     * @default `0`
     */
    width: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style(){
      return [
        `width:${this.width}px;`,
        `-webkit-transform: translateX(${this.offset}px);`,
        `-moz-transform: translateX(${this.offset}px);`,
        `-o-transform: translateX(${this.offset}px);`,
        `transform: translateX(${this.offset}px);`
      ].join('');
    }
  }
};
</script>