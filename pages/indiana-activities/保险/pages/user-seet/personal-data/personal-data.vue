<template>
	<view>
		<view class="text-my">
			<uni-list-item title="头像" @click="navigeto('personal-data')">
				<view class="">
					头像
				</view>
				<view class="" slot="rightContent">
					<image src="../../../static/images/demo/demo6.jpg" mode="widthFix" style="width:80upx;height: 80upx;border-radius: 100%;"></image>
				</view>
			</uni-list-item>
			<uni-list-item title="头像" @click="navigeto('personal-data')">
				<view class="">
					手机
				</view>
				<view class="" slot="rightContent" style="font-4-4">
					13541262930
				</view>
			</uni-list-item>
			<uni-list-item title="头像" @click="navigeto('personal-data')">
				<view class="">
					性别
				</view>
				<view class="" slot="rightContent">
					女
				</view>
			</uni-list-item>
			<uni-list-item title="头像" @click="navigeto('personal-data')">
				<view class="">
					昵称
				</view>
				<view class="" slot="rightContent">
					王师傅
				</view>
			</uni-list-item>
		</view>
		<view class="text-my" style="margin-top: 30upx;">
			<uni-list-item title="头像" @click="navigeto('personal-data')">
				<view class="">
					QQ绑定
				</view>
				<view class="text-light-muted" slot="rightContent">
					去绑定
				</view>
			</uni-list-item>
			<uni-list-item title="头像" @click="navigeto('personal-data')">
				<view class="">
					维修绑定
				</view>
				<view class="text-light-muted" slot="rightContent">
					去绑定
				</view>
			</uni-list-item>
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniListItem
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
