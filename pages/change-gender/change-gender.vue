<template>
	<view>
		<divder></divder>
		<view class="font-md py-2 d-flex flex-row" @click="selected(index)" v-for="(item,index) in list" :key="index">
			<view class="iconfont icon-dibudaohanglan--copy" v-if="item.selected">
				
			</view>
			{{item.text}}
		</view>
		
		<view class="d-flex a-center j-center py-3">
			<view class="main-bg-color font-md text-center span24-20 py-2">
				确定
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
					selected:true,text:"男"
				},
				{
					selected:false,text:"女"
				}
				]
			}
		},
		methods: {
			selected(index){
				this.list.map(v=>{
					return v.selected = false
				})
				this.list[index].selected= true
			}
		}
	}
</script>

<style>

</style>
