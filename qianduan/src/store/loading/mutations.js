import * as types from "./mutations_types.js"

export default{
	[types.SHOWLOADING](state){
		state.loading = true;
	},
	[types.HIDELOADING](state){
		state.loading = false;
	}
}
