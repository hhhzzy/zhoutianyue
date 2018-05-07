const express = require("express");
const router = express.Router();
const cartModel = require("../../../models/cart");
const goodsModel = require("../../../models/goods");
router.get("/",function(req,res){
	res.send("这是购物车页面");
})
router.post("/",function(req,res){
	cartModel.find()
			 .populate({path:'goods'}) //关联查询，
			 .then(function(data){
		  		return res.send({
		 			"err":0,
		 			"msg":"购物车信息",
		 			"data":data
		 		})
			 })
			 .catch(function(err){
			 		if(err) throw err;
			 })
})

module.exports  = router;
