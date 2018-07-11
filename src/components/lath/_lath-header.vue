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
export default {
  name: `${APPNAME}LathHeader`,
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
    }
  },
  computed: {
    show(){
      const Result = this.title||this.subtitle||(this.$slots.default&&this.$slots.default.length>0);
      this.$parent.hasHeader = !!Result;
      return Result;
    }
  }
};
</script>