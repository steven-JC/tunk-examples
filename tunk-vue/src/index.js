import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import tunk from "tunk";
import tunkVue from "tunk-vue";
import routes from './pages/route';

Vue.use(VueRouter);
Vue.use(tunkVue(tunk));

var modules = [];
var modules_ = require.context('./modules', true, /\.js$/);
modules_.keys().forEach((item) => {
	console.log(item.replace(/\./, './modules')); 
	modules.push(modules_(item));
});

tunk.create(modules, {isolate: 'shallow'});

const routes_ = JSON.parse(JSON.stringify(routes));
routes_.forEach((it)=>{
	it.component = require('./pages/' + it.component);
});

const router = new VueRouter({
	routes:routes_
});

const app = new Vue({
	router,
}).$mount('main');

