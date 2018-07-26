<template>
<div class="wayo-imageviewer">
  <div class="wayo-imageviewer__mask" :style="maskStyle" @click.self="onClose"></div>
  <wayo-slides 
    v-if="value.length>0"
    class="wayo-imageviewer__slides"
    loop
    indicator-type="none"
    @change="onChange">
    <wayo-slide v-for="(img,index) in value"
      :key="`wayo-image-viewer__item-${index}`">
      <wayo-image :src="img" :border="false" fit/>
    </wayo-slide>
  </wayo-slides>
  <p class="wayo-imageviewer__indicator">{{activeIndex}}/{{value.length}}</p>
</div>
</template>

<script>
import {REG_COLOR_HEX,REG_COLOR_RGBA} from '@/constants';
import WayoSlides from '@/components/slides';
/**
 * @vue
 */
export default {
  name: `${APPNAME}ImageViewer`,
  props: {
    /**
     * @prop 图片列表
     * @type {Array}
     * @default `[]`
     */
    value: {
      type: Array,
      default: () => []
    },
    /**
     * @prop 是否显示指示器
     * @type {boolean}
     * @default `true`
     */
    indicator: {
      type: Boolean,
      default: true
    },
    /**
     * @prop 背景颜色
     * @type {string}
     * @default `#000000`
     */
    maskColor: {
      type: String,
      default: '#000000',
      validator: val => {
        return REG_COLOR_HEX.test(val)||REG_COLOR_RGBA.test(val);
      }
    },
    /**
     * @prop 背景透明度
     * @type {number}
     * @default `0.6`
     */
    maskOpacity: {
      type: Number,
      default: 0.6,
      validator: val => {
        return val>=0&&val<=1;
      }
    }
  },
  computed: {
    /**
     * @computed 背景板样式
     * @type {string}
     */
    maskStyle(){
      return [
        `background-color:${this.maskColor};`,
        `opacity:${this.maskOpacity};`
      ].join('');
    }
  },
  data(){
    return {
      // 当前激活的索引
      activeIndex: 1
    };
  },
  methods: {
    /**
     * @method onChange 接收slides组件的change事件并切换索引，同时抛出change事件
     * @param {number} index 激活目标的索引值
     */
    onChange(index){
      this.activeIndex = index+1;
      this.$emit('change',index);
    },
    /**
     * @method onClose 抛出close事件
     */
    onClose(){
      this.$emit('close');
    }
  },
  components: {
    WayoSlides,
    WayoSlide: WayoSlides.Slide
  }
}
</script>