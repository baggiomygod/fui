<template>
  <div id="app">
    <v-header :title="propsHeader"></v-header>
    <scroll-menus :config="menusConfig" @change-title="changeTitle"></scroll-menus>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import dices from './view/flexDice'
import header from './view/header/header';
import scrollMenus from './view/common/scrollMenus/scrollMenus';
const ERR_OK = 0;
export default {
  name: 'app',
  components: {
    "v-header": header,
    "scroll-menus": scrollMenus
  },
  data() {
    return {
      menusConfig:[
        {menu_name:'flex',url:'/flex'},
        {menu_name:'d3.js',url:'/d3js'},
        {menu_name:'vue2',url:'/vue2'},
        {menu_name:'animate',url:'/anmiation'},
        {menu_name:'3D',url:'/3D'},
      ],
      propsHeader: 'flex'
    }
  },
  methods: {
    changeTitle(event) {
      this.propsHeader = event;
    }
  }
}
</script>

<style lang="scss" type="stylesheet/scss">
</style>
