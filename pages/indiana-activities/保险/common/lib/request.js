import $store from "@/store/index.js"
export default{
	// 全局配置
	common:{
		// baseUrl:"http://2818g63v16.wicp.vip:39465",
		// baseUrl:"http://192.168.2.129:8000",
		baseUrl:"http://192.168.2.105:8000",
		// baseUrl:"http://47.103.8.182:8000",
		header:{
			"Content-Type":"application/x-www-form-urlencoded"
			// "Content-Type":"application/json"
		},
		method:"GET",
		datatype:"json"
	},
	// 请求 返回promise
	request(options={},){
		// // 请求之前token 验证
		// if($store.state.user.userInfo){
		// 	options.token = $store.state.user.userInfo.token
		// }
		// 组织参数
		// 判断是否完整url
		console.log(options)
		if(options.isurl==="url"){
			options.url =options.url
			console.log(options.url)
		}else{
			options.url = this.common.baseUrl+options.url
		}
		// if($store.state.user.token){
		// 	this.common.header["Authorization"] = "JWT"+" "+$store.state.user.token
		// 	console.log(this.common.header)
		// }
		options.header = this.common.header
		options.data = options.data
		// console.log(options.data)
		options.method = options.method
		options.datatype  =options.datatype
		// 拿到token
		// if(options.token){
		// 	options.header.token = $store.state.user.token
		// 	// 二次验证token
		// 	// options.checkToken 检验是否必须验证token
		// 	if(options.checkToken&&!options.header.token){
		// 		uni.showToast({
		// 			title:"请先登录",
		// 			icon:"none"
		// 		});
		// 		return uni.navigateTo({
		// 			url:"@/pages/login/login.vue"
		// 		})
		// 	}
		// }
		// 请求
		 return new Promise((res,rej)=>{
			uni.request({
				...options,
				success:(result)=> {
					console.log(options)
					// 服务端失败
					// if(result.statusCode===500){

					// 	uni.showToast({
					// 		title:result.data.msg || "服务内务错误",
					// 		icon:"none"
					// 	});
					// 	return rej("请求失败")
					// }
					// 成功
				
					res(result.data)
				},
				fail:(error)=> {
					console.log(error)
					uni.showToast({
						title:error.errMsg || "请求失败",
						icon:"none"
					});
					return rej()
				}
			})
			
		})
	},
	// get请求
  	get(url,data={},isurl,options={}){
		options.isurl = isurl
		options.url = url
		options.data = data
		options.method = "GET"
		return this.request(options)
	},
	
	// post请求
	post(url,data={},isurl,options={}){
		options.isurl = isurl
		options.url = url
		options.data = data
		options.method = "POST"
		return this.request(options)
	},
	// delete请求
	delete(url,data={},options={}){
		options.url = url
		options.data = data
		options.method = "DELETE"
		return this.request(options)
	},
	

// put请求
	put(url,data={},options={}){
		options.url = url
		options.data = data
		options.method = "PUT"
		return this.request(options)
	}}