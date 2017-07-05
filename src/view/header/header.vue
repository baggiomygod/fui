<template>
  <header class="app-header">
    <h1 class="header-flex">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: {
    "title": {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
  position: relative;
  overflow: hidden;
  /*padding: 10px 0;*/
  height: 1.5rem;
  background-color: #3e98f0;
  .header-flex {
    font-size: 1rem;
  }
}

h1,
h2 {
  line-height: 1.5rem;
  font-weight: normal;
  text-align: center;
  color: #fff;
}
</style>
