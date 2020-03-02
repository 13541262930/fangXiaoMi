<template>
	<view class="">
	<view class="font-md font-weight p-2 main-border-color d-flex a-center">精品商品</view>
	<view  style="display: flex;flex-wrap: wrap;flex-direction:row;width: 750upx;border-radius: 20px;overflow: hidden;justify-content: center;align-items: center;">
		<view v-for="(item,index) in resdata" :key="index" :class="index===0 || index===1 ? 'activeBorder':''"     style=" width: 345upx;height: 240px; background: #FFFFFF;" @click="openDetail(item)">
				<view style="margin-left: 15px;height: 40px;" class="d-flex a-center">
					<view style="font-size: 30upx;">
						{{ item.goods_brief}}
					</view>
				</view>
				<image :src="item.image"    style="width: 340upx;height: 150px;"></image>
		</view>
	</view>
	</view>
</template>
<script>
	import price from "@/components/common/price.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			price
		},
		props:{
			resdata:Array
		},
		methods:{
			openDetail(item){
				uni.navigateTo({
					url:'/pages/detail/detail?detail='+item.id
				})
			}
		}
	}
	
</script>

<style>
.activeBorder{
	border-bottom: solid #000000 .5px ;
}
</style>
