<template>
	<div class="index-box">
		<heading></heading>
		<div class="banner">
			<swiper :options="swiperOption" ref="mySwiper">
			        <swiper-slide>
			        	<a href="javascript:;">
			        		<img src="../assets/images/banner.jpg" alt="">
			        	</a>
			        </swiper-slide>
			        <swiper-slide>
			        	<a href="javascript:;">
			        		<img src="../assets/images/banner.jpg" alt="">
			        	</a>
			        </swiper-slide>
			        <swiper-slide>
			        	<a href="javascript:;">
			        		<img src="../assets/images/banner.jpg" alt="">
			        	</a>
			        </swiper-slide>
			    <!-- 如果需要分页器 -->
			    <div  class="swiper-pagination"  slot="pagination"></div>
			</swiper >
		</div>
		<div class="search clear">
				<span class="sea-img">
					<img src="../assets/images/search.png" alt="">
				</span>
				<div class="search-form">
					<form action="">
						<input type="text" placeholder="输入关键词搜索">
					</form>
				</div>
			</div>
		<div class="nav flex-box">
			<div class="flex1">
				<img src="../assets/images/nav-img-1.png" alt="">
				<span class="nav-word">
					家禽
				</span>
			</div>
			<div class="flex1">
				<img src="../assets/images/nav-img-2.png" alt="">
				<span class="nav-word">
					蔬菜水果
				</span>
			</div>
			<div class="flex1">
				<img src="../assets/images/nav-img-3.png" alt="">
				<span class="nav-word">
					自制食品
				</span>
			</div>
			<div class="flex1">
				<img src="../assets/images/nav-img-4.png" alt="">
				<span class="nav-word">
					手工艺品
				</span>
			</div>
			<div class="flex1">
				<img src="../assets/images/nav-img-5.png" alt="">
				<span class="nav-word">
					五谷杂粮
				</span>
			</div>
			<div class="flex1">
			<img src="../assets/images/nav-img-6.png" alt="">
			<span class="nav-word">
				其他
			</span>
		</div>
		</div>
		<div class="bg-box"></div>
		<div class="advert flex-box">
			<div class="flex1 advert-1">
				<p class="title">
					100%无公害
				</p>
				<p class="word">
					每日上架新鲜食材让您健康享受
				</p>
			</div>
			<div class="flex1 advert-2">
				<p class="title">
					次日送达
				</p>
				<p class="word">
					200公里范围内送达购的舒心放心
				</p>
			</div>
			<div class="flex1 advert-3">
				<p class="title">
					爱心公益
				</p>
				<p class="word">
					扶持困难商户支持公益事业
				</p>
			</div>
		</div>
		<div class="bg-box"></div>
		<div class="center">
				<div class="shop-box">
					<div class="main-title clear">
						<span class="main-title-line">
							<i class="line"></i>
							<i class="dian"></i>
						</span>
						<span class="word-white">扶持</span>
						<span class="word-black">商家</span>
						<span class="main-title-line">
							<i class="dian"></i>
							<i class="line"></i>
						</span>
					</div>
					<div class="shop-info clear">
						<div class="shop-title">
							<span>
								困难商户
							</span>
							<span class="oLine"></span>
							<span class="shop-all">
								查看全部
							</span>
						</div>
						<div class="shop-img clear">
							<div class="img-list">
								<a href="javascript:;">
									<img src="../assets/images/img-shop.jpg" alt="">
									<span>渝北</span>
								</a>
								<span>优益多蔬果店</span>
							</div>
							<div class="img-list">
								<a href="javascript:;">
									<img src="../assets/images/img-shop.jpg" alt="">
									<span>渝北</span>
								</a>
								<span>优益多蔬果店</span>
							</div>
							<div class="img-list">
								<a href="javascript:;">
									<img src="../assets/images/img-shop.jpg" alt="">
									<span>渝北</span>
								</a>
								<span>优益多蔬果店</span>
							</div>
						</div>
					</div>
				</div><!--扶持商家-->
				<div class="bg-box"></div>
				<div class="love-box">
					<div class="main-title clear">
						<span class="main-title-line">
							<i class="line"></i>
							<i class="dian"></i>
						</span>
						<span class="word-white">爱心</span>
						<span class="word-black">专区</span>
						<span class="main-title-line">
							<i class="dian"></i>
							<i class="line"></i>
						</span>
					</div>
					<div class="area-banner">
						<img src="../assets/images/love-img.jpg" alt="">
					</div>
					<div class="love-word flex-box">
						<div class="flex1">
							义捐
						</div>
						<div class="flex1">
							义工
						</div>
						<div class="flex1">
							实时现场
						</div>
						<div class="flex1">
							互动
						</div>
					</div>
				</div><!--爱心专区-->
				<div class="bg-box"></div>
				<div class="education-box">
					<div class="main-title clear">
						<span class="main-title-line">
							<i class="line"></i>
							<i class="dian"></i>
						</span>
						<span class="word-white">教育</span>
						<span class="word-black">专区</span>
						<span class="main-title-line">
							<i class="dian"></i>
							<i class="line"></i>
						</span>
					</div>
					<div class="education-img flex-box">
						<div class="flex1">
							<a href="javascript:;">
								<img src="../assets/images/education-img.jpg" alt="">
								<span>文字标题</span>
							</a>
							<p>义工组织图片义工组织图片义工组织图片义工组织图片义工组织图片</p>
						</div>
						<div class="flex1">
							<a href="javascript:;">
								<img src="../assets/images/education-img.jpg" alt="">
								<span>文字标题</span>
							</a>
							<p>义工组织图片义工组织图片义工组织图片义工组织图片义工组织图片</p>
						</div>
					</div>
				</div><!--教育专区-->
				<div class="bg-box"></div>
				<div class="bg-box"></div>
				<div class="day-box">
					<div class="main-title clear">
						<span class="main-title-line">
							<i class="line"></i>
							<i class="dian"></i>
						</span>
						<span class="word-white">每日</span>
						<span class="word-black">精选</span>
						<span class="main-title-line">
							<i class="dian"></i>
							<i class="line"></i>
						</span>
					</div>
					<div class="area-banner">
						<img src="../assets/images/shosen-img.jpg" alt="">
					</div>
					<div class="day-img">
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
						<div class="img-list">
							<a href="javascript:;">
								<img src="../assets/images/chosen-child-img-1.png" alt="">
							</a>
							<p class="goods-name">
								大昌冷冻荠菜450g 
							</p>
							<p class="goods-tj">特价</p>
							<p class="goods-p">
								<s>￥24.0</s>
								<span>￥14.9</span>
							</p>
							<p class="goods-add">
								+
							</p>
						</div>
					</div>
				</div><!--每日精选-->
			</div>	
	</div>
