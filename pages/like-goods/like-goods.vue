<template>
	<view>
		<!-- 收藏列表 -->
		<like-list :list="list" :Radio="Radio"  @changeRadio="changeRadio"></like-list>
		<!-- 猜你喜欢 -->
		
		<!-- 底部按钮 -->
		<view class="position-fixed  w-100 row a-center j-center "  style="width: 100%;height: 100upx;justify-content:space-around;bottom: 20upx;" v-if="isShow">
			<view class="font-md">
				<label class="radio">
					<radio value="" @click="selects()"  /><text class="font-md">全选</text>
				</label>
			</view>
			<view class="row">
				<view class="iconfont icon-qingchu">
					
				</view>
				<view class="font-md mx-1">
					清理失效商品
				</view>
			</view>
			<view class="main-bg-color rounded a-center j-center d-flex font-md" style="width: 150upx;height: 80upx;">
				删除
			</view>
		</view>
	</view>
</template>

<script>
	import likeList from "../../components/like-goods/like-list.vue"
	export default {
		components:{
			likeList
		},
		created() {
			this.init()
		},
		data() {
			return {
				list:[
					
				],
				isShow:false,
				Radio:false,
				selected:false
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e)
			if(e.index===0){
				this.isShow=!this.isShow
				this.Radio = !this.Radio
			}
		},
		methods: {
			// 获取收藏列表
			init(){
				this.$R.get('/goods/userfavs/').then(res=>{
					console.log(JSON.stringify(res))
					for(let j=0;j<res.length;j++){
						let item = res[j].goods
						let goods=[]
						let itlist = item.goods_sku[0].sku_specification
						for(let i=0;i<itlist.length;i++){
							goods.push(itlist[i].option.value)
						}
						let it={
							img:item.goods_sku[0].image,
							peizhi:goods.join(" "),
							name:item.name,
							price:item.goods_sku[0].shop_price,
							radio:false
						}
						this.list.push(it)
						console.log(JSON.stringify(this.list))
					}
				})
			},
			selects(){
				if(selected){
					for(let i=0;i<this.list.length;i++){
						this.list[i].radio =false
					}
				}else{
					for(let i=0;i<this.list.length;i++){
						this.list[i].radio =true
					}
				}
				
				
			},
			changeRadio(index){
				this.list[index].radio=!this.list[index].radio
			}
		}
	}
</script>

<style>

</style>
