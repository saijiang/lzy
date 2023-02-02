<template>
	<view>
		<uni-grid :column="2" @change="clickItemAction">
			<uni-grid-item v-for="(item, index) in lists" :index="index" :key="index">
				<view class="gridview">
					<image :src="item.icon" class="icons"></image>
					<text style="color: #0076ff;">{{item.title}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[],
				
			};
		},
		onLoad() {
			this.lists = this.$ld.homelist
			var that = this
			uni.$on('update',function(res){
				// uni.getSubNVueById('updatepop').hide()
				that.appUpDate()
			})
		},
		methods:{
			clickItemAction(e){
				var number = e.detail.index
				var title = this.lists[number].title
				var path = this.lists[number].path
				console.log(path)
				uni.navigateTo({
					url:path,
				})
			},
			
			// 版本更新下载
			downApp(url,updateType){
				// 文件大小
				// let fileSize = '';
				// if(updateType == 'bigUpdate'){
				// 	fileSize = this.updateInfo.android_url_file_size;
				// }else{
				// 	fileSize = this.updateInfo.hot_update_file_size;
				// }
				// fileSize = parseFloat(fileSize) * 1024 * 1024
				// console.log(fileSize)
				let waiting = plus.nativeUI.showWaiting('下载中...');
				// 创建下载任务
				let dtask = plus.downloader.createDownload(url,{
					filename: '_doc/update/' // 文件下载保存路径
				},function(d, status) {
					console.log(status,5555)
					if (status == 200) {
						console.log(status,'.............')
						waiting.setTitle('安装中...');
						// 下载成功
						plus.runtime.install(d.filename, {}, function() {
							plus.nativeUI.closeWaiting();
							plus.nativeUI.alert('更新完成！', function() {
								uni.showTabBar();
								// 清除所有下载的包
								plus.downloader.clear(-1);
								// 热更新自动安装
								if(updateType == 'thermalRenewal'){
									plus.runtime.restart();
								}
							});
						}, function(e) {
							plus.nativeUI.closeWaiting();
							plus.nativeUI.alert('安装失败[' + e.code + ']：' + e.message);
						});
					} else { 
						//下载失败
						plus.nativeUI.alert('下载失败！');
						setTimeout(()=>{
							plus.nativeUI.closeWaiting();
						},1000)
						if(updateType == 'bigUpdate'){
							plus.runtime.openURL(url)   //打开网页手动下载
						}
					}
				})
				// 监听下载状态
				// dtask.addEventListener("statechanged", function(download, status) {
				//  // console.log(`监听:下载状态${status}`)
				//  if (status == 200) {
				//      let i = download.downloadedSize
				//      i *= 100 / fileSize;
				//      console.log(`监听:下载大小${i}`)
				//      if(!isNaN(i)){
				//          i = parseInt(i)
				//          waiting.setTitle('已下载 ' + i + "%");
				//          // waiting.setTitle(i);
				//      }
				//  }else if(status == 404){
				//      plus.nativeUI.closeWaiting();
				//      plus.runtime.toast("下载地址错误")
				//  }
				// }, true);
				dtask.start();
			},
			// 平台更新
			appUpDate(){
				switch (uni.getSystemInfoSync().platform){
					case 'android':
					that.downApp('https://www.pgyer.com/dH8D','')
						break;
					case 'ios':{
						uni.showModal({
							content:'是否跳转至App Store进行更新',
							success:function(res){
								if(res.confirm){
								//在App Store Connect中的App Store下的app信息，可找到appleId
									let appleId= 111111111
									plus.runtime.launchApplication({
										action: `itms-apps://itunes.apple.com/cn/app/id${appleId}?mt=8`
									}, function(e) {
										console.log('Open system default browser failed: ' + e.message);
									});
								// console.log('ios平台')	
								}
								else if(res.cancel){
									console.log('取消')	
								}
							}
						})
							
					}
					break;
					default:
						break;
				}
			}
			
			
			
			
		},
		onShow() {
		 //#ifdef APP-PLUS
		 // var that = this
            // 获取 缓存的版本号  
			   uni.getStorage({
				key:'version',
				success:function(res){
					console.log(res.data)
					// that.show = true
					const subNVue = uni.getSubNVueById('updatepop')
					subNVue.show('fade-in',200,function(){
						// 打开后进行一些操作
					})
				}
			  })
			  
			 //#endif
		},
		onUnload() {
			uni.$off('update')
		}
		
	}
</script>

<style lang="less">
  .gridview{
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  
  }
  
  .icons{
	 width: 50px;
	 height: 50px;
	 margin-bottom: 5px;
  }
</style>
