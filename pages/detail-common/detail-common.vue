<template>
	<view>
		<view class="p-2">
			<view class="d-flex a-center py-2 border-bottom border-light-secondary">
				<text class="text-muted">用户评价({{total}})</text>
				<text class="main-text-color ml-auto mr-2">{{good_rate*100}}%</text>
				<text class="text-muted">满意</text>
			</view>
			<view class="d-flex pt-2 flex-wrap" style="margin-right: -20rpx;">
				<view class="px-2  py border rounded mr-2 mb-2 cate-item" v-for="(item,index) in catelist" :key="index"
				:class="cateIndex == index? 'active':'' " @tap="change(index)"
				>{{item.name}}
				</view>
			</view>
		</view>
		<divder></divder>
		<view class="p-2 d-flex a-start border-bottom border-light-secondary" v-for="(item,index) in list" :key="index">
			<image :src="item.user.avatar" style="height: 90rpx;width: 90rpx;" class="rounded flex-shrink" mode=""></image>
			<view class="pl-2 flex-1">
				<view class="d-flex a-center">
					<text class="font-md text-primary font-weight aut">{{item.user.nickname}}</text>
					<view class="iconfont icon-service ml-auto main-text-color">
						<text class="pl-1">{{item.rating|rating}}</text>
					</view>
				</view>
				<!-- 品论内容 -->
				<view class="line-h-md font-md ">
					非常好
				</view>
				<!-- 循环评论的图片 -->
				<view class="row" v-if="item.review.image.length>0">
					<view class="span24-8 px pb" v-for="(img,imgindex) in item.item.review.image" :key="imgindex">
						<image :src="img" style="height: 100rpx;" mode=""></image>
					</view>
				</view>
				<!-- 评论时间 -->
				<view class="d-flex a-center">
					<text class="text-light-muted mr-auto">{{item.review_time|formatime}}</text>
					<view class="d-flex text-light-muted ml-auto a-center mr-1">
						<!-- 点赞数 -->
						{{item.goods_num}}<text class="iconfont icon-dianzan ml"></text>
					</view>
					<!-- 评论个数 -->
					<view class="d-flex text-light-muted a-center">
						10 <text class="iconfont icon-pinglun ml"></text>
					</view>
				</view>
				<!-- 客服回复 -->
				<view class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center ml-2">
					<text class="main-text-color"> 官方回复:</text>
					哈哈哈哈哈哈,官方会发
					<view class="iconfont icon-dianzan text-light-muted line-h-md font">
						<text class="pl-1 text-muted">赞客服120</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $T from '../../common/lib/time.js';
	export default {
		data() {
			return {
				page:1,//页数
				dataIndex:"",
				cateIndex:0,
				catelist:[
					{"name":"全部",value:""},
					{"name":"好评",value:"/good"},
					{"name":"中评",value:"/middle"},
					{"name":"差评",value:"/bad"}
				],
				list:[],
				total:0, //总品论 数
				good_rate:0,//好评率 
				loadtext:"上拉加载"
			}
		},
		// 上拉加载生命周期
		onReachBottom() {
			this.page++
			this.getData()
		},
		
		
		methods: {
			change(index){
				this.cateIndex = index
				uni.showLoading({
					title: '加载中',
					mask: false
				});
				this.getData((res)=>{
					uni.hideLoading()
					if(res){
						uni.showToast({
							title: '加载成功',
							icon:"none"
						});
					}
				})
			},
			// 初始化
			__init(){
				this.$.get(`/goods/${this.dataIndex}/comments?page=${this.page}`).then(res=>{
					console.log(res) 
					this.total = res.total,
					this.good_rate = res.good_rate,
					this.list = res.list
				})
			},
			// 加载数据
			getData(callback=false,refresh = false){
				let value = this.catelist[this.cateIndex].value
				console.log(value)
				this.$.get(`/goods/${this.dataIndex}/comments${value}?page=${this.page}`).then(res=>{
					this.total = res.total,
					this.good_rate = res.good_rate,
					console.log(callback,refresh)
					this.list = !refresh? [...this.list,...res.list] :[...res.list]
				})
				if(typeof callback ==="function"){
					callback(true)
				}
			}
		},
		// 监听下拉刷新
		onPullDownRefresh(){
			console.log("下拉刷新")
			uni.stopPullDownRefresh()
		},
		// 筛选数据
		filters:{
			formatime(value){
				return $T.gettime(value);
			},
			rating(value){
				if(value===3){
					return "中评"
				}else if(value>3){
					return "好评"
				}else{
					return "差评"
				}
			}
		},
		// 页面渲染获取页面传染的 id
		onLoad(e) {
			this.dataIndex= e.id
			this.__init()
			console.log(e.id)
		}
	}
</script>

<style>
.cate-item{
	background: #FFEBEC;
	color: #7B6D6C;
	border-color: #F4E0E1;
}
.cate-item.active{
	background: #FF6B01;
	color: #FFFFFF;
	border-color: #DE7232;
}
</style>
