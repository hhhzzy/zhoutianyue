const express = require("express");
const router = express.Router();
const user = require("../../../models/users.js");
const multer = require("../../../common/multer.js");
//这里的file必须是和前台的input的name值一样才能行
var upload = multer.single("file");

router.get("/",function(req,res){
	res.send("这是用户头像上传");
})
router.post("/",upload,function(req,res){
	let user = req.session.user;
	let path = "upload" + req.file.filename;//文件上传的地址
	console.log(user._id)
	user.findByIdAndUpdate(user._id,{'$set':{img:path}},{new:true})
		.then(function(data){
			req.session.user = data;
			console.log(data)
			return res.send({
				"err":0,
				"msg":"头像新增成功",
				"data":data
			})
		})
		.catch(function(err){
			if(err) throw err;
		})
	
})
module.exports = router;
