import * as  types from './mutations_types.js'

export default{
	showLoading:({commit}) => {
		commit(types.SHOWLOADING);
	},
	hideLoading:({commit}) => {
		commit(types.HIDELOADING);
	}
}
