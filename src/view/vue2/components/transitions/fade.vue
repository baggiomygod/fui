<template>
<div class="transition-wrap">
    <h3> fade 01</h3>
    <div class="single-transition">
        <button class="btn" @click="show = !show">fade</button>
        <transition name="fade">
            <p v-if="show">hello vue2...</p>
        </transition>
    </div>
</div>
</template>
<script>
    export default{
        data() {
            return {
                show: true
            }
        }
    }
</script>
<style lang="scss" type="stylesheet/scss">
    .transition-wrap{
        h3{
            padding:5px;
        }
        font-size: 0.4rem;
        .single-transition{
            .btn{
                width: 1.5rem;
                height: .5rem;
                font-size: 0.3rem;
                background-color:#3e98f0;
                border-radius:.1rem;
                color:#fff;
                box-sizing:border-box;
            }
            .fade-enter-active, // 定义过渡的状态。在元素整个过程中作用，在元素被插入时生效，在transition/animation完成之后移除。
            .fade-leave-active{ // 同上。v-leave-active、v-enter-acitve可以被 用来定义过渡过程时间、延迟和曲线函数
                transition:opacity 1s
            }
            .fade-enter, // 定义进入过渡的开始状态。在元素被插入时生效，在下一帧移除
            .fade-leave-to{ // v2.1.8版本及以上，定义离开过渡的结束状态，在离开过渡被处罚一帧后生效，在transition/animation完成后移除。（v-leave被删除）
                opacity:0
            }
        }
        
    }
</style>