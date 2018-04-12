const mongoose = require("../lib/mongo.js");
Schema = mongoose.Schema;
const goodsTypeSchema = new Schema({
	"type" : "String",
},{timestamps: {createdAt: 'created', updatedAt: 'updated'}});
module.exports = mongoose.model("goodsType",goodsTypeSchema);

