<template>
	<view>
		<!-- 列表 -->
		<view class="flex-column py-2">
			<image src="../../static/images/bg.jpg" mode="widthFix" style="height: 300upx;"></image>
			<view class="row m-2" style="border-bottom: solid #FF3333 2px;">
				<view>彩虹七号电池(10粒装)</view>
				<view class="ml-auto row a-center">
					<text>0.01积分</text>
					<view class="font text-light-muted line-through ml-1 a-self-end line-h" >￥9.9</view>
				</view>
			</view>
			<view class="row m-2" style="border-bottom: solid #F4F4F4 1px;">
				<view class="text-light-muted py-2">
					已结束
				</view>
				<view class="ml-auto py-2">
					<text style="border: solid #FF3333 1px;border-radius: 20px;color: #FF3333;">查看开奖</text>
				</view>
			</view>
		</view>
		<view class="">
			<view class="m-2">
				中奖号码
			</view>
			<view class="m-2 d-flex flex-column a-center j-center" style="height: 200upx;border-radius: 10px;background: #F4F4F4;">
				<view class="font-big" style="color: #FF3333;">
					00044447
				</view>
				<view class="row a-center j-center">
					<image src="../../static/images/demo/demo6.jpg" mode="widthFix" style="width: 30px;height: 30px;"></image>
					<text class="m-2">kesy拥有30个抽奖号码</text>
				</view>
			</view>
			<view class="d-flex flex-column font m-2">
				 <text style="color:#F0AD4E;">中奖号码=(A+B)/c取余数 =0004447</text>
				 <text>A=开奖前最新公布福彩3D近3期号码倒序=977984844</text>
				<text>B=本活动参与夺宝的用户数=984</text>
				<text>C=本活动产生的抽奖号码数=18855</text>
			</view>
			<!-- 分割线 -->
			<divder></divder>
			<view class="d-flex a-center j-center">
				<view class="flex-column d-flex">
					<view class="row a-center j-center">
						<view class="iconfont icon-bonus-s" style="font-size: 30px;color: #F0AD4E;">
							
						</view>
						<view style="border-top:solid #F4F4F4 1px; height: 1px;width: 100upx;">
							
						</view>
					</view>
					<text>1押注</text>
				</view>
				<view class="flex-column d-flex">
					<view class="row a-center j-center">
						<view class="iconfont icon-yonghu" style="font-size: 20px;color: #F0AD4E;">
							
						</view>
						<view style="border-top:solid #F4F4F4 1px; height: 1px;width: 100upx;">
							
						</view>
					</view>
					<text>2开奖</text>
				</view>
				<view class="flex-column d-flex">
					<view class="row a-center j-center">
						<view class="iconfont icon-xunzhang" style="font-size: 20px;color: #F0AD4E;">
							
						</view>
					</view>
					<text>3领奖</text>
				</view>
				
			</view>
			
			<view class="font-sm m-2 flex-column d-flex">
				<!-- 夺宝介绍 -->
				<view class="font">
					夺宝介绍
				</view>
				<view class="m-2 d-flex flex-column">
					<text>1.每0.01积分可兑换1个抽奖号码，押注越多则获得的抽奖号码越多，中间概率越大。</text>
					<text>2.本活动奖品：彩虹7号电池(10粒装)产品1个，不含配送费。</text>
					<text>3.本活动开奖时间为2019年12月18日10点</text>
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
			
		}
	}
</script>

<style>

</style>
