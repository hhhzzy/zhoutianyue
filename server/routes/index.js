module.exports = function(app){
	app.get('/',function(req,res){
		res.redirect("main")
	})
	app.use('/main',require("./main.js"));//首页
	app.use('/login',require("./login.js"));  //登录
	app.use('/quit',require("./quit.js"));  //退出
	//商品
	app.use('/goodsList',require("./goods/goodsList.js"));  //商品列表
	app.use('/goodsType',require("./goods/goodsType.js"));  //商品类别
	app.use('/goodsTypeDelete',require("./goods/goodsTypeDelete.js"));  //商品类别删除
	app.use('/goodsAdd',require("./goods/goodsAdd.js"));  //文章详细也
	app.use('/goodsDelete',require("./goods/goodsDelete.js"));  //文章删除
	app.use('/goodsUpdate',require("./goods/goodsUpdate.js"));  //文章修改
	app.use('/goodsImgUpload',require("./goods/goodsImgUpload.js"));  //文章图片上传
	
	app.use('/blogAdd',require("./blog/blogAdd.js"));  //博客信息修改
	app.use('/updateTimeLine',require("./blog/updateTimeLine.js"));  //博客时间线修改
	app.use('/deleteTimeLine',require("./blog/deleteTimeLine.js"));  //博客时间线删除
	//文章
	app.use('/learnAdd',require("./learn/learnAdd.js"));  //学无止境
	app.use('/learnList',require("./learn/learnList.js")); 
	app.use('/learnType',require("./learn/learnType.js"));  //博客类型
	app.use('/learnImg',require("./learn/learnImg.js"));  //图片上传
	app.use('/learnDelete',require("./learn/learnDelete.js"));  //图片上传
	app.use('/learnTypeEdit',require("./learn/learnTypeEdit.js"));  //博客类型编辑
	//用户
	app.use('/userInfo',require("./user/userInfo.js"));  //用户信息页面
	app.use('/captcha',require("./captcha.js")); //验证码
	app.use('/imgUpload',require("./img/imgUpload.js")); //头像上传
	app.use('/address',require("./address.js")); //城市数据
	/*
	 * 
	 *   
	 * 接口
	 * 
	 * 
	 * 
	 * */
	app.use('/api/goodsType',require("./api/goods/goodsType.js"));  //商品类别
	app.use('/api/goods',require("./api/goods/goods.js"));  //商品信息
	app.use('/api/goodsDetail',require("./api/goods/goodsDetail.js"));  //商品详细信息
	app.use('/api/addCart',require("./api/cart/addCart.js"));  //加入购物车
	app.use('/api/cart',require("./api/cart/cart.js"));  //购物车
	app.use('/api/blog',require("./api/blog/blog.js"));  //关于我们
//	app.use('/api/articleDetail',require("./api/article/articleDetail.js"));  //文章详细页查询
	app.use('/api/register',require("./api/register.js"))//用户注册
	app.use('/api/login',require("./api/login.js"))//用户登录
	//文章类型
	app.use('/api/learn/learnType',require("./api/learn/learnType.js"));  //文章类型
	app.use('/api/learn/learn',require("./api/learn/learn.js"));  //文章
}

