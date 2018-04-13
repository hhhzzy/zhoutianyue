const express =  require('express');
const router = express.Router();
const goodsModel = require("../../models/goods.js");
const goodsTypeModel = require("../../models/goodsType.js");
const checkLoging = require('../../check/checkLogin.js').checkLoging;//是否登录
router.get('/',checkLoging,function(req,res){
	//初始化加载数据
	goodsTypeModel.find({})
				  .then(function(data){
					  	if(req.query.id){
							goodsModel.find({"_id":req.query.id},function(err,doc){
								if(err){
									console.log(err);
								}else{
									res.render("goods/goodsAdd.ejs",{
										"msg":doc[0],
										"goodsType":data
									});
								}
							})
						}else{
							res.render("goods/goodsAdd.ejs",{"msg":"","goodsType":data});
						}
				  })
				  .catch(function(err){
				  	if(err) throw err;
				  })
	
	
})
router.post('/',checkLoging,function(req,res){
	/*
	 *    如果id不为空的话就是修改，如果id为空的话就是新增
	 *   
	 * */
	var id = req.body.id;
	var goodsName = req.body.goodsName;//商品名称
	var oneTitle = req.body.oneTitle;//一级标题
	var twoTitle = req.body.twoTitle;//二级标题
	var salePrice = req.body.salePrice;//售卖价格
	var price = req.body.price;//真实价格
	var num = req.body.num;//库存
	var info = req.body.info;//商品简介
	var detail = req.body.detail;//商品详情
	var goodsType = req.body.goodsType;//自制食品
	var openness = req.body.openness;//浏览权限
	var newsTop = req.body.newsTop;//是否置顶
	var realName = req.session.admin[0].realName;
	var whereStr = {
			goodsName:goodsName,
			oneTitle:oneTitle,
			twoTitle:twoTitle,
			salePrice:salePrice,
			price:price,
			num:num,
			info:info,
			detail:detail,
			goodsType:goodsType,
			openness:openness,
			newsTop:newsTop
	}
	try{
		if(goodsName == ""){
			throw new Error("请输入商品名称");
		}
		if(salePrice == ""){
			throw new Error("请输入售卖价格");
		}
		if(salePrice == ""){
			throw new Error("请输入虚拟价格");
		}
	}catch(err){
		//返回结果
		return res.send({
			"code":0,
			"msg":err.message
		});
	}
	if(id != ""){//修改信息
		goodsModel.findByIdAndUpdate(id,{$set:whereStr},function(err,doc){
			if(err){
				return res.send({
					"code":0,
					"msg":"程序错误"
				});
			}else{
				req.flash("success","修改成功");
				return res.send({
					"code":1,
					"msg":"添加成功",
					"url":"/goodsList"
				});
			}
		})
	}else{//新增信息
		goodsModel.create(whereStr,function(err,doc){
			if(err){
				return res.send({
					"code":0,
					"msg":"程序错误"
				});
			}else{
				req.flash("success","添加成功");
				return res.send({
					"code":1,
					"msg":"添加成功",
					"url":"/goodsList"
				});
			}
		})
	}


})
module.exports = router;
