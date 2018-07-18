<template>
<div :class="classes"
  :style="style">
  <slot></slot>
</div>
</template>

<script>
const Types = [
  'default',
  'text'
];
const Sizes = [
  'default',
  'large',
  'small'
];
const BORDER_RADIUS = {
  default: 12,
  large: 15,
  small: 8
};
const REG_COLOR_HEX = /^#[0-9a-fA-F]{6}$/;
const REG_COLOR_RGBA = /(#([0-9a-f]{3}){1,2}|rgba\(\d{1,3}%?(,\s?\d{1,3}%?){2},\s?(1|0|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/i;

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
        return Types.indexOf(val) !== -1;
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
        return Sizes.indexOf(val) !== -1;
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
    plain: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 是否满宽
     * @type {boolean}
     * @default `false`
     */
    fit: {
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
      default: '#5f5f5f',
      validator: val => {
        return REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 背景颜色
     * @type {string}
     * @default ``
     */
    bgColor: {
      type: String,
      default: '#f4f4f4',
      validator: val => {
        return REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    }
  },
  computed: {
    classes(){
      const List = [
        'wayo-tag',
        `wayo-tag-${this.type}`,
        `wayo-tag_size_${this.size}`,
      ];
      this.round&&List.push('wayo-tag_round');
      this.fit&&List.push('wayo-tag_fit');
      this.plain&&List.push('wayo-tag_plain');
      return List.join(' ');
    },
    style(){
      const Styles = [];
      Styles.push(`color:${this.textColor};`);
      if(!this.plain){
        Styles.push(`background-color:${this.bgColor};`);
      }else{
        Styles.push(`border-color:${this.textColor};`);
      }
      
      if(this.round){
        const Radius = BORDER_RADIUS[this.size];
        Styles.push(`
        -webkit-border-radius:${Radius}px;
        -moz-border-radius:${Radius}px;
        -o-border-radius:${Radius}px;
        border-radius:${Radius}px;`);
      }
      return Styles.join('');
    }
  }
};
</script>