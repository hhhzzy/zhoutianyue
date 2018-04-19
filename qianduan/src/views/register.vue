<template>
	<div class="main register-box">
			<headTwo title="注册"></headTwo>
			<shalter v-if="showSha" @showSha="getShowSha" :shaCon="shaCon"></shalter>
			<p class="title">
				欢迎来到秘月购
			</p>
			<div class="tips" v-if="showTips">
				<p class="del-tips">X</p>
				<p class="tips-con">{{tipsCon}}</p>
			</div>
			<div class="login-content register-content">
				<form name="login-form" action="">
					<div class="tel clear">
						<img src="../assets/images/login-phone.png" alt="">
						<input type="text" v-model="userName.val" placeholder="用户名">
					</div>
					<div class="pas clear">
						<img src="../assets/images/login-pas.png" alt="">
						<input type="password" v-model="pwd.val" placeholder="请输入密码">
					</div>
					<!--<div class="yzm clear">
						<img src="../assets/images/login-yzm.png" alt="">
						<input type="text" placeholder="验证码">
						<img class="img" src="../assets/images/codeImg.jpg" alt="" />
					</div>-->
					<div class="login-btn clear">
						<input :style="{ 'backgroundColor': btnColor ? 'red' : '#c6c6c6'}" type="button" @click="registering()" value="注册">
					</div>
					<router-link class='reg-a' to="/login">已有账户，去登录</router-link>
				</form>
				<p class="weixin-logo">
					<img src="images/login-weixin.png" alt="">
				</p>
				<p class="read">
					<a href="">已阅读并同意《秘月购注册协议》</a>
				</p>
			</div>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				userName:{
					"val":"",
					"trigger":false
				},
				pwd:{
					"val":"",
					"trigger":false
				},
				tips:'',
				showTips:false,
				tipsCon:'', //提示栏的信息
				canReg:false, //是否能够向后台传送数据
				btnColor:false,
				shaCon:"",
				showSha:false
			}
		},
		methods:{
			registering(){ //注册
				const history = window.localStorage;
				if(this.canReg){
					var _this = this;//重置this的指向
					this.$http.post("http://localhost:3002/api/register",
						 {
						 	name:this.userName.val,
						 	password:this.pwd.val
						 })
						 .then(function(res){
						 	if(res.data.err){
						 		_this.showTips = true;
						 		_this.tipsCon = res.data.msg;
						 	}else{
								history.setItem("name",res.data.data.name);
								history.setItem("password",res.data.data.password);
								history.setItem("logined","true");
						 		_this.$store.dispatch("logined");//注册成功，发送tooken说明登录了
						 		_this.$router.replace("/index");//取代当前的路由，使其登录成功的时候不能回退
						 	}
							
						 })
						 .catch(function(err){
						 	console.log(err);
						 })
				}
			},
			fetchData(){
				console.log(this.$router);
			},
			getShowSha(data){   //得到从子组件传过来的弹出层的状态
				this.showSha = data;
			}
		},
		watch:{
			'$route':'fetchData',
			'userName.val'(){
				var userNameReg = /^[\w\u4e00-\u9fa5]{3,10}$/g;//3-10字母/汉字/数字/下划线
				if(!this.userName.val.match(userNameReg)){
					this.showTips = true;
					this.tipsCon = "请输入3-10位字母/汉字/数字/下划线";
					this.userName.tigger = false;
				}else{
					this.showTips = false;
					this.userName.tigger = true;
				}
				//判断能否向后台传送数据
				if(this.userName.tigger && this.pwd.tigger){
					this.canReg = true;
					this.btnColor = true;
				}else{
					this.canReg = false;
					this.btnColor = false;
				}
			},
			'pwd.val'(){
				var pwdReg = /^\S{3,20}$/g;//3-20位非空字符
				if(!this.pwd.val.match(pwdReg)){
					this.showTips = true;
					this.tipsCon = "请输入3-20位非空字符";
					this.pwd.tigger = false;
				}else{
					this.showTips = false;
					this.pwd.tigger = true;
				}
				if(this.userName.tigger && this.pwd.tigger){
					this.canReg = true;
					this.btnColor = true;
				}else{
					this.canReg = false;
					this.btnColor = false;
				}
			}
		}
	}
