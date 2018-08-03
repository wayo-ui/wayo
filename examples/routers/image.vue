<template>
<section class="sec">
  <p class="title">默认</p>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg"/>
  <p class="title">占位图</p>
  <wayo-image src=""/>
  <wayo-image src="" placeholder="http://file.oa.sogou-inc.com/api/download.jspa?id=e51cbc57fbd33f2594c44fa6dff704eb&w=226"/>
  <p class="title">标签</p>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" label="大排档"/>
  <p class="title">标签&说明</p>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg"  label="大排档" info="284人推荐"/>
  <p class="title">超长标签</p>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" label="南京大排档啊"/>
  <p class="title">剪裁</p>
  <wayo-image clip src="http://p1.meituan.net/mogu/7d547d130e0ebc354541e65d90d991ad139389.jpg%40278w_200h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"/>  
  
  <p class="title">自定义等宽</p>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" :width="85"/>
  <p class="title">自定义宽高</p>
  <wayo-image src="http://p0.meituan.net/mogu/a7e9151a33eafeed61517e204693ed23236269.jpg" :width="85" :height="75"/>
</section>
</template>
<script>
export default {

};
</script>
<style lang="scss">

</style>