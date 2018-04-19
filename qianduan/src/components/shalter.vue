<template>
	<div class="shalter pub-bomb" v-show="showSha">
      		<div class="box">
      			<p class="box-one">
      				<span class="title">
      					提示信息
      				</span>
      				<span class="word">
      					{{shaCon}}
      				</span>
      			</p>
      			<p>
      				<span @click="cancle()" class="sure-cancel">
      					确定
      				</span>
      				<span @click="cancle()" class="no-cancel">
      					取消
      				</span>
      			</p>
      		</div>
      </div>
</template>

<script>
	export default{
		data(){
			return{
				showSha:true
			}
		},
		props:["shaCon"],
		methods:{
			cancle(){
				this.showSha = false;
				//通过emit把显示装填showSha传给父组件
				this.$emit("showSha",this.showSha);
			}
		}
	}
</script>

<style>
	/************************ 公共弹框  ************************/
	.shalter{position: fixed;top: 0;left: 0;height: 100%;width: 100%;background-color: rgba(0,0,0,0.5);z-index: 1000;}
	.pub-bomb .box{width:5.2rem;height: 1.96rem;background-color: white;border-radius: 0.1rem;margin-top: 5.5rem;margin-left: 1.2rem; }
	.pub-bomb .box span{display: block;text-align: center;}
	.pub-bomb .box .box-one{height: 1.3rem;}
	.pub-bomb .box .title{font-size: 0.3rem;padding-top: 0.2rem;padding-bottom: 0.14rem;font-weight: bold;}
	.pub-bomb .box .word{font-size: 0.2rem;}
	.pub-bomb .box .no-cancel,.sure-cancel{border:1px solid #dedede;border-bottom: none;font-size: 0.24rem;color: #ff6c00;float: left;height: 0.66rem;line-height: 0.66rem;display: block;width: 50%;}
	.pub-bomb .box .no-cancel{border-right:none;}
	.pub-bomb .box .sure-cancel{border-left:none;}
</style>