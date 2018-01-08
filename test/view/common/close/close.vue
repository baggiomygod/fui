<template>
  <div class="close-wrap" @click="back">
    <i class="close icon iconfont icon-xiangzuo1"></i>
  </div>
</template>
<script>
export default {
  props:{
    // category:{

    // }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="scss" type="stylesheet/scss">
 .close-wrap{
      position: fixed;
      display: inline-block;
      top: 0;
      left: 0;
      padding: 3px;
      font-size: .5rem;
      .close{
        font-size: .5rem;
        color: #3e98f0;
        cursor: pointer;
      }
    }

</style>
