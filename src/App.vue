<template>
  <div id="app">
  <v-header :title="propsHeader"></v-header>
  <div class="tab">
    <div class="tab-item" @click="changeHeader"><router-link to="/flex" active-class="active" >{{navTitle[0]}}</router-link></div>
    <div class="tab-item" @click="changeHeader"><router-link to="/d3js" active-class="active" >{{navTitle[1]}}</router-link></div>
    <div class="tab-item" @click="changeHeader"><router-link to="/anmiation" active-class="active" >{{navTitle[2]}}</router-link></div>
    <div class="tab-item" @click="changeHeader"><router-link to="/3D" active-class="active" >{{navTitle[3]}}</router-link></div>
    <!-- <router-view v-bind:flexs="flexs" keep-alive></router-view> -->
   
  </div>
   <router-view  keep-alive></router-view>
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
      navTitle:["flex","D3","animation","css 3d"],
      propsHeader:'flex'
      }
  },
  methods:{
    changeHeader:function(e){
      let tarText=e.currentTarget.firstChild.innerText;
      this.propsHeader=tarText;
      console.log(this.propsHeader);
    }
  }
}
</script>

<style lang="scss" type="stylesheet/scss">
  .tab{
     height: 40px;
     display: flex;
    .tab-item{
        display: inline-block;
        line-height: 40px;
        flex:1;
        // width: 25%;
        float: left;
        font-weight: 200;
        .active{
          color:rgb(186,144,144);
          font-weight: 500;
        }
        a{
          font-size: 18px;
          text-decoration: none;
          color: rgb(77,85,93);
        }
    }
  }
</style>
