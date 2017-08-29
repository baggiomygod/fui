// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import App from './App';
import flex from "view/flex/flexDice";
import animate from "view/animate/animation";
import css3d from "view/3d/css3d";
import d3 from "view/d3/d3";
import vue2 from "view/vue2/vue2";
import pwa from "view/pwa/pwa";
import search from "view/search/search";
import 'commons/style/index.scss';
import './main.scss';
import 'static/css/icon_font/iconfont.css';// 引入图标库
// 安装vue-router插件
Vue.use(VueRouter);
Vue.use(VueResource);
// 创建一个子类app
// let app=Vue.extend(App);

const router=new VueRouter({
	linkActiveClass: "active",
	routes:[
		{path:'/flex',component:flex},
		{path:'/d3js',component:d3},
		{path:'/anmiation',component:animate},
		{path:'/3D',component:css3d},
		{path:'/vue2',component:vue2},
		{path:'/pwa',component:pwa},
		{path:'/search',component:search}
			]
		});

const app=new Vue({
	el:'#app',
	router,
	render:h => h(App) // render是vue里面实现渲染dom的函数，这句话目的是渲染这个app实例。
	// template:"<App/>",
	// components:{App}
});
// 打开的默认路径
router.push('/vue2');