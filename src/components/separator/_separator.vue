<template>
<i class="wayo-separator"
  :class="`wayo-separator_direction_${direction} ${absolute?'wayo-separator_absolute':''}`"
  :style="styles">
</i>
</template>

<script>
/**
 * @vue
 */
export default {
  name: `${APPNAME}Separator`,
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
        return ['row','column'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 高度，direction为column时生效
     * @type {number}
     * @default `-1`
     */
    height: {
      type: Number,
      default: -1
    },
    /**
     * @prop 颜色
     * @type {string}
     * @default `#ededed`
     */
    color: {
      type: String,
      default: '#ededed'
    },
    /**
     * @prop 绝对定位
     * @type {boolean}
     * @default `false`
     */
    absolute: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      // 设备dpr
      dpr: window.devicePixelRatio||1
    };
  },
  computed: {
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      const Styles = [`background-color:${this.color};`];
      if(this.direction==='column'){
        this.height!==-1&&Styles.push(`height:${this.height}px;`);
        Styles.push(`-webkit-transform:scaleX(${1/this.dpr});`);
        Styles.push(`-moz-transform:scaleX(${1/this.dpr});`);
        Styles.push(`-ms-transform:scaleX(${1/this.dpr});`);
        Styles.push(`transform:scaleX(${1/this.dpr});`);
      }else if(this.direction==='row'){
        Styles.push(`-webkit-transform:scaleY(${1/this.dpr});`);
        Styles.push(`-moz-transform:scaleY(${1/this.dpr});`);
        Styles.push(`-ms-transform:scaleY(${1/this.dpr});`);
        Styles.push(`transform:scaleY(${1/this.dpr});`);
      }
      return Styles.join('');
    }
  }
};
</script>