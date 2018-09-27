<template>
<div class="wayo-lath__content" v-on="$listeners" v-if="show">
  <slot>
    <p class="wayo-lath__content-entity" ref="content_entity"
      :class="{'wayo-lath__content_single-line': single_line_content}"
      :style="`${content_oversize?`height:${contentMaxHeight}px;`:''}`">
      {{content_oversize?content_short:content}}
    </p>
    <p class="wayo-lath__content-action" ref="content_action" v-if="content_oversize"
      @click.stop="expandContent">
      {{contentExpandLabel}}
    </p>
  </slot>
</div>
</template>

<script>
const CONTENT_FONT_SIZE = 13;
const CONTENT_LINE_HEIGHT = 21;
/**
 * @vue
 */
export default {
  name: `${APPNAME}LathContent`,
  props: {
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
    }
  },
  data(){
    return {
      // 是否为单行文案
      single_line_content: false,
      // 超出行数限制时多行文案的缩减版
      content_short: '',
      // 是否超出行数限制
      content_oversize: false
    };
  },
  computed: {
    /**
     * @computed 多行文案的高度上限
     * @type {number}
     */
    contentMaxHeight(){
      return CONTENT_LINE_HEIGHT*this.contentLineLimit;
    },
    /**
     * @computed 显示状态
     * @type {boolean}
     */
    show(){
      const Result = !!(this.content||(this.$slots.default&&this.$slots.default.length>0));
      return Result;
    }
  },
  watch: {
    content(){
      this.adapteContent();
    },
    show(val){
      this.$parent.hasContent = !!val;
    }
  },
  mounted() {
    this.adapteContent();
  },
  methods: {
    /**
     * @method adapteContent 适配多行文案
     */
    adapteContent(){
      if(!this.content||!this.$refs.content_entity){
        return;
      }
      this.$nextTick().then(() => {
        const RealHeight = this.$refs.content_entity.offsetHeight;
        // 单行
        if(RealHeight<=CONTENT_LINE_HEIGHT){
          this.single_line_content = true;
          return;
        }
        // 多行
        this.single_line_content = false;
        // 超出行数限制
        if(RealHeight>this.contentLineLimit*CONTENT_LINE_HEIGHT){
          this.content_oversize = true;
          const MaxWidth = Math.floor(this.$refs.content_entity.offsetWidth*3);
          if(/[^\x00-\xff]/.test(this.content)){
            let width = 0;
            let index = 0;
            while(width<MaxWidth){
              if(/[^\x00-\xff]/.test(this.content[index])){
                width+=CONTENT_FONT_SIZE;
              }else{
                width+=CONTENT_FONT_SIZE*0.5;
              }
              index++;
            }
            this.content_short = this.content.substr(0,index-10)+'...';
          }else{
            this.content_short = this.content.substr(0,Math.floor(MaxWidth/CONTENT_FONT_SIZE-10))+'...';
          }
        }
      });
    },
    /**
     * @method expandContent 展开多行文案
     */
    expandContent(){
      this.content_oversize = false;
    }
  }
};
</script>