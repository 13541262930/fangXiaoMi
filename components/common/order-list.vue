<template>
		
	<view class="bg-white">
		<divder></divder>
		<view class="d-flex a-center p-2 border-bottom border-light-secondary">
			<text class="text-light-muted font-md ">
				{{item.create_tiem}}
			</text>
			<text class="ml-auto font-md main-text-color">{{item.status}}</text>
		</view>
		<!-- 身体 -->
		<view  v-for="(order,orderindex) in item.order_items" :key="orderindex" class="border-bottom p-4"  @click="openDetail(order)">
			<view class=" border-light-secondary d-flex a-center py-2">
				<image :src="order.cover" mode="widthFix" style="width: 150upx;height: 150upx;" class="rounded mx-2"></image>
				<view class="flex-1">
					<view class="d-flex  a-center">
						<text class="font-md text-dark">{{order.title}}</text>
						<text class="font-md text-light-muted ml-auto">￥{{order.price}}</text>
					</view>
					<view class="d-flex  a-center mr-2 ">
						<text class="font-md text-dark">{{order.attrs}}</text>
						<text class="font-md text-light-muted ml-auto">{{order.num}} 件</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="d-flex a-center px-2 j-end">
			<text class="text-dark font-md ml-auto">共{{item.tatol_num}}件商品,合计：￥{{item.tatolPrice}}</text>
		</view>
		
		<view class="d-flex  j-end a-center px-2  pb-2">
			<view v-if="item.butn.one.name" @click.stop="open(item.butn.one.path,item.butn.one.id)" class="rounded border border-light-secondary py-1 px-2 text-secondary " hover-class="main-bg-hover-color">
				{{ item.butn.one.name }}
			</view>
			<view v-if="item.butn.two.name" @click.stop="changeu(item.butn.two.path,item.tatolPrice)" class="rounded border border-light-secondary ml-2 py-1 px-2 text-secondary " hover-class="main-bg-hover-color">
				{{ item.butn.two.name }}
			</view>
			<view v-if="item.butn.three.name" @click.stop="changeu()" class="rounded border border-light-secondary ml-2 py-1 px-2 text-secondary " hover-class="main-bg-hover-color">
				{{ item.butn.three.name }}
			</view>
			<!-- <view class="ml-2 rounded border border-light-secondary px-2 text-secondary " hover-class="main-bg-hover-color">
				确认收货
			</view> -->
		</view>
	</view>
	
</template>

<script>
	import { mapMutations } from "vuex"
	export default{
		props:{
			index:"",
			item:""
		},
		methods:{
			...mapMutations(['changePayUrl']),
			openDetail(order){
				console.log(order)
				uni.navigateTo({
					url:"/pages/order-detail/order-detail?id="+order.id
				})
			},
			changeu(payUrl,sumPrice){
				console.log(payUrl)
				payUrl["sumPrice"] = sumPrice
				this.changePayUrl(payUrl)
				uni.navigateTo({
					url:"../../pages/pay-methods/pay-methods"
				})
			},
			open(key,id){
				if(key){
					uni.navigateTo({
						url:`/pages/${key}/${key}?id=${id}`
					})
				}
			}
		}
	}
</script>

<style>
</style>
