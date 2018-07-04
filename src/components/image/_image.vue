<template>
  <div class="wayo-image" :style="`width:${size.width}px;`">
    <div class="wayo-image__box" 
      :style="`width:${size.width}px;height:${size.height}px;line-height:${size.height-2}px;`">
      <img class="wayo-image__img" v-show="loaded" 
      :src="src"/>
      <span class="wayo-image__alt">{{alt}}</span>
      <div class="wayo-image__info" v-if="info">
        <span class="wayo-image__info-placeholder">{{info}}</span>
        <p class="wayo-image__info-content">{{info}}</p>
      </div>
    </div>
    <p class="wayo-image__label" v-if="label">{{label}}</p>
  </div>
</template>

<script>
export default {
  name: `${APPNAME}Image`,
  props: {
    /**
     * @prop 宽度
     * @type {number}
     * @default 70
     */
    width: {
      type: Number,
      default: 70
    },
    /**
     * @prop 高度
     * @type {number}
     * @default 70
     */
    height: {
      type: Number,
      default: 70
    },
    /**
     * @prop 图片url
     * @type {string}
     * @required
     */
    src: {
      type: String,
      required: true,
      validator: val => {
        return /\.(png|jpe?g|gif|svg|webp)$/.test(val);
      }
    },
    /**
     * @prop 图片alt
     * @type {string}
     * @default ''
     */
    alt: {
      type: String,
      default: ''
    },
    /**
     * @prop 图片标注文案
     * @type {string}
     * @default ''
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * @prop 图片遮层文案
     * @type {string}
     * @default ''
     */
    info: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      // 加载完成标记
      loaded: false
    };
  },
  computed: {
    size(){
      return {
        width: this.width,
        height: this.height===70&&this.width!==70?this.width:this.height
      };
    }
  },
  watch:{
    src(){
      this.loadImage();
    }
  },
  mounted(){
    this.loadImage();
  },
  methods: {
    loadImage(){
      this.loaded = false;
      const TmpImage = new Image();
      TmpImage.onload = () => {
        this.loaded = true;
      };
      TmpImage.src = this.src;
    }
  }
};
</script>