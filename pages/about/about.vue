<template>
	<view>
		<view class="d-flex flex-column j-center a-center py-5 my-3">
			<image src="../../static/images/demo/cate_02.png" style="width: 200rpx;height: 200rpx;" mode="widthFix"></image>
			<view class="text-light-muted font-md">
				小米商城1.0.0
			</view>
		</view>
		<view class="bg-white">
			<uni-list-item title="版本更新" showArrow=""></uni-list-item>
			<uni-list-item title="版本更新" showArrow=""></uni-list-item>
			<uni-list-item title="版本更新" showArrow=""></uni-list-item>
			<uni-list-item title="版本更新" showArrow=""></uni-list-item>
		</view>
	</view>
</template>

<script>
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	background: #EEEEEE;
}
</style>
