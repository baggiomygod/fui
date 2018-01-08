<template>
<div class="transition-wrap">
    <h3>slide fade 02</h3>
    <div class="single-transition">
        <button class="btn" @click="show = !show">slide fade</button>
        <transition name="slide-fade">
            <p v-if="show">slide fade...</p>
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
        }
        // 进入的动画
        .slide-fade-enter-active{
            transition:all .5s ease
        }
        // 离开的动画
        .slide-fade-leave-active{
            transition:all .8s ease;
        }
        .slide-fade-enter, // 进入时的状态
        .slide-fade-leave-to{ // 离开时的状态
            opacity:0;
            transform: translateX(10px);
        }
    }
</style>