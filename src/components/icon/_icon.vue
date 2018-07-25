<template>
  <i :class="`wayo-icon wayo-icon-${name}`" :style="styles"></i>
</template>

<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA} from '@/constants';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Icon`,
  props: {
    /**
     * @prop 名称
     * @type {string}
     * @default ``
     */
    name: {
      type: String,
      default: ''
    },
    /**
     * @prop 颜色
     * @type {string}
     * @default ``
     */
    color: {
      type: String,
      default: '',
      validator: val => {
        return !val||REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 尺寸
     * @type {number}
     * @default `0`
     */
    size: {
      type: Number,
      default: 0,
      validator: val => {
        return val >=0;
      }
    }
  },
  computed: {
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      const List = [];
      this.color&&List.push(`color: ${this.color};`);
      this.size&&List.push(`font-size: ${this.size}px;`);
      return List.join('');
    }
  }
};
</script>