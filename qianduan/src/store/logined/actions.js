import * as  types from './mutations_types.js'

export default{
	logined:({commit},logined) => {
		commit(types.LOGINED,logined);
	}
}
