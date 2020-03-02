<template>
	<view>
		
		<view class="" style="background: url(../../static/images/bg.jpg) no-repeat;width: 100%;height: 800upx;">
			<!-- 标题 -->
			<view class="d-flex a-center j-center flex-column" >
				 <text class="font-sm" style="color: #FFFFFF;margin-top: 20px;">目前共1930人参与挑战</text>
				 <text class="font-sm" style="color: #FFFFFF;">明早将瓜分积分</text>
				 <text class="font-big" style="color: #F0AD4E;">193.0</text>
			</view>
			<view class="d-flex a-center j-center flex-column" style="margin-top: 300upx;" >
				<view class="d-flex a-center j-center" style="width: 80%;height: 30px;background: #FF3333;border-radius: 20px;">
					用0.10积分加入明日早起挑战
				</view>
				<view class="my-2 d-flex a-center j-center" style="width: 80%;height: 30px; border: solid #FF3333 1px;background: #007AFF;border-radius: 20px;">
					邀请好友
				</view>
				<view class="my-2 a-center j-center" @click="navgeto('signInRules')">
					<text style="width: 100px;border-bottom:solid #007AFF 1px;text-align: center;">查看活动规则</text>
				</view>
			</view>
		</view>
		<view class="m-2" style="background: #FFFFFF;">
			<view class="m-2 d-flex a-center flex-column j-center" style="border-bottom: solid #F4F4F4 1px;">
				<text>今天早起挑战失败</text>
				<text>明天加油哦</text>
			</view>
			<view class="my-2 row">
				<view style="width: 50%;">
					<view class="">
						早起鸟手气榜
					</view>
					<view class="row">
						<view>1</view>
						<image src="../../static/images/demo/demo5.jpg" mode="widthFix" style="width: 30px;height: 30px;"></image>
						<view class="flex-column d-flex">
							<text>史诗</text>
							<text>0.13</text>
						</view>
						
					</view>
				</view>
				<view style="width: 50%;">
					<view class="">
						早起毅力榜
					</view>
					<view class="row">
						<view>1</view>
						<image src="../../static/images/demo/demo5.jpg" mode="widthFix" style="width: 30px;height: 30px;"></image>
						<view class="flex-column d-flex">
							<text>回忆六年</text>
							<text>连续299天</text>
						</view>
						
					</view>
				</view>
			</view>
			<view class="d-flex a-center j-center">
				1922人挑战成功 355人挑战失败
			</view>
			<!-- 分割线 -->
			<divder></divder>
			<view class="m-2 row" style="background: #FFFFFF;">
				<image src="../../static/images/demo/demo6.jpg" mode="widthFix" style="height: 50px;width: 50px;"></image>
				<view class="flex-column d-flex a-center j-center flex-1">
					<view class="font">
						查看我的签到记录
					</view>
					<view class="d-flex a-center j-center" style="background: #007AFF;width: 80px;height: 20px;border-radius: 10px;color: #FFFFFF;">
						点击查看
					</view>
				</view>
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
			navgeto(path){
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>

</style>
