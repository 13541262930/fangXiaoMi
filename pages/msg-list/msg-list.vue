<template>
	<view class="p-2">
		<view @click="openMsgDetail(item)" class="mb-2 p-2 bg-white rounded " v-for="(item,index) in list" :key="index" hover-class="bg-light">
			<view class="text-dark font-md">
				{{item.title}}
			</view>
			<view class="font text-light-muted">
				{{item.desc}}
			</view>
			<view class="font text-light-muted">
				{{item.create_time}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						title:"仿小牧商城上架了",
						desc:"非常nice，非常nice",
						create_time:"11月份"
					},
					{
						title:"仿小牧商城上架了",
						desc:"非常nice，非常nice",
						create_time:"11月份"
					},
					{
						title:"仿小牧商城上架了",
						desc:"非常nice，非常nice",
						create_time:"11月份"
					}
				]
			}
		},
		methods: {
			openMsgDetail(item){
				let obj = JSON.stringify(item)
				uni.navigateTo({
					url:"../msg-detail/msg-detail?data="+obj
				})
			}
		}
	}
</script>

<style>
page{
	background: #EEEEEE;
}
</style>
