<template>
	<div class="pageboder main">
		<headTwo title="账户信息"></headTwo>
			<div id="content" class="contentBg" data-role="content">
				<div class="accountMsg">
					<dl class="msgList j-child-num">
						<dd class="jShowHead">
							
							<span class="uIcon right"></span>头像
							<el-upload
								class="avatar-uploader"
								action="http://localhost:3002/api/headImg"
								:show-file-list="false"
								:on-success="handleAvatarSuccess"
								:with-credentials = "true"
								:on-error="uploadError"
								:before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
						</dd>
						<dd class="name"><a href=""><span class="uNum right">541313133</span>用户名</a></dd>
						<dt>账号绑定</dt>
						<dd class="child-4"><a href=""><span class="uNum right">186****1157</span>手机</a></dd>
						<dd class="child-5"><a href=""><span class="uText right">未绑定</span>微信</a></dd>
						<dt>安全设置</dt>
						<dd class="quit"><a class="borNoBtm" @click="quit()" href="javascript:;">退出登录</a></dd>
					</dl><!-- msgList -->
				</div><!-- accountMsg -->
			</div><!--content-->
		</div><!--pageboder-->
</template>

<script>
	export default{
		data(){
			return{
				imageUrl: ''
			}
		},
		methods:{
			logined(){//判断是够已经登录
				if(window.localStorage.logined != "true"){
					this.$router.replace('/login');
				}
			},
			quit(){
				var _this = this;
				//退出
				this.$http.post("http://localhost:3002/api/quit")
						  .then(function(data){	
						  		//退出，删除localStorage里面的值
								window.localStorage.removeItem("name");
								window.localStorage.removeItem("password");
								_this.$store.dispatch('logined',data.data.logined);
								_this.$router.replace({
									path:"/login",
									query:{redirect:_this.$route.path}
								});
						  })
						  .catch(function(err){
						  		if(err) throw err;
						  });
			},
			handleAvatarSuccess(res, file) {
				console.log(res,file)
		        this.imageUrl = URL.createObjectURL(file.raw);
		    },
		    beforeAvatarUpload(file) {
		    	console.log(file)
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;
//		        if (!isJPG) {
//		          this.$message.error('上传头像图片只能是 JPG 格式!');
//		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
		    },
		    uploadError (response, file, fileList) {
		      console.log(response)
		    },
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
	.accountMsg .msgList dd{position: relative;display: block; margin-right: 5%;margin-left: 5%; height: 3.76em; line-height: 3.76; border-bottom: 1px solid #ccc; -webkit-background-size: auto 30%;background-size: auto 30%;}
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
	.accountMsg .msgList .name,.accountMsg .msgList .child-5,.accountMsg .msgList .quit{border-bottom: none;}
	.avatar-uploader{
		position: absolute;
		right: 0;
	    top: 0;
	    width: 2.96em;
		height: 2.96em;    
		margin-top: 2%;
	}
	.avatar-uploader .el-upload--text{
	    border: 1px dashed #d9d9d9;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	     width: 2.96em;
		height: 2.96em; 
	    right: 0;
	    top: 0;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	     width: 1.96em;
		height: 1.96em; 
	    line-height: 1.96em;
	    text-align: center;
	}
	.avatar {
	    width: 1.96em;
		height: 1.96em;
	    display: block;
	}
	.avatar-uploader .el-icon-plus:before{
		display: none;
	}
</style>