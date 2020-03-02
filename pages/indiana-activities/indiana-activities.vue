<template>
	<view>
		<view class="position-fixed top-0" style="z-index: 9999;width: 100%;background: #FFFFFF;height: 200upx;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
			<!-- 标题 -->
			<view class=" d-flex a-center j-center font-big">
				夺宝活动
			</view>
			<!-- 轮播显示 -->
			<view class="d-flex a-center j-center d-flex flex-nowrap" style="background: #FAB23C;border-radius: 10px;width: 60%;height: 50upx;overflow: hidden;margin: auto;">
					<swiper style="width: 100%;height: 50upx;background:FAB23C;border:none; height:100%;" vertical="true" autoplay="true" circular="true" interval="2000">
						<swiper-item style="background:FAB23C ;line-height:50upx;border:none;width: 100%; height:100%;" v-for="(item, index) in msg" :key="index">
							<view  class="font-sm d-flex row a-center j-center" style="width: 100%; height:100%;background:#FAB23C;border:none">
								<image src="../../static/images/demo/demo5.jpg" mode="widthFix" style="width: 30upx;height: 30upx;"></image>
								<view class=" mx-2">
									名字已中奖小米鼠标
								</view>
								
							</view>
						</swiper-item>
					</swiper>
			</view>
			
		</view>
		<!-- 站位div -->
		<view style="height: 200upx">
			
		</view>
		
	
		<!-- 列表 -->
		<view class="flex-column py-2" >
			<image src="../../static/images/bg.jpg" mode="widthFix" style="height: 300upx;" @click="navgate('indiana-detail')"></image>
			<view class="row m-2" style="border-bottom: solid #FF3333 2px;">
				<view>彩虹七号电池(10粒装)</view>
				<view class="ml-auto row a-center">
					<text>0.01积分</text>
					<view class="font text-light-muted line-through ml-1 a-self-end line-h" >￥9.9</view>
				</view>
			</view>
			<view class="row m-2">
				<view class="text-light-muted">
					已结束
				</view>
				<view class="ml-auto">
					<text style="border: solid #FF3333 1px;border-radius: 20px;color: #FF3333;">查看开奖结果</text>
					
				</view>
			</view>
		</view>
		<view class="flex-column">
			<image src="../../static/images/bg.jpg" mode="widthFix" style="height: 300upx;"></image>
			<view class="row m-2" style="border-bottom: solid #FF3333 2px;">
				<view>彩虹七号电池(10粒装)</view>
				<view class="ml-auto row a-center">
					<text>0.01积分</text>
					<view class="font text-light-muted line-through ml-1 a-self-end line-h" >￥9.9</view>
				</view>
			</view>
			<view class="row m-2">
				<view class="text-light-muted">
					已结束
				</view>
				<view class="ml-auto">
					<text style="border: solid #FF3333 1px;border-radius: 20px;color: #FF3333;">查看开奖结果</text>
					
				</view>
			</view>
		</view>
		<view class="flex-column py-2">
			<image src="../../static/images/bg.jpg" mode="widthFix" style="height: 300upx;"></image>
			<view class="row m-2" style="border-bottom: solid #FF3333 2px;">
				<view>彩虹七号电池(10粒装)</view>
				<view class="ml-auto row a-center">
					<text>0.01积分</text>
					<view class="font text-light-muted line-through ml-1 a-self-end line-h" >￥9.9</view>
				</view>
			</view>
			<view class="row m-2">
				<view class="text-light-muted">
					已结束
				</view>
				<view class="ml-auto">
					<text style="border: solid #FF3333 1px;border-radius: 20px;color: #FF3333;">查看开奖结果</text>
					
				</view>
			</view>
		</view>
		<view class="flex-column py-2">
			<image src="../../static/images/bg.jpg" mode="widthFix" style="height: 300upx;"></image>
			<view class="row m-2" style="border-bottom: solid #FF3333 2px;">
				<view>彩虹七号电池(10粒装)</view>
				<view class="ml-auto row a-center">
					<text>0.01积分</text>
					<view class="font text-light-muted line-through ml-1 a-self-end line-h" >￥9.9</view>
				</view>
			</view>
			<view class="row m-2">
				<view class="text-light-muted">
					已结束
				</view>
				<view class="ml-auto">
					<text style="border: solid #FF3333 1px;border-radius: 20px;color: #FF3333;">查看开奖结果</text>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				msg : [
					'uni-app行业峰会频频亮相，开发者反响热烈',
					'DCloud完成B2轮融资，uni-app震撼发布',
					'36氪热文榜推荐、CSDN公号推荐 DCloud CEO文章'
				]
			}
		},
		methods: {
			navgate(path){
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>

</style>
