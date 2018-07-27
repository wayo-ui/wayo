<template>
<div class="ex" :class="{'sub':showHeader}">
  <header class="ex-header" v-show="showHeader">
    <div class="header-back" @click="onBack">
      <wayo-icon name="arrow-right" :size="20"/>
    </div>
    <span class="header-title">{{title}}</span>
  </header>
  <section class="ex-content">
    <router-view></router-view>
  </section>
</div>
</template>
<script>
import {COMPONENTS_NAME} from './_constants';
export default {
  computed: {
    title(){
      return COMPONENTS_NAME[this.$route.name]||this.$route.name;
    },
    showHeader(){
      return this.$route.name!=='home';
    }
  },
  methods: {
    onBack(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~@styles/common/index.scss';
.ex{
  max-width: 414px;
  margin: 0 auto;
  color: #333333;
  &.sub{
    padding-top: 50px;
  }
}
.ex-header{
  position: fixed;
  width: 100%;
  background-color: #fff;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 15px;
  height: 50px;
  line-height: 50px;
  box-shadow: 0px -1px 5px #5f5f5f;
  z-index: 99;
  .header-back{
    position: absolute;
    left: 5px;
    i{
      font-size: 35px;
      color: $color-grey-1 !important;
      @include transform(rotate(180deg));
    }
  }
}
.ex-content{
  padding: 15px;
}
</style>