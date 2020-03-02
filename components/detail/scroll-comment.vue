<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row " >
			<view class="scroll-row-item rounded bg-light-secondary mr-2 p-2" style="width: 620rpx;height: 380rpx;" @click.stop="open()"
			 v-for="(item,index) in comments" :key="index"
			 >
				<view class="d-flex a-center mb-1">
					<image :src="item.userpic" mode="widthFix" class="rounded-circle" style="width: 70rpx;height: 70rpx;"></image>
					<view class="ml-2">
						<text class="font-md line-h">{{item.username}}</text>
						<text class="d-block font text-light-muted line-h">{{item.create_time}}</text>
					</view>
					<view class="iconfont icon-dianzan text-light-muted font pl-1 ml-auto">
						{{item.goods_num}}
					</view>
				</view>
				<text class="d-block font-md">
					{{item.context}}
				</text>
				<view class="row">
					<view class="span24-8 px-2" v-for="(item1,index1) in item.imglist" :key="index1">
						<image :src="item1" mode="widthFix" class="rounded" style="height: 115rpx;"></image>
					</view>
					<view class="span24-8 px-2">
						<image :src="item1" style="height: 115rpx;"></image>
					</view>
					<view class="span24-8 px-2">
						<image :src="item1" mode="widthFix" class="rounded" style="height: 115rpx;"></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<navigator url="/pages/detail-common/detail-common">
		<view class="d-flex a-center j-center py-2 mt-2 text-primary" hover-class="bg-light-secondary" @click.stop="open()">
			更多样式<view class="iconfont icon-you ">
				
			</view>
		</view>
		</navigator>
	</view>
</template>

<script>
	export default{
		props:['comments',"goods_id"],
		methods:{
			open(){
				uni.navigateTo({
					url:"../../pages/detail-common/detail-common?id="+ this.goods_id
				})
			}
		}
	}
</script>

<style>
</style>
