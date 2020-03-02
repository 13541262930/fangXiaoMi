<template>
	<view>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				收货人:
			</view>
			<input type="text" value="" class="px-1" v-model="from.name" />
		</view>
		<view class="p-2  d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				手机号码:
				
			</view>
			<input type="text" value="" class="px-1" v-model="from.phone" />
		</view>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				所在地区:
			</view>
			<input type="text" value="" class="px-1"  disabled @click="showMulLinkageThreePicker" :value="from.path" placeholder="请选择所在地区"/>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
			 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
		<view class="p-2  d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				详细地址:
			</view>
			<input type="text" value="" class="px-1" v-model="from.detailPath" />
		</view>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">
				设为默认地址:
				</view>
				<switch :checked="from.isDefault" @change="from.isDefault = $event.detail.value" color="#FD6801" class="ml-auto"  />
			</view>
		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white rounded font-md py-2 " @click="sum()" hover-class="main-bg-hover-color">
				保存
			</view>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue"
	import {mapState,mapActions} from "vuex"
	export default {
		components:{
			mpvueCityPicker
		},
		data() {
			return {
				index:"",
				themeColor: '#007AFF',
				isedit:false,
				pickerText:"",
				cityPickerValueDefault: [0, 0, 1],
				from:{
					name: "",
					phone: "",
					detailPath: "",
					isDefault: false,
					path:"",
				}
			}
		},
		methods: {
			...mapActions(['updatePathAction','createPathAction']),
			// 保存
			sum(){
				if(this.isedit){
					let data = {
						index:this.index,item:this.from
					}
					data['callback']=()=>{
						uni.navigateBack({
							delta:1
						})
						uni.showToast({
							title:"修改成功"
						})
					}
					this.updatePathAction(data)
					return;
				}
				this.createPathAction(this.from)
				uni.showToast({
					title:"创建成功"
				})
				uni.navigateBack({
					delta:1
				})
				
			},
			pickerCancel() {
				this.showPicker = false;
				this._$emit('onCancel');
			},
			// 提交确定
			onConfirm(e) {
				this.from.path =e.label
				this.pickerText = e.label
				
			},
			// 显示三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
		},
		// 监听返回键先关闭三级联动
		onBackPress() {
		  if (this.$refs.mpvueCityPicker.showPicker) {
		  	this.$refs.mpvueCityPicker.pickerCancel();
		    return true;
		  }
		},
		onLoad(e) {
			if(e.data){
				this.isedit = true
				this.from = JSON.parse(e.data).item
				this.index =  JSON.parse(e.data).index
				uni.setNavigationBarTitle({
					title:"修改收货地址"
				})
			}
			uni.setNavigationBarTitle({
				title:"增加收货地址"
			})
		},
		// 页面卸载
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
		
	}
</script>

<style>

</style>
