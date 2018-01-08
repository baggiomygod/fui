<template>
    <div class="img-move">
        <img class="move-img" src="/static/images/WX20170824113700.png" alt="">
    </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" type="stylesheet/scss">
    .img-move{
        position: relative;
        width: 300px;
        height: 200px;
        margin: 0 auto;
        overflow: hidden;
        .move-img{
            position: absolute;
            left: 0;
            height: inherit;
            &:hover{
                right: 0;
            }
        }
        // .move-img:hover{
        //         right: 0;
        //     }
    }
</style>