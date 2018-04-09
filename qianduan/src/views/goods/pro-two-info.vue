<template>
  	<ul class="subProList">
	    <li v-for=" good in goods ">
	        <router-link :to=" '/goodsDetail/' + good.id"><span class="uImg left"><img v-bind:src="good.imgUrl" alt="" /></span></router-link>
	        <div class="right textBox">
	           <p class="p1">{{good.name}}</p> 
	           <p class="p2">原装进口 十月才到期哦 </p>
	           <div class="left">
	           	 <p class="money"><strong>￥{{good.pics}}</strong></p>
	           	<p class="sold "><span>数量：{{good.kc}}</span></p>
	           </div>
	           <el-button class="right" type="primary" @click="addCart(good)">加入购物车</el-button>
	        </div><!-- textBox -->
	    </li>
  	</ul>
</template>

<script>
	/*
	 *    点击商品列表页左边的列表时，右边的商品跟着改变：通过watch监听$route的变化，改变右边的数据
	 *
	 *
	 *
	 *
	 */
	export default{
		data(){
			return{
				goods:[],
			}
		},
		props:{
			goodsList:''
		},
		methods:{
			fetchData(){   //路由参数改变，查询出不同的商品
				var classify = this.$route.params.name;
				var _this = this;
				this.$http.get('/api/goods')
				.then(function(res){
					_this.goods = [];
					for(var i = 0;i < res.data.data.length;i++){
						for(let ind in res.data.data[i]){
							if(classify == res.data.data[i][ind]){
								_this.goods.push(res.data.data[i]);
							}
						}
					}
				})
				.catch(function(err){
					console.log(err);
				});
			},
			addCart(obj){
				this.$store.dispatch('add_cart',{obj});
			}
		},
		watch:{
			"$route":"fetchData"  //通过监听$route的变化，触发fetchData函数，改变右边的数据
//			"$route"(to,from){
//				console.log(this.$route.params.name);
//			}
		},
		mounted(){
			var _this = this;
			this.$http.get('/api/goods')
			.then(function(res){
				_this.goods = [];
				for(var i = 0;i < res.data.data.length;i++){
					for(let ind in res.data.data[i]){
						if(_this.goodsList == res.data.data[i][ind]){
							_this.goods.push(res.data.data[i]);
						}
					}
				}
			})
			.catch(function(err){
				console.log(err);
			});
			
		}
	}
</script>

<style scoped>
	/*.subMenuList{position: fixed;}*/
	.fixed{position: fixed;}
	.subProList {width: 100%;padding-left: 32%;margin-bottom: 0.9rem;margin-top: 55px;}
	.classify-list{overflow: hidden;}
	.classify-list dt{font-size: 0.26rem;color: #999;margin: 0.3rem 0;float: left;width: 100%;margin-left: 0.34rem;}
	.classify-list dd{width: 33%;float: left;text-align: center;margin-bottom: 0.35rem;}
	.classify-list span{font-size:0.24rem;display: block; }
	.classify-list dd img{width: 100%;}
	.subProList{width: 100%; padding-left: 32%;margin-bottom: 0.9rem;}
	.subProList li{width: 100%; border-bottom: 1px solid #dedede; font-size: 0.26rem;overflow: hidden;margin-bottom: 10px;padding-bottom: 5px;}
	.subProList li .uImg{display: block; overflow: hidden; position: relative; width: 28.4%; padding: 14.2% 0;}
	.subProList li .uImg img{display: block; width: 100%; position: absolute; left: 0; top: 0;}
	.subProList li .textBox{width: 68%;position: relative;}
	.subProList li .add-dec{position: absolute;right: 0;top: 1rem;}
	.subProList li .p1,
	.subProList li .p2{font-size: 0.26rem;height: 1.4em; line-height: 1.4em; text-overflow:ellipsis; white-space: nowrap; overflow: hidden;}
	.subProList li .p2{margin-bottom: 2%; color: #999999;font-size: 0.22rem;}
	.subProList li .money strong{font-size: 0.3rem; color: #f26727;}
	.subProList li .money span{font-size: 0.22rem;color: #adabab; font-size: 0.86em; text-decoration: line-through; margin-left: 2%;}
	.subProList li .sold{font-size: 0.26rem; color: #b2b2b2;}
	.subProList li .sold span{color: #ff8a00; font-size: 0.26rem; margin-top: -2.5%;} 
</style>