<template>
  <header>
    <h1 class="header-flex">{{header.name}}</h1>
  </header>
</template>

<script>
export default {
  name: 'header',
  props:{
    "title":{
      type:String
    }
  },
  data () {
    return {
      header: {
        name:this.title
      }
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

</style>
