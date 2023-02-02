<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//#ifdef APP-PLUS
			   // console.log('版本',plus.runtime.versionCode)
			   // this.version=plus.runtime.versionCode
				// 获取本地应用资源版本号
				plus.runtime.getProperty(plus.runtime.appid, (info) => {
					// console.log(JSON.stringify(info));
					 var version = info.version;
					 console.log(version)
					 // 存储当前版本号
				  uni.setStorage({
				  	data:version,
					key:'version'
				  })


				}) 
			 //#endif
			
		},
		onShow: function() {
			console.log('App Show')
			// 关闭引导页闪一下屏之后在进入主页的问题
			setTimeout(() => {
						// #ifdef APP-PLUS
						plus.navigator.closeSplashscreen();
						// #endif
					}, 2000);
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
