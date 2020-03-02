import Vue from 'vue'
import App from './App'

// 引入store
import store from "./store/index.js"
Vue.prototype.$store = store
// 引入封装请求
import $R from '@/common/lib/request.js';
Vue.prototype.$R = $R

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
