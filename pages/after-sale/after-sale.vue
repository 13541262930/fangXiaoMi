<template>
	<view>
		<divder></divder>
		<card headTitle="申请售后" headtitleweight="true" cardStyle="backgroud:#ffffff;">
			<view class="d-flex a-center px-3 py-2">
				<image src="../../static/images/demo/cate_01.png" mode="widthFix" style="width:100rpx;height: 100rpx;"></image>
				<view class="flex-1 ml-3">
					<view class="font-lg">
						商品名称
					</view>
					<view class="font-md text-light-muted">
						维修服务：剩余11天
					</view>
				</view>
			</view>
		</card>
		<divder></divder>
		<card headTitle="服务类型" bordyPadding cardStyle="backgroud:#ffffff;">
			<zmradio-group :lable="lable" :selected.sync = 'lable.selected'></zmradio-group>
		</card>
		<divder></divder>
		<card headTitle="问题描述" headtitleweight bordyPadding  cardStyle="backgroud:#ffffff;">
			<view class="position-relative">
				
			
			<textarea  placeholder="请详细描述一下你遇到的问题" :maxlength="maxlength" class="p-2 border rounded" v-model="conent" style="width: 100%;height: 400rpx;box-sizing: border-box;"/>
			<view class="position-absolute font text-light-muted" :class="remain >=0?'text-light-muted':'text-danger'" style="right:5rpx;bottom: 5rpx;">
				{{ remain }}/{{maxlength}}
			</view>
			</view>
		</card>
		<view class="p-3">
			<view class="rounded main-bg-color text-white text-center py-3" hover-class="main-bg-hover-color">
				下一步
			</view>
		</view>
		<divder></divder>
	</view>
</template>

<script>
	import card from "../../components/common/card.vue"
	import  zmradioGroup from "../../components/common/radio-group.vue"
	// import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			card,zmradioGroup
		},
		data() {
			return {
				lable:{
					selected:0,
					list:[
						{"name":"维修"}
						
					]
				},
				conent:"",
				maxlength:200
				
			}
		},
		computed:{
			// 剩余可输入字数
			remain(){
				return this.maxlength-this.conent.length
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	/* background: #EEEEEE; */
}
</style>
