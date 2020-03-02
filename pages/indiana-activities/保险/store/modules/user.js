import $store from "@/store/index.js"
import $R from "@/common/lib/request.js"
export default{
	state:{	
		// 判断是否显示动画
		beforeReady:true,
		// 登录状态
		loginStatus:false,
		// token
		token:null,
		// 个人信息
		userInfo:{}
	},
	mutations:{
		// 修改昵称
		change_nickname(state,nickname){
			state.userInfo.nickname = nickname
			// 给后台发送修改昵称请求
		},
		// 初始化登录状态
		inituser(commit){
			let res = JSON.parse(uni.getStorageSync('userInfo')) 
			if(res){
				$R.post('/users/api-token-verify/',{
					token:res.token
				}).then(re=>{
					console.log(re)
					if(re.token){
						this.commit('login',res)
					}
				})
			}
		},
		// 登录
		login(state,item){
			if(item.token){
				// 刷新token加长时间
				$R.post('/users/refresh_jwt_token/',{token:item.token}).then(res=>{
					item['token'] = res.token
					state.userInfo = item
					state.token = res.token
					state.beforeReady = false//消除购物车动画
					state.loginStatus = true//改变登录状态
					$store.commit('getList')
					console.log(state.loginStatus)
					// 异步请求购物车数据
					$store.commit('cart_init')
				})
				// 持久化储存
				uni.setStorageSync('userInfo',JSON.stringify(item))
				if(typeof item.callback ==="function"){
					item.callback()
				}
				
			}else{
				state.userInfo = item
			}
			
		},
		
		// 退出功能
		logout(state){
			state.userInfo = []
			state.loginStatus = false
			state.beforeReady = true
			state.token = null
			uni.removeStorageSync('userInfo')
			
		},
		// 改变动画
		changeBeforeReady(state){
			state.beforeReady=false
		}
		
	}
}