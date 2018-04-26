/**
 *
 *   下拉刷新，到底部自动加载
 *
 *  
 *
 */
<template>
	<div class="pull-to-refresh">
		{{msg}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"下拉刷新",
				ele:null,//滑动的元素
				touchEleSY : null,//手指触碰时的坐标
				touchEleEY : null,//手指离开时的左边
				move : null, //总共滑动的距离
				fixedArr:null,//固定定位的元素
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
				this.ele.addEventListener('touchstart',this._touchStart,false);//触碰到手机
				this.ele.addEventListener('touchmove',this._tuochMove,false);//手指在手机上面滑动
				this.ele.addEventListener('touchend',this._touchEnd,false);//离开的时候触发
			},
			_touchStart(e){//手指刚触碰时候的事件
				var e = e || window.event;
				var touchEle = e.changedTouches[0];
				this.touchEleSY = touchEle.clientY;//手指刚碰触时候的坐标
			},
			_tuochMove(e){//手指在手机上滑动的时候，装内容的box往下滑，下拉刷新组件出来
				/*
				 *  手指离开时的坐标 - 手指触碰时的坐标  > 0 表示手指在往下拉 刷新
				 *  
				 * */
				var e = e || window.event;
				var touchEle = e.changedTouches[0];
				var touchEleMY = touchEle.clientY;//手指在手机上面移动的距离
				this.move = touchEleMY - this.touchEleSY;//装内容的box往下滑的距离
				this.move = this.move > 60 ? 60 : this.move;//判断下滑的距离是否大于100，大于100就让他等于100，否则太大了会一直下滑
				if(this.move > 0){ //往下拉的时候才会使用这个函数
					this.ele.style.marginTop = this.move + "px";
					//里面的固定定位元素跟着变化
					if(this.fixedArr != null){
						for(var i = 0; i < this.fixedArr.length; i ++){
							this.fixedArr[i].style.marginTop = this.move + "px";
						}
					}
					//改变刷新组件的内容
					if(this.move > 50){
						this.msg = "松开刷新";
					}
				}
			},
			_touchEnd(e){//手指离开时的事件
				var e = e || window.event;
				var touchEle = e.changedTouches[0];
				var _this = this;
				this.touchEleEY = touchEle.clientY;//手指离开时候的坐标
				//如果移动的距离move>0才调用复原函数，如果大于50 才会刷新页面
				if(this.move > 50){
					new Promise(function(resolve,reject){
						//当下面的代码执行成功，才会调用resolve，执行失败，调用reject
						//使用promise对象，把 成功后执行的函数resolve当做参数传到父组件，父组件执行之后才刷新页面
						_this.$emit("refresh",resolve);
						_this.msg = "刷新中..."
					}).then(function(){
						window.location.reload();
						_this._resetBox();//复原
					})
				}else{
					this._resetBox();//复原
				}

			},
			_resetBox(){//下拉的div复原
				var _this = this;
				var timer = setInterval(function(){
					var eleMt = _this.ele.style.marginTop;
					_this.ele.style.marginTop =parseInt(eleMt) - 1 +"px";
					if(parseInt(_this.ele.style.marginTop) <= 0){
						clearInterval(timer);
						_this.msg = "下拉刷新";
					}
					//固定定位元素复原
					if(_this.fixedArr !== null){
						for(var i = 0; i < _this.fixedArr.length; i ++){
							_this.fixedArr[i].style.marginTop =parseInt(_this.fixedArr[i].style.marginTop) - 1 +"px";
							if(parseInt(_this.fixedArr[i].style.marginTop) <= 0){
								clearInterval(timer);
							}
						}
					}
				},1);
			}
		},
		mounted(){
			this.ele = document.querySelector(".goods-box");
			this.fixedArr = document.querySelectorAll(".fixed-box");
			this.bindEvent();
		}
	}
</script>

<style>
	.pull-to-refresh{
		height: 60px;
		line-height: 60px;
		position: absolute;
		width: 100%;
		left: 0;
		top: 0.88rem;
		font-size: 0.2rem;
		text-align: center;
		background-color: #666;
		color: #fff;
		font-size: 0.3rem;
	}
</style>