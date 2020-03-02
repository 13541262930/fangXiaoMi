<template>
	<view class="w-100">
		<!-- 会员积分卡片 -->
		<view class="mx-2 position-relative" style="background: #F0AD4E;width:710upx ;height: 400upx;border-radius: 10px;">
			<!-- 卡片顶部 -->
			<view class="row  j-sb ">
				<view class="row m-2 a-center j-center">
					<image :src="userInfo.img" style="height: 50px;width: 50px;border-radius: 50%;" mode=""></image>
					<view class="mx-2">
						我的积分
					</view>
				</view>
				
				<view class="row my-2" style="background: #F0AD9E;opacity: 0.8; border-top-left-radius: 10px;border-bottom-left-radius: 10px; height: 100%;" @click="navgate('page-rules')" >
					<view class="iconfont icon-jifen mx-2">
						
					</view>
					<view class=" mr-2">
						如何赚取积分
					</view>
				</view>
			</view>
			<view class="d-flex a-center j-center font-big font-weight" style="height: 50%;color: #FFFFFF;">
				{{ getIntegral }}
			</view>
			<view class="position-absolute row mx-4 bottom-0 left-0">
				<view class="iconfont icon-xunzhang">
					
				</view>
				<view class="mx-2">
					0枚成就
				</view>
			</view>
		</view>
		
		<!-- 图标 -->
		<view class="row p-2" style="justify-content: space-between;height: 150px;">
			<view class="d-flex flex-column a-center j-center" @click="navgate('achievement-wall')">
				<image src="../../static/tubiao/2.png" mode="widthFix" style="width: 50px;height: 50px;"></image>
				<text>会员成就</text>
			</view>
			<view class="d-flex flex-column a-center j-center" @click="navgate('integral-mall')">
				<image src="../../static/tubiao/4.png" mode="widthFix" style="width: 50px;height: 50px;"></image>
				<text>积分商城</text>
			</view>
			<view class="d-flex flex-column a-center j-center" @click="navgate('integral-subsidiary')">
				<image src="../../static/tubiao/3.png" mode="widthFix" style="width: 50px;height: 50px;"></image>
				<text>积分明细</text>
			</view>
			<view class="d-flex flex-column a-center j-center" @click="navgate('member-code')">
				<image src="../../static/tubiao/1.png" mode="widthFix" style="width: 50px;height: 50px;"></image>
				<text>会员码</text>
			</view>
		</view>
		<!-- 分割线 -->
		<divder></divder>
		<!-- 会员活动 -->
		<view class="row a-center j-sb p-4" style="height: 100%;">
			<view class="flex-column a-center d-flex j-center span24-11"  style="background: rgba(100,231,171,1); border-radius: 10px;" @click="navgate('indiana-activities')">
					<image src="../../static/tubiao/baoxiang.png" style="width: 200upx;height: 200upx;" mode="widthFix" ></image>
					<text  style="font-size: 15px;color: #FFFFFF;" class="font-weight">积分夺宝</text>
					<text class="font-sm" style="color: #FFFFFF;">小积分抽大奖</text>
			</view>
			<view class="flex-column d-flex a-center j-center span24-11" style="background: #FEBE1F;border-radius: 10px;" @click="navgate('sign-in')">
				<image src="../../static/tubiao/qiandao.png" style="width: 200upx;height: 200upx;" mode="widthFix"></image>
				<text style="font-size: 15px;color: #FFFFFF;" class="font-weight">早起点到</text>
				<text class="font-sm" style="color: #FFFFFF;">瓜分懒人积分</text>
			</view>
		</view>
		<!-- 轮播广告 -->
		<swiperImage :resdata="swiperData"></swiperImage>
		<!-- 分割线 -->
		<divder></divder>
		<!-- 积分商城 -->
		<view class="mt-2 mx-3" style="font-size: 15px;">
			积分商城
		</view>
		<uni-list-item title="优惠卷" @click="navgate('integral-mall')">
			<view slot="rightContent" class="text-light-muted">
				查看更多
			</view>
		</uni-list-item>
		<!-- 优惠券列表 -->
		<view class="row">
			<view class="position-relative span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;overflow: hidden;"  @click="navgate('integral-exchange')">
				<view class="font-sm position-absolute d-flex a-center j-center" style="color: #FFFFFF; background: #8F8F94;transform:rotate(45deg);right: -30upx;top:15upx;width: 120upx;height: 30upx;">
					已兑完
				</view>
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class="position-relative span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;overflow: hidden;"  @click="navgate('integral-exchange')">
				<view class="font-sm position-absolute d-flex a-center j-center" style="color: #FFFFFF;background: #8F8F94;transform:rotate(45deg);right: -30upx;top:15upx;width: 120upx;height: 30upx;">
					已兑完
				</view>
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class="position-relative span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;overflow: hidden;"  @click="navgate('integral-exchange')">
				<view class="font-sm position-absolute d-flex a-center j-center" style="color: #FFFFFF;background: #8F8F94;transform:rotate(45deg);right: -30upx;top:15upx;width: 120upx;height: 30upx;">
					已兑完
				</view>
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class="position-relative span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;overflow: hidden;"  @click="navgate('integral-exchange')">
				<view class="font-sm position-absolute d-flex a-center j-center" style="color: #FFFFFF;background: #8F8F94;transform:rotate(45deg);right: -30upx;top:15upx;width: 120upx;height: 30upx;">
					已兑完
				</view>
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class="position-relative span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;overflow: hidden;"  @click="navgate('integral-exchange')">
				<view class="font-sm position-absolute d-flex a-center j-center" style="color: #FFFFFF;background: #8F8F94;transform:rotate(45deg);right: -30upx;top:15upx;width: 120upx;height: 30upx;">
					已兑完
				</view>
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
			<view class="position-relative span24-8 flex-column d-flex a-center j-center" style="height: 250upx;border: solid #F4F4F4 0.5px;overflow: hidden;"  @click="navgate('integral-exchange')">
				<view class="font-sm position-absolute d-flex a-center j-center" style="color: #FFFFFF;background: #8F8F94;transform:rotate(45deg);right: -30upx;top:15upx;width: 120upx;height: 30upx;">
					已兑完
				</view>
				<view class="d-flex a-center j-center m-2 position-relative" style="background: #F76260;width: 50px;height: 30px;">
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;left: -2px ;background: #FFFFFF;">
						
					</view>
					<view class="" style="width: 5px;height: 5px;border-radius: 100%;position: absolute;top:12.5px;right: -2px ;background: #FFFFFF;">
						
					</view>
					
					￥20
				</view>
				<text>洗护必备优惠券</text>
				<text>5积分</text>
			</view>
		
	</view>
	</view>
</template>

<script>
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import swiperImage from '@/components/index/swiper-image.vue'
	import { mapState,mapMutations,mapGetters } from "vuex"
	export default {
		components:{
			uniListItem,swiperImage
		},
		data() {
			return {
				swiperData:[],
				total_goal:""
			}
		},
		methods: {
			...mapMutations(['changeIntegral']),
			getData(){
				// 获取轮播图数据
				this.$R.get("/goods/banners/").then((res) => {
					console.log(JSON.stringify(res))
					if (res) {
						this.swiperData = res
					}
				})
			},
			getSum(){
				this.$R.get("/integral/integraltotal/",{}).then(res=>{
					this.changeIntegral(res.total_goal)
				})
			},
			navgate(path){
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo,
			}),
			...mapGetters(['getIntegral'])
		},
		onLoad() {
			this.getSum(),
			this.getData()
		}
	}
</script>

<style>

</style>
