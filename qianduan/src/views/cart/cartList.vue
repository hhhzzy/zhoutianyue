<template>
	<div class="cart-list">
		<headTwo title="购物车"></headTwo>
		<div class="addressMan">
				<p>
					<span  class="name">收件人：李</span>
					<span class="tel">
						1269541233
					</span>
				</p>
				<p class="address">
					收货地址：重庆市渝中区两路口港天大厦A栋1AF
				</p>
			</div>
			<div class="hengtiao"><img src="../../assets/images/hengtiao.jpg" alt=""></div>
			<div class="bg-box"></div>
			<div data-role="page">
				<div class="pageboder">
			        <div id="content" data-role="content">
			            <ul class="carProList jCarProList">
			            	 <li v-for=" val in cartList ">
			                    <div class="left inputBox">
			                        <input type="checkbox" v-bind:checked=" val.boolSel " name="checkbox-1-set" class="regular-checkbox list-checkbox" />
			                        <label class="jCheckbox" v-bind:class=" val.boolSel?'checked':'' " @click="changeChk(val)"></label>
			                    </div>
			                    <div class="right picText">
			                        <a href="">
			                            <span class="uImg left"><img v-bind:src="val.goods.path"alt="" /></span>
			                        </a>
			                            <div class="text right pro-info">
			                                <p class="p1">{{val.goods.goodsName}}</p>
			                                <div class="num jNum">
			                                	<i>￥<em>{{val.goods.salePrice}}</em></i>
			                                    <span class="changeNum">
													<a href="javascript:;" class="cut-num" @click="decreaseNum(val)">-</a>
													<input class="num" type="text" v-bind:value='val.sellCount'>
													<a href="javascript:;" class="add-num" @click="addNum(val)">+</a>
												</span>
			                                </div>
			                            </div>
			                        </a>
			                    </div><!-- picText -->
			               </li>
			            </ul><!-- carProList -->
			        </div><!--content-->
			    </div><!--pageboder-->
			</div>
			<div class="shopCarEdit jShopCarEdit">
		           <div class="left inputBox">
		               <input type="checkbox" name="checkboxAll" v-bind:checked=" calculate.allchk " class="regular-checkbox" @click="allChk(calculate.allchk)"/>
		               <label class="jAllOk" v-bind:class=" calculate.allchk?'checked':'' "></label>
		               <span>全选</span>
		           </div> <!-- inputBox -->
		           <h1 @click="pay" class="operate jOperate right">结算(<span class="buy-num">{{calculate.cartNum}}</span>)</h1>
		           <p class="right text jPay">
		           		<i class="allMoney">合计:￥{{calculate.cartMoney}}</i>
		           		<i class="allNum">数量：{{calculate.cartNum}}</i>
		           </p>
		    </div><!-- shopCarEdit -->
	</div>
</template>

<script>
	import store from "../../store/index.js"
	export default{
		data(){
			return{
				goods:[],
			}
		},
		beforeRouteEnter(to,from,next){  //组件内的路由，组件还没有初始化，没有this
			//把购物车的商品存储到state中的cartList中
			Promise.all([store.dispatch("set_cartList")])   //Promise.all : 参数是数组对象，当参数执行完成之后在执行then()里面.
				   .then(function(){
						next();
				   })
		},
		computed:{
			cartList(){  //进来时候渲染数据
				return this.$store.state.cart.cartList;
			},
			calculate(){  //计算总价和总数
				return this.$store.getters.calculate;
			}
		},
		methods:{
			addNum(obj){  //增加数量
				this.$store.dispatch('add_num',{obj});
			},
			decreaseNum(obj){   //减少数量
				this.$store.dispatch('decrease_num',{obj});
			},
			changeChk(obj){   //改变选中的状态
				this.$store.dispatch('change_chk',{obj});
			},
			allChk(bool){  //全选
				this.$store.dispatch('all_chk',bool);
			},
			pay(){//结算
				
			}
		},
		mounted(){

		},

	}
</script>

