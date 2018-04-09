import * as types from "./mutations_types.js"

export default{
	[types.ADD_CART](state,obj){   //增加商品到购物车
		var list = state.cartList;
		var bool = list.find((item) => { //es6的find(() => {})写法，如果找到了该商品就返回该商品，没找到就返回underfind
			return item.id == obj.id;
		})
		if(!bool){
			obj.boolSel = true;  //第一次增加的时候，商品是选中状态
			list.push(obj);   //把商品加入购物车
			state.cartInfo.cartNum++;  //购物车的商品总数量加1
			state.cartInfo.allchk = true; //全选按钮设置为true
		}else{
			var staCartList = state.cartList;   //如果购物车有该商品，查找vuex中cartList,吧相对应的数量增加上去
			for(var i = 0;i < staCartList.length;i++){
				for(let ind in staCartList[i]){
					if(obj.id == staCartList[i][ind]){
						staCartList[i].sellCount++;
						return;
					}
				}
			}
		}
	},
	[types.ADD_NUM](state,obj){   //增加数量
		for(var i = 0; i < state.cartList.length; i ++){
			if(state.cartList[i] == obj){
				state.cartList[i].sellCount++;
				break;
			}
		}
	},
	[types.DECREASE_NUM](state,obj){   //减少数量
		for(var i = 0; i < state.cartList.length; i ++){
			if(state.cartList[i] == obj){
				state.cartList[i].sellCount--;
				if(state.cartList[i].sellCount == 0){
					state.cartList.splice(i,1);
					break;
				}	
			}
		}
	},
	[types.CHANGE_CHK](state,obj){  //改变选中状态
		for(var i = 0; i < state.cartList.length; i ++){
			if(state.cartList[i] == obj){
				state.cartList[i].boolSel = !state.cartList[i].boolSel;  //改变状态
				break;
			}
		}
	},
	[types.ALL_CHK](state,bool){  //全选和不全选的改变
		 state.cartInfo.allchk = !bool;
		 if(state.cartInfo.allchk == true){
		 	for(var i = 0; i < state.cartList.length; i ++){
				state.cartList[i].boolSel = true; 
			}
		 }else{
		 	for(var i = 0; i < state.cartList.length; i ++){
				state.cartList[i].boolSel = false; 
			}
		 }
	}
}
