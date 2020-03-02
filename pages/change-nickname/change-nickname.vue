<template>
	<view >
		<!-- <divder></divder> -->
		<view class="row  p-2 mt-5" style="background: #F0F0F0;">
			<view class="span24-4 font-md">
				姓名
			</view>
			<input type="text" :value="nickname" class="span24-16" />
		</view>
		<view class=" bg-white d-flex a-center j-center py-3 ">
			<view class="main-bg-color span24-20 text-center py-2" @click="change_nickname()">
				确定
			</view>
			
		</view>
		
	</view>
</template>

<script>
	
	import {mapState,mapMutations} from "vuex"
	export default {
		
		data() {
			return {
				nickname:userInfo.nickname
			}
		},
		methods: {
			...mapMutations(['change_nickname']),
			change_nickname(){
				this.change_nickname(this.nickname)
			}
		},
		computed:{
			...mapState(['userInfo'])
		}
	}
</script>

<style>

</style>
