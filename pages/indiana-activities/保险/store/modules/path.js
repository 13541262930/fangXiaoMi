import $R from "@/common/lib/request.js"
export default {
	state: {
		list: [
			// {
			// 	id:1,
			// 	name: "楚绵",
			// 	phone: "158****531",
			// 	path: "广元省 广州市 白云区",
			// 	detailPath: "XXXXX街道",
			// 	isDefult: true
			// },
			// {
			// 	id:2,
			// 	name: "楚绵",
			// 	phone: "158****531",
			// 	path: "广东省 广州市 白云区",
			// 	detailPath: "XXXXX街道",
			// 	isDefult: false
			// },
			// {
			// 	id:3,
			// 	name: "楚绵",
			// 	phone: "158****531",
			// 	path: "广东省 广州市 白云区",
			// 	detailPath: "XXXXX街道",
			// 	isDefault: false
			// }
		],
	},
	getters: {
		// 获取默认地址
		defaultPath:(state)=>{
			return state.list.filter(v=>{
				return v.isDefault
			})
		}
	},
	// 同步方法
	mutations: {
		// 创建收货地址
		createPath(state,item){
			// if(state.list.length>5){
			// 	state.list.splice(state.list.length-1,1)
			// }
			$R.post('/goods/address/',item).then(res=>{
				state.list.unshift(res)
			})
		},
		//删除收货地址
		delPath(state,index){
			$R.delete('/goods/address/'+state.list[index].id+"/").then(res=>{
				console.log(res)
				uni.showToast({
					title:"删除成功 "
				})
			})
			state.list.splice(index,1)
		},
		// 修改收货地址
		updatePath(state,{index,item,callback}){
			console.log(JSON.stringify(item))
			$R.put('/goods/address/'+state.list[index].id+"/",item).then(res=>{
				for(var key in res){
					state.list[index][key]=res[key]
				}
				if(typeof callback ==="function"){
					callback()
				}
			})
		},
		// 全部取消默认收货地址
		removueDefault(state){
			// 取消本地默认收货地址
			state.list.forEach((v)=>{
				if(v.isDefault){
					v.isDefault=false
				}
			})
		},
		changeDefault(state,index){
			let item = state.list[index]
			item.isDefault =true
			$R.put('/goods/address/'+state.list[index].id+"/",item).then(res=>{
				console.log(res)
				// for(var key in res){
				// 	state.list[index][key]=res[key]
				// }
				// if(typeof callback ==="function"){
				// 	callback()
				// }
			})
		},
		// 持久化储存收货地址
		// persistence(state){
		// 	uni.setStorageSync('persistence',JSON.stringify(state.list))
		// },
		// 获取本地储存收货地址列表
		getList(state){
			// 从服务器获取收货地址
			$R.get("/goods/address/").then(res=>{
				console.log(JSON.stringify(res))
				state.list = res
			})
		}
	},
	// 异步方法
	actions: {
		// 修改地址
		updatePathAction({commit},obj){
			console.log(obj.item)
			if(obj.item.isDefault){
				commit('removueDefault');
			}
			console.log(obj)
			commit('updatePath',obj)
			// commit('persistence')
		},
		// 增加收货地址
		createPathAction({commit},item){
			if(item.isDefault){
				commit('removueDefault');
			}
			commit('createPath',item)
			// commit('persistence')
		},
		setDefault({commit},index){
			commit('removueDefault');
			commit('changeDefault',index)
		}
	}
}
