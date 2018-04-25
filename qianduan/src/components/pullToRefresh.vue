<template>
	<div class="pull-to-refresh">
		下拉刷新
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ele:null,//滑动的元素
//				ele:this.eleClassName
			}
		},
		props:[
			'eleClassName'
		],
		methods:{
			/*
			 *  绑定touch事件
			 *  touchstart:当手指放在屏幕的时候触发
			 *  tuochmove:当手指在屏幕上滑动的时候触发
			 *  touchend:当手指离开的时候触发
			 * 
			 * */
			bindEvent(){
				var _this = this;
				console.log(this.ele)
//				var ele = document.getElementsByClassName(""+this.eleClass+"")[0];
				this.ele.addEventListener('touchstart',this._touchStart,false);//触碰到手机
				this.ele.addEventListener('tuochmove',this._tuochMove,false);//手指在手机上面滑动
				this.ele.addEventListener('touchend',this._touchEnd,false);//离开的时候触发
			},
			_touchStart(e){//手指刚触碰时候的事件
				var e = e || window.event;
				var touchEle = e.changedTouches[0];
				var touchEleSY = touchEle.clientY;//手指刚碰触时候的坐标
				console.log(touchEleY);
				//使用emit把触摸事件发送到父组件
//				this.$emit("touch");

			},
			_touchEnd(e){//手指离开时的事件
				var e = e || window.event;
				var touchEle = e.changedTouches[0];
				var touchEleEY = touchEle.clientY;//手指离开时候的坐标
				console.log(touchEleEY);
			}
		},
		mounted(){
			this.ele = document.querySelector(".goods-box");
			this.bindEvent();
		}
	}
</script>

<style>
	.pull-to-refresh{
		height: 0.88rem;
		line-height: 0.88rem;
		position: relative;
		width: 100%;
		left: 0;
		top: 0;
		font-size: 0.2rem;
	}
</style>