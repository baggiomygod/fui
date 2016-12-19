// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import App from './App';
import flex from "components/flex/flexDice";
import animate from "components/animate/animation";
import css3d from "components/3d/css3d";
import 'commons/index.scss';
// 安装vue-router插件
Vue.use(VueRouter);
Vue.use(VueResource);
// 创建一个子类app
// let app=Vue.extend(App);

const router=new VueRouter({
	linkActiveClass: "active",
	routes:[
		{path:'/flex',component:flex},
		{path:'/anmiation',component:animate},
		{path:'/3D',component:css3d}
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
router.push('/flex');