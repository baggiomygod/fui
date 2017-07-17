<template>
	<div class="animate-wrapper container-wrap">
    <div class="img-wrap">
      <preview-imgs v-for="item in res" :key="item" :srcData="item.url"></preview-imgs>
    </div>
  </div>
</template>
<script>
  import previewImgs from '../common/previewImgs.vue';
  export default {
    name: 'animation',
    data(){
        return {
          res:[{url:'http://vueapp.oss-cn-shanghai.aliyuncs.com/meizu/note5.png'},
          {url:'http://vueapp.oss-cn-shanghai.aliyuncs.com/seller/meizuavatar.png'}]
        }
    },
    components:{
      previewImgs
    }
  }
</script>
<style lang="scss" type="stylesheet/scss">
.animate-wrapper{
  .img-wrap{
    display: flex;
    display: -webkit-flex;
  }
}

</style>
