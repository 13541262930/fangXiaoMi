export default{
	data(){
		return{
			beforeReady:true,
		}
	},
	onReady() {
			this.$nextTick(function(){
				this.beforeReady=false
			})	
	}
}