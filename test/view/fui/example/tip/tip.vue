<template>
<transition name="slide-right">
      <div class="tip-warp">
        <f-close :close-type="'header'"></f-close>
        <div class="tip-item">
          <p class="tip exam-tip" v-tip.dark="tempTip">参考 tips</p>
        </div>
        <div class="tip-item" v-simple-tip.dark.bottom="contentTest">
          <i class="tip icon iconfont icon-xiangxia2"></i>
        </div>
        <div class="tip-item" v-simple-tip.light.right="contentTest">
          <i class="tip icon iconfont icon-xiangyou1"></i>
        </div>
        <div class="tip-item" v-simple-tip.light.left="contentTest">
          <i class="tip icon iconfont icon-xiangzuo1"></i>
        </div>
        <div class="tip-item" v-simple-tip.light.top="contentTest">
          <i class="tip icon iconfont icon-xiangshang2"></i>
        </div>
      </div>
</transition>
</template>
<script>
export default {
  data() {
    return {
      tempTip: {
        title: '标题',
        width: '200px',
        content: `
      platform_dw.platform_dw_shop_embedding_base_food
    `,
        theme: 'dark'
      },
      contentTest: {content: 'test'}
    };
  },
  components:{},
  methods: {}
};
</script>
<style lang="scss" rel="stylesheet/scss">
.tip-warp{
    // position: relative;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-flow: column nowrap;
    transition: .3s ease-out;
    &.slide-right-enter,
    &.slide-right-leave-to{
      transform:translate(0, 100%);
    }
    .tip-item{
      // position: absolute;
      display: block;
      margin: 20px auto;
      .tip{
        margin: 15px;
        font-size: 24px;
        color: #333;
      }
    }
}


</style>


