<template>
  <div id="app">
    <f-portal></f-portal>
  </div>
</template>

<script>
import portal from './view/portal/portal';
export default{
  name: 'app',
  components:{
    'f-portal': portal
  }
}
</script>
<style lang="scss" type="stylesheet/scss">
</style>
