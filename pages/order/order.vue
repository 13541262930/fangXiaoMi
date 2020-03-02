<template>
	<view style="background: #F5F5F5;">
		<loading-plus v-if="beforeReady"></loading-plus>
		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top">
			<view class="flex-1 d-flex a-center j-center py-2" @tap="changeIndex(index)" v-for="(item,index) in tabBars" :key="index"
			 :class="tabIndex==index?'tabactive':''">
				{{item.name}}
			</view>
		</view>
		<block v-for="(tab,tabindex) in tabBars" :key="tabindex">
			<!-- 订单列表 -->
			<view class="position-relative" v-show="tabIndex==tabindex" style="min-height: 440rpx;">
				<template v-if="tab.list.length<=0">
					<!-- 无订单显示的图片 -->
					<no-thing :icon="tab.nothing" :msg="tab.msg"></no-thing>
				</template>
				<!-- 订单列表 -->
				<!-- 头部 -->
				<block v-for="(item,index) in tab.list" :key="index">
					<order-list :item="item" :butn="tab.butn" :tabName="tab.name" :index="index"></order-list>
				</block>
			</view>
		</block>
		<!-- 猜你喜欢 -->
		<recommended :resdata="hotList"></recommended>
	</view>
</template>

<script>
	import recommended from "../../components/common/recommended.vue"
	import noThing from "../../components/common/no-thing.vue"
	import orderList from "../../components/common/order-list.vue"

	export default {
		components: {
			recommended,
			noThing,
			orderList
		},
		data() {
			return {
				beforeReady: true,
				tabIndex: 0,
				nextPage:"",
				previousPage:"",
				tabBars: [
					//index 0为全部 1为待付款 2为待收货 3为待评价 4 为已取消
					{
						name: "全部",
						nothing: "no_pay",
						msg: "你还没有待付款订单1",
						list: [
							// {create_tiem:"2019/10/30",status:"待付款", butn:{one:{name:"取消订单",path:"login"},two:{name:"修改信息",path:""},three:{name:"立即付款",path:""}},order_items:[
							// 		{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1},
							// 		{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1},
							// 	],tatol_num:"2",tatolPrice:"900"
							// 	},
							// 	{create_tiem:"2019/10/30",status:"待收货",butn:{one:{name:"申请售后",path:"login"},two:{name:"查看物流",path:"logistics-deatil"},three:{name:"确认收货",path:""}},order_items:[
							// 			{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1}
							// 		],tatol_num:"2",tatolPrice:"900"
							// 		},
							// {create_tiem:"2019/10/30",status:"待评价",butn:{one:{name:"评价晒单",path:"login"}},order_items:[
							// 		{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1}
							// 	],tatol_num:"2",tatolPrice:"900"
							// 	},
							// 	{create_tiem:"2019/10/30",status:"已取消",butn:{one:{name:"退款明细",path:"login"},two:{name:"再次购买",path:"login"}},order_items:[
							// 			{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1}
							// 		],tatol_num:"2",tatolPrice:"900"
							// 		}
						]
					},
					{
						name: "待付款",
						nothing: "no_pay",
						msg: "你还没有待付款订单2",
						list: [
							// {create_tiem:"2019/10/30",status:"待付款", butn:{one:{name:"取消订单",path:"login"},two:{name:"修改信息",path:""},three:{name:"立即付款",path:""}},order_items:[
							// 	{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1}
							// ],tatol_num:"2",tatolPrice:"900"
							// }
						]
					},
					{
						name: "待收货",
						nothing: "no_receiving",
						msg: "你还没有待付款订单3",

						list: [
							// {create_tiem:"2019/10/30",status:"待收货",butn:{one:{name:"申请售后",path:"login"},two:{name:"查看物流",path:"logistics-deatil"},three:{name:"确认收货",path:""}},order_items:[
							// 	{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1}
							// ],tatol_num:"2",tatolPrice:"900"
							// }
						]
					},
					{
						name: "待评价",
						nothing: "no_comment",
						msg: "你还没有待付款订单4",
						list: [
							// {create_tiem:"2019/10/30",status:"待评价",butn:{one:{name:"评价晒单",path:"login"}},order_items:[
							// 	{cover:"../../static/images/demo/cate_04.png",title:"小米8",price:"199",attrs:"金色 标配",num:1}
							// ],tatol_num:"2",tatolPrice:"900"
							// }
						]
					},
					{
						name: "已完成",
						nothing: "no_comment",
						msg: "你还没有已经完成订单",

						list: [{
							create_tiem: "2019/10/30",
							status: "已取消",
							butn: {
								one: {
									name: "退款明细",
									path: "login"
								},
								two: {
									name: "再次购买",
									path: "login"
								}
							},
							order_items: [{
								cover: "../../static/images/demo/cate_04.png",
								title: "小米8",
								price: "199",
								attrs: "金色 标配",
								num: 1
							}],
							tatol_num: "2",
							tatolPrice: "900"
						}]
					}
				],
				hotList: [
				]
			}
		},
		onBackPress(options) {
			// 监听app端返回按钮
			// #ifdef APP-PLUS
			if (options.from == "navigateBack") {
				return false
			}
			if (!this.loginStatus) {
				let tabBar = uni.getStorageSync('tabBar')
				uni.switchTab({
					url:`/pages/${tabBar}/${tabBar}`
				})
				return true;
			}
			// #endif
		},
		computed: {

		},
		methods: {
			// 获取猜你喜欢
			async getCaiLike(){
				this.$R.get("/goods/guessyoulike/").then(res=>{
					console.log(res)
					res.results.map(v=>{
						this.hotList.push({
									id:v.id,
									goods_front_image: v.goods_front_image,
									name: v.name,
									goods_brief: v.goods_brief,
									market_price: v.market_price,
									shop_price: v.shop_price
						})
					})
				})
			},
			changeIndex(index) {
				this.tabIndex = index
			},
			// 修改时间
			changeTime(time,pay_status) {
				let list = []
				let tim = time.substring(0, 10)
				if(pay_status){
					let T = time.substring(11, 13)
					let M = parseInt(time.substring(14, 16)) + 30
					if (M > 60) {
						M = M - 60
						T = parseInt(T) + 1
					}
					list.push(T)
					list.push(M)
				}else{
					let T = time.substring(11, 13)
					let M = parseInt(time.substring(14, 16))
					list.push(T)
					list.push(M)
				}
				return tim + " " + list.join(":")
			},
			getOrders(callback) {
				this.tabBars[this.tabIndex].list=[]
				this.tabBars[0].list=[]
				this.$R.get("/orders/orders/?page_size=5").then(res => {
					console.log(JSON.stringify(res))
					this.zuzhiData(res.results)
					this.nextPage = res.next
					this.previousPage = res.previous
					if(typeof callback ==="function"){
						callback()
					}
				})
			},
			zuzhiData(res) {
				this.beforeReady = false
				if (res.length > 0) {
					res.map(v => {
						if (v.pay_status === "paying") {
							var pay_status = "待付款"
							var btn = {
								one: {
									name: "修改信息",
									path: "order-detail",
									id:v.id
								},
								two: {
									name: "立即付款",
									path:{
										weiXin:v.wxpay_url,
										zhiFuBao:v.alipay_url,
										id:v.id
									} 
								}
							}
						} else {
							var pay_status = "待收货"
							var btn = {
								one: {
									name: "申请售后",
									path: "login"
								},
								two: {
									name: "查看物流",
									path: "logistics-deatil"
								},
								three: {
									name: "确认收货",
									path: ""
								}
							}
						}
						var attrs = []
						var order_items = []
						v.goods.map(j => {
							var sku = j.goods
							sku.sku_specification.map(y => {
								attrs.push(y.option.value)
							})
							order_items.push({
								id:v.id,
								cover: sku.image,
								title: sku.name.split(" ")[0],
								price: v.order_mount,
								attrs: attrs.join(" "),
								num: j.goods_num,
							})
						})
						var tatol_num = 0
						var tatolPrice = 0
						for (let yx = 0; yx < order_items.length; yx++) {
							tatol_num = tatol_num + order_items[yx].num
							tatolPrice = tatolPrice + order_items[yx].price
						}
						if (v.pay_status === "paying") {
							var create_tiem = this.changeTime(v.add_time,true)
							var tabIndex = 1
						} else {
							var create_tiem = this.changeTime(v.add_time)
							var tabIndex = 2
						}
						console.log(tatol_num)
						this.tabBars[tabIndex].list.push({
							create_tiem: create_tiem,
							status: pay_status,
							butn: btn,
							order_items: order_items,
							alipay_url: v.alipay_url,
							tatol_num: tatol_num,
							tatolPrice: tatolPrice
						})
						this.tabBars[0].list.push({
							create_tiem: create_tiem,
							status: pay_status,
							butn: btn,
							order_items: order_items,
							alipay_url: v.alipay_url,
							tatol_num: tatol_num,
							tatolPrice: tatolPrice
						})

					})
					
				}else{
					this.beforeReady = false
				}
			}
		},
		onReachBottom(){
			if(this.nextPage!=="null"&&this.nextPage){
				this.$R.request({url:this.nextPage,isurl:"url"}).then(res=>{
					this.nextPage = res.next
					this.zuzhiData(res.results)
				})
			}
		},
		onPullDownRefresh() {
			this.getOrders(()=>{
				uni.stopPullDownRefresh()
			})
		},
		onLoad(e) {
			this.tabIndex = e.index
			this.getOrders()
			this.getCaiLike()
		}
	}
</script>

<style>
	.tabactive {
		border-bottom: 5rpx solid #FD6801;
		color: #FD6801;
		margin-bottom: -5rpx;
	}
</style>
