import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isConnected: true,
	},
	getters: {
		isAuthenticated: (state) => {
			return state.isConnected
		}
	},
	mutations: {
		login (state) {
			state.isConnected = true
		},
		logout (state) {
			state.isConnected = false
		},
	},
})
