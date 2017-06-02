
import UA from 'ua-parser-js';

console.log((new UA()).getResult());

export default [
    { path: '/', component:  require('./App.vue') },
    { path: '/app', component:  require('./App.vue') },
    { path: '/counter', component: function(resolve){ require.ensure([], function(){resolve(require('./Counter.vue'));});}},
    { path: '*', redirect: '/app'}
];

