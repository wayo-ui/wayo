<template>
  <button :class="classes" :style="styles">
    <wayo-icon v-if="icon" :name="icon"/>
    <slot></slot>
  </button>
</template>

<script>
import WayoIcon from '@components/icon';

export default {
  name: `${APPNAME}Button`,
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
     * @prop 禁用状态
     * @type {boolean}
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 加载状态
     * @type {boolean}
     * @default false
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 圆形按钮
     * @type {boolean}
     * @default false
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 图标
     * @type {string}
     * @default ''
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * @prop 背景色
     * @type {string|undefined}
     * @default ''
     */
    bgColor: {
      type: [String,undefined],
      default: undefined
    },
    /**
     * @prop 字体颜色
     * @type {string|undefined}
     * @default ''
     */
    fontColor: {
      type: [String,undefined],
      default: undefined
    },
    /**
     * @prop border颜色
     * @type {string|undefined}
     * @default ''
     */
    borderColor: {
      type: [String,undefined],
      default: undefined
    }
  },
  computed: {
    classes(){
      const List = [
        'wayo-button',
        `wayo-button-${this.type}`,
        `wayo-button_size_${this.size}`,
      ];
      this.disabled&&List.push('wayo-button_disabled');
      this.circle&&!this.$slots.default&&List.push('wayo-button_circle');
      return List.join(' ');
    },
    styles(){
      const List = [];
      this.bgColor&List.push(`background-color: ${this.bgColor};`);
      this.fontColor&List.push(`color: ${this.fontColor};`);
      this.borderColor&List.push(`border-color: ${this.borderColor};`);
      return List.join('');
    }
  },
  components: {
    WayoIcon
  }
};
</script>