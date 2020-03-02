<template>
	<view class="row">
		<view class="span24-8 px-2 mb-2" v-for="(item,index) in lable.list" :key="index">
			<view class=" rounded py-1 bg-light-secondary text-center border border-light-secondary"
			:class="lable.selected==index?'radio-active':'border-light-secondary'"
			@tap="changeradio(index)"
			>
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			lable:Object,
			index:""
		},
		methods:{
			changeradio(index){
				if(this.lable.selected!==index){
					this.$emit('changeSku',this.index,index)
				}
				this.$emit('update:selected',index)
			}
		}
	}
</script>

<style>
	.radio-active{
		background:#FCE0D5;
		color: #EB7320;
		border-color: #EB7320;
		border:1upx solid #EB7320;
	}
</style>
