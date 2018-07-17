<template>
<section class="">
  <wayo-button size="fit" class="action-btn" @click="showToast">基本用法</wayo-button>
  <wayo-button size="fit" class="action-btn" @click="showToastMask">遮罩</wayo-button>
  <wayo-button size="fit" class="action-btn" @click="showToastSuccess">成功提示</wayo-button>
  <wayo-button size="fit" class="action-btn" @click="showToastFail">失败提示</wayo-button>
  <wayo-button size="fit" class="action-btn" @click="showToastLoading">loading提示</wayo-button>
  <wayo-button size="fit" class="action-btn" @click="showToastMultiLines">多行文案</wayo-button>
</section>
</template>
<script>
export default {
  methods: {
    showToast(){
      this.$toast({
        type: 'text',
        mask: false,
        message: '操作成功',
        duration: 3000
      });
    },
    showToastMask(){
      this.$toast({
        type: 'text',
        mask: true,
        message: '操作成功',
        duration: 3000
      });
    },
    showToastSuccess(){
      this.$toast.success('操作成功');
    },
    showToastLoading(){
      this.$toast.loading('加载中');
    },
    showToastFail(){
      this.$toast.fail('操作失败');
    },
    showToastMultiLines(){
      this.$toast.success([
        '操作成功',
        '请按提示继续操作'
      ]);
    }
  }
};
</script>
<style lang="scss" scoped>
.action-btn{
  margin-bottom: 10px;
}
</style>