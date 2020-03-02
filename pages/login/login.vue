<template>
	<view>
		<uni-status-bar />
		<view class="d-flex a-center j-sb px-2 py-3 text-light-muted">
			<view class="iconfont icon-shanchu1" @click="goBack">
			</view>
			<!-- <view class="font-md" @click="forget">
				忘记密码
			</view> -->
		</view>
		<view class="p-5">
			<view class="font-big mb-5">
				手机验证
			</view>
			<input v-model="username" @focus="focus('username')" @blur="blur('username')" :class="foucsClass.username ? 'input-boder-color':''"
			 type="text" class="border-bottom mb-4 uni-input px-0 " placeholder-class="text-light-muted" placeholder="请输入手机号" />
			<input v-model="password" @focus="focus('password')" @blur="blur('password')" :class="foucsClass.password ? 'input-boder-color':''"
			 type="text" class="border-bottom mb-4 uni-input" placeholder="请填入验证码" />
			 <button class="mini-btn py-5" :type="iscode?'warn':'primary'" size="mini" @click="getCode()">{{ iscode?'发送成功':'获取验证码' }}</button>
			<view @click="submit" class="py-2  w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4"
			 hover-class="main-bg-hover-color">
				登录
			</view>
			<label class="checkbox d-flex a-center" @click="check=!check">
				<checkbox :checked="check" /><text class="text-light-muted font">已同意阅读协议</text>
			</label>
			<view class="d-flex a-center j-center py-5">
				<view class="iconfont icon-icon px-5" style="font-size: 40px;">

				</view>
				<view class="iconfont icon-weixin px-5" style="font-size: 40px;" @click.stop="loginWeiXin()" >

				</view>
				
	
			</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-ui/uni-status-bar/uni-status-bar.vue"
	import uniNavBar from "../../components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		components: {
			uniNavBar,
			uniStatusBar
		},
		data() {
			return {
				isFirst:false,//是否第一次
				iscode:false, //是否请求了验证码
				check: true,
				username: "",
				password: "",
				// rules: {
				// 	username: [{
				// 		rule: /^[a-zA-Z]\w{5,17}$/,
				// 		msg: "账号必须以字母开头，长度在6~18位之间，只能包含字母、数字、下划线"
				// 	}],
				// 	password: [{
				// 		rule: /.{5,20}$/,
				// 		msg: "密码必须长度为5~20位"
				// 	}]
				// },
				foucsClass: {
					username: false,
					password: false
				}
			}
		},
		onLoad() {

		},
		
		onUnload(){
			// 监听微信小程序的返回按钮
			// #ifdef MP-WEIXIN
			if(!this.loginStatus){
				let tabBar = uni.getStorageSync('tabBar')
				uni.switchTab({
					url:`/pages/${tabBar}/${tabBar}`
				})
				return true
			}
			console.log("返回")
			// #endif
		},
		onBackPress(options) {
			// 监听app端返回按钮
			// #ifdef APP-PLUS
			if(options.from =="navigateBack"){
				return false
			}
			if(!this.loginStatus){
				let tabBar = uni.getStorageSync('tabBar')
				uni.switchTab({
					url:`/pages/${tabBar}/${tabBar}`
				})
				return true;
			}
			// #endif
		},
		// 计算属性
		computed: {
			...mapState({
				loginStatus: state => state.user.loginStatus,
				userInfo: state => state.user.userInfo,
				iswangluo:state=>state.user.iswangluo
			})
		},
		methods: {

			// 获取验证码
			getCode(){
				if(!this.isFirst){
					this.$R.post('/users/verify_sms/',{
							phone: this.username,
						}).then(res=>{
							this.iscode= true
							console.log(res)
						})
				}
				this.isFirst = true
			},
			// 引入user matations方法
			...mapMutations(['login']),
			// 账号密码登录
			accountLogin(){
				this.$R.post('/users/wx_login/',{
						username: this.username,
						password: this.password,
						apptype: "phoneapp"
					}).then(res=>{
						if(res.data.result){
							this.zuzhi(res.data)
						}
					})
				
			},
			// 微信授权登录
			loginWeiXin() {
				uni.showLoading({
				    title: '加载中'
				});
				let timer= setTimeout(()=>{
					uni.hideLoading();
					uni.showToast({
						title:"网络错误",
						icon:"none"
					})
				},5000)
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						console.log(loginRes)
						uni.getUserInfo({
							  provider: 'weixin',
							  success:(infoRes)=>{
								  console.log(infoRes)
								  clearTimeout(timer)
								  let data={}
								  console.log(infoRes)
								  // #ifdef APP-PLUS
									data = {
											token: loginRes.authResult.access_token, //token
											openid: loginRes.authResult.openid, //openid
											nickName:infoRes.userInfo.nickName,//昵称
											gender:infoRes.userInfo.gender,//性别
											avatarUrl:infoRes.userInfo.avatarUrl,//头像
											unionid:loginRes.authResult.unionid,//uuid
											apptype: "phoneapp"
										}
								  // #endif
								  // #ifdef MP-WEIXIN
									data = {
											iv:infoRes.iv,
											encryptedData:infoRes.encryptedData,
											nickName:infoRes.userInfo.nickName,//昵称
											gender:infoRes.userInfo.gender,//性别
											avatarUrl:infoRes.userInfo.avatarUrl,//头像
											code:loginRes.code,//code
											apptype: "weixinapp"
										}
								  // #endif
								 //  uni.request({
								 //  	method:"POST",
									// url:"http://192.168.2.107:8000/users/wx_login/",
									// header:{
									// 	"Content-Type":"application/x-www-form-urlencoded"
									// },
									// data:data,
									// success(res) {
									// 	console.log(res)
									// }
								 //  })
									this.$R.post('/users/wx_login/',data).then(res=>{
										console.log(res)
										let userfo = {}
										userfo["name"]=infoRes.userInfo.nickName
										userfo["img"]=infoRes.userInfo.avatarUrl
										userfo["gender"]=infoRes.userInfo.gender
										userfo["data"] = data
										if(res.token){
											userfo["token"]=res.token
										}else{
											clearTimeout(timer)
											uni.hideLoading();
											this.login(userfo)
											uni.navigateTo({
												url:"../phone/phone"
											})
										}
										userfo["callback"]=()=>{
											uni.navigateBack({
												delta: 1
											})
											clearTimeout(timer)
											uni.hideLoading();
										}
										this.login(userfo)
								})
								  }
							  })
							  },
							  fail(res) {
							  	console.log(res)
							  }
					})
			},
			// 封装数数据
			zuzhi(item){
				let data = {}
				data["name"]=item.nickname
				data["img"]=item.img
				data["token"]=item.token
				data["callback"]=()=>{
					uni.navigateBack({
						delta: 1
					})
				}
				this.login(data)
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			forget() {

			},
			focus(key) {
				this.foucsClass[key] = true
			},
			blur(key) {
				this.foucsClass[key] = false
			},
			// 表单验证
			validate(key) {
				var check = true
				this.rules[key].forEach((v) => {
					if (!v.rule.test(this[key])) {
						uni.showToast({
							title: v.msg,
							icon: "none"
						})
						check = false
						return false
					}
				})
				return check
			},
			submit() {
				if (!this.check) {
					return uni.showToast({
						title: "请先阅读xxx协议"
					})
				}
				if (!this.validate('username')) return
				if (!this.validate('password')) return
				uni.showLoading({
					title: "登录中",
					mask: true
				})
				setTimeout(() => {
					uni.hideLoading()
					uni.navigateBack({
						delta: 1
					})
				}, 3000)

			}
		}
	}
</script>

<style>
	.input-boder-color {
		border-color: #FD6801
	}
</style>