</template>

<script>
//	import {mapGetters} from "vuex"
	export default{
		name:'index',
		data(){
			return{
				swiperOption: {
		        	pagination: {
			            el: '.swiper-pagination',
			            clickable :true,
			        }, //小图标
					loop: true,
		           	autoplay: false,//可选选项，自动滑动
					paginationClickable :true,//点击小图标会动
		        },
			}
		},
//		computed:{
//			...mapGetters([
//			])
//		},
	}
</script>

<style scoped>
  	/*.con-index{margin-top: 45px;}*/
	/************** banner *****************/
	.banner .swiper-pagination{margin-bottom: 0.15rem; }
	.banner .swiper-pagination-bullet{width: 0.2rem;height: 0.2rem;background-color: white;opacity: 1;}
	.banner .swiper-pagination-bullet-active{background-color: #7aa00b;}
	.banner a{display: block;text-align: center;}
	.banner a img{width: 100%;display: block;}
	/************** search *****************/
	.search{width: 7.02rem;height: .64rem;margin: 0.09rem auto;background-color: #eeeeee;border-radius: 0.06rem;border: 1px solid #cccccc;}
	.sea-img{width: 0.3rem;height: 0.26rem;display:block;margin: 0.18rem;float: left;}
	.sea-img img{float: left;width: 100%;}
	.search-form{float: left;height: 0.48rem;overflow: hidden;margin-top: 0.08rem;}
	.search-form form{height: 100%;}
	.search-form input{padding-left: 0.05rem;border-left: 1px solid #666;padding-right: 5px;color: #b5b5b5;float: left;height: 100%;min-width: 6rem;border: none;background-color: #eeeeee;font-size: 0.24rem; }
	.search-form input::-webkit-input-placeholder{color: #b5b5b5;}
	.search-form input::-moz-placeholder{color: #b5b5b5;}
	.search-form input:-moz-placeholder{color: #b5b5b5;}
	.search-form input:-ms-input-placeholder{color: #b5b5b5;}
	/************** nav *****************/
	.nav{padding: 0.16rem 0.24rem;height: 1.6rem;margin-bottom: 0.4rem;}
	.nav .flex1{margin-right: 0.34rem;}
	.nav .flex1:last-of-type{margin-right: 0; }
	.nav img{width: 100%;float: left;width: 0.88rem;height: 0.88rem;}
	.nav .nav-word{font-size: 0.2rem;float: left;width: 100%;text-align: center;margin: 0.12rem auto;}
	.bg-box{height: 0.16rem;width: 100%;border-bottom:1px solid #e2e2e2;border-top: 1px solid #e2e2e2;background-color: #f3f3f3; }
	.advert{margin-top:0.2rem;margin-bottom: 0.2rem;}
	.advert .title{font-size: 0.24rem;color: black;margin-bottom: 0.1rem;margin-top: 0.1rem;margin-left: 0.1rem;}
	.advert .advert-1{background-image: url(../assets/images/advert-1.png);background-size: 100%;background-repeat: no-repeat;}
	.advert .advert-2{background-image: url(../assets/images/advert-2.png);background-size: 100%;background-repeat: no-repeat;}
	.advert .advert-3{background-image: url(../assets/images/advert-3.png);background-size: 100%;background-repeat: no-repeat;}
	.advert .word{font-size: 0.14rem;width: 1.35rem;margin-left: 0.1rem;margin-bottom: 0.1rem;overflow: hidden;height: 0.6rem;}
	.advert .flex1{margin: 0 0.15rem;}
	.advert img{width: 100%;}
	/************** main-title *****************/
	.main-title{height: 0.85rem;line-height: 0.85rem;padding:0 2.22rem;}
	.main-title span{float: left;font-size: 0.32rem;text-align:center;height: 100%;}
	.main-title .line{width: 0.64rem;height: 1px;background-color: #7aa00b;display: inline-block;vertical-align: middle;}
	.main-title .dian{width: 0.07rem;height: 0.07rem;display: inline-block;background-color: #7aa00b;border-radius: 50%;vertical-align: middle;}
	.main-title .word-white{color: #7aa00b;margin-left: 0.1rem;font-weight: bold;}
	.main-title .word-black{margin-right: 0.07rem;font-weight: bold;}
	/************** shop-box *****************/
	.shop-box{margin-bottom: 0.24rem;}
	.shop-title{float: left;padding-top: 0.37rem;width: 1.72rem;height: 1.72rem;border:0.15rem solid #7aa00b;font-size: 0.22rem;margin:0 0.16rem;text-align: center;}
	.shop-title span{display: block;}
	.shop-title .shop-all{font-size: 0.16rem;}
	.shop-title .oLine{width: 0.5rem;height: 3px;background-color: #ff6600;margin:0.1rem auto;}
	.shop-img{float: left;font-size: 0.2rem;}
	.shop-img a{display: block;overflow: hidden;width: 1.72rem;position: relative;}
	.shop-img .img-list{float: left;text-align: center;margin-right: 0.15rem;}
	.shop-img .img-list:last-of-type{margin-right: 0}
	.shop-img img{width: 100%;}
	.shop-img a span{display: block;position: absolute;bottom: .16rem;background-color: #65880e;height: 0.34rem;width: 0.64rem;font-size: 0.18rem;color: white;text-align: center;line-height: 0.34rem;opacity: 0.72;}
	/************** love-box *****************/
	.area-banner{overflow: hidden;}
	.area-banner img{width: 100%;float: left;}
	.love-word{font-size: 0.26rem;text-align: center;height: 0.4rem;line-height: 0.4rem;margin: 0.24rem 0;}
	.love-word .flex1{border-right: 1px solid #e5e5e5;}
	/************** education-box *****************/
	.education-img{margin:0 0.24rem;}
	.education-img img{width: 100%;display: block;}
	.education-img .flex1:first-child{margin-right: 0.2rem;}
	.education-img a{display: block;position: relative;}
	.education-img a span{position: absolute;bottom: 0.18rem;left: 0.1rem;text-align: center;background-color: #ff6600;width: 0.88rem;height: 0.3rem;line-height: 0.3rem;border-radius: 5px;font-size: 0.18rem;color: white;}
	.education-img p{display: block;font-size: 0.24rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;height: 0.8rem;line-height: 0.8rem;width: 3.43rem;}
	/************** poineer-box *****************/
	.pioneer-box{margin-bottom: 0.25rem;}
	/************** 轮播 ************************/
	.swiper-pioneer-container {width: 100%;overflow: hidden;}
	.swiper-pioneer-container .swiper-slide {
	    text-align: center;font-size: 18px;background: #fff;width: 75%;
	    /* Center slide text vertically */
	    display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;-webkit-justify-content: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;-webkit-align-items: center;align-items: center;
	}
	/*.swiper-pioneer-container .swiper-wrapper{width: 5.66rem;}*/
	.swiper-pioneer-container a{position: relative;}
	.swiper-pioneer-container a img{display: block;width: 100%;}
	.poineer-word{padding-top: 0.4rem;position: absolute;bottom: 0;color: white;width: 100%;height: 1.27rem;background-image: url(../assets/images/banner-bg.png);}
	.poineer-word p{text-align: left;margin-left: 0.14rem;line-height: 0.33rem;}
	.poineer-word .poineer-title{font-size: 0.24rem;}
	.poineer-word .poineer-address{;color: #95bc23;font-size: 0.16rem;padding-right: 0.15rem;border-right: 1px solid #fefefe;}
	.poineer-word .poineer-name{padding-left: 0.1rem;border-left: 1px solid #040001;font-size: 0.16rem;}
	/************** day-box *****************/
	.day-box{margin-bottom: 1rem;}
	.day-img{overflow: hidden;}
	.day-img .img-list{padding:0 0.2rem;width: 33%;float: left;overflow: hidden;border-right: 1px solid #ededed;border-bottom: 1px solid #ededed;height: 3.5rem;}
	/*.day-img .img-list:nth-of-type(2n-1){padding-left: 0.25rem;}*/
	.day-img .img-list:nth-of-type(3n){border-right: none;}
	.day-img a{display: block;}
	.day-img a img{display: block;width: 100%;}
	.day-img .goods-name{font-size: 0.22rem;}
	.day-img .goods-tj{font-size: 0.16rem;width: 0.5rem;height: 0.23rem;text-align: center;border-radius: 3px;background-color: #ff6600;color: white;margin-top: 0.07rem;}
	.day-img .goods-p{font-size: 0.16rem;margin-top: 0.07rem;width: 50%;float: left;}
	.day-img .goods-p s{margin-bottom: 0.05rem;display: block;color: #999999;}
	.day-img .goods-p span{font-size: 0.2rem;color: #ff6600;}
	.day-img .goods-add{margin-top: 0.15rem;font-size: 0.36rem;float: right;margin-right: 0.25rem;width: 0.5rem;height: 0.35rem;text-align: center;line-height: 0.3rem;border:1px solid #cccccc;border-radius: 5px;color: #ff6600;}

</style>