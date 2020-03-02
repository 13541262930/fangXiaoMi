import $R from "@/common/lib/request.js"
export default{
	state:{
		data:{
			list:[
				// {
				// 	checked:false,
				// 	id:11,
				// 	title:"商品标题111",
				// 	cover:"/static/images/demo/list/1.jpg",
				// 	// 选中商品属性
				// 	attrs:[
				// 		{
				// 			title:"颜色",
				// 			selected:0,
				// 			list: [
				// 				{ name:'火焰红', },
				// 				{ name:'炭黑', },
				// 				{ name:'冰川兰', }
				// 			]
				// 		},
				// 		{
				// 			title:"容量",
				// 			selected:0,
				// 			list: [
				// 				{ name:'64GB', },
				// 				{ name:'128GB', },
				// 			]
				// 		},
				// 		{
				// 			title:"套餐",
				// 			selected:0,
				// 			list: [
				// 				{ name:'标配', },
				// 				{ name:'套餐一', },
				// 				{ name:'套餐二', }
				// 			]
				// 		},
				// 	],
				// 	pprice:336,
				// 	w:1,
				// 	minnum:1,
				// 	maxnum:10, // 该商品最大商品数，跟库存有关
				// },
				// {
				// 	checked:false,
				// 	id:12,
				// 	title:"商品标题111",
				// 	cover:"/static/images/demo/list/1.jpg",
				// 	// 选中商品属性
				// 	attrs:[
				// 		{
				// 			title:"颜色",
				// 			selected:0,
				// 			list: [
				// 				{ name:'火焰红', },
				// 				{ name:'炭黑', },
				// 				{ name:'冰川兰', }
				// 			]
				// 		},
				// 		{
				// 			title:"容量",
				// 			selected:0,
				// 			list: [
				// 				{ name:'64GB', },
				// 				{ name:'128GB', },
				// 			]
				// 		},
				// 		{
				// 			title:"套餐",
				// 			selected:0,
				// 			list: [
				// 				{ name:'标配', },
				// 				{ name:'套餐一', },
				// 				{ name:'套餐二', }
				// 			]
				// 		},
				// 	],
				// 	pprice:336,
				// 	num:1,
				// 	minnum:1,
				// 	maxnum:10, // 该商品最大商品数，跟库存有关
				// },
				// {
				// 	checked:false,
				// 	id:13,
				// 	title:"商品标题111",
				// 	cover:"/static/images/demo/list/1.jpg",
				// 	// 选中商品属性
				// 	attrs:[
				// 		{
				// 			title:"颜色",
				// 			selected:0,
				// 			list: [
				// 				{ name:'火焰红', },
				// 				{ name:'炭黑', },
				// 				{ name:'冰川兰', }
				// 			]
				// 		},
				// 		{
				// 			title:"容量",
				// 			selected:0,
				// 			list: [
				// 				{ name:'64GB', },
				// 				{ name:'128GB', },
				// 			]
				// 		},
				// 		{
				// 			title:"套餐",
				// 			selected:0,
				// 			list: [
				// 				{ name:'标配', },
				// 				{ name:'套餐一', },
				// 				{ name:'套餐二', }
				// 			]
				// 		},
				// 	],
				// 	pprice:336,
				// 	num:1,
				// 	minnum:1,
				// 	maxnum:10, // 该商品最大商品数，跟库存有关
				// },
			],
			// 选中的商品
			selectedList:[],
			// popup显示
			popupShow:"none",
			// 操作商品的index
			popupIndex:-1
		}
	},
	getters:{
		// 获取购物车商品
		getGoods(state){
			let num = 0
			state.data.list.map(v=>{
				num+=v.num
			})
			return num
		},
		// 获取购物车选中商品
		getCartds(state){
			let cartList = []
			let selecteds = state.data.selectedList
			state.data.list.map(v=>{
				if(selecteds.indexOf(v.selected)>-1){
					cartList.push(v)
				}
			})
			return cartList
		},
		// 判断是否全选
		checkAll:(state)=>{
			console.log(state.data.list.length,state.data.selectedList.length)
			return state.data.list.length === state.data.selectedList.length
		},
		// 计算总件数
		getSumNumner(state){
			let number = 0
			let selecteds = state.data.selectedList
			state.data.list.forEach(v=>{
				if(selecteds.indexOf(v.selected)>-1){
					number+=v.num
				}
			})
			return number
		},
		// 合计
		totalPrice:(state)=>{
			let totale = 0 
			state.data.list.forEach(v=>{
				if(state.data.selectedList.indexOf(v.selected) > -1){
					totale += parseFloat(v.pprice) *parseFloat(v.num) 
				}
			})
			return totale.toFixed(2)
		},
		// 禁用全选
		disableSelectAll(state){
			return state.data.list.length===0
		},
		// 拿到当前需要修改商品的数据
		popupData:(state)=>{
			return  state.data.popupIndex > -1 ? state.data.list[state.data.popupIndex]:{}
		}
	},
	// 同步方法
	mutations:{
		// 选中一个商品/取消一个商品
		selectItem(state,index){
			let id = state.data.list[index].selected
			console.log(id,"--------")
			let i = state.data.selectedList.indexOf(id)
			console.log(state.data.selectedList)
			// 之前选中取消选中
			if(i>-1){
				// 取消当前选中状态
				state.data.list[index].checked = false
				// 移除选中商品列表中的
				return state.data.selectedList.splice(i,1)
			}
			// 选中状态
			// 改变商品列表中的选中状态
			state.data.list[index].checked = true
			// 在选中列表中添加id
			state.data.selectedList.push(id)
		},
		
		// 全选
		selectALL(state){
			state.data.selectedList = state.data.list.map(v=>{
				// 设置选中状态
				v.checked = true
				return v.selected
			})
		},
		// 取消全选
		unSelectAll(state){
			state.data.list.forEach(v=>{
				v.checked = false
			})
			state.data.selectedList = []
		},
		// 长按删除
		longDel(state,item){
			$R.delete('/orders/shopcarts/'+item.selected+"/").then(res=>{
				state.data.list =  state.data.list.filter(v=>{
					if(v.selected == item.selected){
						return false
					}else{
						return true
					}
				})
			})
		},
		// 删除选中
		delGoods(state){
			if(state.data.selectedList.length==1){
				$R.delete('/orders/shopcarts/'+state.data.selectedList[0]+"/").then(res=>{
					console.log(res)
					
					state.data.list =  state.data.list.filter(v=>{
						let index = state.data.selectedList.indexOf(v.selected)
						if( index===-1){
							return true
						}else{
							state.data.selectedList.splice(index,1)
						}
					})
				})
			}else{
				console.log(state.data.selectedList.join(","))
				$R.delete('/orders/shopcarts/multiple_delete/?delete_id='+state.data.selectedList.join(",")).then(res=>{
					console.log(res)
					state.data.list =  state.data.list.filter(v=>{
						let index = state.data.selectedList.indexOf(v.selected)
						if( index===-1){
							return true
						}else{
							state.data.selectedList.splice(index,1)
						}
					})
				})
			}
		},
		// 初始化方法 popupIndex
		initPopupIndex(state,index){
			state.data.popupIndex = index
		},
		// 修改商品数量
		changeNum(state,{num,item}){
			for(let i=0;i<state.data.list.length;i++){
				let it = state.data.list[i]
				console.log(it)
				if(it===item){
					it.num = num
					$R.put('/orders/shopcarts/'+it.selected+"/",{
						goods:it.id,
						nums:num,
						selected:it.selected
					}).then(res=>{
						console.log(res)
					})
				}
			}
			// uni.setStorageSync('cart_list',JSON.stringify(state.data))
		},
		// 加入购车
		addGoodsToCart(state,goods){
			// 往后台发送添加商品请求
			console.log(goods)
			$R.post('/orders/shopcarts/',{
				goods:goods.id,
				nums:goods.num,
				selected:goods.selected
			}).then((res)=>{
				console.log(res)
				let goodId = 0
				let ids = state.data.list.map((v,i)=>{
					if(v.selected===goods.selected){
						goodId = i
					}
					return v.selected
				})
				if(ids.indexOf(goods.selected)>-1){
					state.data.list[goodId].num = goods.num+state.data.list[goodId].num
				}else{
					state.data.list.unshift(goods)
				}
				
				
			})
		},
		//后去缓存数据
		cart_init(state){
			state.data.list = []
			// let cart_state =JSON.parse(uni.getStorageSync('cart_list'))
			// // uni.removeStorageSync('cart_list')
			//   console.log(cart_state)
			// state.data=cart_state
			$R.get("/orders/shopcarts/").then(res=>{
				if(res.length>0){
					let list = []
					for(let s=0;s<res.length;s++){
						let item = res[s]
						let arrt = []
						// 获取规格字段列表
						var labels = []
						let list_list=[]
						 item.goods.goods_sku.map((v,vi)=>{
							let y = v.sku_specification
							for (let i = 0; i < y.length; i++) {
									labels.push({
											title:y[i].spec.name,
											selected:0,
											list:[]
										})
										if(list_list.indexOf(y[i].option.value)==-1){
											list_list.push(y[i].option.value)
											labels[i].list.push({
												name:y[i].option.value
											})
										}
							}
						})
						for (let i = labels.length-1;i >= 0 ;i--) {
							if(labels[i].list ==""||labels[i].list==null){
								labels.splice(i,1)
							}
						}
						
						
						let skuItem = item.goods.goods_sku
						skuItem.map(v=>{
							if(v.id===item.selected){
								state.data.list.push({
									attrs:labels,
									id:item.goods.id,
									name:item.goods.name,
									pprice:v.shop_price,
									maxnum:v.goods_num,
									minnum:1,
									checked:false,
									num:item.nums,
									cover:v.image,
									title:v.name,
									selected:v.id
								})
							// state.data.selectedList.push(item.selected)
							}
						})
					}
				}else{
					state.data.list=[]
				}
			})
		
		}
	},
	// 异步方法
	actions:{
		// 异步初始化购物车数据
		// InitCart(commit){
		// 	commit('cart_init')
		// },
		// 清理购物车
		// 支付清楚购物车商品
		changeData({state,commit}){
			let item = state.data.list
			let list = state.data.selectedList
			for(let i=0;i<list.length;i++){
				item.splice(1,list[i])
			}
			state.data.selectedList=[]
			commit("delGoods")
		},
		doSelectedAll({commit,getters}){
			getters.checkAll ? commit('unSelectAll'):commit('selectALL')
		},
		// 是否删除选中商品
		doDelGoods({commit}){
			uni.showModal({
				content:"是否删除选中商品",
				success(res){
					if(res.confirm){
						commit('delGoods')
						uni.showToast({
							title:"删除成功"
						})
					}
				}
			})
		},
		// 显示隐藏
		doShowPopup({state,commit},index){
			commit('initPopupIndex',index)
			state.data.popupShow = "show"
		},
		// 隐藏popup
		doHidePopup({state}){
			state.data.popupShow = "hide"
			setTimeout(()=>{
				state.data.popupShow = "none"
				commit('initPopupIndex',-1)
			},200)
		}
	}
}