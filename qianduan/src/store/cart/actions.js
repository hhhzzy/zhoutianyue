import * as types from "./mutations_types.js"
import http from "../../api/api.js"
export default{
	add_cart:({commit},{obj}) =>{  //添加商品到购物车
		commit(types.ADD_CART,obj);
	},
	add_num:({commit},{obj}) =>{  //增加数量
		//增加商品数量，把改变的数据，提交到后台
		http.post("http://localhost:3002/api/addCart",{
				goodsId:obj.goodsId
			})
			.then(function(res){	
				commit(types.ADD_NUM,obj);
			})
	},
	decrease_num:({commit},{obj}) => { //减少数量
		//把改变的数据，提交到后台
		http.post("http://localhost:3002/api/decreaseCart",{
				goodsId:obj.goodsId
			})
			.then(function(res){
				commit(types.DECREASE_NUM,obj)
			})	
	},
	change_chk:({commit},{obj}) => {  //改变选中状态
		//改变单个商品的选中状态
		http.post("http://localhost:3002/api/chkCart",{
				cartListId:obj._id,
				type:"single",
		    })
		    .then(function(res){
		    	commit(types.CHANGE_CHK,obj);
		    })
		
	},
	all_chk:({commit},bool) => {
		//改变所有商品的选中状态，全选或者反选
		http.post("http://localhost:3002/api/chkCart",{
				type:"all",
				bool:!bool
		    })
		    .then(function(res){
		    	console.log(res)
		    	commit(types.ALL_CHK,bool);
		    })
	},
	set_cartList:({commit}) => {  //刚进入购物车的时候把cart表里面的数据查询出来放到state中的cartList中
		http.post("http://localhost:3002/api/cart")
			.then(function(res){
				commit(types.SET_CARTLIST,res.data.data);
			})
		
	}
}
