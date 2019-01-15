<template>
<div class="wayo-block" v-on="$listeners">
  <wayo-separator v-if="borderFront" class="wayo-block__separator-top" absolute/>
  <slot></slot>
  <wayo-separator v-if="borderRear" class="wayo-block__separator-bottom" absolute/>
</div>
</template>

<script>
import WayoSeparator from '@/components/separator';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Block`,
  props: {
    borderFront: {
      type: Boolean,
      default: true
    },
    borderRear: {
      type: Boolean,
      default: true
    }
  },
  components: {
    WayoSeparator
  }
};
</script>