<template>
	<view>
		<view class="">
			<!-- 轮播图 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" style="height: 250px;background: #FF6B01;"
			 :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<view class="position-relative" style="color: #FFFFFF;">
							<view class="row  a-center j-center py-2 ">
								<view class="text-center">
									<view  style="font-size: 50px;">
										小面会员
									</view>
									<view class="font" style="margin-top: -10px;">
										每月100元优惠卷额度随心领
									</view>
								</view>
								<view class="font-sm mx-2" style="margin-top: -10px;">
									内测
								</view>
							</view>
							<view class="row a-center j-center py-4" >
								<text >连续包月</text>
								<text class="mx-2">￥9.9/月</text>
								<text  class="mx-2">￥19.9元/月</text>
								<text style="background: #FFFFFF;color: #FF6B01;">折扣</text>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<!-- 会员彩蛋 -->
			<view class="m-2 rounded" style="background: #FFFFFF;">
				<view class="pt-2 pl-2">
					<view class="font-lg font-weight">
						会员彩蛋
					</view>
					
				</view>
				<view class="mx-2 row j-sb" style="border-bottom: solid #000000 1rpx;">
					<view class="font text-light-muted">
						不定期抽奖福利
					</view>
					<view class="row" @click="navgato('permissions-Earnings')">
						<view class="font text-light-muted">
							权益介绍
						</view>
						<view class="iconfont icon-dibudaohanglan- text-light-muted">

						</view>
					</view>
				</view>
				<view class="m-2 row j-sb a-center" style="height:200px">
					<view class="mx-4 flex-column d-flex a-center j-center">
						<image src="../../static/images/demo/demo6.jpg" mode="widthFix" style="width: 50px;height: 50px;border-radius: 100%;"></image>
						<view class="font">
							发布发票
						</view>
					</view>
					<view class="flex-column d-flex a-center j-center">
						<image src="../../static/images/demo/demo6.jpg" mode="widthFix" style="width: 50px;height: 50px;border-radius: 100%;"></image>
						<view class="font">
							发布发票
						</view>
					</view>
					<view class="mx-4 flex-column d-flex a-center j-center">
						<image src="../../static/images/demo/demo6.jpg" mode="widthFix" style="width: 50px;height: 50px;border-radius: 100%;"></image>
						<view class="font">
							发布发票
						</view>
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
		navgato(path){
			uni.navigateTo({
				url:`/pages/${path}/${path}`
			})
		}
		}
	}
</script>

<style>
	page {
		background: #F4F4F4;
	}
</style>
