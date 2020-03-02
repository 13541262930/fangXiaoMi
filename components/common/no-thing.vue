<template>
	<view class="position-relative" style="height: 400upx; ">
		<view class="position-absolute d-flex a-center flex-column j-center top-0 left-0 right-0 bottom-0">
			<image :src="getIcon" mode="widthFix" style="width: 250upx;"></image>
			<view style="color: #B2B2B2;">你还没有待付款订单</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			icon:{
				type:String,
				default:"no_comment"
			},
			msg:{
				type:String,
				default:"你还没有待付款订单"
			}
		},
		computed:{
			getIcon(){
				return `../../static/images/nothing/${this.icon}.png`
			}
		}
	}
</script>

<style>
</style>
