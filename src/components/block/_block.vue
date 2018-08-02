<template>
<div class="wayo-block" v-on="$listeners">
  <wayo-separator class="wayo-block__separator-top" absolute/>
  <slot></slot>
  <wayo-separator class="wayo-block__separator-bottom" absolute/>
</div>
</template>

<script>
import WayoSeparator from '@/components/separator';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Block`,
  components: {
    WayoSeparator
  }
};
</script>