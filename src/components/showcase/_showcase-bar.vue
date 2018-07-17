<template>
<div class="wayo-showcase__navbar" 
  :class="{'wayo-showcase__navbar_active':active}"
  @click="onActive">
  <div class="wayo-showcase__thumb-box">
    <img class="wayo-showcase__thumb-img"
      :src="thumb" 
      :style="thumbStyles"/>
  </div>
</div>
</template>

<script>
export default {
  name: `${APPNAME}ShowcaseBar`,
  props: {
    /**
     * @prop 图片url
     * @type {string}
     * @required
     */
    thumb: {
      type: String,
      required: true
    },
    /**
     * @prop 图片宽度
     * @type {number}
     * @required
     */
    width: {
      type: Number,
      required: true
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
     * @prop 激活状态
     * @type {boolean}
     * @default `false`
     */
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    thumbStyles(){
      return [
        `width:${this.width*(this.active?1.25:1)}px;`,
        `visibility:${this.thumbLoaded?'visible':'hidden'};`
      ].join('');
    }
  },
  data(){
    return {
      // 图片是否加载完成
      thumbLoaded: false
    };
  },
  mounted() {
    this.loadThumb();
  },
  methods: {
    /**
     * @method onActive 点击时向父组件抛出click事件，用于激活自身
     */
    onActive(){
      this.$emit('click',this.index);
    },
    /**
     * @method loadThumb 加载图片
     */
    loadThumb(){
      this.thumbLoaded = false;
      const TmpImage = new Image();
      TmpImage.onload = () => {
        this.thumbLoaded = true;
      };
      TmpImage.src = this.thumb;
    }
  }
};
</script>