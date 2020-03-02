<template>
	<view class="mx-4">
		<view class="font-sm text-light-muted pt-5">
			你的微信账号 {{ userinfo.name }} 通过验证
		</view>
		<view class="font-md">
			首次使用微信登录请先绑定手机号
		</view>
		<view style="padding-top: 80px;">
			<input class="my-2" type="text"  placeholder="请输入手机号"  v-model="phone" style="border-bottom:solid #000000 0.5px;"/>
			<input class="my-2" type="text" v-model="code"  placeholder="请输入验证码" style="border-bottom:solid #000000 0.5px;" />
			<view class="row" @click="getCode()" style="color: #00BFFF;position: relative;right: 0;bottom: 0;">
				<text class="mx-2">{{ codeState }}</text>   <uni-count-down v-if="!isRefresh"  :show-day="false" :minute="1" :second="0" color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" />
			</view>
		</view>
		<view class="w-100 d-flex j-center a-center" style="padding-top: 80px;">
			<view @click="validation()" class="font  d-flex a-center j-center" style="background: #00BFFF;height: 40px;border-radius: 20px;width: 80%;">
				绑定手机号
			</view>
		</view>
	</view>
</template>

<script>
	import uniCountDown from "@/components/uni-ui/uni-count-down/uni-count-down.vue"
	import { mapState,mapMutations } from "vuex"
	export default {
		components:{
			uniCountDown
		},
		data() {
			return {
				codeState:"获取验证码",
				phone:"",
				code:"",
				serverCode:"",
				isRefresh:true,
				minute:0
			}
		},
		methods: {
			...mapMutations(['login']),
			getCode(){
				if(!(/^1[34578]\d{9}$/.test(this.phone))){
				        uni.showToast({
				        	title:"请填写真实电话号码!",
							icon:"none"
				        }) 
				        return false; 
				    }else{
						if(this.isRefresh){
							this.isRefresh = false
							this.$R.post("/users/user_get_code/",{phone:this.phone}).then(res=>{
								if(res.result=="true"){
									this.codeState = "发送成功"
								}
								this.minute = 5
								setTimeout(()=>{
									this.isRefresh = true
									this.codeState = "获取验证码"
								},61000)
							})
						}else{
							uni.showToast({
								title:"请稍后点击!",
								icon:"none"
							})
						}
						
					}
				
			},
			validation(){
				if(!(/^\d{6}$/.test(this.code))){
				        uni.showToast({
				        	title:"请输入收到短信验证码!",
							icon:"none"
				        }) 
				        return false; 
				    }else{
						let data  = this.userinfo.data
						data["phone"] = this.phone
						data["code"] = this.code
						console.log(data)
						this.$R.post("/users/verify_sms/",data).then(res=>{
							let userfo = {}
							userfo = this.userinfo
							console.log(res)
							if(res.token){
								userfo["token"]=res.token
							}
							userfo["callback"]=()=>{
								uni.switchTab({
									url:"../my/my"
								})
						
							}
						
							this.login(userfo)
						})
					}
			}
		},
		computed:{
			...mapState({
				userinfo:state=>state.user.userInfo
			})
		}
	}
</script>

<style>

</style>
