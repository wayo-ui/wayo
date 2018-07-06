<template>
<div class="wayo-card__header">
  <slot></slot>
  <wayo-separator class="wayo-card__separator-bottom" absolute/>
</div>
</template>

<script>
import WayoSeparator from '@components/separator';

export default {
  name: `${APPNAME}CardHeader`,
  components: {
    WayoSeparator
  }
}
</script>