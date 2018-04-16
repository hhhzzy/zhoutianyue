<template>
	<div class="pro-two">
		<headTwo title="商品列表"></headTwo>
		<div style="position: relative;">
	  		<div class="classify-search-box">
	  			<div class="classify-search clear">
	  				<span class="search-btn">
	  					<img src="../../assets/images/search.png" alt="">
	  				</span>
	  				<input type="text" placeholder="输入关键词搜索">
	  			</div>
	  		</div>
			<ul class="subMenuList jSubMenuList" >
				<li v-for=" (item,index) in  proData"  @click="addCurrent(index)" v-bind:class="cur == index ? 'current':false  ">
					<router-link :to=" '/goodsList/proTwoInfo/' + item.type ">{{item.type}}</router-link>
				</li>
	      	</ul><!-- subMenuList -->
	      	<router-view :goodsList="proData[0]"></router-view>
      	</div>
  	</div>
  	
</template>

<script>
	export default{
		data(){
			return{
				proData:[],
				cur:0,
				fixed:false
			}
		},
		methods:{
			//添加current
			addCurrent(ind){
				var _this = this;
				this.cur = ind;
			},
			//获取商品分类
			fetchGoodsType(){
				var _this = this;
				this.$http.post("http://localhost:3002/api/goodsType")
					      .then(function(res){
					      		_this.proData = res.data.data;
					      })
					      .catch(function(err){
					      		console.log(err);
					      })
			}
		},
		mounted(){
			this.fetchGoodsType();
		}
	}
</script>

<style scoped>
/****************************  分类页面  *******************************/

.subMenuList{height: 100%;position: fixed; left: 0; top: 1.7rem; width: 30%; background: #efefef; overflow: auto;/*margin-top: 1.7rem;*/float: left;}
.fixed{position: fixed;}
.subMenuList li a{color: #666;display:block;}
.subMenuList li{height: 3.54em; line-height: 3.54; font-size: 0.26rem; text-align: center;}
.subMenuList .current{background: #fff; border-left: 0.45em solid #ff8a54; text-indent: -0.45em;}
.search-header{width: 3.6rem;margin: 0.22rem 0 0 1.12rem;}
.search-header input{display: block;float: left;width: 3rem;height: 100%;background-color: transparent;border: none;padding-left: 0.25rem;color: white;font-size: 0.24rem;border-right: 1px solid #91a066;height: 0.4rem;margin-top: 0.05rem;}
.subProList {width: 100%;padding-left: 32%;margin-top: 1.75rem;margin-bottom: 0.9rem;}
.search-header input::-webkit-input-placeholder{color: white;}
.search-header span{width: 0.3rem;height: 0.4rem;margin-left: 0.1rem;margin-top: 0.06rem;}
.search-header img{display: block;vertical-align: middle;}
.classify-search-box{border-bottom: 1px solid #eaeaea;position: fixed;top: 0.9rem;z-index: 999;background-color: white;}
.classify-list{overflow: hidden;}
.classify-list dt{font-size: 0.26rem;color: #999;margin: 0.3rem 0;float: left;width: 100%;margin-left: 0.34rem;}
.classify-list dd{width: 33%;float: left;text-align: center;margin-bottom: 0.35rem;}
.classify-list span{font-size:0.24rem;display: block; }
.classify-list dd img{width: 100%;}
.classify-search{margin: 0.15rem 0.25rem 0.15rem 0.25rem;height: 0.64rem;width: 7rem;background-color: #eeeeee;border-radius: 0.05rem;border:1px solid #cccccc;}
.classify-search .search-btn{display: block;height: 100%;float: left;}
.classify-search img{width: 0.3rem;height: 0.26rem;display: block;vertical-align: middle;margin: 0.2rem 0.2rem;}
.classify-search input{float: left;height: 0.48rem;width: 6rem;margin-top: 0.05rem;border: none;background-color: transparent;font-size: 0.26rem;padding-left: 0.1rem;border-left:1px solid #dddddd; }
.classify-search input::-webkit-input-placeholder{color: #b5b5b5;}
</style>