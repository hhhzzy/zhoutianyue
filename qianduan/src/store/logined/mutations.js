import * as  types from './mutations_types.js'

export default{
	[types.LOGINED](state,logined){
		state.logined = logined;
		localStorage.setItem("logined",logined);
	}
}
