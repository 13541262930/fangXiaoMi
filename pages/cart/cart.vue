<template>
	<view class="animated fadeIn faster" style="background: #F5F5F5;">
		<loading-plus v-if="beforeReady"></loading-plus>
		<uni-nav-bar   :right-text="isedit?'完成':'编辑'" :fixed="true" title="购物车" :statusBar="true" :shadow="false" @click-right="isedit=!isedit"></uni-nav-bar>
		<!-- 购物车为空 -->
		<view class="py-5 d-flex a-center j-center bg-white" v-if="disableSelectAll">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size: 50upx;">
				</view>
				<text class="text-light-muted mx-2">购物车还是为空</text>
			<view class="border border-light-secondary rounded" hover-class="bg-light-secondary">
				去逛逛
			</view>
		</view>
		<!-- 购物车商城列表 -->
		<view class="bg-white px-2" v-else>
			<view class="d-flex a-center  border-bottom border-light-secondary"
			v-for="(item,index) in list" :key="index"  @longpress="longPre(item)"
			>
				<label @click.stop="selectItem(index)" class="radio  d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" >
					<radio :checked="item.checked" value="1"  style="transform:scale(0.7)" color="#FD6801" />
				</label>
				<image :src="item.cover" @tap.stop="openDeatil(index)" style="width: 150upx;height: 150upx;"
				 class="bordr rounded p-2 border-light-secondary flex-shrink"
				 mode="widthFix"></image>
				 <!-- 右边部分 -->
				 <view class="flex-1 d-flex flex-column p-1">
				 	<view class="text-dark" style="font-size: 35upx;">
				 		{{item.title}}
				 	</view>
					<!-- 规格属性 -->
					<!-- <view class="d-flex text-light-muted mb-1 " v-if="!isedit">
						<text class="mr-1" v-for="(attr,attrindex) in item.attrs" :key="attrindex">{{attr.list[attr.selected].name}}</text>
					</view> -->
				<!-- 	<view class="d-flex text-light-muted mb-1  p-1 bg-light-secondary mb-2 rounded"
					 @tap.stop="doShowPopup(index)" 
					> -->
					<view class="d-flex text-light-muted mb-1  p-1 bg-light-secondary mb-2 rounded"
					>
						<text class="mr-1" v-for="(attr,attrindex) in item.attrs" :key="attrindex">{{attr.list[attr.selected].name}}</text>
						<view class="iconfont icon-bottom font ml-auto">
							
						</view>
					</view>
					<view class="mt-auto d-flex j-sb a-center pb-2">
						<price>{{item.pprice}}</price>
						<view class="a-self-end">
							<nui-number-box :min="item.minnum" :value="item.num" :max="item.maxnum" @change.stop="changeNums($event,item,index)"></nui-number-box>
						</view>
					</view>
				 </view>
			</view>
		</view>
		<!-- 属性选择 -->
		<comm-prpup :popupClass="popupShow" @hide = "doHidePopup" style="z-index: 9999;margin-bottom: 50px;">
			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="../../static/images/demo/list/1.jpg" class="border rounded" style="width: 180upx;height: 180rpx;" mode="widthFix"></image>
				<view class="pl-2">
					<price priceSize="fon-lg" unitSize="font">{{popupData.pprice}}</price>
					<view class="d-block">
						<text class="mr-1"  v-for="(item,index) in popupData.attrs" :key="index"> {{ item.list[item.selected].name }} </text>
					</view>
				</view>
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y="true"  class="w-100" style="height: 660rpx;">
				<card :headTitle="item.title" headBorderBottom="false" v-for="(item,index) in popupData.attrs" :key="index">
						<zmradio-group @changeSku="changeSku()" :lable="item"  :index="index"  :selected.sync = "item.selected"></zmradio-group>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<number-box :min="1" :value="popupData.num" @change = "popupData.num = $event"></number-box>
				</view>
			</scroll-view>
			<!-- 按钮 -->				
			<view class="w-100 d-flex j-center">
				<view class="main-bg-color text-white font-md d-flex a-center j-center  " style="height: 40px;position: absolute;bottom: 80px;width: 70%;border-radius: 30px;" hover-class="main-bg-hover-color" @tap.stop="doHidePopup">
					确定
				</view>
			</view>
			
		</comm-prpup>
		<recommended :resdata="hotList"></recommended>
		

		<!-- 站位 -->
		<view style="height: 100upx">
			
		</view>
		<!-- 合计 -->
		<view v-if="loginStatus&&getGoods>0" class="d-flex a-center bg-white row position-fixed left-0 right-0   border-light-secondary a-stretch" style="height: 100upx;z-index:99;background: #F0F0F0;bottom: 0;">
			<label class="radio  d-flex a-center j-center flex-shrink" style="width: 120upx;height: 120upx;" @click="doSelectedAll" >
				<radio :checked="checkAll" value="1" :disabled="disableSelectAll" color="#FD6801" /><text></text>
			</label>
			<template v-if="!isedit">
				<view class="flex-1 d-flex a-center j-center font-md" style="height: 100%;">
					合计<price>{{ totalPrice }}</price>
				</view>
				<view @tap="orderConfirm" class="flex-1 d-flex a-center j-center main-bg-color text-white font-md " hover-class="main-bg-hover-color" style="height: 100%;">
					结算
				</view>
			</template>
			<template v-else>
				<view class="flex-1 d-flex a-center j-center main-bg-color text-white font-md" style="height: 100%;">
					移入收藏
				</view>
				<view class="flex-1 d-flex a-center j-center bg-danger text-white font-md " @click="deletGoods()" hover-class="main-bg-hover-color" style="height: 100%;">
					删除
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	// import tabBars from "../../components/common/tabBars.vue"
	// import loading from "@/components/common/minxin/loading.js"
	import zmradioGroup from "../../components/common/radio-group.vue"
	import numberBox from "../../components/uni-ui/uni-number-box/uni-number-box.vue"
	import card from "@/components/common/card.vue"
	import commPrpup from "@/components/common/comm-prpup.vue"
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import price from "@/components/common/price.vue"
	import nuiNumberBox from "../../components/uni-ui/uni-number-box/uni-number-box.vue"
	import recommended from "../../components/common/recommended.vue"
	import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
	export default {
		// mixins:[loading],
		components:{
			uniNavBar,price,nuiNumberBox,commPrpup,numberBox,card,zmradioGroup,recommended
		},
		data() {
			return {
				// 是否弹出层
				isModel:false,
				isedit:false,
				lables:[],
				hotList:[

							]
			}
		},

		onShow() {
			// this.$update(this.getGoods)
			this.isedit = false
			this.unSelectAll()
			if(this.loginStatus){
				this.changeBeforeReady()
			}else{
				uni.navigateTo({
					url:"../login/login"
				})
			}
		},
		methods: {
			...mapMutations(['selectItem','changeBeforeReady','changeNum','change','longDel','unSelectAll']),
			...mapActions(['doSelectedAll','doDelGoods','doShowPopup','doHidePopup']),
			deletGoods(){
				this.isedit =false
				this.doDelGoods()
			},
			// 长按删除
			longPre(item){
				console.log(item)
				uni.showModal({
					content:"你确定删除？",
					success:(res)=>{
						if(res.confirm){
							this.longDel(item)
						}
					}
				})
				
			},
			// 获取猜你喜欢
			getCaiLike(){
				this.$R.get("/goods/guessyoulike/").then(res=>{
					console.log(res)
					res.results.map(v=>{
						this.hotList.push({
									id:v.id,
									goods_front_image: v.goods_front_image,
									name: v.name,
									goods_brief: v.goods_brief,
									market_price: v.market_price,
									shop_price: v.shop_price
						})
					})
				})
			},
			// 拼接数据
			pingData(){
				let labList = []
				let item = this.popupData.attrs
				console.log(JSON.stringify(item))
				for(let i=0;i<item.length;i++){
					labList.push(item[i].list[item.selected])
				}
				return labList
			},
			// 点击改变有的规格属性
			changeSku(index1,index2){
				// 选中序号			
				let data = this.popupData.attrs
				let list = []
				for(let i=0;i<=index1;i++){
					let index = index2
					let item = this.popupData.attrs[i].list
					list.push(item[index].name)
				}
				let lablist = this.pingData()
				let labs=[]
				for(let i=0;i<lablist.length;i++){
					if(lablist[i].indexOf(list.join(""))!==-1){
						labs.push(data[i])
					}
				}
				console.log(JSON.stringify(labs))
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
					let headList = this.popupData.attrs.slice(0,index+1)
					let endlist = labels.slice(index+1,length+1)
					this.popupData.attrs=[...headList,...endlist]
				}else{
					this.headList = labels[0]
					this.popupData.attrs = labels
					this.changeSku(0,0)
				}
			}
			,
			changeNums(e,item,index){
				console.log(item)
				this.changeNum({num:e,item:item})
			},
			orderConfirm(){
				if(this.totalPrice>0){
					uni.navigateTo({
						url:"../order-confirm/order-confirm"
					})
				}else{
					uni.showToast({
						title:"请选择商品",
						icon:"none"
					})
				}
				
			},
			openDeatil(index){
				uni.navigateTo({
					url:"/pages/detail/detail?detail="+this.list[index].id
				})
			}
		},
		
		computed:{
			showprice(){
				// 拼接数组
				let labtext = []
				// let labList = this.pingData()
				// for(let i =0;i<this.lables.length;i++){
				// 	labtext.push(this.lables[i].list[this.lables[i].selected].name)
				// };
				// this.labetes = labtext.join(" ")
				// for(let i=0;i<labList.length;i++){
				// 	let item = this.pageData.goods_sku
				// 	if(labtext.join("")===labList[i]){
				// 		console.log(JSON.stringify(item[i]))
				// 		return {
				// 			id:item[i].id,
				// 			price:item[i].shop_price,
				// 			maxShop:item[i].goods_num,
				// 			img:item[i].image
				// 			}
				// 	}else{
						
				// 	} 
				// }
				
				
			},
			...mapState({
				list:state=>state.cart.data.list,
				popupShow:state=>state.cart.data.popupShow,
				loginStatus:state=>state.user.loginStatus,
				beforeReady:state=>state.user.beforeReady
			}),
			...mapGetters(['checkAll','totalPrice','disableSelectAll','popupData','getGoods'])
		},
		onLoad(){
			this.getCaiLike()
		}
	}
</script>

<style>

</style>
