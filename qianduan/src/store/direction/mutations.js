import * as types from "./mutations_types.js"

export default{
	[types.UPDATE_DIRECTION](state,obj){
		state.direction = obj.direction;
	}
}
