<template>
	<view>
	<view class="row py-2" style="height: 300upx;" v-for="(item,index) in list" :key="index"  >
		<view class="span24-4 d-flex a-center j-center" v-if="Radio" @tap="$emit('changeRadio',index)">
			<radio value=""  :checked="item.radio" />
		</view>
		<view class="span24-8" @click="goDetail(item)">
			<view class="m-2" >
				<image :src="item.img" style="height: 250upx;width: 200upx;" mode=""></image>
			</view>
		</view>
		<view class="flex-1">
			<view class="m-2 d-flex flex-column j-sb" style="height: 250upx;">
				<view class="d-flex flex-column">
					<text class="font-md my-2">{{item.peizhi}}</text>
					<text class="font-md my-2">{{item.name}}</text>
				</view>
				<view class="font-md mt-5 border-bottom">
					<!-- <text style="background: #00BFFF;font-size: 12px;">分期</text> -->
					<view class="row j-sb a-center j-center">
						<price>{{item.price}}</price>
						<view class="iconfont icon-add_circle " style="font-size: 20px;">
							
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import price from "../common/price.vue"
	export default{
		components:{
			price
		},
		props:{
			list:Array,
			Radio:Boolean
		},
		methods:{
			goDetail(item){
				uni.navigateTo({
					url:"../../pages/detail/detail?detail="+item.id
				})
			}
		}
	}
</script>

<style>
</style>
