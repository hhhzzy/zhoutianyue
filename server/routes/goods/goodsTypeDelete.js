const express = require("express");
const router = express.Router();
const goodsTypeModel = require("../../models/goodsType.js");
router.get("/",function(req,res){
	//删除当前条的数据
	if(req.query.id){
		goodsTypeModel.findByIdAndRemove(req.query.id,function(err,doc){
			if(err){
				res.send({"success":"程序错误"});
			}else{
				res.send({"success":"删除成功"});
			}
		})
	}else{
		res.send("商品类别删除接口");
	}
})
router.post("/",function(req,res){
	const goodsId = req.body.goodsId;//传过来的id
	console.log(goodsId)
	goodsTypeModel.remove({_id: {$in:goodsId} },function(err,doc){
		if(err){
			console.log(err);
		}else{
			res.send({
				"success":"删除成功"
			})
		}
	})
})
module.exports = router;
