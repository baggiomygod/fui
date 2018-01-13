<template>
  <div id="app">
    <f-portal></f-portal>
  </div>
</template>

<script>
import Vue from 'vue'
import portal from './view/portal/portal';
// import Components from 'vue-class-component';
// @Components({})
export default {
  name: 'app',
  components:{
    'f-portal': portal
  }
}
</script>
<style lang="scss" type="stylesheet/scss">
</style>
