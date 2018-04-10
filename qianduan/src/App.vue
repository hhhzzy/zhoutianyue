<template>
  <div id="app">
  		<loading v-if="loading"></loading>
	    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
	    				<router-view class="child-view"></router-view>
	    </transition>
    <footering></footering>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'app',
  data(){
  	return{
  		items:['indexHeader','goodsHead','orderHead','cartHead']
  	}
  },
  computed:{
  	...mapGetters([
  		'loading',
  		'direction'
  	])
  }
}
/*
 *  设置文档为750时，宽度为100
 */
!function(n){
    var  e=n.document,
         t=e.documentElement,
         i=750,
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||320;n>750&&(n=750);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);

</script>

<style>
	#app{
		max-width: 750px;
		margin: 0 auto;
	}
	.footer-box{
		max-width: 750px;
	}
	.all-header,.header{
		max-width: 750px;
	}
.child-view {
  width:100%;
  padding-top:0.88rem;
  transition: all .8s cubic-bezier(.55,0,.1,1);
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 250ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}

.vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.con-index{margin-top: 45px;}
	
@charset "utf-8";
html,body{height: 100%;}
*{ margin:0; padding:0; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;}
body{position:relative;font-family:'Microsoft YaHei';
color:#333;}
ul,li{list-style:none;}
a{text-decoration:none;outline:none;color:#333;}
a:hover{text-decoration:none;}
a:active {star:expression(this.onFocus=this.blur());} 
.left{float:left}
.right{float:right}
.textRight{text-align: right;}
input{outline: none;}
input[type="submit"],
input[type="reset"],
input[type="button"],
button { -webkit-appearance: none;}
img{border:0;}
h1, h2, h3, h4, h5, h6, b, i, em {font-size:1em;font-style:normal;margin:0;padding:0;}
h1, h2, h3, h4, h5, h6, input, button, textarea, select{font-family:'Microsoft YaHei';}
.none{display:none;}
.area{position:relative;margin:0 auto; max-width:640px;min-width:320px;}
.area,.clear,.con{*zoom:1;}
.area:after,.clear:after,.con:after{content:".";display:block;visibility:hidden;overflow:hidden;height:0;clear:both;}
/**** 弹性盒子布局 ***/
.flex-box {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
}
.flex1 {
	-webkit-box-flex: 1;
	-moz-box-flex:1;
	-webkit-flex:1;
	-ms-flex:1;
	flex:1;
} 
.flex-order-1{
	-webkit-box-ordinal-group: 1;
	-moz-box-ordinal-group: 1;
	-ms-flex-order: 1;
	-webkit-order: 1;
	order: 1;
}
.flex2 {
	-webkit-box-flex: 2;
	-moz-box-flex:2;
	-webkit-flex:2;
	-ms-flex:2;
	flex:2;
} 
.flex-order-2{
	-webkit-box-ordinal-group:2;
	-moz-box-ordinal-group: 2;
	-ms-flex-order: 2;
	-webkit-order: 2;
	order: 2;
}
.flex3 {
	-webkit-box-flex: 3;
	-moz-box-flex:3;
	-webkit-flex:3;
	-ms-flex:3;
	flex:3;
} 
.flex-order-3{
	-webkit-box-ordinal-group:3;
	-moz-box-ordinal-group:3;
	-ms-flex-order:3;
	-webkit-order:3;
	order:3;
}
.clear:after{content:'';width: 0;height:0;clear: both;display: block;}

</style>
