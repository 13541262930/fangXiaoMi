<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view v-if="resdata">
			
		
		<view >
			<view class="uni-title uni-center">物流单号：{{ resdata.result.number }}</view>
			<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;"  >

				 	
				 <view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;" >
				 	<view  v-for="(itemList,indexList) in resdata.result.list" :key="indexList">
					<view class="uni-timeline-item uni-timeline-last-item d-flex a-center "  style="height: 200upx;" v-if="indexList===0">
				 		<view class="uni-timeline-item-keynode font-sm" >{{itemList.time}}</view>
				 		<view class="uni-timeline-item-divider"></view>
				 		<view class="uni-timeline-item-content" style="color:#09BB07;">{{ itemList.status }}</view>
				 	</view>
				 	<view class="uni-timeline-item d-flex a-center " v-if="indexList!=0&&indexList!=resdata.result.list.length-1" style="height: 200upx;">
				 		<view class="uni-timeline-item-keynode font-sm">{{itemList.time}}</view>
				 		<view class="uni-timeline-item-divider"></view>
				 		<view class="uni-timeline-item-content">{{ itemList.status }}</view>
				 	</view>
				 	<view class="uni-timeline-item uni-timeline-first-item d-flex a-center" style="height: 200upx;" v-if="indexList===resdata.result.list.length-1">
				 		<view class="uni-timeline-item-keynode font-sm" style="background: inherit;">{{itemList.time}}</view>
				 		<view class="uni-timeline-item-divider"></view>
				 		<view class="uni-timeline-item-content">{{ itemList.status }}</view>
				 	</view>
					</view>
				 </view>



			</view>

		</view>
		</view>
		<view class="d-flex a-center j-center font-md" v-else>
			
			<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">2018.07</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成</view>
				</view>
				<view class="uni-timeline-item uni-timeline-first-item">
					<view class="uni-timeline-item-keynode">2018.05</view>
					<view class="uni-timeline-item-divider iconfont icon-daishouhuo"></view>
					<view class="uni-timeline-item-content">uni-app 立项</view>
				</view>
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">2018.07</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成</view>
				</view>
				<view class="uni-timeline-item uni-timeline-last-item">
					<view class="uni-timeline-item-keynode">2018.10</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">uni-app 支持使用 npm 安装依赖，支持微信小程序自定义组件</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			resdata:Object
		},
		data() {
			return {
				title: 'timeline'
			}
		}
	}
</script>

<style>

</style>
