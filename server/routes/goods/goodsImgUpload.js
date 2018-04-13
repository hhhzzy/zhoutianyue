const express =  require('express');
const router = express.Router();
const goodsModel = require("../../models/goods.js");
const checkLoging = require('../../check/checkLogin.js').checkLoging;//是否登录
const multer = require("../../common/multer.js");
//这里的file必须是和前台的input的name值一样才能行
const upload = multer.single("file");
router.get('/',checkLoging,function(req,res){
	res.send({
		"err":req.file
	})
})
router.post('/',checkLoging,upload,function(req,res){
	const path = "upload/"+req.file.filename; //图片上传之后的位置
	const id = req.body.id;//对应的id
	const serverIp = req.headers.host;//服务器的端口和域名，如localhost::3002
	//保存到数据库
	const whereStr = {
		$set:{
			path:path
		}
	}
	if(!id){
		return res.send({
			"err":1,
			"msg":"请选择商品！"
		})
	}else{
		goodsModel.findByIdAndUpdate(id,whereStr,function(err,doc){
			if(err){
				return res.send({
					"err":1,
					"msg":"没有找到该商品"
				})
			}else{
				return res.send({
					"err":0,
					"msg":{
						"success":"上传成功",
						"path":path
					}
				})
			}
		})
	}

})
module.exports = router;
