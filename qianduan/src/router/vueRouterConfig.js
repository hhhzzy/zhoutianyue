import Vue from 'vue';
import Router from 'vue-router';
import indexHead from '@/components/head.vue';
import allHead from '@/components/headTwo.vue';
import index from '@/views/index';
import conIndex from '@/views/con-index';
import orderList from '@/views/orderList';
import goodsList from '@/views/goods/goodsList.vue';
import cartList from '@/views/cart/cartList.vue';
import goodsDetail from '@/views/goods/goodsDetail.vue';
import login from '@/views/login.vue';
import mine from '@/views/mine.vue';
import register from '@/views/register.vue';


Vue.use(Router);
export default new Router({
		mode:'history',
		routes:[
			{
				path:'/',
//				name:'index',
				components:{
					indexHeader:indexHead,
					default:index
				}
			},
			{
				path:'/index',
//				name:'index',
				components:{
					indexHeader:indexHead,
					default:index
				}
			},
			{
				path:'/orderList',
//				name:'orderList',
				meta :{mustLogin:true},   //路由元信息，这个页面需要登录的状态量
				components:{
					orderHead:allHead,
					default:orderList
				}
			},
			{
				path:'/goodsList',
//				name:'goodsList',
//				components:{
////					goodsHead:allHead,
//					default:goodsList
//				},
				component:goodsList,
			},
			{
				path:'/goodsDetail/:id',
				component:goodsDetail
			},
			{
				path:'/cartList',
//				name:'cartList',
				meta :{mustLogin:true},   //路由元信息，这个页面需要登录的状态量
				components:{
					cartHead:allHead,
					default:cartList
				}
			},
			{
				path:'/mine',
				meta :{mustLogin:true},   //路由元信息，这个页面需要登录的状态量
				components:{
					cartHead:allHead,
					default:mine
				}
			},
			{
				path:'/login',
				component:login
			},
			{
				path:'/register',
				component:register
			}
//			{
//				path:'*',
//				redirect:'/goodsList'
//			}
		]
})
