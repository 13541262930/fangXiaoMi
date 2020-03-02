<template>
	<view>
		<card headTitle="热门搜索"
		bodyCover="../../static/images/demo/search-banner.png"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag @click = "quickSearch(item.name)" v-for="(item,index) in hot" :key="index"
			:item="item"></color-tag>
		</view>
		<!-- 常用分类 -->
		<card headTitle="常用分类" :bordyPadding="true" :headBorderBottom="false">
			<color-tag v-for="(item,index) in cate" :key="index" :color="false"
			:item="item"></color-tag>
		</card>
		<!-- 分割线 -->
		<divder></divder>
		<!-- 搜索记录 -->
		<card headTitle="搜索记录">
			<view class="text-primary font" @click="clearHistory()" slot="right">
				清楚记录
			</view>
			<unilist :title="item" @click="quickSearch(item)" :showArrow=false v-for="(item,index) in historyList" :key="index" ></unilist>
		</card>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import colorTag  from "@/components/search/color-tag.vue"
	import unilist from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		data() {
			return {
				historyList:uni.getStorageInfoSync('searchHistoryList'),
				keyword:"",
				hot:[
					{ name:'领券中心' },
					{ name:'Redmi K20' },
					{ name:'RedmiBook 14' },
					{ name:'智能积木 越野四驱车' },
					{ name:'手环 腕带' },
				],
				cate:[
					{"name":'耳机'},
					{"name":'手机'},
					{"name":'音响'},
					{"name":'手表'},
					{"name":'配件'},
					{"name":'网管/传感器'},
					{"name":'健康'},
					{"name":'酷玩'}
					
				]
			}
		},
		components:{
			card,
			colorTag,
			unilist
		},
		// 点击原生标题栏搜索跳转
		onNavigationBarButtonTap(e){
			this.search()
		},
		// 监听搜索框的变化
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text
		},
		onNavigationBarSearchInputConfirmed() {
			this.search()
		},
		onLoad() {
			let history = uni.getStorageSync('searchHistoryList')
			console.log(history)
			this.historyList=history ? JSON.parse(history):[]
		},
		methods: {
			// 清楚搜索记录
			clearHistory(){
				uni.showModal({
					title:"提示",
					content:"是否要清楚搜索历史",
					cancelText:"取消",
					confirmText:"清除",
					success:(res)=> {
						if(res.confirm){
							uni.clearStorageSync()
							this.historyList=[]
						}
					}
				})
			},
			search(){
				if(this.keyword===""){
					return uni.showToast({
						title:"关键词不能为空",
						icon:"none"
					})
				}
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord() //app端隐藏软键盘
				// #endif
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				// 把搜索内容加入搜索记录中
				this.addHistoryList()
				uni.navigateTo({
					url:"../search-list/search-list?keyword="+this.keyword,
					success:()=> {
						this.addHistoryList()
					}
				})
			},
			// 多色按钮
			quickSearch(name){
				this.keyword = name
				this.search()
			},
			addHistoryList(){
				let index = this.historyList.indexOf(this.keyword)
				if(index===-1){
					this.historyList.unshift(this.keyword)
				}else{
					this.historyList.unshift(this.historyList.splice(index,1)[0]) 
				}
				// 移除最后一条
				if(this.historyList.length>5){
					this.historyList.splice(this.historyList.length-1,1)
				}
				uni.setStorageSync('searchHistoryList',JSON.stringify(this.historyList))
			}
		}
	}
</script>

<style>

</style>
