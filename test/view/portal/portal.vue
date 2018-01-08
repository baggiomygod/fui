<template>
  <div id="app">
    <v-header :title="propsHeader"></v-header>
    <scroll-menus v-if="!showAllMenus" :config="menusConfig" @change-title="changeTitle" @show-all-menus="changeMenus"></scroll-menus>
    <all-menus v-else :config="menusConfig" @change-title="changeTitle" @show-all-menus="changeMenus"></all-menus>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from '../header/header';
import scrollMenus from '../common/scrollMenus/scrollMenus';
import allMenus from '../common/allMenus/allMenus';

const ERR_OK = 0;
export default {
  name: 'app',
  components: {
    "v-header": header,
    "scroll-menus": scrollMenus,
    "all-menus":allMenus,
  },
  data() {
    return {
      menusConfig:[
        {menu_name:'FUI',url:'/fui'},
        {menu_name:'flex',url:'/flex'},
        {menu_name:'d3.js',url:'/d3js'},
        {menu_name:'vue2',url:'/vue2'},
        {menu_name:'animate',url:'/anmiation'},
        {menu_name:'3D',url:'/3D'},
        {menu_name:'pwa',url:'/pwa'},
        {menu_name:'webGL',url:'/webGL'},
        {menu_name:'canvas',url:'/canvas'},
        {menu_name:'app',url:'/app'},
      ],
      propsHeader: 'fui',
      showAllMenus:false
    }
  },
  methods: {
    changeTitle(event) {
      this.propsHeader = event;
    },
    changeMenus(event){
      this.showAllMenus=event;
    }
  }
}
</script>

<style lang="scss" type="stylesheet/scss">
</style>
