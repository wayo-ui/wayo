<template>
  <button :class="type">
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
     * @default primary
     */
    type: {
      type: String,
      default: 'primary',
      validator: val => {
        return ['primary','info','success','warning','danger'].indexOf(val)!==-1;
      }
    },
    /**
     * @prop 尺寸
     * @type {string}
     * @default middle
     */
    size: {
      type: String,
      default: 'middle',
      validator: val => {
        return ['middle','large','small','mini','expand'].indexOf(val)!==-1;
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