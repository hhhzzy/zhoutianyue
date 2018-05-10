const express = require("express");
const user = require("../../models/users.js");
const router = express.Router();
router.get("/",function(req,res){
	res.send("555");
})
router.post("/",function(req,res){
	var name = req.body.name;
	var password = req.body.password;
	var userInfo = {
		"name" : name,
		"password" : password
	}
	try{
		if(!name){
			throw "用户名不能为空"
		}
		if(!password){
			throw "密码不能为空"
		}
	}catch(err){
		return res.send({
				"err":1,
				"msg":"数据错误",
				"data":err
			});
	}
	user.findOne({"name":name})
		.then(function(data){
			if(data){
				return res.send({
					"err":1,
					"msg":"该用户名已被注册"
				})
			}else{
				user.create(userInfo,function(err,doc){
					if(err) throw err;
					req.session.user = doc;
					res.send({
						"err":0,
						"msg":"注册成功",
						"data":doc,
						"logined":true
					})
				});
			}
		})
		.catch(function(err){
			if(err) throw err;
		})
	
})
module.exports = router;
