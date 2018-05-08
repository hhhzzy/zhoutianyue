<template>
	<div class="pro-two">
		<headTwo title="商品列表"></headTwo>
		<pullToRefresh @refresh="refresh"></pullToRefresh>
		<div class="goods-box" style="position: relative;">
	  		<div class="classify-search-box fixed-box">
	  			<div class="classify-search clear">
	  				<span class="search-btn">
	  					<img src="../../assets/images/search.png" alt="">
	  				</span>
	  				<input type="text" placeholder="输入关键词搜索">
	  			</div>
	  		</div>
			<ul class="subMenuList jSubMenuList fixed-box" >
				<li v-for=" (item,index) in  proData"  @click="addCurrent(index)" v-bind:class="cur == index ? 'current':false  ">
					<p v-on:click="fetchGoods(item.type)">{{item.type}}</p>
				</li>
	      	</ul><!-- subMenuList -->
	      	<ul class="subProList">
			    <li v-for = " item in goods "> 
			        <router-link :to=" '/goodsDetail/'+item._id " class="left">
			        	<span class="uImg"><img  :src="item.path" alt="" /></span>
			        </router-link>
			        <div class="right textBox">
			           <p class="p1">{{item.goodsName}}</p> 
			           <p class="p2">{{item.oneTitle}} </p>
			           <div class="left">
			           	 <p class="money"><strong>￥{{item.salePrice}}</strong></p>
			           	<p class="sold "><span>数量：{{item.num}}</span></p>
			           </div>
			        </div><!-- textBox -->
			         <el-button class="add-cart" type="primary" @click="addCart(item)">加入购物车</el-button>
			    </li>
			    <scroll-to-refresh @refreshData="refreshData" ></scroll-to-refresh>
		  	</ul>
			<div v-if="tipsShow" class="footer-tips">已经到底了....</div>
	      	<router-view :goodsList="proData[0]"></router-view>
      </div>
	</div>
  	
</template>

<script>
	import pullToRefresh from "../../components/pullToRefresh.vue" //下拉刷新
	import scrollToRefresh from "../../components/scrollToRefresh" //滚动到底部自动加载数据
	import http from "../../api/api.js"
	export default{
		data(){
			return{
				proData:[],
				cur:0,
				fixed:false,
				ele:null,
				dataOk:true,//判断是否所有数据都已加载完成
				tipsShow:false,
				goods:[],
				goodsType:null,
				limit:8,//每页加载的条数
				page:1//当前的页码数
			}
		},
		components:{
			"pullToRefresh":pullToRefresh,
			"scroll-to-refresh":scrollToRefresh
		},
		methods:{
			//添加current
			addCurrent(ind){
				var _this = this;
				this.cur = ind;
			},
			//获取商品分类
			fetchGoodsType(){
				var _this = this;
				this.$http.post("http://localhost:3002/api/goodsType")
					      .then(function(res){
					      		_this.goodsType = res.data.data[0].type;
					      		_this.proData = res.data.data;
					      		//第一次加载右侧商品列表页
								_this.fetchData(_this.goodsType);
					      })
					      .catch(function(err){
					      		console.log(err);
					      })
			},
			//加载右侧商品列表页
			fetchData(){
				var _this = this;
				var limit = this.limit;//每页加载的条数
				var page = this.page;//当前的页码数
				this.$http.post("http://localhost:3002/api/goods",{
								goodsType : this.goodsType,
								limit : limit,
								page : page
						  })
					      .then(function(res){
								res.data.data.forEach(function(value,key,arr){
									_this.goods.push(value)
								})
								//判断数据是否加载完成了
								if(res.data.data == ""){
									_this.dataOk = false;
								}
					      })
					      .catch(function(err){
					      		console.log(err);
					      })
			},
			//点击左侧商品类别获取商品
			fetchGoods:function(goodsType){
				this.goodsType = goodsType;  //重置商品类型
				this.goods = [];  //重置商品种类
				this.page = 1;//重置查询页数
				this.dataOk = true;
				this.tipsShow = false;
				this.fetchData();
			},
			refresh(resolve){//子组件传过来的参数（函数），执行成功之后告知子组件我执行完了
				resolve();
			},
			refreshData(resolve){//滚动的到底部的组件告诉我要刷新数据了
				if(this.dataOk){
					this.page++;
					this.fetchData();
				}else{
					this.tipsShow = true;
				}
				resolve(); //数据刷新成功，执行这个函数说明子组件分发的函数已经加载了
			},
			//加入购物车
			addCart(good){
				var obj = good;
				var _this = this;
				//把数据存入cart表	
				http.post('http://localhost:3002/api/addCart',{
						goodsId : obj._id
				  	})
					.then(function(res){
						console.log(_this.$store)
						//判断用户是否登录，登录了才能够加入购物车，没登录跳到登录页面
						if(localStorage.logined){
							_this.$store.dispatch("add_cart",{obj});
						}else{
							_this.$router.push({
								path:"/login",
								query:{redirect:_this.$route.fullPath} //把当前页面的地址带过去，登录成功后返回当前页面
							});
						}
						
					});
					
				
			}
		},
		mounted(){
			this.fetchGoodsType();//获取商品分类
		}
	}
