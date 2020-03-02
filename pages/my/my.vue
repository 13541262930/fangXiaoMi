<template>
	<view class="animated fadeIn faster">
		<loading-plus v-if="beforeReady"></loading-plus>
		<!-- 头部 -->
		<view class="position-relative" style="height: 320rpx;">
			<!-- 消息列表 -->
			<navigator url="../msg-list/msg-list">
			<view class="iconfont icon-xiaoxi3 position-absolute text-white" style="font-size: 50rpx;top:75rpx;right: 20rpx;z-index: 100;">
			</view>
			</navigator>
			<image src="../../static/images/bg.jpg" style="width: 100%;height: 320upx;" mode=""></image>
			<view class="d-flex a-center j-sb position-absolute left-0 right-0" style="bottom: 50rpx;">
				<image :src="loginStatus? userInfo.img:'../../static/images/demo/demo6.jpg'" mode="" style="height: 145rpx;width: 145rpx;border: 5rpx solid;" class="rounded-circle border-light ml-4"></image>
				<view class="ml-2 text-white font-md" @click="openLogin()">
					{{ loginStatus ? userInfo.name:'登录/注册' }}
				</view>
				<view class="d-flex j-center a-center a-self-end px-2" @click="navigate('members-center')" style="height: 70rpx;background-color:#FFD43F ;color: #CC4A00;border-top-left-radius: 40rpx; border-bottom-left-radius: 40rpx;">
					<view class="line-h iconfont icon-huangguan mr-1">
					</view>
					会员积分 1.99
				</view>
			</view>
		</view>
		<!-- 图标分类 -->
		<card>
			<view slot="title" class="d-flex a-center j-sb w-100" @click="openOrder('0')">
				<text class="font-weight font-md" >我的订单</text>
				<view class="text-secondary font">
					全部订单 <text class="iconfont icon-dibudaohanglan- font-lg"></text>
				</view>
			</view>
			<view class="row">
				<block v-for="(item,index) in myList" :key="index" >
					<view class="span24-6  d-flex flex-column a-center  py-3 " @click="openOrder(item.index)"  hover-class="bg-light-secondary">
						<view class="iconfont  line-h" style="font-size: 20px;" :class="item.icon" v-if="item.icon">
						</view>
						<view class="iconfont  line-h" style="font-size: 20px;" v-else>
							0
						</view>
						<view >
							{{item.title}}
						</view>
					</view>
				</block>
			</view>
		</card>
		<divider></divider>
		<!-- 轮播广告 -->
		<swiperImage :height="250" :resdata = "swiperData">	</swiperImage>
		<!-- 分界线 -->
		<divider></divider>
		<!-- 列表 -->
		<un-list-item :showExtraIcon="true" leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" @click= "navigate('smallPlaneMember')">小面会员</un-list-item>
		<un-list-item :showExtraIcon="true" leftIconStyle="color:#FCBE2D;" leftIcon="icon-huiyuan" @click= "navigate('members-center')">会员中心</un-list-item>
		<un-list-item :showExtraIcon="true" leftIconStyle="color:FA6C5E;" leftIcon="icon-fuwuzhongxin">服务中心</un-list-item>
		<un-list-item :showExtraIcon="true" leftIconStyle="color:#FE8B42;" leftIcon="icon-jiating">小米之家</un-list-item>
		<un-list-item :showExtraIcon="true" leftIconStyle="color:#9ED45A;" leftIcon="icon-xingzhuanggongnengtubiao-">更多功能</un-list-item>
		<un-list-item :showExtraIcon="true" leftIconStyle="color:#808C98;" leftIcon="icon-shezhi" @click= "navigate('user-seet')">更多设置</un-list-item>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue';
	import card from "../../components/common/card.vue"
	import loading from "../../components/common/minxin/loading.js"
	import unListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import { mapState,mapMutations,mapGetters } from "vuex"
	export default {
		mixins:[loading],
		components:{
			card,unListItem,swiperImage
		},
		data() {
			return {	
				src:true,
				input:"",
				myList:[
					{
						title:"待付款",
						icon:"icon-daifukuan",
						index:1
					},
					{
						title:"待收货",
						icon:"icon-daishouhuo1",
						index:2
					},
					{
						title:"待评价",
						icon:"icon-pinglun",
						index:3
					},
					{
						title:"优惠券",
						icon:"",
						index:""
					}
				],
				swiperData:[]//轮播广告数据
			}
		},
		onShow() {
			// this.$update(this.getGoods)
		},
		computed:{
			...mapGetters(['getGoods']),
			...mapState({
				userInfo:state=>state.user.userInfo,
				loginStatus:state=>state.user.loginStatus
			})
		},
		onLoad() {
			this.getData()
		},
		methods: {
			...mapMutations(['change']),
			selectTab(img){
				
			},
			getData(){
				// 获取轮播图数据
				this.$R.get("/goods/banners/").then((res) => {
					console.log(JSON.stringify(res))
					if (res) {
						this.swiperData = res
					}
				})
			},
			openLogin(){
				// 存在登录状态修改昵称 不存在登录页面
				if(this.loginStatus){
					// 修改昵称
					// uni.navigateTo({
					// 	url:"../login/login"
					// })
				}else{
					uni.navigateTo({
						url:"../login/login"
					})
				}
				
			},
			// 跳转订单
			openOrder(index){
				if(index){
					this.navigateTo({
						url:"/pages/order/order?index="+index
					})
				}else{
					this.navigateTo({
						url:"/pages/order-coupon/order-coupon"
					})
				}
			},
			navigate(path,check= false){
				if (!path) return;
				if(check){
					return this.navigateTo({
						 url:`/pages/${path}/${path}`
					})
				}
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		},
		onReady() {
			this.beforeReady = false
		}
	}
</script>

<style>

</style>
