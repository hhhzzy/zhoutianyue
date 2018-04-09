const mongoose = require("../lib/mongo.js");
Schema =mongoose.Schema;//创建结构
const userSchema = new Schema({
	"name" : "String",
	"password" : "String"
},{timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports = mongoose.model("user",userSchema);
