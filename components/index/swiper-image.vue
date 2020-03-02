<template>
	<view>
		<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#FFFFFF" autoplay :interval="3000" :duration="200" circular :style="getStyle">
			<block v-for="(item,index) in resdata" :key="index" >
				<swiper-item>
					<view class="swiper-item"   @click="openDetail(item.id)">
						<image :src="item.image" 
						lazy-load
						:style="getStyle"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			resdata:[Array,Object],
			height:{
				type:String,
				default:"350"
			},
			preview:{
				type:Boolean,
				default:false
			}
		},
		computed: {
			getStyle() {
				return `height: ${this.height}rpx;`
			},
			getUrls(){
				return this.resdata.map((v)=> v.src)
			}
		},
		methods:{
			openDetail(id){
				uni.navigateTo({
					url:"/pages/detail/detail?detail="+id
				})
			},
			event(item,index){
				if (this.preview) {
					return uni.previewImage({
						current:index,
						urls:this.getUrls,
						indicator:"default"
					})
				}
			}
		}
	}
</script>

<style>
</style>
