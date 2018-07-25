<template>
  <div class="wayo-image" 
    :style="`width:${this.fit?'inherit':size.width+'px'};`"
    v-on="$listeners">
    <div class="wayo-image__box" 
      :class="{'wayo-image__box_border':border}"
      :style="styles">
      <img class="wayo-image__img" v-show="loaded" 
      :src="src"/>
      <div class="wayo-image__info" v-if="info">
        <span class="wayo-image__info-placeholder">{{info}}</span>
        <p class="wayo-image__info-content">{{info}}</p>
      </div>
    </div>
    <p class="wayo-image__label" v-if="label">{{label}}</p>
  </div>
</template>

<script>
/**
 * @vue
 */
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
     * @default 0
     */
    height: {
      type: Number,
      default: 0
    },
    /**
     * @prop 图片url
     * @type {string}
     * @required
     */
    src: {
      type: String,
      required: true
    },
    /**
     * @prop 占位图片url
     * @type {string}
     * @default ``
     */
    placeholder: {
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
    },
    /**
     * @prop 是否显示边框
     * @type {boolean}
     * @default `true`
     */
    border: {
      type: Boolean,
      default: true
    },
    /**
     * @prop 是否占满容器宽度
     * @type {boolean}
     * @default `false`
     */
    fit: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      // 加载完成标记
      loaded: false
    };
  },
  computed: {
    /**
     * @computed 尺寸
     * @type {Object}
     */
    size(){
      return {
        width: this.width,
        height: this.height||this.width
      };
    },
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      const List = [];
      if(!this.fit){
        List.push(`width:${this.size.width}px;`);
        List.push(`height:${this.size.height}px;`);
        List.push(`line-height:${this.size.height-2}px;`);
      }else{
        List.push('width: inherit;');
      }
      this.placeholder&&List.push(`background-image: url(${this.placeholder});`);
      return List.join('');
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
    /**
     * @method loadImage 加载图片
     */
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