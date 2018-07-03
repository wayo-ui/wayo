<template>
<div class="ex" :class="{'sub':showHeader}">
  <header class="ex-header" v-show="showHeader">
    <div class="header-back" @click="onBack">
      <wayo-icon name="arrow-right"/>
    </div>
    <span class="header-title">{{title}}</span>
  </header>
  <router-view></router-view>
</div>
</template>
<script>
import {COMPONENTS_NAME} from './_constants';
export default {
  computed: {
    title(){
      return COMPONENTS_NAME[this.$route.name];
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
  &.sub{
    padding-top: 70px;
  }
}
.ex-header{
  position: fixed;
  width: 100%;
  background-color: #fff;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 18px;
  letter-spacing: 3px;
  height: 60px;
  line-height: 60px;
  border-bottom: solid 1px #999;
  -webkit-box-shadow: 0px 1px 4px #ddd;
  box-shadow: 0px 1px 4px #ddd;
  .header-back{
    position: absolute;
    left: 5px;
    i{
      font-size: 35px;
      color: $color-light-grey !important;
      @include transform(rotate(180deg));
    }
  }
}
</style>