<template>
	<view>
		<time-line :resdata="listData"></time-line>
	</view>
</template>

<script>
	import timeLine from "../../components/uni-ui/timeline/timeline.vue"
	export default {
		components:{
			timeLine
		},
		onLoad(e) {
			console.log(e.id)
			this.getData()
		},
		data() {
			return {
				listData:{}
			}
		},
		methods: {
			getData(){
				this.$R.get("/orders/logistics/?logistics_num=yt4253097340636").then((res)=>{
					console.log(res) 
					this.listData = res
				})
			}
		}
	}
</script>

<style>

</style>

