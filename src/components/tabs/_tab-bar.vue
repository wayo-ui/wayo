<template>
<div class="wayo-tab-bar" 
  :class="{
    'wayo-tab-bar_stripe':stripe,
    'wayo-tab-bar_active':active
  }"
  @click="onClick"
  v-on="$listeners">
  <slot>
    <wayo-icon v-if="icon" :name="icon" class="wayo-tab-bar__icon"/>
    <label class="wayo-tab-bar__label">{{label}}</label>
  </slot>
</div>
</template>

<script>
import WayoIcon from '@/components/icon';
/**
 * @vue
 */
export default {
  name: `${APPNAME}TabBar`,
  props: {  
    /**
     * @prop 文案
     * @type {string}
     * @required
     */
    label: {
      type: String,
      required: true
    },
    /**
     * @prop 图标
     * @type {string}
     * @default ``
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * @prop 名称
     * @type {string}
     * @required
     */
    name: {
      type: String,
      required: true
    },
    /**
     * @prop stripe风格
     * @type {boolean}
     * @default `false`
     */
    stripe: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 是否激活状态
     * @type {boolean}
     * @default `false`
     */
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(){
      this.$emit('clicked',this.name);
    }
  },
  mounted(){
    // 非stripe格式待渲染完毕之后获取自身offset和宽度，并同步到父组件
    if(!this.stripe){
      this.$nextTick().then(() => {
        const Box = this.$el.getBoundingClientRect();
        this.$emit('update',this.name,{
          offset: Box.left,
          width: Box.width
        });
      });
    }
  },
  components: {
    WayoIcon
  }
};
</script>