import http from "./api.js"
import store from "../store/index.js"
export default function(){
	http.post('http://localhost:3002/api/getLogined')
		.then(function(data){
			store.dispatch('logined',data.data.logined);
			console.log(data.data.logined)
			return data.data.logined;
		});
}
