<template>
	<div class="footer">
		<div class="footer-box clear">
			<div class="footer-list">
				<router-link to='/index'>
					<img src="../assets/images/footer-home.png" alt="">
					<span>首页</span>
				</router-link>
				<!--<a href="javascript:;">
					<img src="../assets/images/footer-home.png" alt="">
					<span>首页</span>
				</a>-->
			</div>
			<div class="footer-list">
				<router-link to='/orderList'>
					<img src="../assets/images/footer-order.png" alt="">
					<span>订单</span>
				</router-link>
				<!--<a href="javascript:;">
					<img src="../assets/images/footer-order.png" alt="">
					<span>订单</span>
				</a>-->
			</div>
			<div class="footer-list classify">
				<router-link to='/goodsList'>
					<p class="">
						<img src="../assets/images/footer-classify.png" alt="">
					</p>
					<span>分类</span>
				</router-link>
				<!--<a href="javascript:;">
					<p class="">
						<img src="../assets/images/footer-classify.png" alt="">
					</p>
					<span>分类</span>
				</a>-->
			</div>
			<div class="footer-list">
				<router-link to="/cartList">
					<img src="../assets/images/footer-buycar.png" alt="">
					<span>购物车</span>
				</router-link>
				<!--<a href="javascript:;">
					<img src="../assets/images/footer-buycar.png" alt="">
					<span>购物车</span>
				</a>-->
			</div>
			<div class="footer-list">
				<router-link to="/mine">
					<img src="../assets/images/footer-mine.png" alt="">
					<span>我的</span>
				</router-link>
				<!--<a href="javascript:;">
					<img src="../assets/images/footer-mine.png" alt="">
					<span>我的</span>
				</a>-->
			</div>
		</div><!--底部-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				cur:0,
			}
		},
		methods:{
			
		}
	}
	
</script>

<style scoped>
	/************** footer-box *****************/
	.footer-box{position: fixed;z-index: 999;width: 100%;bottom: 0;height: 1.21rem;background-image: url(../assets/images/footer-bg.png);background-size: 100%;}
	.footer-box .footer-list{text-align: center;width:20%;float: left;position: relative;}
	.footer-box .footer-list img{display: block;margin:0 auto;margin-top: 0.36rem;margin-bottom: 0.05rem;width: 0.47rem;height: 0.44rem;}
	.footer-box .footer-list a{display: block;}
	.footer-box .footer-list span{color: white;font-size: 0.2rem;display: block;}
	.footer-box .classify p{position: relative;height: 0.8rem;}
	.footer-box .classify img{position: absolute;left: 30%;top: -16%;}
	.footer-box .classify span{margin-top: 0.05rem;margin-right: 10%;}
</style>