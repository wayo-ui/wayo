<template>
<section>
  <h4>标题</h4>
  <wayo-lath title="标题"></wayo-lath>
  <wayo-lath class="item" subtitle="副标题"></wayo-lath>
  <wayo-lath title="标题" subtitle="副标题" class="item"></wayo-lath>
  <h4>内容</h4>
  <wayo-lath content="内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath>
  <wayo-lath class="item" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath>
  <wayo-lath class="item" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath>
  <h4>图标</h4>
  <wayo-lath icon="star-fill"></wayo-lath>
  <wayo-lath class="item" title="标题" icon="location"></wayo-lath>
  <wayo-lath title="标题" subtitle="副标题" class="item" icon="bus" icon-color="red"></wayo-lath>
  <wayo-lath class="item" icon="phone" title="标题" subtitle="副标题" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath>
  <h4>尾部</h4>
  <wayo-lath class="item" title="标题" icon="location" tail-icon="arrow-right"></wayo-lath>
  <wayo-lath class="item" title="标题" icon="location" tail-icon="arrow-right" tail-label="打开"></wayo-lath>
  <wayo-lath class="item" title="标题"  subtitle="副标题" icon="location" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" tail-icon="arrow-right" tail-label="打开"></wayo-lath>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.item{
  margin-top: 10px;
}
</style>