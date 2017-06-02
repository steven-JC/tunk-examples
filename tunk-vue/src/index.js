import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import tunk from "tunk";
import tunkVue from "tunk-vue";
import routes from './pages/route';

Vue.use(VueRouter);
Vue.use(tunkVue(tunk));

var modules = require.context('./modules', true, /\.js$/);
modules.keys().forEach((item) => {
	console.log(item.replace(/\./, './modules')); 
	if(item.split('/').pop()[0]!=='_')
		modules(item);
});

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition;
	}
	else {
		const position = {};
		if (to.hash) {
			position.selector = to.hash;
		}
		if (to.matched.some(m => m.meta.scrollToTop)) {
			position.x = 0;
			position.y = 0;
		}
		return position;
	}
};

const router = new VueRouter({
	mode: 'history',
	scrollBehavior,
	routes,
});

const app = new Vue({
	router,
}).$mount('main');

