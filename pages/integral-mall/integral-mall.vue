<template>
	<view>
		<view class="">
			<image src="../../static/images/bg.jpg" mode="widthFix" style="height: 300upx;"></image>
		</view>
		<view class="row j-sb">
			<view class="row mx-4">
				<view class="iconfont icon-jifen" @click="navgate('page-rules')">
				</view>
				<text class="mx-2">赚积分</text>
			</view>
			<view class="row mx-4" @click="navgate('exchange-record')">
				<view class="iconfont icon-weibiaoti-">
					
				</view>
				<text class="mx-2" >兑换记录</text>
			</view>
		</view>
		<!-- 分界线 -->
		<divder></divder>
		
		<view class="d-flex a-center j-center py-2">
			<text style="font-size: 15px;">当前积分 <text style="color: #F0AD4E;" class="mx-2">0.39</text> </text>
		</view>
		<view  class="d-flex a-center j-center py-2">
			<text  style="border: solid #F76260; 1px;border-radius: 10px;width: 80px;text-align: center;color: #F0AD4E;">优惠券</text>
			
		</view>
		<!-- 优惠券列表 -->
		<view class="row">
			<view class=" span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;"  @click="navgate('integral-exchange')">
				
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class=" span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;">
				
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class=" span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;">
				
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			
			<view class=" span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;">
				
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class=" span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;">
				
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class=" span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;">
				
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
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
