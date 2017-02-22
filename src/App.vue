<template>
  <div id="app">
  <v-header :title="propsHeader"></v-header>
  <div class="tab">
    <div class="tab-item" @click="changeHeader"><router-link to="/flex" active-class="active" >{{navTitle[0]}}</router-link></div>
    <div class="tab-item" @click="changeHeader"><router-link to="/d3js" active-class="active" >{{navTitle[1]}}</router-link></div>
    <div class="tab-item" @click="changeHeader"><router-link to="/anmiation" active-class="active" >{{navTitle[2]}}</router-link></div>
    <div class="tab-item" @click="changeHeader"><router-link to="/3D" active-class="active" >{{navTitle[3]}}</router-link></div>   
  </div>
  <keep-alive>
     <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
// import dices from './components/flexDice'
import header from './components/header/header'
const ERR_OK=0;
export default {
  name: 'app',
  components: {
    "v-header":header
  },
  data() { 
    return {
      navTitle:["flex","d3.js","animation","css 3d"],
      propsHeader:'d3'
      }
  },
  methods:{
    changeHeader:function(e){
      let tarText=e.currentTarget.firstChild.innerText;
      this.propsHeader=tarText;
    }
  }
}
</script>

<style lang="scss" type="stylesheet/scss">
  @import "commons/style/mixin.scss";
  .tab{
     height: 1rem;
     display: flex;
    .tab-item{
        display: inline-block;
        line-height: 1rem;
        flex:1;
        float: left;
        font-weight: 200;
        .active{
          color:rgb(186,144,144);
          font-weight: 500;
        }
        a{
          font-size: 0.5rem;
          color: rgb(77,85,93);
        }
    }
  }
</style>
