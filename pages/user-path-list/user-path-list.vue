<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
		<!-- <uni-swiper-action :options="options" @click="bindClick($event,index)"> -->
		<uni-list-item @click="choose(index)"  >
			<view class="text-secondary" @longpress="longPath(index)">
				<view class="d-flex a-center">
					<text class="main-text-color">{{ item.name }}</text>
					<text class="mx-2">{{ item.phone }}</text>
					<text class="main-text-color" v-if="item.isDefault">[默认]</text>
				</view>
				<view>
					{{ item.path }}
				</view> 
				<view>
					{{item.detailPath}}
				</view>
			</view>
		</uni-list-item>
		</uni-swiper-action>
		</block>
	</view>
</template>

<script>
	import uniSwiperAction from "@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import { mapState,mapMutations,mapActions } from "vuex"
	export default {
		components: {
			uniListItem,uniSwiperAction
		},
		data() {
			return {
				isChoose:false
				// options: [{
				// 	text: '修改',
				// 	style: {
				// 		backgroundColor: '#007aff'
				// 	}
				// }, {
				// 	text: '删除',
				// 	style: {
				// 		backgroundColor: '#dd524d'
				// 	}
				// }],
			}
		},
		onLoad(e) {
			if(e.type==="choose"){
				this.isChoose=true
			}
		},
		// 监听导航栏按钮点击
		onNavigationBarButtonTap(e) {
			if(e.index=== 0){
				uni.navigateTo({
					url: '../user-path-edit/user-path-edit'
				});
			}
		},
		methods: {
			...mapMutations(['delPath']),
			...mapActions(['setDefault']),
			// 长按收货地址
			longPath(index){
				uni.showActionSheet({
					itemList:['删除','设为默认收货地址'],
					success:(res)=> {
						console.log(res.tapIndex)
						if(res.tapIndex===0){
							uni.showModal({
								content:"是否删除当前收货地址？",
								success:(res)=>{
									if(res.confirm){
										this.delPath(index)
									}
								}
							})
						}else{
							// 先判断是否是已经设为默认收货地址了
							if(!this.list[index].isDefault){							
								this.setDefault(index)
							}
							
						}
					}
				})
			},
			// 选择收货地址
			choose(index){
				
				if(this.isChoose){
					// 通知订单提交页修改
					uni.$emit("choosePath",this.list[index])
					// 关闭当前页面
					uni.navigateBack({
						delta:1
					})
				}else{
					let obj = JSON.stringify(
					{index:index,
					item:this.list[index]
					}
					)
					setTimeout(()=>{
						uni.navigateTo({
							url:"../user-path-edit/user-path-edit?data="+obj
						},50)
					})
				}
				
			}
			// bindClick(e,index) {
			// 	switch(e.index){
			// 		case 0: //修改
			// 			let obj = JSON.stringify(
			// 			{index:index,
			// 			item:this.list[index]
			// 			}
			// 			)
			// 			setTimeout(()=>{
			// 				uni.navigateTo({
			// 					url:"../user-path-edit/user-path-edit?data="+obj
			// 				},50)
			// 			})
			// 			break;
			// 		case 1: //删除
			// 		uni.showModal({
			// 			content:"是否删除当前收货地址？",
			// 			success:(res)=>{
			// 				if(res.confirm){
			// 					this.delPath(index)
			// 				}
			// 			}
			// 		})
			// 			break;
			// 	}
			// 	uni.showToast({
			// 		title: `点击了${e.content.text}按钮`,
			// 		icon: 'none'
			// 	})
			// },
		},
		// 计算属性
		computed:{
			...mapState({
				list:state=>state.path.list
			})
		}
	}
</script>

<style>

</style>
