<template>
<div class="wayo-slide__contentitem" 
  v-on="$listeners"
  :class="{'wayo-slide__contentitem_fade': fade}"
  :style="styles"
  @transitionend="onTransitionEnd">
  <slot></slot>
</div>
</template>

<script>
/** 
 * @vue
 */
export default {
  name: `${APPNAME}Slide`,
  data(){
    return {
      // x坐标偏移量
      translateX: '',
      // 渐隐模式
      fade: false,
      // 透明度
      opacity: undefined,
      // z-index
      zIndex: undefined
    };
  },
  computed: {
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      let list = [];
 
      if(this.opacity !== undefined){
        list.push(`opacity:${this.opacity};`);
      }
      if(this.zIndex){
        list.push(`z-index:${this.zIndex};`);
      }
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
    /**
     * @method recover 复原，供父组件调用
     */
    recover(){
      this.translateX = '';
    },
    /**
     * @method translate 偏移，供父组件调用
     */
    translate(dist){
      this.translateX = dist;
    },
    /**
     * @method fadeOut 渐隐，供父组件调用
     */
    fadeOut(animate){
      if(animate){
        this.fade = true;
        this.opacity = 0;
      }else{
        this.opacity = 0;
        this.zIndex = -1;
      }
    },
    /**
     * @method fadeIn 渐显，供父组件调用
     */
    fadeIn(animate){
      if(animate){
        this.fade = true;
        this.opacity = 1;
      }else{
        this.opacity = 1;
        this.zIndex = 2;
      }
    },
    /**
     * @method onTransitionEnd 响应transitionend事件，修正z-index值
     */
    onTransitionEnd(){
      if(this.opacity===0){
        this.zIndex = -1;
      }else{
        this.zIndex = 2;
      }
    }
  }
}
</script>