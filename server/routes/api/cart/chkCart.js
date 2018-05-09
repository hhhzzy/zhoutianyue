const express = require("express");
const router = express.Router();
const cartModel = require("../../../models/cart");
const goodsModel = require("../../../models/goods");
router.get("/",function(req,res){
	res.send("这是改变购物车商品状态页面");
})
router.post("/",function(req,res){
	let cartListId = req.body.cartListId;
	let type = req.body.type;
	let bool = req.body.bool;
	if(type == "single"){
		cartModel.find({_id:cartListId})
				 .then(function(data){
				 	cartModel.update({_id:cartListId},{"$set":{boolSel:!data[0].boolSel}})
							 .then(function(doc){
									return res.send({
										"err":0,
										"msg":"成功",
										"success":true,
										"data":doc
									});
							 })
							 .catch(function(err){
							 		if(err) throw err;
							 })
				 })
				 .catch(function(err){
				 		if(err) throw err;
				 })
		
	}else if(type == "all"){
		if(bool == "true"){
			cartModel.update({},{'$set':{boolSel:true}},{multi:true,new:true})
					  .then(function(data){
					  		console.log(data)
					  		return res.send({
								"err":0,
								"msg":"成功",
								"success":true,
								"data":data
							});
					  })
					  .catch(function(err){
				 			if(err) throw err;
				 	  })
		}else{
			cartModel.update({},{'$set':{boolSel:false}},{new:true,multi:true})
					  .then(function(data){
					  		console.log(data)
					  		return res.send({
								"err":0,
								"msg":"成功",
								"success":true,
								"data":data
							});
					  })
					  .catch(function(err){
				 			if(err) throw err;
				 	  })
		}
//		cartModel.find({_id:cartListId})
//				 .then(function(data){
//				 	cartModel.update({_id:cartListId},{"$set":{boolSel:!data[0].boolSel}})
//							 .then(function(doc){
//									return res.send({
//										"err":0,
//										"msg":"成功",
//										"success":true,
//										"data":doc
//									});
//							 })
//							 .catch(function(err){
//							 		if(err) throw err;
//							 })
//				 })

	}
})

module.exports  = router;
