<template>
<div class="wayo-slide__contentitem" 
  :style="styles"
  @transitionend="onTransitionEnd">
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
  data(){
    return {
      translateX: ''
    };
  },
  computed: {
    styles(){
      let list = [];
      if(this.translateX){
        list = list.concat([
          `-webkit-transform:translateX(${this.translateX});`,
          `-moz-transform:translateX(${this.translateX});`,
          `-o-transform:translateX(${this.translateX});`,
          `transform:translateX(${this.translateX});`
        ]);
      }
      return list.join('');
    }
  },
  mounted() {
    // 父组件添加子组件指针
    this.$parent.addItem(this);
  },
  methods: {
    recover(){
      this.translateX = '';
    },
    translate(dist){
      this.translateX = dist;
    },
    onTransitionEnd(ev){

    }
  }
}
</script>