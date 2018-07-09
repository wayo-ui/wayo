<template>
<div class="wayo-lath" 
  :class="{'wayo-lath_icon':icon}"
  :style="extraStyles">
  <wayo-separator v-if="borderTop" absolute class="wayo-lath__separator-top"></wayo-separator>
  <wayo-icon class="wayo-lath__icon-head" v-if="icon"
    :class="{'wayo-lath__icon-head_middle':single_line_content&&!subtitle}" 
    :name="icon" 
    :color="iconColor"/>
  <slot name="head">
    <div class="wayo-lath__head" v-if="title||subtitle">
      <span class="wayo-lath__title" v-if="title">{{title}}</span>
      <span class="wayo-lath__subtitle" v-if="subtitle"
        :style="`margin-top:${title?5:0}px;`">{{subtitle}}</span>
    </div>
  </slot>
  <slot name="content">
    <div class="wayo-lath__content" v-if="content">
      <p class="wayo-lath__content-entity" ref="content_entity"
        :class="{'wayo-lath__content_single-line': single_line_content}"
        :style="`${content_oversize?`height:${contentMaxHeight}px;`:''}`">
        {{content_oversize?content_short:content}}
      </p>
      <p class="wayo-lath__content-action" ref="content_action" v-if="content_oversize"
        @click.stop="expandContent">
        {{contentExpandLabel}}
      </p>
    </div>
  </slot>
  <div class="wayo-lath__tail" v-if="tailIcon||tailLabel">
    <span class="wayo-lath__tail-label">{{tailLabel}}</span>
    <wayo-icon class="wayo-lath__tail-icon" v-if="tailIcon"
    :name="tailIcon" 
    :color="tailIconColor"/>
  </div>
  <wayo-separator v-if="borderBottom" absolute class="wayo-lath__separator-bottom"></wayo-separator>
</div>
</template>

<script>
import WayoSeparator from '@components/separator';
import WayoIcon from '@components/icon';

const CONTENT_FONT_SIZE = 13;
const CONTENT_LINE_HEIGHT = 17;

export default {
  name: `${APPNAME}Lath`,
  props: {
    /**
     * @prop 标题
     * @type {string|undefined}
     * @default ``
     */
    title: {
      type: String,
      default: undefined
    },
    /**
     * @prop 副标题
     * @type {string|undefined}
     * @default ``
     */
    subtitle: {
      type: String,
      default: undefined
    },
    /**
     * @prop 内容
     * @type {string}
     * @default ``
     */
    content: {
      type: String,
      default: ''
    },
    /**
     * @prop 内容文案的行数限制，超出部分隐藏并显示展开按钮
     * @type {number}
     * @default `3`
     */
    contentLineLimit: {
      type: Number,
      default: 3,
      validator: val => {
        return val>0&&val%1===0;
      }
    },
    /**
     * @prop 内容文案展开按钮的文案
     * @type {string}
     * @default `更多`
     */
    contentExpandLabel: {
      type: String,
      default: '更多'
    },
    /**
     * @prop 上描边
     * @type {boolean}
     * @default `true`
     */
    borderTop: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 下描边
     * @type {boolean}
     * @default `true`
     */
    borderBottom: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 头部图标
     * @type {string|undefined}
     * @default ``
     */
    icon: {
      type: String,
      default: undefined
    },
    /**
     * @prop 头部图标颜色
     * @type {string|undefined}
     * @default ``
     */
    iconColor: {
      type: String,
      default: undefined
    },
    /**
     * @prop 尾部图标
     * @type {string|undefined}
     * @default `undefined`
     */
    tailIcon: {
      type: String,
      default: undefined
    },/**
     * @prop 尾部图标颜色
     * @type {string|undefined}
     * @default `undefined`
     */
    tailIconColor: {
      type: String,
      default: undefined
    },
    /**
     * @prop 尾部标签文案
     * @type {string}
     * @default ``
     */
    tailLabel: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      single_line_content: true,
      content_short: '',
      content_oversize: false
    };
  },
  computed: {
    contentMaxHeight(){
      return CONTENT_LINE_HEIGHT*this.contentLineLimit;
    },
    extraStyles(){
      const Styles = [];
      let padding_right = 15;
      this.tailIcon&&(padding_right+=20);
      if(this.tailLabel){
        const HalfCharCount = /[\w\W\d]+/.test(this.tailLabel)?/([\w\W\d]+)/.exec(this.tailLabel)[1].toString().length:0;
        padding_right+=(13*this.tailLabel.length-HalfCharCount+Math.round(HalfCharCount/2)+10);
      }
      padding_right>15&&Styles.push(`padding-right:${padding_right}px;`);
      return Styles.join('');
    }
  },
  watch: {
    content(){
      this.adapteContent();
    }
  },
  mounted() {
    this.adapteContent();
  },
  methods: {
    adapteContent(){
      if(!this.content){
        return;
      }
      const RealHeight = this.$refs.content_entity.offsetHeight;
      // 单行
      if(RealHeight<=CONTENT_LINE_HEIGHT){
        return;
      }
      // 多行
      this.single_line_content = false;
      // 超出行数限制
      if(RealHeight>this.contentLineLimit*CONTENT_LINE_HEIGHT){
        this.content_oversize = true;
        this.content_short = this.content.substr(0,Math.floor(this.$refs.content_entity.offsetWidth/CONTENT_FONT_SIZE)*3-5)+'...';
      }
    },
    expandContent(){
      this.content_oversize = false;
    }
  },
  components: {
    WayoIcon,
    WayoSeparator
  }
};
</script>