const express =  require('express');
const router = express.Router();
const goodsTypeModel = require("../../../models/goodsType"); 
router.get('/',function(req,res){
	res.send("22222");
	
})
//总条数查询
router.post('/',function(req,res){
	goodsTypeModel.find()
				  .then(function(data){
				  		return res.send({
				  			"err" : 0,
				  			"msg" : "查询成功",
				  			"data" : data
				  		})
				  })
				  .catch(function(err){
				  		if(err) throw err;
				  })
})
module.exports = router;
