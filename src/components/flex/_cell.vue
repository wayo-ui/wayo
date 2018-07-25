<template>
<div class="wayo-flex-cell"
  :style="styles">
  <slot></slot>
</div>
</template>

<script>
const MAX_SPAN = 12;
const MARGINTYPE = {
  'row': 'margin-left',
  'row-reverse': 'margin-right',
  'column': 'margin-top',
  'column-reverse': 'margin-bottom'
};
/**
 * @vue
 */
export default {
  name: `${APPNAME}FlexCell`,
  props: {
    /**
     * @prop 占据的单元格数目
     * @type {number}
     * @default `12`
     */
    span: {
      type: Number,
      default: 12,
      validator: val => {
        return val%1===0&&val<=12&&val>=0;
      }
    },
    /**
     * @prop 偏移单元格数目。水平排列为左偏移量，垂直排列为上偏移量
     * @type {number}
     * @default `0`
     */
    offset: {
      type: Number,
      default: 0,
      validator: val => {
        return val%1===0&&val<=12&&val>=0;
      }
    }
  },
  data(){
    return {
      padding: 0
    };
  },
  computed: {
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      const Styles = [];

      const Basis = this.padding<=0?`${(this.span/MAX_SPAN*100)}%`:(() => {
        if(this.$parent.width===0){
          this.$parent.calWidth();
        }
        return `${(this.span/MAX_SPAN*this.$parent.availableWidth).toFixed(2)-0.01}px`;
      })();
      Styles.push(`-webkit-flex-basis:${Basis};`);
      Styles.push(`-moz-flex-basis:${Basis};`);
      Styles.push(`-ms-flex-basis:${Basis};`);
      Styles.push(`flex-basis:${Basis};`);

      if(this.offset>0){
        const MarginType = MARGINTYPE[this.$parent.direction]||'margin-left';
        if(/(top|bottom)$/.test(MarginType)){
          const ParentHeight = /\d+/.test(this.$parent.height.toString())?/(\d+)/.exec(this.$parent.height.toString())[1]:0;
          ParentHeight!==0&&Styles.push(`${MarginType}:${this.offset/MAX_SPAN*ParentHeight}px;`);
        }else{
          Styles.push(`${MarginType}:${this.offset/MAX_SPAN*100}%;`);
        }
      }

      if(this.padding>0){
        if(/row/.test(this.$parent.direction)){
          Styles.push(`margin-left:${this.padding}px;`);
          Styles.push(`margin-right:${this.padding}px;`);
        }else{
          Styles.push(`margin-top:${this.padding}px;`);
          Styles.push(`margin-bottom:${this.padding}px;`);
        }
      }
      
      return Styles.join('');
    }
  }
};
</script>