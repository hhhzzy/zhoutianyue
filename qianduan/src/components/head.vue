<template>
	<div class="header clear">
		<p class="logo">
			<img src="../assets/images/logo.png" alt="">
		</p>
		<div class="pos clear">
			<span class="location">
				<img src="../assets/images/location.png" alt="">
			</span>
			<span class="pos-word">港天大厦</span>
			<span class="pos-arrow">
				<img src="../assets/images/ico-arrow.png" alt="">
			</span>
		</div>
		<div class="bell">
			<img src="../assets/images/ico-bell.png" alt="">
			<span class="ico-dian">
				<img src="../assets/images/ico-dian.png" alt="">
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				fiexd:'',
			}
		},
		mounted(){
		}
	}
</script>

<style scoped>
	/*.fixed{position: fixed;}*/
	.clear::after{content: '';display: block;clear: both;}
	.sryd  img{width: 100%;display: block;}
	.header{background-color: #7aa00b;position: fixed;top:0;width: 100%;z-index: 99;}
	.logo{width: 30%;overflow: hidden;margin-left: 0.22rem;height: 0.89rem;width: 2.31rem;float: left;}
	.logo img{vertical-align: middle;width: 100%;float: left;}
	.pos{border-radius: 0.5rem;width: 1.98rem;height: 0.48rem;line-height: 0.48rem;background-color: #567400;float: left;margin: 0.21rem 0 0.21rem 2.13rem;}
	.pos span{float: left;display: block;overflow: hidden;}
	.pos span img{width: 100%;float: left;}
	.pos .location{margin: 0.1rem 0.1rem 0.1rem 0.24rem;width: 0.21rem;height: 0.27rem;}
	.pos .pos-word{font-size: 0.24rem;color: white;}
	.pos .pos-arrow{margin: 0.18rem 0.23rem 0.18rem 0.08rem;width: 0.16rem;height: 0.14rem;}
	.bell{width: 0.43rem;height: 0.47rem;float: right;margin: 0.2rem 0.25rem 0.2rem 0.18rem;position: relative;}
	.bell img{float: left;width: 100%;}
	.ico-dian{width:0.09rem;height: 0.09rem;display: block;position: absolute;top: 0;right: 2px;}
	.ico-dian img{width: 100%;}
	.header>div:nth-of-type(3){font-size: 0.3rem;}
	.all-header>div:nth-of-type(3){font-size: 0.3rem;}
	.all-header div:nth-of-type(1).x img{width: 0.35rem;height: 0.35rem;}
	.all-header div:nth-of-type(3) .phone img{width: 0.5rem;height: 0.5rem;}
</style>