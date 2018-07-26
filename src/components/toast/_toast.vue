<template>
<div class="wayo-toast" v-show="show"
  :class="{'wayo-toast_mask':mask}">
  <div class="wayo-toast__box">
    <wayo-icon v-if="type==='success'" name="smile" class="wayo-toast__icon"/>
    <wayo-icon v-else-if="type==='fail'" name="cry" class="wayo-toast__icon"/>
    <svg v-else-if="type==='loading'" width='42px' height='42px' transform="scale(0.6)">
      <circle id='wayo-toast__loading-path' cx='21' cy='21' r='20' stroke='#fff' fill='none' stroke-width='2'></circle>
    </svg>
    <div class="wayo-toast__content">
      <span v-if="typeof message === 'string'" class="wayo-toast__message">{{message}}</span>
      <template v-else>
        <span v-for="item in message" class="wayo-toast__message">{{item}}</span>
      </template>
    </div>
  </div>
</div>
</template>

<script>
import WayoIcon from '@/components/icon';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Toast`,
  props: {
    /**
     * @prop 类型
     * @type {string}
     * @default `text`
     */
    type: {
      type: String,
      default: 'text',
      validator: val => {
        return ['success','fail','text','loading'].indexOf(val) !== -1;
      }
    },
    /**
     * @prop 文案
     * @type {string|Array}
     * @default ``
     */
    message: {
      type: [String,Array],
      default: ''
    },
    /**
     * @prop 是否显示背景蒙层
     * @type {boolean}
     * @default `false`
     */
    mask: {
      type: Boolean,
      default: false
    },
    /**
     * @prop 显示
     * @type {boolean}
     * @default `false`
     */
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    WayoIcon
  }
};
</script>