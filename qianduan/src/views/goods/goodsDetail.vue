<template>
	<div class="goods-detail">
		<proHeader></proHeader>
		<div class="banner">
			<swiper  :options="swiperOption" ref="mySwiper">
			        <swiper-slide>
			        	<a href="javascript:;">
			        		<img src="http://localhost:3002/upload/file-1524637989693.jpg" alt="">
			        	</a>
			        </swiper-slide>
			        <swiper-slide>
			        	<a href="javascript:;">
			        		<img src="../../assets/images/pro-img.jpg" alt="">
			        	</a>
			        </swiper-slide>
			        <swiper-slide>
			        	<a href="javascript:;">
			        		<img src="../../assets/images/pro-img.jpg" alt="">
			        	</a>
			        </swiper-slide>
			    <!-- 如果需要分页器 -->
			    <div  class="swiper-pagination"  slot="pagination"></div>
			</swiper >
		</div>
		<div class="pro-info">
			<p class="pro-name">
				{{goodsData.goodsName}}
			</p>
			<p class="pro-describe">
				{{goodsData.oneTitle}}
			</p>
			<div class="pro-price clear">
				<span class="pro-realPrice">
					<i>￥</i>{{goodsData.salePrice}}
				</span>
				<span class="pro-beforePrice">
					￥{{goodsData.price}}
				</span>
				<span class="pro-saleNum">
					已售{{goodsData.num}}
				</span>
				<span class="changeNum">
					<a href="javascript:;" class="cut-num">-</a>
					<input  class="num" type="text" placeholder="1">
					<a href="javascript:;" class="add-num">+</a>
				</span> 
			</div>
		</div>
		<!--<div class="bg-box"></div>-->
		<!--<div class="promise clear">
			<p class="promise-title">
				<span>MY秘月购</span>
				优质臻选，好货低价
			</p>
			<p class="promise-day">
				22:00前成功支付的订单预计明日送达
			</p>
			<p class="promise-ensure"> 
				<span><img src="../../assets/images/pro-gou.png" alt=""></span>
				<span>正品保障</span>
				<span><img src="../../assets/images/pro-gou.png" alt=""></span>
				<span>次日送达</span>
			</p>
			<p class="promise-advisory">
				咨询
			</p>
		</div>-->
		<div class="bg-box"></div>
		<div class="goods-pj clear">
			<span>
				商品评价(313)
			</span>
			<span>
				综合评价
			</span>
			<span class="star">
				<!-- <img src="images/star.png" alt="">
				<img src="images/star.png" alt="">
				<img src="images/star.png" alt="">
				<img src="images/star.png" alt="">
				<img src="images/star.png" alt=""> -->
			</span>
			<span>
				<img src="../../assets/images/member-next-black.png" alt="">
			</span>
		</div>
		<div class="bg-box"></div>
		<div class="bg-box"></div>
	    <div class="goods-info">
	    	<p class="title">
				商品详情
			</p>
			<p class="goods-img">
				<img src="../../assets/images/goods-info.jpg" alt="">
			</p>
			<p class="goods-word">
				{{goodsData.detail}}
			</p>
	    </div>
	    
	</div>
</template>
<script>
	export default{
		data(){
			return {
		        swiperOption: {
		        	pagination: {
			            el: '.swiper-pagination',
			            clickable :true,
			        }, //小图标
					loop: true,
		           	autoplay: true,//可选选项，自动滑动
					paginationClickable :true,//点击小图标会动
		        },
		        goodsData:[]
		    }
		},
		methods:{
			//加载数据
			fetchData(){
				//获取路由后面的参数
				var id = this.$route.params.id;
				var _this = this;
				//加载数据
				this.$http.post('http://localhost:3002/api/goodsDetail',{
								id:id
						  })
						  .then(function(data){
						  		console.log(data);
						  		_this.goodsData = data.data.data;
						  })
						  .catch(function(err){
						  		console.log(err);
						  })
				console.log(id)
			}
		},
		mounted(){
			this.fetchData();
		}
		
	}
