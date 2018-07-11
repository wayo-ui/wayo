<template>
<div class="wayo-lath__tail" v-on="$listeners" v-if="show">
  <slot>
    <span v-if="label" class="wayo-lath__tail-label">{{label}}</span>
    <wayo-icon v-if="icon" class="wayo-lath__tail-icon" 
    :name="icon" 
    :color="iconColor"/>
  </slot>
</div>
</template>

<script>
export default {
  name: `${APPNAME}LathTail`,
  props: {
    /**
     * @prop 尾部图标
     * @type {string|undefined}
     * @default `undefined`
     */
    icon: {
      type: String,
      default: undefined
    },/**
     * @prop 尾部图标颜色
     * @type {string|undefined}
     * @default `undefined`
     */
    iconColor: {
      type: String,
      default: undefined
    },
    /**
     * @prop 尾部标签文案
     * @type {string}
     * @default ``
     */
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    show(){
      return this.icon||this.label||(this.$slots.default&&this.$slots.default.length>0);
    }
  },
  watch: {
    show(now){
      this.$parent.hasTail = now;
    }
  },
  mounted() {
    if(this.show){
      this.$parent.tail = {
        label: this.label,
        icon: true
      };
    }
  }
};
</script>