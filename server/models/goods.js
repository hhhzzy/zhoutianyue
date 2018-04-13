const mongoose = require("../lib/mongo.js");
Schema = mongoose.Schema;//创建一个结构
var goodsSchema = new Schema({
	goodsName:"String",//商品名称
	oneTitle:"String",//一级标题
	twoTitle:"String",//二级标题
	salePrice:"String",//真实价格
	price:"String",//虚拟价格
	num:"String",//库存
	info:"String",//简介
	detail:"String" ,//商品详情
	goodsType:"String", //商品类别
	openness:"String", //浏览权限
	newsTop:"String", //是否置顶
	path : "String"//商品图片
},{timestamps: {createdAt: 'created', updatedAt: 'updated'}});
module.exports = mongoose.model('goods',goodsSchema);
