<template>
<section>
  <wayo-button size="fit" @click="showCommon">基本用法</wayo-button>
  <wayo-button size="fit" @click="showMask">自定义背景色</wayo-button>
  <wayo-button size="fit" @click="showCommonWithChange">change事件</wayo-button>
  <wayo-image-viewer v-show="show"
    :value="imageList"
    :mask-color="maskColor"
    :mask-opacity="maskOpacity"
    @close="show=false"
    @change="onChange"></wayo-image-viewer>
</section>
</template>

<script>
export default {
  data() {
    return {
      maskColor: '#000000',
      maskOpacity: 0.6,
      show: false,
      watchChange: false,
      imageList: [
        'https://dimg02.c-ctrip.com/images/fd/tg/g1/M08/2A/B7/CghzflVQaLiAb42iAAEtDg7AQxQ346_C_604_394_Q90.jpg',
        'https://dimg02.c-ctrip.com/images/fd/tg/g1/M05/2A/B7/CghzflVQaLmAWMv0AAEyAoZKHLY067_C_604_394_Q90.jpg',
        'https://dimg01.c-ctrip.com/images/fd/tg/g1/M04/C8/42/CghzflWwuoKAIaTcACkS3IfJui4633_C_604_394_Q90.jpg'
      ]
    }
  },
  methods: {
    showCommon(){
      this.show = true;
      this.watchChange = false;
    },
    showMask(){
      this.maskColor = '#333333';
      this.maskOpacity = 1;
      this.show = true;
      this.watchChange = false;
    },
    showCommonWithChange(){
      this.show = true;
      this.watchChange = true;
    },
    onChange(index){
      if(this.watchChange){
        this.$toast({
          type: 'text',
          mask: false,
          message: `当前展示索引值:${index}`,
          duration: 1000
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wayo-button{
  margin-bottom: 10px;
}
</style>