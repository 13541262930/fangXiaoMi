<template>
	<view>
		<card   bodyStyle="background: #F5F5F5;">
			<uni-list-item title="个人资料" @click="navigeto('personal-data')"></uni-list-item>
			<uni-list-item title="地址管理" @click="navigeto('paths')"></uni-list-item>
			<uni-list-item title="增票资质" @click="navigeto('add-qualification')"></uni-list-item>
		</card>
		<card   bodyStyle="background: #F5F5F5;">
			<uni-list-item title="消息推送开关" @click="navigeto('message-switch')"></uni-list-item>
			<uni-list-item title="隐私设置" @click="navigeto('privacy-set')"></uni-list-item>
			<uni-list-item title="用户协议" @click="navigeto('user-agreement')"></uni-list-item>
		</card>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			card,uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigeto(path){
				uni.navigateTo({
					url:`/pages/user-seet/${path}/${path}`
				})
			}
		}
	}
</script>

<style>

</style>
