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
  computed: {
    styles(){
      const Styles = [];

      const Basis = `${(this.span/MAX_SPAN*100)}%`;
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
      
      return Styles.join('');
    }
  }
};
</script>