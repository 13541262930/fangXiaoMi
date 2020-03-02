<template>
	<view>
		<!-- banner图 -->
		<view class="d-flex flex-column position-relative j-center a-center" style="background: #F0AD4E;width: 100%;height: 400upx;">
			
				<image src="../../static/tubiao/youhuijuan.png" mode="widthFix" style="width: 600upx;height: 300upx;"></image>
				<text class="position-absolute d-flex a-center" style="top: 50%;transform: translateY(-50upx); width: 100upx;height: 100upx;font-size: 30px;text-align: center;color: #FFFFFF;">
					￥20
				</text>
		
		</view>
		<!-- 优惠券 -->
		<view class="m-2">
			<view style="font-size: 20px;">
				小米净水器滤芯
			</view>
			<view class="row">
				<text style="color: #FF3333;font-size: 16px;">5 <text class="font-sm mx-1" style="color: #FF3333;">积分</text></text>
			</view>
		</view>
		<!-- 分割线 -->
		<divder></divder>
		<!-- 兑换条件 -->
		<view class="m-2">
			<view class="font">
				兑换条件
			</view>
			<text class="">
				1、兑换成功后请到“我的-优惠券”查看使用
			</text>
			<text class="">
				2、仅限于购买小米净水器滤芯产品
			</text>
			<text>
				3、同一订单仅能使用一张优惠券，不可叠加使用，不能抵减运费。
			</text>
			<text>
				4、不可用于购买闪购秒杀及套装产品
			</text>
			<text>5、一经兑换，积分不予退还。</text>
		</view>
		<view class="m-2 mt-5">
			<view class="font my-2">
				有效期
			</view>
			<text>兑换之日起2天有效</text>
		</view>
		<view class="m-2 mt-5">
			<view class="font my-2">
				权益说明
			</view>
			<text>每个用户仅限兑换一次</text>
		</view>
		
		<!-- 兑换按钮 -->
		<view class="d-flex a-center j-center position-fixed bottom-0" style="height: 50px;width: 100%;background: #F4F4F4;">
			已兑换
		</view>
		
	</view>
</template>

<script>
	import price from "../../components/common/price.vue"
	export default {
		components:{
			price
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

</style>
