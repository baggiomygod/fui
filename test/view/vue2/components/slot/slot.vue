<template>
<div class="slot">
  <h3>slot</h3>
  <child-slot>
    <h3 slot="header">这里可能是一个页面标题</h3>
    <p>没有设置name的被插入到没有slot属性的slot中</p>
    <p slot="footer" style="background-color:#eee;">这条被插入到name=footer的slot中</p>
    <p slot="content">插入到name="content"的solt中</p>
    <p>没有设置name的被插入到没有slot属性的slot中</p>
  </child-slot>
</div>

</template>
<script>
// import tpl from './slot.html';
import childSlot from './child.vue';
export default {
  // template: tpl,
  components: {
    'child-slot':childSlot
  }
}

</script>
<style lang="scss">

</style>
