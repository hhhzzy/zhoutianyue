import Vue from "vue"
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)
//引入cart
import cart from'./cart/index.js'
import loading from './loading/index.js'
import direction from './direction/index.js'
import logined from './logined/index.js'

export default new Vuex.Store({
	modules:{
		cart,
		loading,
		direction,
		logined
	}
})
