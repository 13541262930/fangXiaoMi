<template>
	<view>
		<!-- 头像框 -->

		<view class="d-flex w-100 a-center" style="height:190upx;background:rgb(215, 215, 215);position: relative;">
			<image src="../../static/images/demo/demo6.jpg" mode="widthFix" style="width: 120upx;height: 120upx;border-radius: 100%;margin-left: 20upx;"></image>
			<view class="" style="margin-left: 20upx;font-size: 18px;font-weight: 400;">
				你好
			</view>
			<!-- 设置 -->
			<view class="iconfont icon-shezhi" style="font-size: 24px;position: absolute;top: 0;right: 20upx;width: 46upx;height: 68upx;"
			 @click="navgate('user-seet')">

			</view>
		</view>


		<!-- 内容 -->
		<view style="margin-left: 20upx;margin-right: 20upx;height: 100%;">
			<!-- 分类 -->
			<view class="d-flex flex-nowrap w-100 j-sb " style="font-weight: 400;color: red;font-size: 16px; margin-top: 36upx;height: 120upx;border-radius: 14upx;background-color: rgb(255, 255, 255);border:#000000 solid .3px">
				<view class="d-flex flex-column a-center j-center" style="margin-left: 36upx;">
					<text>3</text>
					<text>优惠券</text>
				</view>
				<view class="d-flex flex-column a-center j-center">
					<text>0</text>
					<text>购物车</text>
				</view>
				<view class="d-flex flex-column a-center j-center">
					<text>0</text>
					<text>收藏夹</text>
				</view>
				<view class="d-flex flex-column a-center j-center">
					<text>3</text>
					<text>服务商</text>
				</view>
				<view class="d-flex flex-column a-center j-center" style="margin-right: 36upx;color:rgb(51, 51, 51) ;">
					<text>3</text>
					<text>服务</text>
				</view>
			</view>
			<!-- 保单 -->
			<view class="d-flex a-center j-sb" style="margin-top: 40upx;color: #FFFFFF;font-weight: 400;font-size: 16px;">
				<view class="d-flex a-center j-center" style="background-color: rgb(233, 66, 78);width: 228upx;height: 87upx;border-radius: 20upx;">
					保单
				</view>
				<view class="d-flex a-center j-center" style="background-color: rgb(233, 66, 78);width: 228upx;height: 87upx;border-radius: 20upx;">
					服务单
				</view>
				<view class="d-flex a-center j-center" style="background-color: rgb(233, 66, 78);width: 228upx;height: 87upx;border-radius: 20upx;">
					商品单
				</view>
			</view>
			<!-- 标签 -->
			<view class="" style="margin-top: 40upx;background-color: rgb(255, 255, 255);height: 100%;width: 100%;">
				<un-list-item :showExtraIcon="true" leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" @click="navigate('smallPlaneMember')">
					<view class="" style="font-size: 16px;">
						在线客服
					</view>
					<view slot="rightContent" style="font-size: 12px;">
						人工客服8:00-12:00
					</view>
				</un-list-item>
				<un-list-item :showExtraIcon="true" leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" rightContent="人工服务" @click="navigate('smallPlaneMember')">
					<view class="" style="font-size: 16px;">
						常见问题
					</view>
				</un-list-item>
				<un-list-item :showExtraIcon="true" leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" rightContent="人工服务" @click="navigate('smallPlaneMember')">
					<view class="" style="font-size: 16px;">
						意见反馈
					</view>
				</un-list-item>
				<un-list-item :showExtraIcon="true" leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" rightContent="人工服务" @click="navigate('smallPlaneMember')">
					<view class="" style="font-size: 16px;">
						关于我们
					</view>
				</un-list-item>
				<un-list-item :showExtraIcon="true" leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" rightContent="人工服务" @click="navigate('smallPlaneMember')">
					<view class="" style="font-size: 16px;">
						邀请有礼
					</view>
				</un-list-item>
			</view>
		</view>
	</view>
</template>

<script>
	import unListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			unListItem
		},
		data() {
			return {

			}
		},
		methods: {
			navgate(path) {
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>

</style>
