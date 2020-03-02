<template>
	<view style="background: #F5F5F5;min-height: 100%;height: auto;">
		<!-- 地址选择 -->
		<view @click="openPathList" class="main-bg-color text-white d-flex a-center px-3"  style="height: 250rpx;" hover-class="main-bg-hover-color">
			<view class="row">
				<template v-if="path">
					<view class="iconfont icon-dizhi mx-2 d-flex a-center j-center" style="font-size: 30px;">
					</view>
					<view class="">
						<view class="font-weight d-flex a-center font-lg">
							{{ path.name }} {{ path.phone }} <view v-if="path.isDefault" class="border border-white rounded px-1 font ml-2">
								默认
							</view>
						</view>
						<view class="font">
							{{path.path}}  {{path.detailPath}}
						</view>
					</view>
				</template>
				<template v-else>
				<view class="font-weight d-flex a-center font-lg">
					请选择收货地址
				</view>
				</template>
			</view>
			<view class="iconfont icon-you ml-auto">
			</view>
		</view>
		<view  style="border-top-left-radius: 25rpx;border-top-right-radius: 25rpx;margin-top: -25rpx;overflow: hidden;">
			<view   class="bg-white">
				<uni-list-item showArrow>
					<view class="d-flex a-center">
						
						<image v-for="(item,index) in getCartds" :key="index"  :src="item.cover" style="width: 60px;height: 60px;" class="rounded mr-2" mode=""></image>
		<!-- 				<image src="../../static/images/demo/demo6.jpg" style="width: 50rpx;height: 50rpx;" class="rounded mr-2" mode=""></image>
						<image src="../../static/images/demo/demo6.jpg" style="width: 50rpx;height: 50rpx;" class="rounded mr-2" mode=""></image> -->
					</view>
					<view slot="rightContent">
						共{{ getSumNumner }}件
					</view>
				</uni-list-item>
				<uni-list-item :showArrowIcon="false" title="商品总价">
					<view slot="rightContent">
						<price color="text-dark">{{ totalPrice }}</price>
					</view>
				</uni-list-item>
				<uni-list-item title="运费" :showArrowIcon="false">
					<view slot="rightContent">
						包邮
					</view>
				</uni-list-item>
				<!-- <navigator url="../order-coupon/order-coupon"> -->
				<uni-list-item title="优惠卷"  @click="show()">
					<view slot="rightContent" class="text-muted">
						{{ couponText }}
					</view>
				</uni-list-item>
				<!-- </navigator> -->
				<uni-list-item >
					<text class="main-text-color">小计</text>
					<view slot="rightContent">
						<price>{{ price?price:totalPrice }}</price>
					</view>
				</uni-list-item>
				<divder></divder>
				<uni-list-item @click="openOrderIndvoice()" title="发票" extraWidth="40%" >
					<view slot="rightContent">
						电子发票-个人
					</view>
				</uni-list-item>
			</view>
		</view>

		<!-- 底部 -->
		<view class="position-fixed d-flex a-center border  bottom-0 left-0 right-0 bg-white font-md p-2" >
			<view class="ml-auto">
				
			</view>
			合计：
			<view class="ml-2">
				<price>{{ price?price:totalPrice }}</price>
			</view> 
			<view @click="openPayMethods" class="px-2 py-1 ml-2  main-bg-color font-md text-white" hover-class="main-bg-hover-color" style="border-radius: 80rpx;">
				去支付
			</view>
		</view>
		
		<comm-prpup :popupClass="popupShow"  @hide = "hide" style="z-index: 9999;margin-bottom: 50px;">
			<view class="row a-center j-sb my-2 position-fixed top-0" style="border-bottom: solid #F4F4F4 1px;z-index: 9999;width: 100%;height: 100upx;">
				<view class="d-flex a-center j-center  my-2 mx-5"  v-for="(item,index) in tabBars" :key="index" :class="tabIndex===index?'active':''"  @click="changeIndex(index)">
					{{item.name}}
				</view>
			</view>
			<swiper @change="currentTab" :current="tabIndex" style="height: 1000upx;">
				<view class="" style="height: 120upx;">
				
				</view>
				<swiper-item v-for="(item,index) in tabBars" :key="index">
					<scroll-view scroll-y="true" v-if="item.list.length>0" style="height: 750upx;">
						<coupon  :resdata="item.list" @change="change" @clickIndex="clickIndex()"></coupon>
						
					</scroll-view>
					<view v-else style="background: #F4F4F4;">
						<no-thing :icon="item.nothing" :msg="item.msg"></no-thing>
					<!-- 	<view class="font d-flex a-center j-center p-2"  @click="openReceive()">
							<view class="d-flex a-center j-center" style="border-radius: 10px;border:solid #FFFFFF 1px;width: 100upx;">
								去看看
							</view>
						</view> -->
					</view>
				</swiper-item>
				<!-- 占位 -->
		<!-- 		<view class="" style="height: 50upx;">
					
				</view> -->
			</swiper>
			<view class="position-absolute  w-100 d-flex a-center j-center bottom-0" style="background: #FFFFFF;z-index: 999;height: 150upx;">
				<view class="d-flex a-center j-center font-lg " style="border-radius: 10px;background: #FF3333;height: 80upx;width: 80%;" @click="hide">
					确定
				</view>
			</view>
			
		</comm-prpup>
		
	</view>
