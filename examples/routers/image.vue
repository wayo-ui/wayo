<template>
<section>
  <h4>默认</h4>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg"/>
  <h4>占位图</h4>
  <wayo-image src=""/>
  <wayo-image src="" placeholder="http://file.oa.sogou-inc.com/api/download.jspa?id=e51cbc57fbd33f2594c44fa6dff704eb&w=226"/>
  <h4>标签</h4>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" label="大排档"/>
  <h4>标签&说明</h4>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg"  label="大排档" info="284人推荐"/>
  <h4>超长标签</h4>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" label="南京大排档啊"/>
  <h4>自定义等宽</h4>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" :width="85"/>
  <h4>自定义宽高</h4>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" :width="85" :height="75"/>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss">

</style>