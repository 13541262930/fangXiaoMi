<template>
	<view>
		<!-- 排序 -->
		<view class="d-flex border-bottom a-center j-center animated fadeIn faster position-fixed top-0 left-0 right-0 bg-white" style="height: 100upx;z-index: 100;" >
			<view class="flex-1 d-flex a-center j-center font-md"  v-for="(item,index) in screen.list" :key="index" @tap="changeScrren(index)">
				<text  :class="screen.currentindex === index ? 'main-text-color':'text-muted'">{{item.name}} </text>
				<view >
					<view class="iconfont icon-paixu-shengxu line-h0 " :class="item.status==1?'main-text-color':'text-light-muted'">
						
					</view>
					<view class="iconfont icon-paixu-jiangxu line-h0" :class="item.status==2?'main-text-color':'text-light-muted'" >
						
					</view>
				</view>
				
			</view>

			<view class="flex-1 d-flex a-center  font-md">
				<text class="iconfont  mx-2" style="font-size: 20px;"  :class="!isColum? 'icon-pailie1':'icon-gonggepailie'"   @click="changeCloum"></text>
				
				<text class="main-text-color mx-2" @tap="showDrawer">筛选 </text>
			</view>
			<!-- 右侧抽屉 -->
				<uni-drawer :visible="showRigth" mode="right" @close="showRigth=false">
					<card headTitle="服务" :headBorderBottom="false" :headtitleweight="false">
						<!-- 单选按钮 -->
						<zmradio-group :lable="lable" :selected.sync = 'lable.selected'></zmradio-group>
					</card>
					<!-- <card headTitle="服务" :headBorderBottom="false" :headtitleweight="false">
						
						<zmradio-group :lable="lable" :selected.sync = 'lable.selected'></zmradio-group>
					</card> -->
					<view class="d-flex position-fixed bottom-0 right-0 w-100">
						<view @click="confirm" class="flex-1 main-bg-hover-color  font-md py-2 text-center border-top border-light-secondary" hover-class="main-bg-hover-color">
							确定
						</view>
						<view class="flex-1 font-md py-2 text-center" hover-class="main-bg-hover-color">
							重置
						</view>
					</view>
				</uni-drawer>
		</view>
		<view style="height: 100rpx;">
			
		</view>
		<!-- 列表 -->
		<view   style="display: flex;flex-wrap: wrap;flex-direction:row;width: 730upx;margin: 10upx;">
			<view v-for="(item,index) in list" :key="index"    @click="openDetail(item)">
			<view v-if="isColum" class="row p-2 border-bottom border-light-secondary" style="width: 730upx;background: #FFFFFF;">
				<view class="span24-6">
					<image :src="item.titlepic" mode="widthFix" class="w-100"></image>
				</view>
				<view class="span24-14 px-2 flex-column">
					<view class="font-md font-weight">
						{{item.title}}
					</view>
					<view class="font-md text-light-muted line-h-md">
						{{item.desc}}
					</view>
					<price>{{item.pprice}}</price>
					<view class="font-sm text-light-muted">
						{{item.comment_num}}条评论 {{item.good_num}}满意
					</view>
				</view>
			</view>
			<view v-else style="width: 345upx; margin: 10upx ;border-radius: 10px;background: #FFFFFF;">
				<image :src="item.titlepic"    style="width: 320upx;height: 300upx;border-radius: 10px"></image>
				<view class=" m-2 flex-column">
					<view class="font-md font-weight">
						{{item.title}}
					</view>
					<view class="font-md text-light-muted line-h-md">
						{{item.desc}}
					</view>
					<price>{{item.pprice}}</price>
					<view class="font-sm text-light-muted">
						{{item.comment_num}}条评论 {{item.good_num}}满意
					</view>
				</view>
			</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	let data=
	[
		{
			title:"无线蓝牙耳机",
			titlepic:"../../static/images/demo/cate_03.png",
			desc:"雅致简约/雅致简约/雅致简约/雅致简约/雅致简约",
			pprice:100,
			comment_num:1300,
			good_num:"98%"
		},
		{
			title:"无线蓝牙耳机",
			titlepic:"../../static/images/demo/cate_03.png",
			desc:"雅致简约/雅致简约/雅致简约/雅致简约/雅致简约",
			pprice:100,
			comment_num:1300,
			good_num:"98%"
		},
		{
			title:"无线蓝牙耳机",
			titlepic:"../../static/images/demo/cate_03.png",
			desc:"雅致简约/雅致简约/雅致简约/雅致简约/雅致简约",
			pprice:100,
			comment_num:1300,
			good_num:"98%"
		},
		{
			title:"无线蓝牙耳机",
			titlepic:"../../static/images/demo/cate_03.png",
			desc:"雅致简约/雅致简约/雅致简约/雅致简约/雅致简约",
			pprice:100,
			comment_num:1300,
			good_num:"98%"
		},
		{
			title:"无线蓝牙耳机",
			titlepic:"../../static/images/demo/cate_03.png",
			desc:"雅致简约/雅致简约/雅致简约/雅致简约/雅致简约",
			pprice:100,
			comment_num:1300,
			good_num:"98%"
		},
		{
			title:"无线蓝牙耳机",
			titlepic:"../../static/images/demo/cate_03.png",
			desc:"雅致简约/雅致简约/雅致简约/雅致简约/雅致简约",
			pprice:100,
			comment_num:1300,
			good_num:"98%"
		}
	]
	import uniDrawer from "@/components/uni-ui/uni-drawer/uni-drawer.vue"
	import card from "@/components/common/card.vue"
	import zmradioGroup from "@/components/common/radio-group.vue"
	import price from "../../components/common/price.vue"
	export default {
		data() {
			return {
				// 下页url
				nextPage:"",
				// 排序
				paiList:[
					"click_num",
					"sold_num",
					"shop_price"
				],
				ordering:"is_index",
				// 搜索页面传过来的关键字
				keyword:"",
				// 是否显示右侧抽屉
				showRigth:false,
				// 商品列表
				list:[],
				screen:{
					currentindex:0,
					list:[
						{"name":"综合","status":1,"key":""},
						{"name":"销量","status":0,"key":""},
						{"name":"价格","status":0,"key":""}
					]
				},
				lable:{
					selected:0,
					list:[
						{"name":"选项一"},
						{"name":"选项二"},
						{"name":"选项三"}
					]
				},
				dataId:"",
				isColum:true
			}
		},
		onLoad(e) {
			this.keyword = e.keyword
			if(e.id){
				this.dataId = e.id
			}
			this.getData()
			
		},
		// 上拉加载更多
		onReachBottom(){
			// 上拉加载
		},
		methods: {
			changeCloum(){
				this.isColum = !this.isColum
			},
			zuzhiData(res){
				// {
				// 	title:"无线蓝牙耳机",
				// 	titlepic:"../../static/images/demo/cate_03.png",
				// 	desc:"雅致简约/雅致简约/雅致简约/雅致简约/雅致简约",
				// 	pprice:100,
				// 	comment_num:1300,
				// 	good_num:"98%"
				// }
				res.map(v=>{
					this.list.push({
							title:v.name,
							titlepic:v.goods_front_image,
							desc:v.goods_brief,
							pprice:100,
							comment_num:1300,
							good_num:"98%"
					})
				})
			},
			// 组织数据
			getData(callback){
				this.list = []
				console.log(this.ordering)
				this.$R.get("/goods/goodslist/?page_size=6",{ordering:this.ordering,id:this.dataId}).then(res=>{
					this.zuzhiData(res.results)
					this.nextPage = res.next
					if(typeof callback ==="function"){
						callback()
					}
				})
			},

			// 显示抽屉
			showDrawer(){
				this.showRigth = true
				// 记录旧的值
				let old = this.lable.selected
			},
			changeScrren(index){
				// this.currentindex = index
				let oldindex = this.screen.currentindex
				let olditem = this.screen.list[oldindex]
				if(oldindex === index){
					if(olditem.status ===1){
						olditem.status = 2
						 this.ordering ="-"+this.paiList[oldindex]
					}else{
						olditem.status = 1
						this.ordering = this.paiList[oldindex]
					}
					return this.getData()
				}
				let newitem = this.screen.list[index]
				// 移除旧激活状态
				olditem.status =0
				this.screen.currentindex =index
				this.ordering = this.paiList[index]
				// 增加新的状态
				newitem.status = 1
				// 再次加载数据
				this.getData()
			},
			confirm(){
			// 筛选获取数据
				this.getData()
				// 关闭抽屉
				this.showRigth = false
			}
		},
		onReachBottom() {
			if(this.nextPage!=="null" && this.nextPage){
				this.$R.request({url:this.nextPage,isurl:"url"}).then(res=>{
					this.nextPage = res.next
					this.zuzhiData(res.results)
				})
				
			}
		},
		onPullDownRefresh() {
			this.getData(()=>{
				uni.stopPullDownRefresh()
			})
			
		},
		computed:{
			options(){
				let obj = this.screen.list[this.screen.currentindex]
				let value = obj.status==1?"desc":"all"
				// 请求时把options 加入请求参数中
				return {
					[obj.key]:value
				}
			},
			price(){
				return true
			}
		},
		components:{
			uniDrawer,
			card,
			zmradioGroup,
			price
		}
	}
</script>

<style>
	page{
		background: #F4F4F4;
	}

</style>
