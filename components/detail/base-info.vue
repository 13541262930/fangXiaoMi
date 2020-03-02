<template>
	<view class="p-2">
		<view class="font-lg">
			{{detail.title}}
		</view>
		<view class="font text-light-muted md-3 line-h-sm py-2">
		{{detail.desc}}
		</view>
		<price priceSize="font-lg" unitSize="font">
		{{showPrice}}</price>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	export default{
		components:{
			price
		},
		props:['detail','showPrice']
	}
</script>

<style>
</style>
