// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由
import router from './router/vueRouterConfig.js'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI,{size:'small'})
//引入头部、底部组件
import heading from "./components/head.vue"
import headTwo from "./components/headTwo.vue"
import proHeader from "./components/proHeader.vue"
import footering from "./components/footer.vue"
import shalter from "./components/shalter.vue"
Vue.component('heading',heading); //定义Vue上面有这样一个组件
Vue.component('footering',footering); //定义Vue上面有这样一个组件
Vue.component('headTwo',headTwo); //定义Vue上面有这样一个组件
Vue.component('proHeader',proHeader); //定义Vue上面有这样一个组件
Vue.component('shalter',shalter); //定义Vue上面有这样一个组件
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);
//引入store
import store from './store/index.js'
//切换效果
const history = window.sessionStorage;
history.clear();
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);
history.setItem('/index', 1);
history.setItem('/orderList', 2);
history.setItem('/goodsList', 3);
history.setItem('/cartList', 4);
router.beforeEach(function (to, from, next) {    //to.path:即将进入的路由   from.path:当前离开的路由
	const toIndex = history.getItem(to.path);
	const fromIndex = history.getItem(from.path);
	if (toIndex) {   
	    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
	      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
	    } else {
	      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
	    }
	} else {   //同级路由，前进
	    ++historyCount;
	    history.setItem('count', historyCount);
	    to.path !== '/'  &&  history.setItem(to.path, historyCount);
	    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
	}
    next()
});

//引入axios
import axios from 'axios'
//使用get获取本地的数据文件时候，应该把文件放在static文件夹里面，这个文件夹是vue-cli创建时候暴露的文件夹
Vue.prototype.$http = axios; //把axios放到vuex的原型上面,
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
	store.dispatch('showLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
	store.dispatch('hideLoading');
  return response;
}, function (error) {
  return Promise.reject(error);
});
//加载自定义组件
import Loading from "./components/Loading"
Vue.use(Loading);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  heading,
  headTwo,
  footering,
  store,
  template: '<App/>',
  components: { App }
})
