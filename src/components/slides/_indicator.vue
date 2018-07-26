<template>
<div :class="classes"></div>
</template>

<script>
/**
 * @vue
 */
export default {
  name: `${APPNAME}SlidesIndicator`,
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
     * @prop 激活状态
     * @type {boolean}
     * @default `false`
     */
    active: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 索引值
     * @type {number}
     * @required
     */
    index: {
      type: Number,
      required: true
    },
    /**
     * @prop 类型
     * @type {string}
     * @default `circle`
     */
    type: {
      type: String,
      default: 'circle',
      validator: val => {
        return ['circle','square'].indexOf(val) !== -1;
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
        'wayo-slides__indicator',
        `wayo-slides__indicator_type_${this.type}`
      ];
      this.active&&List.push('wayo-slides__indicator_active');
      return List.join(' ');
    }
  }
};
</script>