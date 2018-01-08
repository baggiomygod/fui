import Vue from 'vue';
import VueRouter from "vue-router";
import router from './router';
import VueResource from 'vue-resource';
import App from './App';
import directives from '../src/directives';

import 'commons/style/index.scss';
import './main.scss';
import 'static/css/icon_font/iconfont.css';// 引入图标库
// 安装vue-router插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(directives);

// 创建一个子类app
// let app=Vue.extend(App);

const app=new Vue({
	el:'#app',
	router,
	render:h => h(App) // render是vue里面实现渲染dom的函数，这句话目的是渲染这个app实例。
	// template:"<App/>",
	// components:{App}
});
// 打开的默认路径
router.push('/fui');
