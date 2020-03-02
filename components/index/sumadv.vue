<template>
	<view class="">
		<view class="font-md font-weight pl-2 pb-2 border-bottom main-border-color">每日精品</view>
		<view @click="openDetail(item.id)" v-for="(item,index) in resdata" :key="index">
			<image :src="item.image" style="width: 750upx;height: 250upx;" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			resdata:Object,
			title:{
				type:String,
				default:"每日精品"
			}
		},
		methods:{
			openDetail(id){
				uni.navigateTo({
					url:"/pages/detail/detail?detail="+id
				})
			}
		}
	}
</script>

<style>
</style>
