const express = require("express");
const router = express.Router();
const user = require("../../models/users.js");
router.get("/",function(req,res){
	res.send("这是退出页面");
})
router.post("/",function(req,res){
	req.session.user = null;
	return res.send({
		"err":0,
		"msg":"退出",
		"logined":false
	})
	
})
module.exports = router;