</script>

<style scoped>
	.register-box{background-color: #F4F4F4;}
	.tips{box-shadow: 0 0 5px #bbb;background-color: white;border-radius: 0.05rem;text-align: center;color: red;margin: 0 0.24rem;overflow: hidden;margin-bottom: 0.1rem;}
	.del-tips{float: left; width: 0.8rem;height: 0.8rem;background-color: red;color: white;text-align: center;line-height: 0.8rem;font-size: 0.3rem;font-weight: bold;}
	.tips-con{float: left;line-height: 0.8rem;padding-left: 0.1rem;font-size: 0.18rem;}
	.register-box .title{font-size: 0.46rem;color: #6e9204;text-align: center;background-color: #f4f4f4;padding: 1rem 0 0.8rem 0;}
	.login-header div:nth-of-type(3){text-align: right;}
	.login-box{background-color: #f4f4f4;height: 100%;}
	.login-title{overflow: hidden;margin: 0 0.24rem;margin-bottom: 0.56rem;}
	.login-title li{font-size: 0.28rem;float: left;width: 50%;text-align: center;height: 0.92rem;line-height: 0.92rem;border-bottom: 1px solid #999999;color: #999999;}
	.login-title .current{color: #7aa00b;border-bottom: 3px solid #7aa00b;}
	.login-content{padding: 0 0.24rem;border-radius: 0.05rem;background-color: #f4f4f4;}
	.login-content [name=login-form]{margin-bottom: 1.5rem;}
	.login-content div{background-color: white;;height: 1.04rem;border-bottom: 1px solid #dadada;color: #ababab;padding-top: 0.33rem;padding-left: 0.45rem;border-radius: 0.1rem 0.1rem 0 0;}
	.login-content img{display: block;float: left;width: 0.46rem;height: 0.47rem;}
	.login-content input{float: left;height: 0.46rem;line-height: 0.46rem;border: none;font-size: 0.28rem;padding-left: 0.3rem;}
	.login-content .yzm{border-bottom: none;border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}
	.phone-login .yzm{border-radius: 0.1rem 0.1rem 0 0;}
	.login-content .pas{border-bottom: none;border-radius: 0 0 0.1rem 0.1rem;}
	.login-content .get-yzm{padding-left: 1rem;background-color: white;color: #7aa00b;}
	.login-content .login-btn{margin: 0.66rem 0 0 0;padding:0;border-bottom: none;height:0.82rem;}
	.login-content .login-btn input{padding-left: 0;width: 100%;height:100%;border-radius: 0.1rem;color: white;background-color: #c6c6c6;}
	.weixin{margin: 0 auto;font-size: 0.24rem;position: relative;width: 4.58rem;height: 0.1rem;border-bottom:1px solid #bababa;color: #666666;}
	.weixin span{position: absolute;left: 40%;top:-85%;display: block;background-color: #f4f4f4;width: 1.2rem;text-align: center;}
	.weixin-logo{width: 1.5rem;height: 1.2rem;margin-top: 0.45rem;margin-left: auto;margin-right: auto;}
	.weixin-logo img{display: block;width: 100%;height: 100%;}
	.read{font-size: 0.22rem;text-align: center;color: #666666;margin-top: 1rem;padding-bottom: 1.66rem;}
	.read a{color: #666;}
	.forget-pas{font-size: 0.28rem;color: #666666;display: block;text-align: right;margin-top: 0.3rem;}
	.register-content .tel{border:2px solid #dedede;border-bottom:none;}
	.register-content .pas{border:2px solid #dedede;}
	.register-content .yzm{border:2px solid #dedede;border-radius: 0 0 0.1rem 0.1rem;}
	.reg-a{font-size:0.12rem;float: right;margin-top: 0.2rem;color: #666;}
</style>