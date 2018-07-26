<template>
<div class="wayo-lath__tail" v-on="$listeners" v-if="show">
  <slot>
    <span v-if="label" class="wayo-lath__tail-label">{{label}}</span>
    <wayo-icon v-if="icon" class="wayo-lath__tail-icon" 
    :name="icon" 
    :color="iconColor"/>
  </slot>
</div>
</template>

<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA} from '@/constants';
/**
 * @vue
 */
export default {
  name: `${APPNAME}LathTail`,
  props: {
    /**
     * @prop 尾部图标
     * @type {string}
     * @default ``
     */
    icon: {
      type: String,
      default: ''
    },/**
     * @prop 尾部图标颜色
     * @type {string}
     * @default ``
     */
    iconColor: {
      type: String,
      default: '',
      validator: val => {
        return !val||REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 尾部标签文案
     * @type {string}
     * @default ``
     */
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    /**
     * @computed 显示状态
     * @type {boolean}
     */
    show(){
      return !!(this.icon||this.label||(this.$slots.default&&this.$slots.default.length>0));
    }
  },
  watch: {
    show(now){
      this.$parent.hasTail = now;
    }
  },
  mounted() {
    if(this.show){
      this.$parent.tail = {
        label: this.label,
        icon: true
      };
    }
  }
};
</script>