import Vue from 'vue'
import App from './App'
// 引入store
import store from "./store/index.js"
Vue.prototype.$store = store
// 绘制数字
var leftPos = Math.ceil(plus.screen.resolutionWidth/ 8 * 5);
Vue.prototype.$view = new plus.nativeObj.View('test',{bottom:'35px',left: leftPos + 'px',height:'15px',width:'15px',backgroundColor:"#FFFFFF"});

Vue.prototype.$update= function(goods){
	this.$view.drawText(goods, {top:'0px',left:'0px',width:'100%',height:'100%'}, {size:'10px',color:'#FF0000'},"text");
	this.$view.show()
}
// 权限跳转
Vue.prototype.navigateTo = (options)=>{
	// 判断用户是都登录
	if(!store.state.user.loginStatus){
		uni.showToast({
			title:"请先登录",
			icon:"none"
		});
		return uni.navigateTo({
			url:"/pages/login/login"
		})
	}
	uni.navigateTo(options)
}

Vue.config.productionTip = false

// 引入全局组件
import divder from "@/components/common/divder.vue"
Vue.component('divder',divder)

import loadingPlus from "@/components/common/minxin/loading-plus.vue"
Vue.component('loading-plus',loadingPlus)
import $R from '@/common/lib/request.js';
Vue.prototype.$R = $R
// import loading from "@/components/common/loading.vue"

// Vue.component('loading',loading)
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
