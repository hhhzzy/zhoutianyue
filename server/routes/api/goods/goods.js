const express = require("express");
const router = express.Router();
const goods = require("../../../models/goods");
router.get("/",function(req,res) {
	res.send("这是goods");
});
router.post("/",function(req,res){
	var goodsType = req.body.goodsType;//商品类别
	var limit = parseInt(req.body.limit);//每次查询的数量
	var page = parseInt(req.body.page);//当前的页码数
	//分页查询
	goods.find({"goodsType" : goodsType})
		 .skip((page  - 1) * limit)   //跳过多少条
		 .limit(limit) //每一次查询的条数
		 .then(function(data){
		 	var host = req.headers.host;
		 	for(var i = 0; i < data.length; i ++){
		 		data[i].path ="http://" + host + "/" + data[i].path;
		 	}
			res.send({
				"err" : 0,
				"msg" : "查询成功",
				"data" : data,
				"limit":limit,
				"page":page
			});
		 })
		 .catch(function(err){
		 	if(err) throw  err;
		 });
	
});
module.exports = router;
