<template>
	<view style="margin: 20upx;">
	<view  class="box-wrapper" style="width: 710upx;">
		<view v-for="(item,index) in resdata" :key="index" :class="index===0?'activeHeight':'box'" style="width: 345upx;border-radius: 20px;background: #FFFFFF;overflow: hidden;" @click="openDetail(item)">
				<image :src="item.goods_front_image" lazy-load=""  style="width: 345upx;height: 350upx;border-radius: 20px;overflow: hidden;"></image>
				<view style="margin-left: 15px;">
					<view style="font-size: 30upx;">
						{{ item.name}}
					</view>
					<text style="font-size: 25upx;color: lavender;">{{item.goods_brief}}</text>
					<view class="d-flex my-1">
						<price>{{item.shop_price}}</price>
						<view class="font-sm text-light-muted line-through ml-1 a-self-end line-h" >￥{{item.market_price}}</view>
					</view>
				</view>
		</view>
		
	</view>
	</view>
</template>
<script>
	import price from "@/components/common/price.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			price
		},
		props:{
			resdata:Array
		},
		methods:{
			openDetail(item){
				uni.navigateTo({
					url:'/pages/detail/detail?detail='+item.id
				})
			}
		}
	}
	
</script>

<style>
	page{
		background-color: #F4F4F4;
	}
	.box{
		height:100%;
		break-inside: avoid;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	.activeHeight{
		height: 550upx;
	}
	.box-wrapper{
		column-count: 2;
	}
</style>
