<template>
<div 
  :class="classes"
  :style="`height:${isNaN(height)?height:height+'px'};`">
  <slot></slot>
</div>
</template>

<script>
const AVAILABLE_JUSTIFY_AND_ALIGN = [
  'unset',
  'start',
  'end',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
];

export default {
  name: `${APPNAME}FlexBox`,
  props: {
    /**
     * @prop 方向
     * @type {string}
     * @default `row`
     */
    direction: {
      type: String,
      default: 'row',
      validator: val => {
        return ['row','row-reverse','column','column-reverse'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 方向
     * @type {string|number}
     * @default `row`
     */
    height: {
      type: [String,Number],
      default: 'inherit'
    },
    /**
     * @prop 主轴（水平）对齐方式
     * @type {string}
     * @default `start`
     */
    justify: {
      type: String,
      default: 'start',
      validator: val => {
        return AVAILABLE_JUSTIFY_AND_ALIGN.indexOf(val)!==-1;
      }
    },
    /**
     * @prop 交叉轴（垂直）对齐方式
     * @type {string}
     * @default `row`
     */
    align: {
      type: String,
      default: 'unset',
      validator: val => {
        return AVAILABLE_JUSTIFY_AND_ALIGN.indexOf(val)!==-1;
      }
    },
    /**
     * @prop 是否可换行
     * @type {boolean}
     * @default `false`
     */
    wrap: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 列元素的间距（px）
     * @type {number}
     * @default `0`
     */
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes(){
      const List = [
        'wayo-flex-box',
        `wayo-flex-box_direction_${this.direction}`,
        `wayo-flex-box_justify_${this.justify}`,
        `wayo-flex-box_align_${this.align}`
      ];
      this.wrap&&List.push('wayo-flex-box_wrap');
      return List.join(' ');
    }
  }
};
</script>