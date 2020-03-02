
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
						this.$R.get("http://192.168.2.129:8000/members/rights/",{rightstype:"eggs"},"url").then(res=>{
							console.log(res)
							this.conText = res
							
						})
					}
				}
			}
		</script>
		
		<style>
		
		</style>
		
	</view>

