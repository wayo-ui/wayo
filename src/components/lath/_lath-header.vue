<template>
<div class="wayo-lath__head" v-on="$listeners" v-if="show">
  <slot>
    <span class="wayo-lath__title" v-if="title">{{title}}</span>
    <span class="wayo-lath__subtitle" v-if="subtitle"
      :style="`margin-top:${title?5:0}px;`">{{subtitle}}</span>
  </slot>
</div>
</template>

<script>
/**
 * @vue
 */
export default {
  name: `${APPNAME}LathHeader`,
  props: {
    /**
     * @prop 标题
     * @type {string}
     * @default ``
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * @prop 副标题
     * @type {string}
     * @default ``
     */
    subtitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    /**
     * @computed 显示状态
     * @type {boolean}
     */
    show(){
      const Result = !!(this.title||this.subtitle||(this.$slots.default&&this.$slots.default.length>0))||false;
      this.$parent.hasHeader = !!Result;
      return Result;
    }
  }
};
</script>