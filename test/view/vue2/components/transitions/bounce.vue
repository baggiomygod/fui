<template>
<div class="transition-wrap">
    <h3>bounce 03</h3>
    <div class="single-transition">
        <button class="btn" @click="show = !show">bounce</button>
        <transition name="bounce">
            <p v-if="show">bounce...</p>
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
                &:focus,&:active{
                    outline:none;
                }
            }
        }
        .bounce-enter-active {
            animation: bounce-in .5s;
        }
        .bounce-leave-active {
            animation: bounce-in .5s reverse;
        }
        @keyframes bounce-in {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }
    }
</style>