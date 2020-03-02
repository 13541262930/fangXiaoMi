<template>
	<view>
		<!-- 头部 -->
		<view class="main-bg-color text-white d-flex p-4 a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
				<view class="font-lg">
					买家已发货
				</view>
				
				<view class="font">
					 还差7天10时自动确认
				</view> 
			</view>
			
			<view class="iconfont icon-daishouhuo line-h mb-2" style="font-size: 100rpx;">
				
			</view>
		</view>
		<!-- 身体 -->
		<view class="p-3">
			<view class="text-light-muted font-md">
				<text class="font-lg text-dark mr-3">{{ userName }}</text>{{phone}}
			</view>
			<view class="text-light-muted font-md">
				{{address}}
			</view>
		</view>
		<divder></divder>
		<view class="px-2">
			<block v-for="(item,index) in orderItems" :key="index">
				<order-lis-item :item="item" :index="index"></order-lis-item>
			</block>
		</view>
		<divder></divder>
		<card headTitle="订单信息" headtitleweight="true">
			<uni-list-item title="订单编号">
				<view slot="right" class="font-md text-light-muted">
					{{order_sn}}
				</view>
			</uni-list-item>
		</card>
		<uni-list-item >
			<text class="font-md text-light-muted" >商品总价 </text>
			<view slot="right" class="font-md text-light-muted">
				$123
			</view>
		</uni-list-item>
		<uni-list-item >
			<text class="font-md text-light-muted" >快递 </text>
			<view slot="right" class="font-md text-light-muted">
				$30
			</view>
		</uni-list-item>
		<uni-list-item >
			<text class="font-md text-light-muted" >优惠券 </text>
			<view slot="right" class="font-md text-light-muted">
				-￥20.00
			</view>
		</uni-list-item>
		<uni-list-item >
			<text class="font-md main-text-color" >实际付款 </text>
			<view slot="right" class="font-md text-light-muted">
				<price>100</price>
			</view>
		</uni-list-item>
		<divder></divder>
		<!-- 猜你喜欢 -->
		<recommended :resdata="hotList"></recommended>
		
		
	</view>
</template>

<script>
	import recommended from "../../components/common/recommended.vue"
	import orderLisItem from "../../components/common/order-list-item.vue"
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "../../components/common/price.vue"
	import card from "../../components/common/card.vue"
	export default {
		components:{
			orderLisItem,uniListItem,price,card,recommended
		},
		data() {
			return {
				dataId:"",
				orderItems:[
					// {cover:"../../static/images/demo/demo6.jpg",title:"小米8",price:"90",attrs:"金色 标配",num:1},
					// {cover:"../../static/images/demo/demo6.jpg",title:"小米8",price:"90",attrs:"金色 标配",num:1},
					// {cover:"../../static/images/demo/demo6.jpg",title:"小米8",price:"90",attrs:"金色 标配",num:1}
				],
				order_sn:"",
				address:"",
				userName:"",
				phone:"",
				hotList:[]
			}
		},
		onLoad(e) {
			console.log(e)
			this.dataId = e.id
			this.getData(e.id)
			this.getCaiLike()
		},
		methods: {
			getData(id){
				this.$R.get("/orders/orders/"+id+"/").then(res=>{
					console.log(res)
					res.goods.map(v=>{
				
						var attrs = []
						var item = v.goods.sku_specification
						for(let i=0;i<item.length;i++){
							attrs.push(item[i].option.value)
						}
					
						this.orderItems.push({
							cover:v.goods.image,
							title:v.goods.name,
							num:v.goods_num,
							price:v.goods.shop_price,
							attrs:attrs.join(" ")
						})
					})
					this.order_sn = res.order_sn
					this.address = res.address
					this.userName = res.signer_name
					this.phone = res.singer_mobile
				})
			},
			// 获取猜你喜欢
			getCaiLike(){
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
					console.log(this.hotList)
				})
			},
		}
	}
</script>

<style>

</style>
