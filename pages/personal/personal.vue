<template>
	<view>
		<uni-list-item :title="item.name" @click="path(item.path)"  v-for="(item,index) in list" :key="index">
			<view v-if="index!==0" class="" slot="rightContent">
				{{ item.value }}
			</view>
			<view v-if="index==0" class="" slot="rightContent">
				<image :src="userInfo.img" mode="" style="width: 50rpx;height: 50rpx;border-radius: 10px;"></image>
			</view>
		</uni-list-item>
	</view>
</template>

<script>
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import {mapState} from "vuex"
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				list:[
					{name:"头像",value:"",path:""},
					{name:"昵称",value:"",path:"change-nickname"},
					{name:"性别",value:"男",path:"change-gender"},
					{name:"收货地址",value:"",path:"user-path-list"},
					{name:"密保手机",value:"13541262930",path:"login"},
					{name:"第三方登录",value:"",path:"login"}
				]
			}
		},
		onLoad() {
			console.log(this.userInfo)
			this.list[1].value = this.userInfo.name
			if(this.userInfo.gender==1){
				this.list[2].value = "女"
			}else{
				this.list[2].value = "男"
			}
			
		},
		methods: {
			path(path){
				if(path){
					uni.navigateTo({
						url:`/pages/${path}/${path}`
					})
				}
				
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo
			})
		}
	}
</script>

<style>

</style>
