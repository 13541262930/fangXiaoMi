<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="font-md text-light-muted">支付金额</text>
			<price priceSize="font-lg" unitSize="font-md">{{ getDataPrice }}</price>
		</view>
		<view class="px-5">
			<label>
			<uni-list-item @click="payMethod(1)" showExtraIcon leftIconStyle="font-size:60rpx" leftIcon="icon-zhifubao text-primary" title="支付宝" note="推荐使用支付宝支付">
					<radio slot="right" color="#FD6801" value="" :checked="zf"/><text></text>
			</uni-list-item>
			</label>
			<label>
			<uni-list-item @click="payMethod(2)" showExtraIcon leftIconStyle="font-size:60rpx" leftIcon="icon-weixinzhifu text-success" title="微信支付" note="推荐使用支付宝支付">
					<radio slot="right" color="#FD6801" value="" :checked="wx" /><text></text>
			</uni-list-item>
			</label>
			<view @click="submit" class="rounded main-bg-color text-white font-md w-100 py-2 text-center mt-3" hover-class="main-bg-hover-color">
				确认支付
			</view>
		</view>
	</view>
</template>

<script>
	import price from "../../components/common/price.vue"
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import { mapState,mapGetters,mapMutations  } from "vuex"
	export default {
		components:{
			price,uniListItem
		},
		data() {
			return {
				zf:true,
				wx:false,
				dataPrice:"",
				dataId:""
			}
		},
		computed:{
			...mapGetters(['totalPrice','getDataPrice']),
			...mapState({
				payUrl:state=>state.order.payUrl
			})
		},
		onBackPress(options) {
			// 监听app端返回按钮
			// #ifdef APP-PLUS
			if(options.from =="navigateBack"){
				return false
			}
				uni.showModal({
					content:"确认取消支付！",
					success:(res)=>{
						if(res.confirm){
							uni.navigateTo({
								url:"../order/order?index=1"
							})
						}
					}
				})
				
				return true;
			// #endif
		},
		methods: {
			payMethod(key){
				if(key===1){
					console.log(this.zf)
					this.wx=false
					this.zf = !this.zf
				}else{
					this.zf = false
					this.wx = !this.wx
				}
			},
			submit(){ 
				console.log(this.payUrl)
				let  orderInfo=""
				let  provider = ""
				if(this.zf){
					orderInfo = this.payUrl.zhiFuBao
					// orderInfo = "alipay_root_cert_sn=687b59193f3f462dd5336e5abf83c5d8&app_cert_sn=6f63c9d7080ba556c9c272f91e5fb2d3&app_id=2019112869467483&biz_content=%7B%22subject%22%3A%2220191213173741183%22%2C%22out_trade_no%22%3A%2220191213173741183%22%2C%22total_amount%22%3A0.0%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&charset=utf-8&method=alipay.trade.app.pay&notify_url=http%3A%2F%2F2818g63v16.wicp.vip%3A39465%2Forders%2Falipay%2Freturn%2F&return_url=http%3A%2F%2F2818g63v16.wicp.vip%3A39465%2Forders%2Falipay%2Freturn%2F&sign_type=RSA2&timestamp=2019-12-13+17%3A38%3A47&version=1.0&sign=ArpqUJsU4o%2F81DsaWWuYEA7WO1BhD%2B0WvbjLFfSTMgMOaEn%2BvMpXMVdXTkhWuZtd5KX3EJBy5%2BX%2FuTqOwV6kM3%2By1xFUKMIsBA%2BU5F%2FG8Zk1yNIbbh0CKytWEnFulIdWGgoJ6LEOA9g1X1JU6llDfJS6GaXY5AS9npnEupcChDHr1e59FWcQXign46h01Xya%2FNRuxZpFkZ3ZXYXgH4QG2ZIoc13B%2F1RpGsGQGUPqMtacSIzDL8w0hLNCDbYUKCykWOLP6O5KUk%2BjXgjYW%2Fuv1WLNA2HA2yd6kgRoMDcZQt2TJsNRPmwdpg92yc10QcsoMIuZhcvFbAw1ovMzX%2F%2F37w%3D%3D"
					provider="alipay"
				}else{
					orderInfo = this.payUrl.weiXin
					provider="wxpay"
				}
				console.log(orderInfo)
				uni.requestPayment({
					provider:provider,
					orderInfo:orderInfo,
					success:(res)=>{
						if(JSON.parse(res.rawdata).resultStatus==="9000"){
							uni.navigateTo({
								url:"../pay-result/pay-result"
							})
						}else if(res.channel.serviceReady==true){
							uni.navigateTo({
								url:"../pay-result/pay-result"
							})
						}
					},
					fail:(e)=> {
						uni.showModal({
							content:"确认取消支付！",
							success(res) {
								console.log(res)
								if(res.confirm){
									uni.navigateTo({
										url:"../order/order?index=1"
									})
								}
							}
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
