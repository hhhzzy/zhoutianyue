const express = require("express");
const router = express.Router();
const user = require("../../models/users.js");
router.get("/",function(req,res){
	res.send("444");
})
router.post("/",function(req,res){
	const name = req.body.name;
	const password = req.body.password;
	user.findOne({name:name,password:password})
		.then(function(data){
			if(!data){
				return res.send({
					"err":1,
					"msg":"用户名或者密码错误"
				})
			}else{
				return res.send({
					"err":0,
					"msg":"登录成功",
					"data":data
				})
			}
		})
		.catch(function(err){
			if(err) throw err;
		})
	
})
module.exports = router;
