<template>
<div :class="classes" :style="style">
  <slot></slot>
</div>
</template>

<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA} from '@/constants';

/**
 * @vue
 */
export default {
  name: `${APPNAME}Tag`,
  props: {
    /**
     * @prop 宽度
     * @type {number}
     * @default `70`
     */
    type: {
      type: String,
      default: 'default',
      validator: val => {
        return ['default','primary','info','success','warning','danger'].indexOf(val) !== -1;
      }
    },
    /**
     * @prop 尺寸
     * @type {boolean}
     * @default `default`
     */
    size: {
      type: String,
      default: 'default',
      validator: val => {
        return ['default','large','small','mini'].indexOf(val) !== -1;
      }
    },
    /**
     * @prop 圆角
     * @type {boolean}
     * @default `false`
     */
    round: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 镂空
     * @type {boolean}
     * @default `false`
     */
    outline: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 文案颜色
     * @type {string}
     * @default ``
     */
    textColor: {
      type: String,
      default: '',
      validator: val => {
        return !val||REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 背景颜色
     * @type {string}
     * @default ``
     */
    bgColor: {
      type: String,
      default: '',
      validator: val => {
        return !val||REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 自定义宽度
     * @type {number}
     * @default `0`
     */
    width: {
      type: Number,
      default: 0
    },
    /**
     * @prop 自定义高度
     * @type {number}
     * @default `0`
     */
    height: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes(){
      const List = [
        'wayo-tag',
        `wayo-tag_type_${this.type}`,
        `wayo-tag_size_${this.size}`,
      ];
      this.round&&List.push('wayo-tag_round');
      this.outline&&List.push('wayo-tag_outline');
      return List.join(' ');
    },
    style(){
      const Styles = [];
      if(this.textColor){
        Styles.push(`color:${this.textColor};`);
        this.outline&&Styles.push(`border-color:${this.textColor};`);
      }
      if(this.bgColor&&!this.outline){
        Styles.push(`background-color:${this.bgColor};`);
      }
      if(this.width>0){
        Styles.push(`width:${this.width}px;`);
        Styles.push('padding-left: 0;');
        Styles.push('padding-right: 0;');
      }
      if(this.height>0){
        Styles.push(`height:${this.height}px;`);
        Styles.push(`line-height:${this.height-2}px;`);
        Styles.push('padding-top: 0;');
        Styles.push('padding-bottom: 0;');
      }
      return Styles.join('');
    }
  }
};
</script>