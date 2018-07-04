<template>
<div class="wayo-tag"
  :class="`wayo-tag-${type} wayo-tag_size_${size} ${round?'wayo-tag-round':''} ${fit?'wayo-tag-fit':''}`"
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
      default: ''
    },
    /**
     * @prop 背景颜色
     * @type {string}
     * @default ``
     */
    bgColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    style(){
      const Styles = [];
      this.textColor&&Styles.push(`color:${this.textColor};`);
      this.bgColor&&Styles.push(`background-color:${this.bgColor};`);
      if(this.fit&&this.round){
        const Radius = BORDER_RADIUS[this.size];
        Styles.push(`
        -webkit-border-radius:${Radius}px;
        -moz-border-radius:${Radius}px;
        -o-border-radius:${Radius}px;
        -webkit-border-radius:${Radius}px;`);
      }
      return Styles.join('');
    }
  }
};
</script>