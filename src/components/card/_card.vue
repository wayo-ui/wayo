<template>
<div class="wayo-card" v-on="$listeners">
  <wayo-separator class="wayo-card__separator-top" absolute/>
  <slot></slot>
  <wayo-separator class="wayo-card__separator-bottom" absolute/>
</div>
</template>

<script>
import WayoSeparator from '@/components/separator';
/**
 * @vue
 */
export default {
  name: `${APPNAME}Card`,
  components: {
    WayoSeparator
  }
};
</script>