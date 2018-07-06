<template>
<section>
  <h4>标题</h4>
  <wayo-lath title="标题"></wayo-lath>
  <wayo-lath class="item" subtitle="副标题"></wayo-lath>
  <wayo-lath title="标题" subtitle="副标题" class="item"></wayo-lath>
  <h4>描边</h4>
  <wayo-lath title="标题" border-top border-bottom></wayo-lath>
  <h4>内容</h4>
  <wayo-lath content="内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath>
  <wayo-lath class="item" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath>
  <wayo-lath class="item" content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></wayo-lath>
  <h4>自定义内容</h4>
  <wayo-lath>
    <div slot="content" class="custom-content">
      <div class="custom-content__header">
        <span class="custom-content__uname">吃货甲</span>
        <div class="custom-content__rate">
          <span class="custom-content__date">4月2号</span>
          <wayo-rate :score="4.5" :size="12"/>
        </div>
      </div>
      <p class="custom-content__content">
        今天邀请石家庄来的宾客，就是工作餐了，现在不能大吃大喝自己请客也不能太破费，不降请客今天邀请石家庄来的宾客，就是工作餐了今天邀请石家庄来...
      </p>
      <wayo-flex-box class="custom-content__gallery">
        <wayo-flex-cell class="custom-content__showcase" :span="3">
          <wayo-image src="http://qcloud.dpfile.com/pc/s-MrVj_kK8JU0i3OfBTLlASXleG8GXUEkZLsklVH3uHtzJ2ui-GuL3NsET4yg0AAGybIjx5eX6WNgCPvcASYAw.jpg" :width="80"/>
        </wayo-flex-cell>
        <wayo-flex-cell class="custom-content__showcase" :span="3">
          <wayo-image src="http://qcloud.dpfile.com/pc/s-MrVj_kK8JU0i3OfBTLlASXleG8GXUEkZLsklVH3uHtzJ2ui-GuL3NsET4yg0AAGybIjx5eX6WNgCPvcASYAw.jpg" :width="80"/>
        </wayo-flex-cell>
        <wayo-flex-cell class="custom-content__showcase" :span="3">
          <wayo-image src="http://qcloud.dpfile.com/pc/s-MrVj_kK8JU0i3OfBTLlASXleG8GXUEkZLsklVH3uHtzJ2ui-GuL3NsET4yg0AAGybIjx5eX6WNgCPvcASYAw.jpg" :width="80"/>
        </wayo-flex-cell>
      </wayo-flex-box>
    </div>
  </wayo-lath>
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
.custom-content__header{
  font-size: 14px;
  line-height: 1;
  margin-bottom: 10px;
}
.custom-content__rate{
  float: right;
}
.custom-content__date{
  display: inline-block;
  vertical-align: middle;
  color: #5f5f5f;
}
.custom-content__content{
  font-size: 13px;
  margin-bottom: 10px;
}
.custom-content__showcase{
  font-size: 1px;
  line-height: 1;
}
</style>