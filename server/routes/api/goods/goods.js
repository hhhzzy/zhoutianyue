const express = require("express");
const router = express.Router();
const goods = require("../../../models/goods");
router.get("/",function(req,res) {
	res.send("这是goods");
});
router.post("/",function(req,res){
	var goodsType = req.body.goodsType;//商品类别
	goods.find({"goodsType" : goodsType})
		 .then(function(data){
		 	var host = req.headers.host;
		 	console.log(req.headers.host);
		 	for(var i = 0; i < data.length; i ++){
		 		data[i].path ="http://" + host + "/" + data[i].path;
		 	}
			res.send({
				"err" : 0,
				"msg" : "查询成功",
				"data" : data
			});
		 })
		 .catch(function(err){
		 	if(err) throw  err;
		 });
	
});
module.exports = router;
