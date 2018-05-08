module.exports = {
	calculate(state){
		var list = state.cartList;
		console.log(state)
		var boolChk = 0;   //判断购物车中是否有未选中的商品
        state.cartInfo.cartMoney = 0;
        state.cartInfo.cartNum = 0;
        for(var i = 0; i < list.length; i ++){
        	if(list[i].goods.boolSel){
        		state.cartInfo.cartNum ++;
        		state.cartInfo.cartMoney += list[i].sellCount * list[i].goods.salePrice; 
        	}else{
        		boolChk++;
        	}
        }   
        if(boolChk > 0){  
    		state.cartInfo.allchk = false;
    		boolChk = 0;
    	}else{
    		state.cartInfo.allchk = true;
    	}
		return  state.cartInfo;
	}
}
