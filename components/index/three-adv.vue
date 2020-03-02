<template>
	<!-- 左边 w:373 h:530 -->
	<!-- 右边 w:375 h:264 边h:2 -->
	<view style="display: flex;flex-direction: row;">
		<image :src="resdata.big" @tap="events(resdata.big)" lazy-load style="width: 373upx;height: 530upx;border-right: 2upx solid #F5F5F5;" mode=""></image>
		<view style="display: flex;flex-direction: column;">
			<image :src="resdata.smalltop"
			@tap="events(resdata.smalltop)"
			 lazy-load=""  style="width: 375upx;height: 265upx;border-bottom: 2upx solid #F5F5F5;"
			 mode=""></image>
			 <image :src="resdata.smallbottom"
			 @tap="events(resdata.smallbottom)"
			  lazy-load=""  style="width: 375upx;height: 265upx;"
			  mode=""></image>
			 
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
			resdata:Object
		},
		methods:{
			events(item){
				console.log(item)
			}
		},
		
	}
</script>

<style>
</style>
