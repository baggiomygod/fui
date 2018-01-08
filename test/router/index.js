import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
	node: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
