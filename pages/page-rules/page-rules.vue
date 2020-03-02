<template>
	<view>
		<uPare className="uparse" :content="conText" @preview="preview" @navigate="navigate"></uPare>
	</view>
</template>

<script>
	import uPare from '@/components/uni-ui/uParse/src/wxParse.vue';
	export default {
		components:{
			uPare
		},
		data() {
			return {
				conText:""
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.$R.get("/integral/integralbrief/",{}).then(res=>{
					this.conText = res
				})
			}
		}
	}
</script>

<style>

</style>
