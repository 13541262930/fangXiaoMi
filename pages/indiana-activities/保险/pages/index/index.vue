<template>
	<view class="content">
		<!-- banner -->
		<swiper :resdata="swiper"></swiper>
		<!-- banner说明 -->
		
		<!-- 分类 -->
		
		<!-- 理赔 -->
		
		<!-- 推荐产品 -->
		<view class="">
			<view class="d-flex w-25" style="height: ;">
				
			</view>
		</view>
<!-- 		<map :latitude="latitude" :longitude="longitude" style="width: 100%;height: 700upx;" :markers="markers" :show-location="true"></map>
		<button type="primary" @click="choose">打开导航</button>
		<input type="text" v-model="input"  />
		<button type="primary" @click="search">Ok</button> -->
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import swiper from "../../components/index/swiper-image.vue"
	var amapFile = require("../../common/amap-wx.js")
	export default {
		components:{
			swiper,uniNavBar
		},
		data() {
			return {
				// latitude: Number,
				// longitude:Number,
				// key:"5cb7fb4373a187e52f76388e74fea0ea",
				// markers:"",
				// input:"",
				// distance:"",
				swiper:[] //banner
				
			}
		},
		
		onLoad() {
			
			// this.getcoordinates()
		},
		methods: {
			//banner
			getSwiper(){
				this.$R.get("").then(res=>{
					console.log(res)
				})
			},
			
			
			
			getcoordinates(){
				var myAmapFun = new amapFile.AMapWX({key:this.key})
				myAmapFun.getDrivingRoute({
					origin: '116.481028,39.989643',
					destination: '116.434446,39.90816',
					success:e=>{
						this.distance= e.paths[0].distance
					}
				})
				uni.getLocation({
					type:"gcj02",
					altitude:true,
					geocode:true,
					success:(res)=>{
						console.log(res)
						// this.markers =[{
						// 	latitude:res.latitude,
						// 	longitude:res.longitude,
						// 	iconPath:'/static/dingwei.png'
						// } ,
						// {
						// 	latitude:res.latitude+10,
						// 	longitude:res.longitude+20,
						// 	iconPath:'/static/dingwei.png'
						// } 
						// ] 
						
						this.latitude = res.latitude
						this.longitude = res.longitude
					},
					fail(e) {
						console.log(e)
					}
				})
			},
			openMap(){
				uni.openLocation({
					latitude: this.latitude,
					longitude: this.longitude,
					success: function () {
						console.log('success');
					}
				})
			},
			choose(){
				uni.chooseLocation({
				    success: function (res) {
						console.log(res)
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
				    }
				})
			},
			search(){   
				this.$R.get("http://restapi.amap.com/v3/geocode/geo?",{
					key:"f04b4b66dfcd8f27778a35aa6fbae3d2",
					address:this.input
				},"url").then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
