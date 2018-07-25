<template>
  <button :class="classes" :style="styles" v-on="$listeners">
    <svg v-if="loading" width="42px" height="42px" 
      class="wayo-button__loading-icon"
      :transform="`scale(${loadingPathScale})`">
      <circle class="wayo-button__loading-path" cx="21" cy="21" r="20" 
        fill="none" stroke-width="2"
        :stroke="loadingPathColor"></circle>
    </svg>
    <wayo-icon v-else-if="icon" :name="icon" class="wayo-button__icon"/>
    <slot></slot>
  </button>
</template>

<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA} from '@/constants';
import WayoIcon from '@/components/icon';

/**
 * @vue
 */
export default {
  name: `${APPNAME}Button`,
  props: {
    /**
     * @prop 类型
     * @type {string}
     * @default `primary`
     */
    type: {
      type: String,
      default: 'primary',
      validator: val => {
        return ['primary','info','success','warning','danger'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 尺寸
     * @type {string}
     * @default `default`
     */
    size: {
      type: String,
      default: 'default',
      validator: val => {
        return ['default','large','small','fit'].indexOf(val)!==-1;
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
     * @prop 镂空按钮
     * @type {boolean}
     * @default `false`
     */
    plain: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 圆边按钮
     * @type {boolean}
     * @default false
     */
    round: {
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
      default: undefined,
      validator: val => {
        return REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 字体颜色
     * @type {string|undefined}
     * @default ''
     */
    fontColor: {
      type: [String,undefined],
      default: undefined,
      validator: val => {
        return REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop border颜色
     * @type {string|undefined}
     * @default ''
     */
    borderColor: {
      type: [String,undefined],
      default: undefined,
      validator: val => {
        return REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    }
  },
  computed: {
    /**
     * @computed classname
     * @type {string}
     */
    classes(){
      const List = [
        'wayo-button',
        `wayo-button-${this.type}`,
        `wayo-button_size_${this.size}`,
      ];
      this.plain&&List.push('wayo-button_plain');
      // fit尺寸不支持loading
      this.loading&&this.size!=='fit'&&List.push('wayo-button_loading');
      this.disabled&&List.push('wayo-button_disabled');
      this.round&&List.push('wayo-button_round');
      this.circle&&!this.$slots.default&&List.push('wayo-button_circle');
      return List.join(' ');
    },
    /**
     * @computed 自定义样式
     * @type {string}
     */
    styles(){
      const List = [];
      this.bgColor&List.push(`background-color: ${this.bgColor};`);
      this.fontColor&List.push(`color: ${this.fontColor};`);
      this.borderColor&List.push(`border: solid 1px ${this.borderColor};`);
      return List.join('');
    },
    /**
     * @computed 加载icon缩放比
     * @type {number}
     */
    loadingPathScale(){
      switch(this.size){
        case 'default': 
          return 0.4;
        case 'large': 
          return 0.5;
        case 'small': 
          return 0.3;
      }
    },
    /**
     * @computed 加载icon颜色
     * @type {string}
     */
    loadingPathColor(){
      if(this.fontColor){
        return this.fontColor;
      }
      if(!this.plain){
        return '#ffffff';
      }
      switch(this.type){
        case 'primary':
          return '#ed5026';
        case 'info':
          return '#067ffa';
        case 'warning':
          return '#f39800';
        case 'danger':
          return '#ff0000';
        case 'success':
          return '#67c23a';
      }
    }
  },
  components: {
    WayoIcon
  }
};
</script>