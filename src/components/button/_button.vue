<template>
  <button 
    :class="`wayo-button wayo-button-${type} wayo-button_size_${size} ${disabled?'wayo-button_disabled':''}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: `${APPNAME}Button`,
  props: {
    /**
     * @prop 类型
     * @type {string}
     * @default default
     */
    type: {
      type: String,
      default: 'default',
      validator: val => {
        return ['default','primary','info','success','warning','danger'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 尺寸
     * @type {string}
     * @default normal
     */
    size: {
      type: String,
      default: 'normal',
      validator: val => {
        return ['normal','large','small','mini','fit'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 禁用状态
     * @type {boolean}
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 加载状态
     * @type {boolean}
     * @default false
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 图标
     * @type {string}
     * @default ''
     */
    icon: {
      type: String,
      default: ''
    }
  },
  data(){
    return {};
  },
  mounted(){

  },
  methods: {}
}
</script>