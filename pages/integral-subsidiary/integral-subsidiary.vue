<template>
	<view>
		<view class="mx-2">
			我的积分：{{ getIntegral }}
		</view>
		<view class="font-sm text-light-muted mx-2">
			积分会打在订单妥投7天内未退货后发货
		</view>
		<!-- 分割线 -->
		<divder></divder>
		<!-- 列表 -->
		<view class="flex-column d-flex mx-2" >
			<view  v-for="(item,index) in list" :key = "index">
				<view class="font">
					{{ item.gs.name }}
				</view>
				<view class="row ">
					<text>小面商城 {{ item.status }}</text>
					<text class="mx-2">{{ item.create_time.substring(0,10) }}  {{ item.create_time.substring(12,16) }}</text>
					<text class="ml-auto"> {{ item.status!==true?"-"+item.each_goal:(item.budget===1? "+"+item.each_goal:"-"+item.each_goal)}} </text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import { mapState,mapMutations,mapGetters } from "vuex"
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			this.getData()
		},
		computed:{
			...mapGetters(['getIntegral'])
		},
		methods: {
			getData(){
				this.$R.get("/integral/integralinfo/").then(res=>{
					console.log(JSON.stringify(res))
					this.list = res
				})
			}
		}
	}
</script>

<style>

</style>
