<template>
	<view>
		<divder></divder>
		<uni-list-item title="头像">
			<block slot="right">
				<image src="../../static/images/demo/demo6.jpg" mode="" style="height: 90rpx;width: 90rpx;" class="rounded-circle bordr border-secondary"></image>
			</block>
		</uni-list-item>
		<uni-list-item title="姓名">
			<block slot="right">
				summer
			</block>
		</uni-list-item>
		<uni-list-item title="性别">
			
		</uni-list-item>
		<uni-list-item title="生日">
			
		</uni-list-item>
		<divder></divder>
		<uni-list-item title="修改密码">
		</uni-list-item>
		<uni-list-item title="密保手机">
		</uni-list-item>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				list:[
					{name:'头像'},
					{name:'姓名'},
					{name:'性别'},
					{name:'生日'},
					{name:'修改密码'},
					{name:'密保手机'},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
