const express = require("express");
const router = express.Router();
const user = require("../../models/users.js");
router.get("/",function(req,res){
	res.send("这是检查是否登录的页面");
})
router.post("/",function(req,res){
	let logined = null;
	logined =  req.session.user ? true : false;
	return res.send({
		"err":0,
		"msg":"退出",
		"logined":logined
	})
	
})
module.exports = router;