</script>
<style scoped>
.goods-detail{padding-top: 0;}
.banner{width: 100%;}
.banner img{width: 100%;}
.bg-box {height: 0.16rem;width: 100%;border-bottom: 1px solid #e2e2e2;border-top: 1px solid #e2e2e2; background-color: #f3f3f3;}
.pro-banner{position: relative;}
.pro-header{margin:0 0.24rem;height: 0.8rem;overflow: hidden;position: absolute;top: 0;z-index: 99;}
.pro-header a{display: block;float: left;height: 0.6rem;background-color: white;border-radius: 50%;width: 0.6rem;margin-top: 0.1rem;}
.pro-header a img{display: block;width: 0.6rem;}
.pro-header .header-prev{margin-right: 4.8rem;}
.pro-header .header-love{margin-right: 0.36rem;}
.pro-info{margin:0 0.24rem;}
.pro-info .pro-name{font-size: 0.32rem;color: #333333;margin-top:0.38rem; }
.pro-info .pro-describe{font-size: 0.32rem;color: #b6b6b6;margin-top: 0.2rem;}
.pro-info .pro-realPrice{font-size: 0.44rem;color: #ff7e00;margin-top: 0.2rem;margin-right: 0.3rem;}
/*.pro-info .pro-price span{float: left;}*/
.pro-info .pro-realPrice i{font-size: 0.24rem;}
.pro-info .pro-beforePrice{font-size: 0.24rem;color: #adabab;text-decoration: line-through;margin-right: 0.95rem;}
.pro-info .pro-saleNum{font-size: 0.24rem;color: #adabab;margin-right: 1.1rem;}
.pro-info .changeNum{width: 1.4rem;height: 0.42rem;display: inline-block;}
.pro-info .changeNum a{text-align: center;display: block;float: left;width: 0.42rem;height: 0.42rem;line-height: 0.3rem;font-size: 0.5rem;color: #7aa00b;}
.pro-info .changeNum input{float: left;width: 0.54rem;height: 0.42rem;line-height: 0.42rem;text-align: center;border: none;font-size: 0.25rem;}
.pro-info .changeNum .cut-num{border: 2px solid #7aa00b;border-radius:50% ; }
.pro-info .changeNum .add-num{border-radius: 50%;background-color: #7aa00b;color: white;line-height: 0.35rem;}
.promise{margin:0 0.24rem;}
.promise-title{font-size: 0.28rem;color: #666666;}
.promise-title span{color: #7aa00b;}
.promise-day{font-size: 0.22rem;color: #999999;margin:0.23rem 0;overflow: hidden;}
.promise-ensure span{font-size: 0.22rem;color: #999999;display: block;float: left;}
.promise-ensure{overflow: hidden;float: left;}
.promise-ensure span img{margin-right: 5px;width:0.35rem;height: 0.35rem;}
.promise-ensure span:nth-of-type(2){margin-right: 0.46rem;}
.promise-advisory{float: right;font-size: 0.2rem;color: #7aa00b;width: 0.7rem;height: 0.4rem;line-height: 0.35rem;text-align: center;border: 2px solid #7aa00b;border-radius: 5px;margin-bottom: 0.2rem;}
.goods-pj{margin:0.35rem 0.24rem;}
.goods-pj span{font-size: 0.26rem;color: #666;float: left;margin-right: 0.1rem;}
.goods-pj span:first-child{margin-right:2rem;}
.your-like{margin:0 0.24rem 0.25rem 0.24rem;}
.your-like .title{font-size: 0.26rem;margin:0.25rem 0;}
.your-like .goods-name{font-size: 0.24rem;color: #666666;width: 1.45rem;}
.your-like .goods-price{font-size: 0.22rem;color: #ff6600;margin-top: 0.25rem;}
.your-like .swiper-slide a{display: block;width: 2.25rem;border-right: 1px solid #ebebeb;}
.your-like  img{display: block;width: 1.69rem;height: 1.69rem;}
.your-like .swiper-like-container{overflow: hidden;}
.goods-pj img{width: 0.13rem;height: 0.23rem;}
.goods-pj .star img{width: 0.23rem;height:0.23rem;margin-right:0.04rem;}
.goods-info{margin:0.35rem 0 1rem 0;}
.goods-info .title{font-size: 0.26rem;margin:0.25rem 0.24rem;}
.goods-info .goods-word{font-size: 0.26rem;margin:0 0.24rem;}
.goods-info img{width: 100%;}
.pro-footer{z-index: 99;height: 0.98rem;width: 100%;position: fixed;bottom: 0;background-color: #7aa00b;padding: 0 0.24rem;}
.pro-footer img{display: block;width: 100%;}
.pro-footer .buycar{float: left;position: relative;width: 0.7rem;margin-top: 0.15rem;}
.pro-footer .buycar span{position: absolute;right: -0.07rem;top: -0.12rem;width: 0.33rem;height: 0.33rem;line-height: 0.33rem;text-align: center;background-color: #ff8a54;border-radius: 50%;color: white;font-size: 0.2rem;}
.pro-footer .money{float: left;font-size: 0.36rem;color: white;margin-top: 0.28rem;margin-left: 0.5rem;}
.pro-footer .add-buycar{margin-top: 0.2rem;float: right;width: 1.8rem;text-align: center;height: 0.58rem;line-height: 0.58rem;background-color: #ff8a54;color: white;font-size: 0.28rem;border-radius: 0.05rem;}
.swiper-pagination-bullet{background: white;}
</style>