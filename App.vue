<script>
	export default {
		onLaunch: function() {
			// 消息推送
			//#ifdef APP-PLUS  
			var info = plus.push.getClientInfo();
			console.log(JSON.stringify(info));
			/* 5+  push 消息推送 ps:使用:H5+的方式监听，实现推送*/
			plus.push.addEventListener("click", function(msg) {
				console.log("click:" + JSON.stringify(msg));
				console.log(msg.payload);
				console.log(JSON.stringify(msg));
				//这里可以写跳转业务代码
			}, false);
			// 监听在线消息事件    
			plus.push.addEventListener("receive", function(msg) {
				// plus.ui.alert(2);  
				//这里可以写跳转业务代码
				console.log("recevice:" + JSON.stringify(msg))
			}, false);

			//#endif
			
			console.log('App Launch')
			// 初始化登录状态
			this.$store.commit('inituser')
			// 获取购物车列表
			// this.$store.commit('cart_init')
			// 获取本地收货地址列表
			// this.$store.commit('getList')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	/*每个页面公共css */
	/* 公共样式 */
	@import "/common/common.css";

	@import "/common/zcm-main.css";
	/* 自定义图标库 */
	/* @import "/common/iconfont.css"; */
	
	/* 自定义*/
	/* @import "/common/shiyuan/shiyuan.css"; */
	/* 官方库 */
	@import "/common/uni.css";
	/* 第三方动画库 */
	@import "/common/animate.css";
</style>
<style>
	/* #ifndef APP-PLUS-NVUE */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	/* @import './common/uni.css'; */

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color: #FFFFFF;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
		width: 100%;
	}

	.uni-header-logo {
		padding: 30upx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10upx;
	}

	.uni-header-image {
		width: 100px;
		height: 100px;
		background-size: 100%;
	}

	.uni-hello-text {
		color: #7A7E83;
	}

	.tabBarColor {
		color: #F76260;
	}

	,
	.uni-hello-addfile {
		text-align: center;
		line-height: 300upx;
		background: #FFF;
		padding: 50upx;
		margin-top: 10px;
		font-size: 38upx;
		color: #808080;
	}

	/* #endif*/
</style>
