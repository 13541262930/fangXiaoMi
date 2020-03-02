import $R from "@/common/lib/request.js"
export default {
	state: {
		integral:""
	},
	getters: {
		getIntegral(state){
			return state.integral
		}
	},
	// 同步方法
	mutations: {
		changeIntegral(state,item){
			state.integral = item
		}
	},
	// 异步方法
	actions: {

	}
}
