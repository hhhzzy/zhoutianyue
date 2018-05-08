import * as types from "./mutations_types.js"
import http from "../../api/api.js"
export default{
	add_cart:({commit},{obj}) =>{  //添加商品到购物车
		commit(types.ADD_CART,obj);
	},
	add_num:({commit},{obj}) =>{  //增加数量
		commit(types.ADD_NUM,obj);
		//把改变的数据，提交到后台
		http.post("http://localhost:3002/api/addCart",{
				goodsId:obj.goodsId
			})
			.then(function(res){
				console.log(res)
			})	
	},
	decrease_num:({commit},{obj}) => { //减少数量
		commit(types.DECREASE_NUM,obj)
		//把改变的数据，提交到后台
		http.post("http://localhost:3002/api/decreaseCart",{
				goodsId:obj.goodsId
			})
			.then(function(res){
				console.log(res)
			})	
	},
	change_chk:({commit},{obj}) => {  //改变选中状态
		commit(types.CHANGE_CHK,obj);
	},
	all_chk:({commit},bool) => {
		commit(types.ALL_CHK,bool);
	},
	set_cartList:({commit},obj) => {
		commit(types.SET_CARTLIST,obj);
	}
}
