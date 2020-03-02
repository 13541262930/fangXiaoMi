import $R from "@/common/lib/request.js"
export default {
	state: {
		payUrl:{
			zhiFuBao:"",
			weiXin:"",
			sumPrice:"",
			id:""
		}
	},
	getters: {
		getDataPrice:(state)=>{
			return state.payUrl.sumPrice
		}
	},
	// 同步方法
	mutations: {
		changePayUrl(state,payUrl){
			console.log(payUrl)
			state.payUrl =payUrl
		}
	},
	// 异步方法
	actions: {

	}
}
