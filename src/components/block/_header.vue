<template>
<div class="wayo-block__header">
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
  name: `${APPNAME}BlockHeader`,
  components: {
    WayoSeparator
  }
};
</script>