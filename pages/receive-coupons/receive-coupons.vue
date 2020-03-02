<template>
	<view>
		<view class="flex-column p-2">
			<view class="m-2 row" style="background: #F4E0E1;border-radius: 10px;" v-for="(item,index) in list" :key ="index">
				<!-- 左边 -->
				<view class="d-flex flex-column a-center j-center" style="width: 80%;">
					<view class="font-lg font-weight">
						{{ item.money_equivalent_value?item.money_equivalent_value:item.off_percent/10+" "+"折" }}
					</view>
					<view class="font font-weight a-center j-center">
						满{{ item.minimum_consume }}元可用
					</view> 
					<view class="font-sm text-light-muted a-center j-center">
						{{ item.name }}
					</view>
				</view>
				<!-- 右边 -->
				<view class="d-flex  a-center j-center flex-1" style="color: #FF3333;border-left: #FF3333 dashed 1px;margin: auto" @click="change(index,item.id)">
					<view class="font-lg" style="width: 20px">
						{{ item.show }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				nextPage:""
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.$R.get("/coupons/Coupon/").then(res=>{
					this.nextPage = res.next
					console.log(JSON.stringify(res))
					this.zhuZhi(res.results)
					
				})
			},
			zhuZhi(res){
				let list = res.map(v=>{
					v["show"]="领取"
					return v
				})
				this.list = [...this.list,...list]
			},
			change(index,id){
				this.$R.post("/coupons/CouponRecord/",{coupon:id}).then(res=>{
					console.log(res)
					this.list[index].show="使用"
				})
			}
		},
		onReachBottom() {
			if(this.nextPage!=null){
				this.$R.get(this.nextPage,{},"url").then(res=>{
					this.nextPage = res.next
					this.zhuZhi(res.results)
				})
			}
		}
	}
</script>

<style>

</style>
