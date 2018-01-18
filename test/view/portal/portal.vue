<template>
  <div>
    <v-header :title="propsHeader"></v-header>
    <f-scroll-menus v-if="!showAllMenus"
                    :config="menusConfig"
                    @change-title="changeTitle"
                    @show-all-menus="changeMenus"></f-scroll-menus>
    <f-all-menus v-else
                :config="menusConfig"
                :menus-status="showAllMenus"
                @change-title="changeTitle"
                @show-all-menus="changeMenus"></f-all-menus>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from '../header/header';

const ERR_OK = 0;
export default {
  name: 'app',
  components: {
    "v-header": header,
  },
  data() {
    return {
      menusConfig:[
        {menu_name:'FUI',url:'/fui'},
        {menu_name:'flex',url:'/flex'},
        {menu_name:'d3.js',url:'/d3js'},
        {menu_name:'vue2',url:'/vue2'},
        {menu_name:'notes',url:'/web-notes'},
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
      this.showAllMenus = event;
    }
  }
}
</script>

<style lang="scss" type="stylesheet/scss">
</style>
