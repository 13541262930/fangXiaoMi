<template>
	<view style="background: #F5F5F5;height: 100%;" class="d-flex flex-column">
		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top">
			<view class="flex-1 d-flex a-center j-center py-2" @tap="changeIndex(index)" v-for="(item,index) in tabBars" :key="index" :class="tabIndex==index?'tabactive':''">
				{{item.name}}
			</view>
		</view>
		<scroll-view scroll-y="true" class="flex-1 " style="background: #F5F5F5;">
			<block v-for="(tab,tabindex) in tabBars" :key="tabindex">
				<!-- 订单列表 -->
				<view class="position-relative" v-show="tabIndex==tabindex" style="min-height: 440rpx;" >
					<template v-if="tab.list.length>0">
						<!-- 无订单显示的图片 -->
						<!-- <no-thing :icon="tab.nothing" :msg="tab.msg"></no-thing> -->
						<view class="p-3">
							<coupon v-for="(list,listindex) in tab.list" :key="listindex" :list="list" :index="index"></coupon>
						</view>
						
					</template>
					
					
					<!-- 订单列表 -->
					<!-- 头部 --> 
					<block v-for="(item,index) in tab.list" :key="index">
						<order-list :item="item" :index="index"></order-list>
					</block>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import noThing from "@/components/common/no-thing.vue"
	import coupon from "../../components/order-cupon/coupon.vue"
	export default {
		components:{
			noThing,coupon
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{name:"可用",nothing:"no_receiving",msg:"你还没有可用的优惠卷",
					list:[
						{
							title:"手机立减3000",
							start_time:"2019/10/10",
							end_time:"2019/11/20",
							price:"1000",
							desc:"满三千元使用",
							status:true,
							disabled:false
						},
						{
							title:"手机立减3000",
							start_time:"2019/10/10",
							end_time:"2019/11/20",
							price:"1000",
							desc:"满三千元使用",
							status:true,
							disabled:true
						}
					]},
					{name:"已失效",nothing:"no_comment",msg:"你还没有待付款订单4",
					list:[{
							title:"手机立减3000",
							start_time:"2019/10/10",
							end_time:"2019/11/20",
							price:"1000",
							desc:"满三千元使用",
							status:false,
							disabled:false
						},
						{
							title:"手机立减3000",
							start_time:"2019/10/10",
							end_time:"2019/11/20",
							price:"1000",
							desc:"满三千元使用",
							status:false,
							disabled:true
						}]}
				],
			}
		},
		methods: {
			changeIndex(index){
				this.tabIndex = index
			}
		}
	}
</script>

<style>
.tabactive{
	border-bottom: 5rpx solid #FD6801;
	color: #FD6801;
	margin-bottom: -5rpx;
}
</style>
