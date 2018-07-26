<template>
<div class="wayo-lath" 
  v-on="$listeners"
  :class="{
    'wayo-lath_icon':icon,
    'wayo-lath_content_header':hasHeader&hasContent,
    'wayo-lath_inline':inline
  }"
  :style="styles">
  <wayo-separator v-if="borderTop" absolute class="wayo-lath__separator-top"></wayo-separator>
  <wayo-icon class="wayo-lath__icon-head" v-if="icon"
    :name="icon" 
    :color="iconColor"
    :class="`wayo-lath__icon-head_${iconPosition}`"/>
  <slot></slot>
  <wayo-separator v-if="borderBottom" absolute class="wayo-lath__separator-bottom"></wayo-separator>
</div>
</template>

<script>
import WayoSeparator from '@/components/separator';
import WayoIcon from '@/components/icon';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Lath`,
  props: {
    /**
     * @prop 平铺布局
     * @type {boolean}
     * @default `false`
     */
    inline: {
      type: Boolean,
      default: false
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
     * @prop 头部图标定位
     * @type {string}
     * @default `middle`
     */
    iconPosition: {
      type: String,
      default: 'middle',
      validator: val => {
        return ['top','middle'].indexOf(val)!==-1;
      }
    }
  },
  data(){
    return {
      // 尾部信息，供tail子组件修改
      tail: {},
      // 是否含有header子组件，供header子组件修改
      hasHeader: false,
      // 是否含有content子组件，供content子组件修改
      hasContent: false
    };
  },
  computed: {
    /**
     * @computed styles
     * @type {string}
     */
    styles(){
      const Styles = [];
      let padding_right = 15;
      this.tail.icon&&(padding_right+=20);
      if(this.tail.label){
        const HalfCharCount = /[\w\W\d]+/.test(this.tail.label)?/([\w\W\d]+)/.exec(this.tail.label)[1].toString().length:0;
        padding_right+=(13*this.tail.label.length-HalfCharCount+Math.round(HalfCharCount/2)+10);
      }
      padding_right>15&&Styles.push(`padding-right:${padding_right}px;`);
      return Styles.join('');
    }
  },
  components: {
    WayoIcon,
    WayoSeparator
  }
};
</script>