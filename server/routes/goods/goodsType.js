const express = require("express");
const router = express.Router();
const goodsTypeModel = require("../../models/goodsType.js");
router.get("/",function(req,res){
	res.render("goods/goodsType");
})
router.post("/",function(req,res){
	var type = req.body.type;//商品类别
	var caozuo = req.body.do;//执行的操作
	var id = req.body.id;//修改时商品的id
	var page = req.body.page;//第几页
	var limit = req.body.limit;//每页显示的数量
	//分页查询
	var condition = {};//条件
	var pageSize = parseInt(limit);//每页的条数
	var nowPage = parseInt(page);//当前第几页
	var sort = {updated:-1};//排序方式
	var skipNum = (nowPage-1)*pageSize;//跳过的条数
	var goodsType = {
		type : type
	}
	if(caozuo == "find"){
		goodsTypeModel.find(condition)
				.skip(skipNum)
				.limit(pageSize)
				.sort(sort)
				.exec(function(err,doc){
					if(err){
						return res.send({
							"code":0,
							"msg":"程序错误"
						});
					}else{
						//查询总条数
						goodsTypeModel.count({},function(err,count){
							if(err){
								console.log(err);
							}else{
								return res.send({
									"code": 0,//状态码，0代表成功，其它失败
									"msg": "成功",
									"count":count,
									"data": doc
								});
							}
						})
						
					}
				})
	}else if(caozuo == "update"){
		goodsTypeModel.findOne({type:type})
					  .then(function(data){
					  	if(data){
					  		return res.send({
									"err": 0,
									"msg": "已有该商品分类"
								});
					  	}else{
					  		goodsTypeModel.findByIdAndUpdate(id,{$set:{type:type}})
										  .then(function(data){
										  		return res.send({
														"err": 0,
														"msg": "修改成功",
														"data": data
													});
										  })					  	
										  .catch(function(err){
										  		if(err) throw err;
										  })
					  	} 

					  		
					  })
					  .catch(function(err){
					  		if(err) throw err;
					  })
		
					  
					  
	}else{
		goodsTypeModel.findOne({"type":type})
				  .then(function(data){
				  		if(data){
				  			return  res.send({
										"err":1,
										"msg":"已有该分类"
									})
				  		}else{
				  			goodsTypeModel.create(goodsType,function(err,doc){
								if(err) throw err;
								res.send({
									"err":0,
									"msg":"新增成功",
									"data":doc
								})
							})
				  		}
					  	
				  })
				  .catch(function(err){
				  		if(err) throw err;
				  })
	}
	
	
	
})
module.exports = router;
