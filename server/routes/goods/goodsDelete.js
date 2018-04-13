const express =  require('express');
const router = express.Router();
const goodsModel = require("../../models/goods.js");
const checkLoging = require('../../check/checkLogin.js').checkLoging;//是否登录
router.get('/',checkLoging,function(req,res){
	//批量删除
	const goodsId = req.query.goodsId;//传过来的id
	goodsModel.remove({_id: {$in:goodsId} },function(err,doc){
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
