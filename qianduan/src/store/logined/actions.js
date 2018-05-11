import * as  types from './mutations_types.js'
import http  from "../../api/api.js"

export default{
	logined:({commit},logined) => {
		commit(types.LOGINED,logined);
	}
}
