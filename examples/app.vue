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
export default {
  computed: {
    title(){
      return this.$route.name?`${this.$route.name[0].toUpperCase()}${this.$route.name.substr(1)}组件`:'组件';
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