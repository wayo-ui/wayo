<template>
<div 
  class="wayo-stripe-button"
  :class="`wayo-stripe-button_${type}`"
  :style="styles">
  <template v-if="icon">
    <wayo-icon :name="icon" class="wayo-stripe-button__icon"/>
    <span class="wayo-stripe-button__txt">
      <slot></slot>
    </span>
  </template>
  <slot v-else></slot>
</div>
</template>

<script>
import WayoIcon from '@components/icon';

export default {
  name: `${APPNAME}StripeButton`,
  props: {
    /**
     * @prop 类型
     * @type {string}
     * @default `stroke`
     */
    type: {
      type: String,
      default: 'stroke',
      validator: val => {
        return ['fill','stroke'].indexOf(val)!==-1;
      }
    },/**
     * @prop 图标
     * @type {string}
     * @default ``
     */
    icon: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      // 自定义高度，由父组件修改
      height: 0,
      // 自定义颜色，由父组件修改
      color: undefined
    };
  },
  computed: {
    /**
     * @computed 自定义样式
     * @type {string}
     */
    styles(){
      const List = [];
      if(this.height>0){
        List.push(`height:${this.height}px;line-height:${this.height}px;`);
      }
      if(this.color){
        this.type==='fill'&&List.push(`background-color:${this.color};border-color:${this.color};`);
        this.type==='stroke'&&List.push(`color:${this.color};border-color:${this.color};`);
      }

      return List.join('');
    }
  },
  components: {
    WayoIcon
  }
};
</script>