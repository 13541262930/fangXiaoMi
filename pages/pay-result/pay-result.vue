<template>
	<view>
		<view class="d-flex a-center j-center py-5 flex-column my-3">
			<text class="iconfont icon-iconfontxuanzhong4 main-text-color line-h" style="font-size: 180rpx;">
				
			</text>
			<text class="text-dark font-lg line-h-sm"> 支付成功</text>
		</view>
		<view class="px-5">
			<view @click="openOrder()" class="rounded main-bg-color text-white font-md w-100 py-2 text-center mt-3" hover-class="main-bg-hover-color">
				查看订单
			</view>
			<view @click="shouYe()" class="border rounded text-dark bg-white font-md w-100 py-2 text-center mt-3" hover-class="main-bg-hover-color">
				返回首页
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openOrder(){
				uni.navigateTo({
					url:"/pages/order/order?index="+2
				})
			},
			shouYe(){
				uni.navigateTo({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>

</style>
