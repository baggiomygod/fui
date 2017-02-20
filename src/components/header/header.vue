<template>
  <header>
    <h1 class="header-flex">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'header',
  props:{
    "title":{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background-color: rgbs(7,17,27,0.8);
}
h1, h2 {
  font-weight: normal;
  text-align: center;
}
.header-flex{
  font-size: 1rem;
}

</style>
