<template>
	<view  class="mb-3 bg-white rounded border d-flex a-center border-light-secondary">
		<view class="flex-column j-center px-3 d-flex flex-1">
			<view class="font-lg font-md" :class="list.disabled || !list.status ? 'text-light-muted':''">
				{{ list.title }}
			</view>
			<view class="text-light-muted font">
				{{list.start_time}}~{{list.end_time}}
			</view>
		</view>
		<view class=" text-white d-flex a-center flex-column j-center" style="width: 220rpx;height: 200rpx;" :class="list.disabled||!list.status ?'bg-secondary':'main-bg-color'">
			<view class="font-lg" style="font-size: 42rpx;line-height: 1.4;" >
				{{list.price}} <text class="font-md">元</text>
			</view>
			<view class="font">
				{{list.desc}}
			</view>
			<view  class="text-center rounded bg-white w-50" hover-class="bg-light" :class="list.disabled||!list.status  ? 'text-secondary':'main-text-color'">
				{{ list.status?'去使用':'已失效'  }} 
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:Object,
			index:Number
		}
	}
</script>

<style>
</style>
