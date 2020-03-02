<template>
	<view>
		<view class="flex-column d-flex a-center j-center m-2">
			<image :src="userInfo.img" mode="widthFix" style="height: 50px;width: 50px;"></image>
			<text class="font m-2">{{ userInfo.name }}</text>
		</view>
		<view class="d-flex a-center j-center" style="margin-top: 20%;">
			<image src="../../static/images/demo/demo2.jpg" mode="widthFix" style="height: 500upx;width: 500upx;"></image>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo,
			})
		},
	}
</script>

<style>

</style>
