const express = require("express");
const router = express.Router();
const goodsModel = require("../../../models/goods.js")
router.get("/",function(req,res){
	res.send("这是商品信息查询页面");
})
router.post("/",function(req,res){
	var id = req.body.id;
	goodsModel.findOne({_id:id})
			  .then(function(data){
			  		res.send({
						"err":0,
						"msg":"查询成功",
						"data":data
					})
			  })
			  .catch(function(err){
			  		if(err) throw err;
			  })

})
module.exports = router;
