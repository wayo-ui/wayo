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
const CONTENT_LINE_HEIGHT = 17;

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
      single_line_content: true,
      content_short: '',
      content_oversize: false
    };
  },
  computed: {
    contentMaxHeight(){
      return CONTENT_LINE_HEIGHT*this.contentLineLimit;
    },
    show(){
      const Result = this.content||(this.$slots.default&&this.$slots.default.length>0);
      this.$parent.hasContent = !!Result;
      return Result;
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
      if(!this.content||!this.$refs.content_entity){
        return;
      }
      this.$nextTick().then(() => {
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
      });
    },
    expandContent(){
      this.content_oversize = false;
    }
  }
};
</script>