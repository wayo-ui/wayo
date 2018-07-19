<template>
<div class="wayo-slide__contentitem" @transitionend="onTransitionEnd">
  <slot></slot>
</div>
</template>

<script>
/** @vue */
export default {
  name: `${APPNAME}Slide`,
  props: {
    /**
     * @prop 名称
     * @type {string}
     * @default ``
     */
    name: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // 父组件添加子组件指针
    this.$parent.addItem(this);
  },
  methods: {
    active(){
      
    },
    onTransitionEnd(ev){

    }
  }
}
</script>