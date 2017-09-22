import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import tunk from "tunk";
import tunkVue from "tunk-vue";
import tunkIsolation from "tunk-isolation";
import tunkDebug from "tunk-debug";
import routes from './pages/route';


tunk.config({
	debug: location.href.indexOf('debug')>-1
}).use([
	tunkVue,
	tunkIsolation,
	tunkDebug
]);

console.log({tunk})

Vue.use(VueRouter);
Vue.use(tunk);

var modules_ = require.context('./modules', true, /\.js$/);
modules_.keys().forEach((item) => {
	console.log(item.replace(/\./, './modules')); 
	modules_(item);
});

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

