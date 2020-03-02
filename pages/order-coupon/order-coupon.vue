<template>
	<view class="">
		<view class="row a-center j-sb position-fixed top-0" style="border-bottom: solid #F4F4F4 1px;z-index: 9999;width: 100%;height: 50px;">
			<view class="d-flex a-center j-center mx-4 my-2"  v-for="(item,index) in tabBars" :key="index" :class="tabIndex===index?'active':''" @click="changeIndex(index)">
				{{item.name}}
			</view>
		</view>
		
		<swiper @change="currentTab" :current="tabIndex" :style="'height:'+scrollH+'px'">
			<view class="" style="height: 50px;">
			
			</view>
			
			<swiper-item v-for="(item,index) in tabBars" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px'" class="d-flex flex-column" v-if="item.list.length>0">
				
					<coupon  :resdata="item.list" @change="change" :isClick="true" @langChange="langChange"></coupon>
					<view class="" style="height: 50px;">
					
					</view>
				</scroll-view>
				<view v-else style="background: #F4F4F4;">
					<no-thing :icon="item.nothing" :msg="item.msg"></no-thing>
					<view class="font d-flex a-center j-center p-2"  @click="openReceive()">
						<view class="d-flex a-center j-center" style="border-radius: 10px;border:solid #FFFFFF 1px;width: 100upx;">
							去看看
						</view>
					</view>
				</view>
			</swiper-item>
			
			
		</swiper>
		
	</view>
</template>

<script>
	import noThing from "@/components/common/no-thing.vue"
	import coupon from "../../components/my/coupon.vue"
	export default {
		components:{
			coupon,noThing
		},
		data() {
			return {
				scrollH:0,
				tabIndex:0,
				nextPage:"",
				tabBars:[
					{name:"未使用",nothing:"no_receiving",msg:"你还没有可使用的优惠卷",
					list:[

					]},
					{name:"已使用",nothing:"no_comment",msg:"你还没有已使用的优惠券",
					list:[
						
					]},
					{name:"已失效",nothing:"no_comment",msg:"你还没有已失效的优惠卷",
					list:[
						
					]}
				],
			}
		},
		onLoad() {
			this.getData()
			this.scrollH = uni.getSystemInfoSync().windowHeight
		},
		methods: {
			changeIndex(index){
				this.tabIndex = index
			},
			getData(){
				this.$R.get("/coupons/CouponRecord/",{status:this.tabIndex}).then(res=>{
					console.log(JSON.stringify(res))
					this.tabBars[this.tabIndex]["isFirst"]= true
					this.nextPage = res.next
					this.zhuZhiData(res.results)
				})
			},
			zhuZhiData(res){
				let list =  res.map(v=>{
					v["isShow"]=false
					if(this.tabIndex ===0){
						v['class']="可使用"
						
					}else if(this.tabIndex ===1){
						v['class']="已使用"
					}else{
						v['class']="已失效"
					}
					return v
				})
				this.tabBars[this.tabIndex].list =list
				console.log(list)
			},
			change(index){
				this.tabBars[this.tabIndex].list[index].isShow =  !this.tabBars[this.tabIndex].list[index].isShow 
			},
			langChange(index){
				uni.showModal({
					content:"确定要删除吗?",
					success:(res)=>{
						if(res.confirm){
							this.tabBars[this.tabIndex].list.splice(index,1)
							this.$R.post("",index).then(e=>{
								console.log(e)
							})
						}
					}
				})
			},
			currentTab(e){
				this.tabIndex = e.detail.current
			},
			openReceive(){
				uni.navigateTo({
					url:"../receive-coupons/receive-coupons"
				})
			}
		},
		watch:{
			tabIndex(){
				if(!this.tabBars[this.tabIndex].isFirst){
					this.getData()
				}
			}
		},
		onReachBottom() {
			if(this.nextPage!==null ){
				this.$R.get(this.nextPage,{},"url").then(res=>{
					this.nextPage = res.next
					this.zhuZhiData(res.results)
				})
			}
		}
	}
</script>

<style>
	.active{
		border-bottom:solid #F0AD4E 1px;color: #F0AD4E;
	}
</style>
