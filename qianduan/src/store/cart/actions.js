import * as types from "./mutations_types.js"
export default{
	add_cart:({commit},{obj}) =>{  //添加商品到购物车
		commit(types.ADD_CART,obj);
	},
	add_num:({commit},{obj}) =>{  //增加数量
		commit(types.ADD_NUM,obj);
	},
	decrease_num:({commit},{obj}) => { //减少数量
		commit(types.DECREASE_NUM,obj)
	},
	change_chk:({commit},{obj}) => {  //改变选中状态
		commit(types.CHANGE_CHK,obj);
	},
	all_chk:({commit},bool) => {
		commit(types.ALL_CHK,bool);
	}
}
