import * as  types from './mutations_types.js'

export default{
	[types.LOGINED](state){
		state.token = true;
	}
}
