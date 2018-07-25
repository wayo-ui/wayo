<template>
<div class="wayo-rate" :style="`font-size:${size}px;`">
  <template v-for="i in max">
    <div v-if="halfScore===i" class="wayo-rate__halfbox"
      :style="`height:${size}px;width:${size}px;line-height:1;font-size:${size}px;`">
      <wayo-icon name="star-fill" class="wayo-rate-icon"  
      :key="`${randomKey}-${i}`"
      :style="`${iconStyle(i)}position:absolute;top:0;left:0;`"/>
      <wayo-icon name="star-half" class="wayo-rate__icon wayo-rate__icon-half" 
        :key="`${randomKey}-${i}-half`"
        :style="`${iconStyle(i)}color: ${chosenColor};`"/>
    </div>
    <wayo-icon name="star-fill" class="wayo-rate__icon" v-else
      :key="`${randomKey}-${i}`"
      :style="iconStyle(i)"/>
    </template>
    <label class="wayo-rate__score" v-if="showScore"
      :style="`font-size:${this.labelSize||this.size}px;`">{{score}}{{scoreLabel}}</label>
</div>
</template>

<script>
import WayoIcon from '@/components/icon';

export default {
  name: `${APPNAME}Rate`,
  props: {
    /**
     * @prop 最大值，即星星个数
     * @type {number}
     * @default `5`
     */
    max: {
      type: Number,
      default: 5
    },
    /**
     * @prop 星星的尺寸
     * @type {number}
     * @default `14`
     */
    size: {
      type: Number,
      default: 14
    },
    /**
     * @prop 初始分值
     * @type {number}
     * @default `0`
     */
    score: {
      type: Number,
      default: 0
    },
    /**
     * @prop 标签文案
     * @type {string}
     * @default `0`
     */
    scoreLabel: {
      type: String,
      default: ''
    },
    /**
     * @prop 标签字体大小
     * @type {number}
     * @default `0`
     */
    labelSize: {
      type: Number,
      default: 0
    },
    /**
     * @prop 只读
     * @type {boolean}
     * @default `false`
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 显示分值
     * @type {boolean}
     * @default `false`
     */
    showScore: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 选中星星的颜色
     * @type {string}
     * @default `#ed5026`
     */
    chosenColor: {
      type: String,
      default: '#ed5026'
    },
    /**
     * @prop 未选中星星的颜色
     * @type {string}
     * @default `#d6d6d6`
     */
    unchosenColor: {
      type: String,
      default: '#d6d6d6'
    }
  },
  data(){
    return {
      randomKey: undefined
    };
  },
  computed: {
    halfScore(){
      if(this.score%1>0){
        return parseInt(this.score)+1;
      }
      return -1;
    }
  },
  mounted(){
    this.randomKey = Math.random().toString(16).split('.')[1];
  },
  methods: {
    iconStyle(index){
      if(this.score>=index){
        return [
          `font-size:${this.size}px;`,
          `color: ${this.chosenColor};`
        ].join('');
      }
      return [
          `font-size:${this.size}px;`,
          `color: ${this.unchosenColor};`
        ].join('');;
    }
  },
  components: {
    WayoIcon
  }
};
</script>