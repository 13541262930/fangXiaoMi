<template>
	<view>

		<!-- #ifdef MP -->
		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-xiaoxi"></text>
			</view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;">
				<text class="iconfont icon-sousuo mx-2"></text>
				智能积木
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center">
				<text class="iconfont icon-richscan_icon"></text>
			</view>
		</view>
		<!-- #endif -->

		<!-- <swiper :duration="200" :style="'height:' + scrollH + 'px;'" @change="onChangeTab"> -->
		<!-- <swiper-item> -->
		<!-- <scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'" @scrolltolower="loadmore()"> -->

		<view>

			<!-- 轮播图组件 -->
			<swiperImage :resdata="swipers"></swiperImage>

			<!-- 全局分割线 -->
			<divder></divder>
			<!-- 首页分类 -->
			<indexClass :resdata="indexnavs"></indexClass>



			<!-- 全局分割线 -->





			<!-- 精品商品 -->

			<commons :resdata="threeAdv"></commons>
			<!-- 全局分割线 -->
			<divder></divder>
			<!-- 公共卡片 -->
			<sumadv :resdata="oneAdv"></sumadv>


			<!-- 公共列表组件 -->
			<commonList :resdata="commonDatas"></commonList>

		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		<!-- </scroll-view> -->
		<!-- </swiper-item> -->
		<!-- </swiper> -->

	</view>
</template>
<script>
	import commons from "../../components/common/commons.vue"
	import swiperImage from '@/components/index/swiper-image.vue';
	import sumadv from "../../components/index/sumadv.vue"
	import indexClass from '@/components/index/index-class.vue';
	import threeAdv from '@/components/index/three-adv.vue';
	import commonList from '@/components/common/commonlist.vue';
	import {mapGetters} from "vuex"
	export default {
		components: {
			swiperImage,
			indexClass,
			threeAdv,
			commonList,
			sumadv,
			commons
		},
		data() {
			return {
				title: 'Hello',
				loadMoreText: "加载中",
				showLoadMore: false,
				show: false,
				nextPage: "",
				swipers: [],
				indexnavs: [],
				oneAdv: {},
				threeAdv: [],
				commonDatas: []

			};
		},
		created() {
			// 初始化数据
			this.__init()
			// this.createtab()
			
			// 初始化记录tab选项
			if (!this.$store.state.user.loginStatus) {
				uni.setStorageSync('tabBar', 'index')
			}
		},
		onShow() {
			if(this.getGoods>0){
				// this.$update(this.getGoods)
			}
		},
		computed:{
			...mapGetters(['getGoods'])
		},
		methods: {
			createtab(getGoods){
				this.$view.draw([
						{tag:'input',id:'input',inputStyles:{fonstSize:'10px',borderColor:"#FF0000",borderRadius:"15px"} , position:{top:'0px',left:'0px',width:'100%',height:'100%'}}
						]);
				this.$view.drawText(getGoods, {top:'0px',left:'0px',width:'100%',height:'100%'}, {size:'10px',color:'#FF0000'},"text");
			},
			// 初始化数据函数
			__init() {
				// 获取轮播图数据
				this.$R.get("/goods/banners/").then((res) => {
					console.log(JSON.stringify(res))
					if (res) {
						this.swipers = res
					}
				})
				// 获取分类图
				this.$R.get("/goods/indextab/").then((res) => {
					if (res) {
						this.indexnavs = res
					}
				})
				// 获取首页广告
				this.$R.get("/goods/indexAd/").then((res) => {
					if (res) {
						this.oneAdv = res
					}

				})

				// 获取精品商品
				this.$R.get("/goods/indexgoods/").then((res) => {

					console.log(JSON.stringify(res))
					if (res) {
						this.threeAdv = res
					}
				})
				// 获取商品列表
				this.$R.get("/goods/goodslist/").then((res) => {
					console.log(JSON.stringify(res))
					if (res) {
						this.commonDatas = res.results
					}
					if (res.next != null || res.next) {
						this.nextPage = res.next
					}
				})
				
			},
			// 跳转搜索商品页
			onNavigationBarSearchInputClicked() {
				uni.navigateTo({
					url: "../search-list/search-list"
				})
			},
			onReachBottom() {
				if (this.nextPage !== "null" && this.nextPage) {
					this.$R.request({
						url: this.nextPage,
						isurl: "url"
					}).then(res => {
						console.log(JSON.stringify(res))
						this.nextPage = res.next
						this.commonDatas = [...this.commonDatas, ...this.commonDatas, ...this.commonDatas]
					})
				}
			}
			
		}
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
