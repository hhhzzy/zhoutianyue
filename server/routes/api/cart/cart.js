const express = require("express");
const router = express.Router();
const cartModel = require("../../../models/cart");
const goodsModel = require("../../../models/goods");
router.get("/",function(req,res){
	res.send("这是购物车页面");
})
router.post("/",function(req,res){
	let user = req.session.user;
	cartModel.find({userId:user._id})
			 .populate({path:'goods'}) //关联查询，
			 .then(function(data){
			 	var host = req.headers.host;
			 	var dat = data.map(function(item){
			 		item.goods.path = "http://" + host + "/" + item.goods.path;
			 		return item;
			 	})
		  		return res.send({
		 			"err":0,
		 			"msg":"购物车信息",
		 			"data":dat
		 		})
			 })
			 .catch(function(err){
			 		if(err) throw err;
			 })
})

module.exports  = router;
