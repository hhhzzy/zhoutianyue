const express = require("express");
const router = express.Router();
const goodsModel = require("../../../models/goods");
const cartModel = require("../../../models/cart");
router.get("/",function(req,res){
	res.send("这是加入购物车页面");
})
router.post("/",function(req,res){
	var goodsId = req.body.goodsId;
	let user = req.session.user;
	//用户的信息,查看用户登录没有
	if(!user){
		return res.send({
			"err":1,
			"msg":"请登录后添加商品到购物车",
			"success":false
		});
	}
	//加入购物车的商品信息
	var cartList= {
		goodsId : goodsId,
		goods : goodsId, //这个是子表的关联查询的外键
		sellCount : 1,
		boolSel : true,  //加入购物车的时候第一次默认选中
		userId:user._id
	}
	//通过商品id查询商品信息
	goodsModel.find({_id:goodsId})
			  .then(function(data){
			  		cartModel.find({goodsId:goodsId,userId:user._id})
			  				 .then(function(data){
			  				 	if(data == ""){//新增商品
			  				 		//用户的信息
			  				 		cartModel.create(cartList,function(err,doc){
			  				 				 	return res.send({
													"err":0,
													"msg":"增加成功",
													"data":doc
												});
			  				 				})
			  				 	}else{//添加数量
			  				 		var sellCount = data[0].sellCount;
			  				 		sellCount++;
			  				 		cartModel.findByIdAndUpdate(data[0]._id,{'$set':{sellCount:sellCount}},{new:true},function(err,doc){
			  				 				 	return res.send({
													"err":0,
													"msg":"增加成功",
													"data":doc
												});
			  				 				})
			  				 	}
			  				 })
			  				 .catch(function(err){
							  		if(err) throw err;
							  })
			  })
			  .catch(function(err){
			  		if(err) throw err;
			  })

})
module.exports  = router;
