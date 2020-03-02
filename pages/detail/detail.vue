<template>
	<view>
		<view v-if="shoucang" class="d-flex flex-column position-fixed right-0 j-sb" style="background: #333333;width: 200upx;height: 200upx;z-index: 9999;top: 70px;">
			<view class="m-2 row" @click="goDaoZuo('index')">
				<view class="iconfont icon-jiating">
					
				</view>
				首页
			</view>
			<view class="m-2 row" @click="goDaoZuo('msg-list')">
				<view class="iconfont icon-xinxi">
				</view>
				消息通知
			</view>
			<view class="m-2 row" @click="goDaoZuo('like-goods')">
				<view class="iconfont icon-icon3">
					
				</view>
				收藏
			</view>
		</view>
		<!-- 轮播大图 -->
		<swiper-image :resdata="banners" height="750" preview></swiper-image>
		<!-- 基础详情 -->
		<base-infeo :detail="detail" :show-price="isShowArrts ? showprice.price : pageData.shop_price"></base-infeo>
		<!-- 商品滚动 -->
			<scroll-attrs :baseAttrs="baseAttrs" @show="show('parameter')"></scroll-attrs>
		<!-- 属性选择 -->
		<view class="p-2">
			<view class="rounded bordr bg-light-secondary">
				<uni-list-item v-if="isShowArrts" @click="show('attr')">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>{{ labetes }}</text>
					</view>
				</uni-list-item>
				<uni-list-item @click="show('express')">
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2 text-muted">
							<!-- 是否存在默认地址 -->
							<template v-if="1">
								<text class="main-text-color px-2">{{ diText }}</text>
							</template>
							<template v-else>
								<text class="main-text-color px-2">现配</text>
							</template>
						</text>
					</view>
				</uni-list-item>
				<uni-list-item exrawindth="10%" @click="show('service')">
					<view class="d-flex">
						<view class="font text-muted d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color j-center"></view>
							小米自营
						</view>
						<view class="font text-muted d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color j-center"></view>
							小米发货
						</view>
						<view class="font text-muted d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color j-center"></view>
							7天无理由退货
						</view>
					</view>
				</uni-list-item>
			</view>
		</view>
		<!-- 横向滚动评论 -->
		<scroll-comment :goods_id="detail.id" :comments="comments"></scroll-comment>
		<!-- 商品详情 -->
		<view class="py-4"><uPare className="uparse" :content="conText" @preview="preview" @navigate="navigate"></uPare></view>
		<!-- 热门推荐 -->
		<!-- <card headTitle="热门推荐" :headtitleweight="false"><commonlist :resdata="hotList"></commonlist></card> -->
		<!-- 底部操作条 -->
		<bottom-btn @show="show('attr')"   :isShou="isShou" @shouCangs="shouCangs"></bottom-btn>
		<!-- 底部弹出框 -->
		<!-- 属性选择 -->
		<comm-prpup :popupClass="popupClass.attr" @hide="hide">
			<view class="d-flex a-center" style="height: 275rpx;">
				<image :src="showprice.img" class="border rounded" style="width: 180upx;height: 180rpx;" mode="widthFix"></image>
				<view class="pl-2">
					<price priceSize="fon-lg" unitSize="font">{{ showprice.price }}</price>
					<text class="d-block">{{checkSku}}</text>
				</view>
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y="true" class="w-100" style="height: 660rpx;">
				<card :headTitle="item.title" headBorderBottom="false" v-for="(item, index) in lables" :key="index">
					<zmradio-group  @changeSku="changeSku()" :lable="item" :index="index"  :selected.sync="item.selected"></zmradio-group>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<number-box :min="1" :max="showprice.maxShop" value=1 @change="num = $event"></number-box>
				</view>
			</scroll-view>
			<!-- 按钮 -->
			<view
				class="main-bg-color text-white font-md d-flex a-center j-center  "
				style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;"
				hover-class="main-bg-hover-color"
				@tap.stop="addCart"
			>
				加入购车
			</view>
		</comm-prpup>
		<!-- 收货地址 -->
		<comm-prpup :popupClass="popupClass.express" @hide="hide">
			<view style="height: 100rpx;" class="d-flex font-md a-center j-center border-bottom border-light-secondary">收货地址</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y="true" class="w-100" style="height: 835rpx;">
				<uni-list-item v-for="(item, index) in diZhiList" :key="index" @click="selectedDi(item)">
					<view class="iconfont icon-dingwei font-weight font-md">{{ item.name }}</view>
					<view class="font text-light-muted">{{ item.path }}{{ item.detaipath }}</view>
				</uni-list-item>
			</scroll-view>
			<!-- 按钮 -->
			<view
				class="main-bg-color text-white font-md d-flex a-center j-center  "
				style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;"
				hover-class="main-bg-hover-color"
				@tap.stop="openCreatePath()"
			>
				选择新的地址
			</view>
		</comm-prpup>
		<!-- 参数列表弹窗 -->
		<comm-prpup :popupClass="popupClass.parameter" @hide="hide">
			<view style="height: 100rpx;" class="d-flex font-md a-center j-center border-bottom border-light-secondary">关键参数</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y="true" class="w-100" style="height: 835rpx;">
				后置摄像头：111111
			</scroll-view>
			<!-- 按钮 -->
			<view
				class="main-bg-color text-white font-md d-flex a-center j-center  "
				style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;"
				hover-class="main-bg-hover-color"
				@tap.stop="hide('parameter')"
			>
				完成
			</view>
		</comm-prpup>
		<!-- 服务说明 -->
		<comm-prpup :popupClass="popupClass.service" @hide="hide">
			<view style="height: 100rpx;" class="d-flex font-md a-center j-center border-bottom border-light-secondary">服务说明</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y="true" class="w-100" style="height: 835rpx;">
				<view class="py-1" v-for="(item, index) in serviceText" :key="index">
					<view class="d-flex a-center"><view class="iconfont icon-finish main-text-color mr-1">{{ item.name }}</view></view>

					<text v-if="item.text" class="text-light-muted font pl-4">{{ item.text }}</text>
				</view>
			</scroll-view>
			<!-- 按钮 -->
			<view
				class="main-bg-color text-white font-md d-flex a-center j-center  "
				style="height: 100rpx;margin-left: -30rpx;margin-right: -30rpx;"
				hover-class="main-bg-hover-color"
				@tap.stop="hide('service')"
			>
				确定
			</view>
		</comm-prpup>
		<!-- 左上按钮显示内容 -->
		
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import baseInfeo from '@/components/detail/base-info.vue';
import scrollAttrs from '@/components/detail/scroll-attrs.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
import scrollComment from '@/components/detail/scroll-comment.vue';
import uPare from '@/components/uni-ui/uParse/src/wxParse.vue';
import card from '@/components/common/card.vue';
import commonlist from '@/components/common/commonlist.vue';
import bottomBtn from '@/components/detail/bottom-btn.vue';
import commPrpup from '@/components/common/comm-prpup.vue';
import price from '../../components/common/price.vue';
import zmradioGroup from '../../components/common/radio-group.vue';
import numberBox from '../../components/uni-ui/uni-number-box/uni-number-box.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
// 富文本
export default {
	components: {
		swiperImage,
		baseInfeo,
		scrollAttrs,
		uniListItem,
		scrollComment,
		uPare,
		commonlist,
		card,
		bottomBtn,
		commPrpup,
		price,
		zmradioGroup,
		numberBox
	},
	data() {
		return {
			// 收藏
			isShou:false,
			// 左上列表
			shoucang:false,
			// 服务列表
			serviceText:[
				{name:"小米自营",text:""},
				{name:"小米发货",text:"由小米发货"},
				{name:"7天无理由退货",text:""},
				{name:'运费说明',text:"有小米第三份免运费"},
				{name:"7天价格保护",text:""}
			],
			num:1,//商品数量
			// 收货地址
			diText:this.getDefaultPath,
			headList:[],//头部选项
			labIndex:0,//点击序列
			// 规格参数列表
			labetes:[],
			// 规格列表
			lables: [
				// {
				// 	title:"套餐",
				// 	selected:0,
				// 	list:[
				// 		{"name":"套餐一"},
				// 		{"name":"套餐二"},
				// 		{"name":"套餐三"}
				// 	]
				// }
			],
			popupClass: {
				attr: 'none',
				express: 'none',
				service: 'none',
				parameter:'none'
			},
			comments: [
				// {"userpic":"../../static/images/demo/demo6.jpg","username":"初棉","create_time":"2019-08-19","goods_num":123,"context":"评论内容",imglist:[
				// 	"../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg"
				// ]},
				// {"userpic":"../../static/images/demo/demo6.jpg","username":"初棉","create_time":"2019-08-19","goods_num":123,"context":"评论内容",imglist:[
				// 	"../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg"
				// ]},{"userpic":"../../static/images/demo/demo6.jpg","username":"初棉","create_time":"2019-08-19","goods_num":123,"context":"评论内容",imglist:[
				// 	"../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg"
				// ]}
			],
			banners: [],
			detail: {},
			baseAttrs: [],
			conText: "",
			hotList: [],
			selectes: {},
			pageData:{},
			detailId:"",
			isShowArrts:true
		};
	},
	// 监听页面返回事件
	onBackPress() {
		for (let key in this.popupClass) {
			if (this.popupClass[key] !== 'none') {
				this.hide(key);
				return true;
			}
		}
	},

	onLoad(e) {
		this.$view.hide()
		if (e.detail) {
			console.log(e.detail)
			this.detailId = e.detail
			this.__init(JSON.parse(e.detail))
			this.getComments(JSON.parse(e.detail))
			this.$R.get("/goods/userfavs/"+e.detail+"/").then(res=>{
				console.log(res)
				if(res.detail!=="未找到。"){
					this.isShou=true
				}
			})
		}
	},
	onReady() {
		
	},
	onNavigationBarButtonTap(e) {
		if(e.index==0){
			this.shoucang=!this.shoucang
		}
		console.log(e)
	},
	mounted: {
		context(){
			return this.conText
		}
	},
	computed: {
		...mapState({
			diZhiList:state=>state.path.list,
			loginStatus:state=>state.user.loginStatus
		}),
		
		// // 计算默认收货地址
		// diCompouted(){
		// 	this.getDefaultPath()
		// },
		// 获取选中item
		showprice(){
			// 拼接数组
			let labtext = []
			let labList = this.pingData()
			for(let i =0;i<this.lables.length;i++){
				labtext.push(this.lables[i].list[this.lables[i].selected].name)
			};
			this.labetes = labtext.join(" ")
			for(let i=0;i<labList.length;i++){
				let item = this.pageData.goods_sku
				if(labtext.join("")===labList[i]){
					console.log(JSON.stringify(item[i]))
					return {
						id:item[i].id,
						price:item[i].shop_price,
						maxShop:item[i].goods_num,
						img:item[i].image
						}
				}else{
					
				}
			}
		}
	},
	methods: {
		...mapMutations(['addGoodsToCart']),
		__init(item) {
			this.$R.get('/goods/goods/' + item).then(res=>{
				
				this.pageData = res
				if(res.goods_sku.length<=0){
					this.isShowArrts=false
				}
				this.banners = res.images.map(v=>{
					return {
						image: v.image
					}
				});
				// 调用获取默认收货地址
				this.getDefaultPath()
				// 初始化基本信息
				this.detail = {
					title:res.name,
					desc:res.goods_brief
				}
				// 商品详情
				this.conText =res.goods_desc;
				// 修改页面标题
				uni.setNavigationBarTitle({
					title: res.name
				});
				this.organization(res.goods_sku)
			});
		},
		// 获取评论内容
		getComments(id){
			this.$R.get("/goods/comment/",{goods:id}).then(res=>{
				console.log(res)
				// {"userpic":"../../static/images/demo/demo6.jpg","username":"初棉","create_time":"2019-08-19","goods_num":123,"context":"评论内容",imglist:[
				// 	"../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg","../../static/images/demo/demo6.jpg"
				// ]}
				this.comments = res.results.map(v=>{
					return {
						userpic:v.image,
						username:v.user,
						create_time:v.pub_time,
						context:v.body,
						goods_num:1,
						imglist:[
							v.image
						]
					}
				})
			})
		},
		// 点击改变有的规格属性
		changeSku(index1,index2){
			// 选中序号			
			let data = this.pageData.goods_sku
			console.log(JSON.stringify(data))
			let list = []
			for(let i=0;i<=index1;i++){
				let index = index2
				let item = this.lables[i].list
				list.push(item[index].name)
			}
			let lablist = this.pingData()
			
			let labs=[]
			for(let i=0;i<lablist.length;i++){
				if(lablist[i].indexOf(list.join(""))!==-1){
					labs.push(data[i])
				}
			}
			console.log(JSON.stringify(labs),JSON.stringify(lablist))
			this.organization(labs,index1)
		},
		// 组织数据方法
		organization(data,index){
			// 获取规格字段列表
			var labels = []
			let list_list=[]
			 data.map((v,vi)=>{
				let y = v.sku_specification
				for (let i = 0; i < y.length; i++) {
						labels.push({
								title:y[i].spec.name,
								selected:0,
								list:[]
							})
							if(list_list.indexOf(y[i].option.value)==-1){
								list_list.push(y[i].option.value)
								labels[i].list.push({
									name:y[i].option.value
								})
							}
				}
			})
			for (let i = labels.length-1;i >= 0 ;i--) {
				if(labels[i].list ==""||labels[i].list==null){
					labels.splice(i,1)
				}
			    }
			if(index>=0){
				let length = labels.length
				let headList = this.lables.slice(0,index+1)
				let endlist = labels.slice(index+1,length+1)
				this.lables=[...headList,...endlist]
			}else{
				this.headList = labels[0]
				this.lables = labels
				this.changeSku(0,0)
			}
			
		},
		// 选择收货地址
		selectedDi(item){
			console.log(item)
			this.hide('express')
			this.diText = item.path
		},
		// 获取默认收货地址
		getDefaultPath(){
			for(let i=0;i<this.diZhiList.length;i++){
				if(this.diZhiList[i].isdefult){
					this.diText = this.diZhiList[i].path
				}
			}
		},
		openCreatePath() {
			uni.navigateTo({
				url: '../user-path-edit/user-path-edit'
			});
			this.hide('express');
		},
		// 拼接数据
		pingData(){
			let labList = []
			let item = this.pageData.goods_sku
			for(let i=0;i<item.length;i++){
				let list = []
				let it = item[i].sku_specification
				for(let y=0;y<it.length;y++){
					list.push(it[y].option.value)
				}
				labList.push(list.join(""))
			}
			return labList
		},
		addCart() {
			if(this.loginStatus){
				// 组织数据
				let goods = {};
				goods["id"] = this.detailId
				goods['selected'] = this.showprice.id
				goods['title'] = this.pageData.name
				goods['pprice'] = this.showprice.price;
				goods['num'] =this.num;
				goods['cover'] = this.showprice.img;
				goods['maxnum'] = this.showprice.maxShop;
				goods['checked'] = false;
				goods['attrs'] = this.lables;
				console.log(JSON.stringify(goods))
				// 加入购物车
				this.addGoodsToCart(goods);
				// 隐藏弹出框
				this.hide('attr');
				// 成功提示
				uni.showToast({
					title: '成功加入购物车'
				});
			}else{
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
		},
		show(key) {
			this.popupClass[key] = 'show';
		},
		hide(key) {
			this.popupClass[key] = 'hide';
			setTimeout(() => {
				this.popupClass[key] = 'none';
			}, 200);
		},
		goDaoZuo(path){
		
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			
		},
		// 收藏获取这取消收藏
		shouCangs(){
			console.log(this.isShou)
			if(this.isShou){
				this.$R.delete("/goods/userfavs/"+this.detailId+"/").then(res=>{
					console.log(res)
						this.isShou = false
						uni.showToast({
							title:"取消收藏",
							icon:"none"
						})
					
				})
			}else{
				this.$R.post("/goods/userfavs/",{
					goods:this.detailId
				}).then(res=>{
						this.isShou = true
						uni.showToast({
							title:"收藏成功",
							icon:"none"
						})
					
					
				})
			}
			
			
		}
		
	}
};
</script>

<style>
	.uparse .p{ padding: 0!important; }
	.uparse view,.uparse uni-view{ line-height: 0!important; }
</style>
