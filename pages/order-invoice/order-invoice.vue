<template>
	<view>
		<divder></divder>
		<card headTitle="发票类型" bordyPadding cardStyle="backgroud:#ffffff;">
			<zmradio-group :lable="lable1" :selected.sync = 'lable1.selected'></zmradio-group>
			<view class="text-light-muted line-h-md">
				电子发票与纸质发票具有相同的法律效应，可作为报销、售后维护凭证，推荐使用电子发票，不怕丢失，更方便、环保。
			</view>
		</card>
		<divder></divder>
		<card headTitle="发票抬头" bordyPadding>
			<zmradio-group :lable="lable2" :selected.sync = 'lable2.selected'></zmradio-group>
			
		</card>
		<divder></divder>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<text class="font-md">个人姓名：</text>
			<text class="ml-2">个人</text>
		</view>
		<view class="p-2 border-bottom d-flex a-center">
			<text class="font-md">发票内容：</text>
			<text class="ml-2">商品明细</text>
		</view>
		<view class="p-2 border-bottom d-flex a-center">
			<text class="font-md">收票人手机：</text>
			<text class="ml-2">13541262930</text>
		</view>
		<view class="p-2 text-light-muted d-flex flex-column">
			<text>发票须知：</text>
			<text>1.发票为实际支付金额，不包括优惠券等；</text>
			<text>2.电子发票必须可在订单完成后，在订单详情中查看。</text>
		</view>
	</view>
</template>

<script>
	import card from "../../components/common/card.vue"
	import  zmradioGroup from "../../components/common/radio-group.vue"
	import unListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			card,zmradioGroup
		},
		data() {
			return {
				lable1:{
					selected:0,
					list:[
						{"name":"电子发票"}
						
					]
				},
				lable2:{
					selected:0,
					list:[
						{"name":"个人"},
						{"name":"单位"}
						
					]
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	background-color: #EEEEEE;
}
</style>
