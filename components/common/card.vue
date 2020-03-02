<template>
	<view class="card" :style="cardStyle">
		<!-- head -->
		<view v-if="showhead" class="p-2 main-border-color d-flex a-center j-sb" :class="getHeadClass" :style="bodyStyle">
			<slot name="title">
				<text v-if="headTitle" class="font-md" :class="headtitleweight?'font-weight':''">{{headTitle}}</text>
			</slot>
			<slot name="right">
				
			</slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass" >
			<image v-if="bodyCover" :src="bodyCover" 
			mode="widthFix"></image>
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			cardStyle:String,
			
			bodyStyle:String,
			// 头部标题
			headTitle:String,
			// 封面图
			bodyCover:String,
			// 是否显示头部
			showhead:{
				type:Boolean,
				default:true
			},
			// 是否显示下边线
			headBorderBottom:{
				type:Boolean, 
				default:true
			},
			bordyPadding:{
				type:Boolean,
				default:false 
			},
			// 标题是否加粗
			headtitleweight:{
				type:Boolean,
				default:false 
			},
			
		},
		computed:{
			getHeadClass(){
				return {
					'border-bottom':this.headBorderBottom,
				}
			},
			getBodyClass(){
				return {
					'p-2':this.bordyPadding,
				}
			}
		}
	}
</script>

<style>
</style>
