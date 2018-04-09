<template>
	<div class="all-header flex-box ">
		<div class="flex1" @click="backPage()">
			<img src="../assets/images/all-header-prev.png" alt="">
		</div>
		<div class="flex1">
			{{title}}
		</div>
		<div class="flex1">
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			title:String
		},
		methods:{
			backPage(){
				console.log(1);
				this.$router.go(-1);
				this.$store.commit('UPDATE_DIRECTION', {direction: 'reverse'});
			}
		}
		
	}
</script>

<style scoped>
	.all-header{position: fixed;z-index: 99;width: 100%;top:0;height: 0.88rem;line-height: 0.88rem;width: 100%;background-color: #7aa00b;padding: 0 0.24rem;font-size: 0.33rem;color: white;}
	.all-header div:nth-of-type(1) img{width: 0.26rem;height: 0.36rem;}
	.all-header div:nth-of-type(2){text-align: center;}
</style>