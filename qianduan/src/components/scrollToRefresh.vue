/*
 *  滚到底部加载数据
 *
 *
 */
<template>
	<div v-if="show" class="scroll-to-refresh">
		正在加载数据....
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				onceTrigger:true,
				msg:this.dataMsg
			}
		},
		props:[
			
		],
		methods:{
			ifShow(){ //判断是否需要显示该组件
				/*
				 *  思路：滚轮滚过的高度（文档上面隐藏的高度scrollTop） + 屏幕的可视区域（offsetHeight） >=  文档的高度（scrollHeight） 表示已经到了文档的最底了。
				 * 
				 * */
				var oh = document.body.offsetHeight || document.documentElement.offsetHeight;//屏幕可视区域
				var _this = this;
				window.onscroll = function(){
					var sh = document.body.scrollHeight || document.documentElement.scrollHeight; //网页的整体高度
					var st = document.body.scrollTop || document.documentElement.scrollTop; //网页卷去的高度
					if(parseFloat(st) + parseFloat(oh) >= parseFloat(sh)){
						if(_this.onceTrigger){
							_this.show = true;
							_this.onceTrigger = false;
							//给父组件发送一个信号，告诉父组件要更新数据了
							new Promise(function(resolve,reject){
								console.log(1)
								_this.$emit('refreshData',resolve);
							}).then(function(){
								_this.show = false;
								_this.onceTrigger = true;
							})
						}
					}else{
						_this.show = false;
					}
				}
			}
		},
		mounted(){
			this.ele = document.querySelectorAll(".subProList")[0];
			this.ifShow();
		}
	}
</script>

<style>
	.scroll-to-refresh{
		height: 50px;
		line-height: 50px;
		font-size:0.25rem;
		text-align: center;
	}
</style>