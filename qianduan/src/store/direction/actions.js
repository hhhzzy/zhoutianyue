import * as types from "./mutations_types.js"

export default{
	UPDATE_DIRECTION:({commit},{obj}) => {
		commit(types.UPDATE_DIRECTION,obj);
	}
}
