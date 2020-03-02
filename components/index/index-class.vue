<template>
	<view>
		<view style="display: flex;flex-direction: row;flex-wrap: wrap;background: #FFFFFF;">
			<block v-for="item in resdata" :key="item.id">
			<view @tap="event(item)" style="width: 20%;display: flex;flex-direction: column;align-items: center;justify-content: center;margin-top: 20upx;">
				<image :src="item.icon" style="width: 60upx;height: 60upx;" mode=""></image>
				<text>{{item.category.name}}</text>
			</view>
			</block>
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
			resdata:Array
		},
		methods:{
			event(item){
				uni.navigateTo({
					url:"../../pages/search-list/search-list?id="+item.id
				})
				console.log(item)
			}
		}
	}
</script>

<style>

</style>
