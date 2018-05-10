import axios from 'axios'
import qs from "qs"   //格式化表单的插件
import store from '../store/index.js'
//使用get获取本地的数据文件时候，应该把文件放在static文件夹里面，这个文件夹是vue-cli创建时候暴露的文件夹
//设置axios允许携带cookie,这样就不会每一次请求都会让服务器以为是一次新的请求，在服务器创建新的session
axios.defaults.withCredentials = true;
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
	store.dispatch('showLoading');
  	return config;
}, function (error) {
  	return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  	return response;
}, function (error) {
  	return Promise.reject(error);
});

//检查状态码是否正常
function checkStatus(response){
	store.dispatch('hideLoading'); //隐藏loading
	//如果状态码正常，则可以正常的返回数据
	if(response && ( response.status === 200 || response.status === 304 || response.status === 400 )){
		return response;
	}else{
		//状态异常
		return {
			"status":-404,
			"msg":"程序或者网络异常"
		}
	}
}
//检查返回的异常状态码是什么
function checkCode(res){
	//如果返回的错误状态码异常（网络错误、服务器错误、后端抛出的错误）可以弹出一个错误，告诉用户
	if(res.status == -404){
		alert(res.msg);
	}
	if(res.data && (!res.data.success)){
		alert(res.data.msg);
	}
	return res;
}

//返回axios
export default{
	post(url,data){
		return new Promise(function(resolve,reject){
			axios({
				method:"post",
				url:url,
				data:qs.stringify(data),//序列化数据
				timeout:10000,//请求超时，
				headers: {  //请求头
			        'X-Requested-With': 'XMLHttpRequest',
			        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			   },
			})
			.then(function(response){
				resolve(checkStatus(response)); //返回正常，调用状态码检查
			})
			.catch(function(err){
				reject(checkCode(err));
			})
		}) 
	},
	get(url,data){
		return new Promise(function(resolve,reject){
			axios({
				method:"get",
				url:url,
				params:qs.stringify(data),//序列化数据
				timeout:10000,//请求超时，
				headers: {  //请求头
			        'X-Requested-With': 'XMLHttpRequest'
			   },
			})
			.then(function(response){
				resolve(checkStatus(response)); //返回正常，调用状态码检查
			})
			.catch(function(err){
				reject(checkCode(err));
			})
		})

	}
}
