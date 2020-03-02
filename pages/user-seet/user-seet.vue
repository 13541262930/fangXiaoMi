<template>
	<view>
		<card  headTitle="账号管理"  bodyStyle="background: #F5F5F5;" v-if="loginStatus">
			<uni-list-item :title="item.title" v-for="(item,index) in userinfo" :key="index" @click="navigeto(item.path)"></uni-list-item>
		</card>
		<card headTitle="关于"  bodyStyle="background: #F5F5F5;" >
			<uni-list-item :title="list.title" v-for="(list,listindex) in list" :key="listindex" @click="navigeto(list.path)"></uni-list-item>
		</card>
		<view class="p-3">
			<button type="default" class="bg-white" @click="logoutEvent()">退出登录</button>
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import { mapMutations,mapState } from "vuex"
	export default {
		components:{
			uniListItem,card
		},
		data() {
			return {
				userinfo:[
					{
						title:"个人资料",
						path:"personal",
					},
					{
						title:"收货地址",
						path:"user-path-list",
					}
					
				],
				list:[
					{
							title:"关于商城",path:"about"
						},
						{
							title:"意见反馈",path:""
						},
						{
							title:"协议规则",path:""
						},
						{
							title:"资质证书",path:""
						},
						{
							title:"用户协议",path:""
						},
						{
							title:"隐私政策",path:""
						},
				]
			}
		},
		computed:{
			...mapState({
				token:state=>state.user.token,
				loginStatus:state=>state.user.loginStatus
			})
		},
		methods: {
			...mapMutations(['logout']),
			logoutEvent(){
				// 清除本地登录状态
				this.logout()
				// 清清除服务端登录
				this.$R.post('/logout',{},{
					header:{
						token:this.token
					}
				}).then(res=>{
					// 提示用户退出成功
					uni.showToast({
						title:"退出成功",
						icon:"none"
					});
					uni.navigateBack({
						delta:1
					})
				})
			},
			navigeto(path){
				if(!path){
					return true
				}
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>

</style>