</template>

<script>
	import coupon from "../../components/my/coupon.vue"
	import commPrpup from "@/components/common/comm-prpup.vue"
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "../../components/common/price.vue"
	import {mapState,mapGetters,mapMutations} from "vuex"
	export default {
		components:{
			uniListItem,price,commPrpup,coupon
		},
		data() {
			return {
				popupShow:"none",
				nextpage:"",
				path:false,
				couponText:"无可用",
				tabBars:[
					{name:"可用优惠券",nothing:"no_receiving",msg:"你还没有可使用的优惠卷",
					list:[
				
					]},
					{name:"不可用优惠券",nothing:"no_comment",msg:"你还没有不可用的优惠券",
					list:[
						
					]}
					
				],
				tabIndex:0,
				tabData:"",
				price:"",
				selecteCoupon:[] //选中的优惠券id
			}
		},
		methods: {
			...mapMutations(['changePayUrl','cart_init']),
			zhuZhiData(res){
				let list =  res.map(v=>{
					v["isShow"]=false
					v["isClick"]=false
					if(this.tabIndex ===0){
						v['class']="可使用"
						
					}else if(this.tabIndex ===1){
						v['class']="已使用"
					}else{
						v['class']="已过期"
					}
					return v
				})
				this.tabBars[this.tabIndex].list = list
			},
			change(index){
				this.tabBars[this.tabIndex].list[index].isShow =  !this.tabBars[this.tabIndex].list[index].isShow 
			},
			clickIndex(index){
				let items = this.tabBars[this.tabIndex].list
				let item = this.tabBars[this.tabIndex].list[index]
				// this.selecteCoupon.push(item.id)
				if(item.isClick){
					this.tabBars[this.tabIndex].list[index].isClick = !this.tabBars[this.tabIndex].list[index].isClick
					this.price = this.totalPrice
				}else{
					items.map(v=>{
						v.isClick = false
						
					})
					this.tabBars[this.tabIndex].list[index].isClick = !this.tabBars[this.tabIndex].list[index].isClick
					this.tabData=this.tabBars[this.tabIndex].list[index]
					if(this.tabData.coupon.money_equivalent_value){
						this.price = this.totalPrice - this.tabData.coupon.money_equivalent_value
					}else{
						this.price = this.totalPrice*this.tabData.coupon.off_percent/100
					}
				}
			},
			currentTab(e){
				this.tabIndex = e.detail.current
			},
			hide(){
				this.popupShow = "none"
			},
			show(){
				this.popupShow = "show"
			},
			changeIndex(index){
				this.tabIndex = index
			},
			openOrderIndvoice(){
				uni.navigateTo({
					url:"../order-invoice/order-invoice"
				})
			},
			openPathList(){
				uni.navigateTo({
					url:"../user-path-list/user-path-list?type=choose"
				})
			},
			openPayMethods(){
				if(this.path){
					if(this.tabData){
						var data = {
						address:this.path.path +" "+this.path.detailPath,
						signer_name:this.path.name,
						singer_mobile:this.path.phone,
						goods:this.selectedList.join(","),
						coupon_record:this.tabData.id
					}	
						var sumPrice = this.price
					}else{
						var data = {
						address:this.path.path +" "+this.path.detailPath,
						signer_name:this.path.name,
						singer_mobile:this.path.phone,
						goods:this.selectedList.join(",")
					}
						var sumPrice = this.totalPrice
					}
					this.$R.post("/orders/orders/",data).then(res=>{
						console.log(JSON.stringify(res))
							this.cart_init()
							this.changePayUrl(
							{
								zhiFuBao:res.alipay_url,
								weiXin:res.wxpay_url,
								id:res.id,
								sumPrice:sumPrice
							}
							)
							uni.navigateTo({
								url:"../pay-methods/pay-methods"
							})
					})
				}else{
					uni.showToast({
						title:"请选择收货地址!",
						icon:"none"
					})
				}	
			}
		},
		onLoad() {
			// console.log(this.selectedList)
			this.$R.get("/coupons/CouponRecord/",{used:"yes",goods:this.selectedList.join(",")}).then(res=>{
				console.log(JSON.stringify(res))
				if(res.results<=0){
					this.couponText = "无可用"
				}else{
					this.couponText = res.results.length+"张可用"
					this.nextpage = res.next
					this.zhuZhiData(res.results)
				}
				
			})
			
			// 开启监听收货地址选择
			uni.$on('choosePath',(res)=>{
				// console.log("接受参数",res)
				this.path= res
			})
			if(this.defaultPath.length >0){
				this.path = this.defaultPath[0]
			}
		},
		computed:{
			...mapState({
				list:state=>state.cart.data.list,
				selectedList:state=>state.cart.data.selectedList
			}),
			...mapGetters(['defaultPath','totalPrice','getSumNumner','getCartds'])
		},
		onUnload() {
			// 卸载监听选择收货地址事件
			uni.$off('choosePath',(e)=>{
				console.log("关闭监听收货地址")
			})
		}
	}
</script>

<style>
.active{
		border-bottom:solid #F0AD4E 1px;color: #F0AD4E;
	}
</style>