<style scoped>
.changeNum i{text-align: center;display: block;float: left;width: 0.42rem;height: 0.42rem;line-height: 0.3rem;font-size: 0.5rem;color: #7aa00b;}
.changeNum .add-num{background-color:#ff8a54;}
.changeNum .cut-num{border-color: #ff8a54;}
.changeNum i{color: #ff8a54;}
.changeNum{width: 1.4rem;height: 0.42rem;display: inline-block;}
.changeNum a{text-align: center;display: block;float: left;width: 0.42rem;height: 0.42rem;line-height: 0.3rem;font-size: 0.5rem;color: #7aa00b;}
.changeNum input{float: left;width: 0.54rem;height: 0.42rem;line-height: 0.42rem;text-align: center;border: none;font-size: 0.25rem;}
.changeNum .cut-num{border: 2px solid #7aa00b;border-radius:50% ; }
.changeNum .add-num{border-radius: 50%;background-color: #7aa00b;color: white;line-height: 0.35rem;}
.schoolTop .uEdit{position: absolute; right: 4%; top: 10%; font-size: 0.26rem;}
.carProList{font-size: 0.26rem;margin-top: 6%;margin-bottom: 2rem;}
.carProList li{padding: 4% 0 2%; overflow: hidden;}
.carProList li .inputBox{width: 10%;position: relative;}
.carProList li .picText{position: relative; width: 90%; padding-bottom: 2%; border-bottom: 1px solid #dedede;}
.carProList li .picText .uImg{display: block; overflow: hidden; width: 21.52%; padding: 10.76% 0; position: relative;width: 1.44rem;height: 1.44rem;}
.carProList li .picText img{width: 100%; position: absolute; left: 0; top: 0; }
.carProList li .picText .text{width: 70%; padding-right: 2%;}
.carProList li .picText .p1{height: 1.32em; text-overflow:ellipsis;white-space:nowrap;overflow:hidden; }
.carProList li .picText .p2{height: 1.32em; text-overflow:ellipsis; white-space: nowrap;overflow: hidden; color: #999;}
.carProList li .picText .jNum{height: 1.8em; line-height: 1.2em; overflow: hidden;margin-top: 0.76rem;}
.carProList li .picText .num i{font-style: normal; font-size: 0.26rem; color: #ff6633;}
.carProList li .picText .num span{color: #666;float: right;}
.carProList li .picText a{display: block; overflow: hidden;float: left;}
.carProList li .picText .addNum{position: absolute; right: 0; top: 68%; width: 26%; display: none;}
.curBuyBg .buyPro .buyNum .addNum .text,
.carPro .mList .addNum .text,
.carProList li .picText .addNum .text{width: 46%; padding: 0; margin: 0; border: none; background: none; text-align: center;font-size: 1.18em; outline: none; vertical-align: top;}
.curBuyBg .buyPro .buyNum .addNum span,
.carPro .mList .addNum span,
.carProList li .picText .addNum span{display: inline-block; width: 1.27em; height: 1.27em; overflow: hidden; -webkit-background-size: contain;background-size: contain; vertical-align: middle;}
.curBuyBg .buyPro .buyNum .addNum .uAdd,
.carPro .mList .addNum .uAdd,
.carProList li .picText .addNum .uAdd{ -webkit-background-size: contain;background-size: contain;}
.carProList li .inputBox{padding-top: 8%; text-align: center;}
.carProList li .inputBox span{margin-left: 2%;}
.regular-checkbox {opacity: 0;}
.regular-checkbox + label { border-radius: 100%; display: inline-block; position: absolute;left:10px;width: 1.32em; height: 1.32em; overflow: hidden; background: url(../../assets/images/iconRadio02.png) 0 0 no-repeat; -webkit-background-size: 100%;background-size: 100%;}
.regular-checkbox{margin: 2px;} 
.inputBox .jAllOk{margin-top: 0px;z-index: -1;}
.inputBox span{margin-left: 10px;}
.inputBox .checked:after {content: ' '; width: 100%; height: 100%; border-radius: 100%; position: absolute; top: 0;	left: 0; background: url(../../assets/images/iconRadio.jpg) no-repeat; -webkit-background-size: 100%; border-radius: 150%;}
.shopCarEdit{max-width: 750px;position: fixed;bottom:0.9rem;width: 100%;height: 1.2rem;overflow: hidden;background: #f0f0f0;border-bottom: 0.2rem solid white;} 
.shopCarEdit .regular-checkbox + label {width: 1.1em; height: 1.1em;}
.shopCarEdit .inputBox{padding-top: 4%; width: 21.1%;color: #333333; font-size: 0.3rem;}
.shopCarEdit .text{;width: 50.78%; font-size: 0.26rem; color: #333333; text-align: left; padding:0.16rem 2% 0 3%;}
.shopCarEdit .text span{text-align: right;color: #999; font-size: 0.2rem;display: block;}
.shopCarEdit .operate{font-size: 0.32rem; color: #fff; background: #f56d2e;  height: 100%; line-height: 3em; width: 26.4%; text-align: center;}
.shopCarEdit .text .allMoney,.allNum{display: block;font-size: 0.26rem;text-align: right}
.shopCarEdit .inputBox input{margin-left: 12px;}
.addressMan{margin:0.35rem 0.3rem 0.35rem 0.3rem;position: relative;}
.addressMan .edit{position: absolute;right: 0;top: 0.2rem;background-size: 100%;background-image: url(../../assets/images/address-edit.png);width: 0.36rem;height: 0.36rem;}
.addressMan span{font-size: 0.3rem;color: #333;}
.addressMan p{font-size: .28rem;color: #666;}
.hengtiao{display: block;height: 0.06rem;}
.hengtiao img{float: left;width: 100%;}
.edit-buycar{margin-top: 0;}
.shopCarEdit .add-collect{width: 1.8rem;height: 0.57rem;line-height: 0.45rem;margin-top: 0.2rem;border:2px solid #c2c2c2;border-radius: 0.05rem;font-size: 0.28rem;text-align: center;}
.shopCarEdit .delete-collect{height: 0.57rem;line-height: 0.57rem;width: 1.8rem;color: white;margin-right: 0.2rem;margin-left: 0.15rem;margin-top: 0.2rem;background-color: #ff8a54;font-size: 0.28rem;text-align: center;border-radius: 0.05rem;}
</style>