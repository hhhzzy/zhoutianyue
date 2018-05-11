const mongo = require("../lib/mongo.js");
Schema = mongo.Schema;
const cartScheam = new Schema({
	goodsId : "String",
	goods : {   //子表关联查询的外键，查询完成的时候该字段会被父表关联查询出来的数据填充
		type:Schema.Types.ObjectId,
		ref:'goods'
	},
	sellCount : "Number",
	price : "Number",
	boolSel : "Boolean",//加入购物车的时候第一次默认选中
	userId:'String'
},{timestamps: {createdAt: 'created', updatedAt: 'updated'}});
module.exports = mongo.model("cart",cartScheam);
