<template>
	<view class="px-2">
		<view class="border-bottom border-light-secondary d-flex a-center py-2">
			<image :src="item.cover" mode="widthFix" style="width: 150upx;height: 150upx;" class="rounded mx-2"></image>
			<view class="flex-1">
				<view class="d-flex  a-center">
					<text class="font-md text-dark">{{item.title}}</text>
					<text class="font-md text-light-muted ml-auto">￥{{item.price}}</text>
				</view>
				<view class="d-flex  a-center">
					<text class="font-md text-dark">{{item.attrs}}</text>
					<text class="font-md text-light-muted ml-auto">x{{item.num}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
			
		}
	}
</script>

<style>
</style>
