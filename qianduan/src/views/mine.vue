<template>
	<div class="pageboder main">
		<headTwo title="账户信息"></headTwo>
			<div id="content" class="contentBg" data-role="content">
				<div class="accountMsg">
					<dl class="msgList j-child-num">
						<dd class="jShowHead"><a href="##"><span class="uIcon right"></span>头像</a></dd>
						<dd><a href=""><span class="uNum right">541313133</span>用户名</a></dd>
						<dd class="jShowHead"><a class="borNoBtm" href="##">修改基本信息</a></dd>
						<dt>账号绑定</dt>
						<dd class="child-4"><a href=""><span class="uNum right">186****1157</span>手机</a></dd>
						<dd class="child-5"><a href=""><span class="uText right">未绑定</span>微信</a></dd>
						<dt>安全设置</dt>
						<dd><a href=""><span class="uText right">未绑定</span>登陆密码</a></dd>
						<dd><a class="borNoBtm" @click="quit()" href="">退出登录</a></dd>
					</dl><!-- msgList -->
				</div><!-- accountMsg -->
			</div><!--content-->
		</div><!--pageboder-->
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			logined(){//判断是够已经登录
				if(!window.localStorage.logined){
					this.$router.replace('/login');
				}
			},
			quit(){ //退出，删除localStorage里面的值
				window.localStorage.removeItem("logined");
				window.localStorage.removeItem("name");
				window.localStorage.removeItem("password");
			}
		},
		mounted(){
			this.logined();
		}
	}
</script>

<style scoped>
	.accountMsg{padding-top: 3%; font-size: 0.3rem;}
	.accountMsg .msgList{border-bottom: 1px solid #ccc;}
	.accountMsg .msgList dd{ padding: 0 0 0 3.125%; background: #fff;}
	.accountMsg .msgList dd a{display: block; margin-right: 5%; height: 3.76em; line-height: 3.76; border-bottom: 1px solid #ccc; -webkit-background-size: auto 30%;background-size: auto 30%;}
	.accountMsg .msgList dt{background-color: #eeeeee;height: 3.27em; line-height: 3.27em; padding: 0 3.125%; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; font-size: 0.26rem;}
	.accountMsg .msgList dd .uNum{color: #999;}
	.accountMsg .msgList dd .uText{color: #ff7200;}
	.accountMsg .msgList dd .uIcon{display: inline-block; width: 2.96em; height: 2.96em; background: url(../assets/images/picMan.jpg) 0 0 no-repeat; -webkit-background-size: contain; background-size: contain; margin-top: 2%;}
	.accountMsg .msgList .child-2 a,
	.accountMsg .msgList .child-5 a,
	.accountMsg .msgList .child-7 a{border: none;}
	.accountMsg .msgList .child-4,
	.accountMsg .msgList .child-5{padding-left: 13.125%; background:#fff url(../assets/images/iconPhone.jpg) 3.125%	center no-repeat; -webkit-background-size: auto 35%;background-size: auto 35%;}
	.accountMsg .msgList .child-5{ background:#fff url(../assets/images/iconWeixin.jpg) 3.125%	center no-repeat; -webkit-background-size: auto 35%;background-size: auto 35%;}
	.borNoBtm{border-bottom: none!important;}
	.bg-div{height: 3.61rem;background-color: #eeeeee;}
</style>