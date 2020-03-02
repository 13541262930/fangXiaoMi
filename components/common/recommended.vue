<template>
	<view>
		<!-- 标题 -->
		<view class="text-center main-text-color font-md font-weight mt-5">
			为你推荐
		</view>
		<view class="position-relative d-flex a-center j-center text-secondary mb-3 pt-3">
			<view class="px-2 position-absolute " style="background: #F5F5F5;z-index: 2;">
				买的人还买了
			</view>
			<view class="position-absolute" style="height: 1upx;left: 0;right: 0;background: #DDDDDD;">
				
			</view>
		</view>
		<!-- 为你推荐 -->
		<view>
			<commonList :resdata="resdata"></commonList>
		</view>
	</view>
	
</template>

<script>
	import commonList from "./commonlist.vue"
	export default {
		components:{
			commonList
		},
		props: {
			resdata: {
				type: Array
			},
		},
		methods:{
			movehandle(){
				
			}
		}
	}
</script>

<style>
	
</style>
