const express = require("express");
const router = express.Router();
const goodsModel = require("../../../models/goods");
const cartModel = require("../../../models/cart");
router.get("/",function(req,res){
	res.send("这是");
})
router.post("/",function(req,res){
	var goodsId = req.body.goodsId;
	//加入购物车的商品信息
	var cartList= {
		goodsId : goodsId,
		goods : goodsId, //这个是子表的关联查询的外键
		sellCount : 1
	}
	//通过商品id查询商品信息
	goodsModel.find({_id:goodsId})
			  .then(function(data){
			  		cartModel.find({goodsId:goodsId})
			  				 .then(function(data){
			  				 	if(data == ""){//未找到商品
			  				 		return res.send({
										"err":0,
										"msg":"未找到该商品",
										"data":""
									});
			  				 	}else{//减少数量
			  				 		var sellCount = data[0].sellCount;
			  				 		sellCount--;
			  				 		if(sellCount <= 0){//如果数量小于等于0，就删除购物车里面的商品
			  				 			cartModel.findByIdAndRemove(data[0]._id)
			  				 					  .exec(function(err,doc){
			  				 					  		if(err) throw err;
			  				 					  		return res.send({
															"err":0,
															"msg":"减少数量成功",
															"success":true,
															"data":doc
														});
			  				 					  })
			  				 		}else{
			  				 			cartModel.findByIdAndUpdate(data[0]._id,{'$set':{sellCount:sellCount}},{new:true},function(err,doc){
		  				 				 	return res.send({
												"err":0,
												"msg":"减少数量成功",
												"data":doc
											});
		  				 				})
			  				 		}
			  				 		
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
