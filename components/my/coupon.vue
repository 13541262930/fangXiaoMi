<template>
	<view class="">
		
	<view class="m-2" v-for="(item,index) in resdata" :key="index"  style="border: solid #DEDEDE 1px;border-radius: 15px" @longpress="langChange(index)">
	<view  style="height: 260upx;background: #DEDEDE;border-radius: 10px;"   @click="openDetail(item.id)">
		<!-- 优惠卷上半部分 -->
		<view class="row py-2" >
			<view class="d-flex a-center j-center mx-2">
				<text class="font-big" style="color: #FFFFFF;">{{ item.coupon.money_equivalent_value? "￥" + item.coupon.money_equivalent_value:item.coupon.off_percent/10+" " +"折" }}</text>
			</view>
			<view class="flex-column d-flex ml-auto mx-2">
				<view class="row" style="color: #FFFFFF;">
					<text style="width: 100px;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;">{{item.coupon.name}}</text>
					
					<text class="mx-2" style="color: #FFFFFF;" v-if="item.minimum_consume!==0">( 满{{ item.coupon.minimum_consume }}可用)</text>
				</view>
				<view class="row font-sm my-1">
					<text style="color: #FFFFFF;" v-if="item.coupon.valid_begin_date">{{ item.coupon.valid_begin_date }}-</text>
					<!-- <text style="color: #FFFFFF;">15:39</text> -->
					<!-- <text style="color: #FFFFFF;">-</text> -->
					<text style="color: #FFFFFF;" v-if="item.coupon.valid_end_date">{{ item.coupon.valid_end_date }}</text>
					<!-- <text style="color: #FFFFFF;">15:39</text> -->
				</view>
			</view>
		</view>
		<!-- 优惠券下半部分 -->
		<view class="row a-center d-flex j-center position-relative" style="border-top: 1px dashed #FFFFFF;">
			
			<view class="row mx-2  a-center j-center" @click.stop="change(index)">
				<view class="font d-flex a-center j-center" style="color: #FFFFFF;">
					查看详情
				</view> 
				<view class="iconfont icon-xiangxia mx-1" style="font-size: 20px;color: #FFFFFF;">
					
				</view>
			</view>
			<view class="ml-auto  mr-4 d-flex a-center j-center" style="color: #FFFFFF;font-size: 30upx;" v-if="isClick">
				{{ item.class }}
			</view>
			<view class="ml-auto  mr-4 d-flex a-center j-center" style="color: #FFFFFF;font-size: 30upx;" v-else @click="changeIndex(index)">
					<radio :checked="item.isClick" :value="index"/>
			</view>
			<view class="position-absolute" style="width: 20px;height: 20px;background: #FFFFFF;border-radius: 100%;left: -10px;top: -10px;">
				
			</view>
			<view class="position-absolute" style="width: 20px;height: 20px;background: #FFFFFF;border-radius: 100%;right: -10px;top: -10px;">
				
			</view>
		</view>
	</view>
	<view class="font-sm text-light-muted mx-2" v-if="item.isShow">
		{{ item.coupon.brief }}
	</view>
</view>
</view>
</template>

<script>
	export default{
		props:{
			list:Object,
			resdata:Array,
			isClick:Boolean
		},
		methods:{
			openDetail(id){
				// uni.navigateTo({
				// 	url:"../../pages/search-list/search-list?id="+id
				// })
			},
			changeIndex(index){
				this.$emit('clickIndex',index)
			},
			change(index){
				this.$emit('change',index)
			},
			langChange(index){
				this.$emit('langChange',index)

			}
		}
	}
</script>

<style>
</style>
