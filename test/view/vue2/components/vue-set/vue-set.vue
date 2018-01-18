<template>
  <div class="v-set-wrap">
    <span class="set-item">{{data.name}}, {{data.list}}</span>
    <button @click="changeData">changeData</button>
  </div>
</template>
<script>
// 如果在实例创建之后添加新的属性到实例上，它不会触发视图更新
export default {
  data() {
    return {
      data: {
        name: 'vue',
        list: [1, 2, 3]
      }
    };
  },
  methods:{
    changeData(){
        // 修改name属性触发了视图更新，同时把数组的部分一起更新了。
        this.data.name = 'web...';

        // vue只监听了数组的splice,push,unshift等方法 直接赋值触发视图更新
        // this.data.list[0] = 'aaa';
        // this.data.list[1] = 'bbb';
        // this.data.list[2] = '333333';
        this.data.list.push('333333');
        this.$set(this.data.list, 1, 'bbb'); // $set方法可以响应式更新视图
        console.log(this.data);
    }
  },
  mounted(){}
};
</script>
<style lang="scss">
  .v-set-wrap{
    padding: 1rem;
  }
</style>
