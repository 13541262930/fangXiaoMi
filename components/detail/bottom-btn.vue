<template>
	<view >
		<view style="height: 100rpx;">
			
		</view>
		<view class="d-flex a-stretch position-fixed left-0 bg-white bottom-0 right-0" style="height: 100rpx; z-index: 100;">
			<view class="d-flex flex-1 flex-column a-center j-center  m-1"   @tap="$emit('shouCangs')">
				<view class="icon-aixin iconfont " :class="isShou?'shouActive':''" style="font-size: 20px;">
					
				</view>
				收藏
			</view>
			<view class="d-flex flex-1 flex-column a-center j-center line-h-md" hover-class="bg-light-secondary" @tap = "goCart">
				<text v-if="getGoods&&loginStatus" class="font-sm" style="position: absolute;left: 35%;top: 0; display: flex;align-items: center;justify-content: center;color:#DC3545;border: 2px solid #DC3545; background: #FFFFFF; border-radius: 50%;width: 15px;height: 15px;z-index: 1000;">{{ getGoods }}</text>
				<view class="iconfont icon-gouwuche text-muted line-h-md" style="font-size: 20px;">
					
				</view>
				购物车
			</view>
			<view @tap="$emit('show')" class="d-flex flex-column font-md a-center j-center text-white main-bg-color" style="flex: 2.5;" hover-class="main-bg-hover-color">
				<view class="iconfont icon- text-muted " >
					加入购车
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState,mapMutations,mapGetters } from "vuex"
	export default{
		props:{
			isShou:Boolean
		},
		methods:{
			...mapMutations(['change']),
			goCart(){
				if(this.loginStatus){
					uni.switchTab({
						url:"../../pages/cart/cart"
					})
				}else{
					uni.navigateTo({
						url:"../../pages/login/login"
					})
				}
				
			}
		},
		computed:{
			...mapGetters(['getGoods']),
			...mapState({
				loginStatus:state=>state.user.loginStatus
			})
		}
	}
</script>

<style>
	.active{
		background: #FF6B01;border-radius: 50%;
	}
	.shouActive{
		color: #DC3545;
	}
</style>