</script>

<style scoped>
.footer-tips{font-size: 0.25rem;text-align: center;height: 50px;line-height: 50px;width: 68%;margin-bottom: 0.9rem;margin-left: 32%;}
.goods-box{background-color: #fff;}
.add-cart{margin-left: 0.9rem;}
/****************************  分类页面  *******************************/
.pro-two{position: relative;}
.subMenuList{height: 100%;position: fixed; left: 0; top: 1.7rem; width: 30%; background: #efefef; overflow: auto;/*margin-top: 1.7rem;*/float: left;}
.fixed{position: fixed;}
.subMenuList li a{color: #666;display:block;}
.subMenuList li{height: 3.54em; line-height: 3.54; font-size: 0.26rem; text-align: center;}
.subMenuList .current{background: #fff; border-left: 0.45em solid #ff8a54; text-indent: -0.45em;}
.search-header{width: 3.6rem;margin: 0.22rem 0 0 1.12rem;}
.search-header input{display: block;float: left;width: 3rem;height: 100%;background-color: transparent;border: none;padding-left: 0.25rem;color: white;font-size: 0.24rem;border-right: 1px solid #91a066;height: 0.4rem;margin-top: 0.05rem;}
.subProList {width: 100%;margin-bottom: 0.9rem;position: relative;top: 1rem;}
.subProList li a{display: block;width: 32%;}
.search-header input::-webkit-input-placeholder{color: white;}
.search-header span{width: 0.3rem;height: 0.4rem;margin-left: 0.1rem;margin-top: 0.06rem;}
.search-header img{display: block;vertical-align: middle;}
.classify-search-box{border-bottom: 1px solid #eaeaea;position: fixed;top: 0.9rem;z-index: 999;background-color: white;}
.classify-list{overflow: hidden;}
.classify-list dt{font-size: 0.26rem;color: #999;margin: 0.3rem 0;float: left;width: 100%;margin-left: 0.34rem;}
.classify-list dd{width: 33%;float: left;text-align: center;margin-bottom: 0.35rem;}
.classify-list span{font-size:0.24rem;display: block; }
.classify-list dd img{width: 100%;}
.classify-search{margin: 0.15rem 0.25rem 0.15rem 0.25rem;height: 0.64rem;width: 7rem;background-color: #eeeeee;border-radius: 0.05rem;border:1px solid #cccccc;}
.classify-search .search-btn{display: block;height: 100%;float: left;}
.classify-search img{width: 0.3rem;height: 0.26rem;display: block;vertical-align: middle;margin: 0.2rem 0.2rem;}
.classify-search input{float: left;height: 0.48rem;width: 6rem;margin-top: 0.05rem;border: none;background-color: transparent;font-size: 0.26rem;padding-left: 0.1rem;border-left:1px solid #dddddd; }
.classify-search input::-webkit-input-placeholder{color: #b5b5b5;}
/*.subMenuList{position: fixed;}*/
.fixed{position: fixed;}
.subProList {width: 100%;margin-bottom: 0.9rem;}
.classify-list{overflow: hidden;}
.classify-list dt{font-size: 0.26rem;color: #999;margin: 0.3rem 0;float: left;width: 100%;margin-left: 0.34rem;}
.classify-list dd{width: 33%;float: left;text-align: center;margin-bottom: 0.35rem;}
.classify-list span{font-size:0.24rem;display: block; }
.classify-list dd img{width: 100%;}
.subProList{width: 100%; margin-left:32%;margin-bottom: 0.9rem;}
.subProList li{width: 100%; border-bottom: 1px solid #dedede; font-size: 0.26rem;overflow: hidden;margin-bottom: 10px;padding-bottom: 5px;}
.subProList li .uImg{display: block; overflow: hidden; position: relative; width: 100%;height: 2rem;}
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