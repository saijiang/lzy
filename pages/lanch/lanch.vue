<template>
	<view class="contain">
		<swiper class="swipers"  :indicator-dots="true" indicator-active-color="#ffffff" @change="scroLanch">
			<swiper-item>
				<image mode="aspectFill" class="images" src="../../static/images/lancher/lanch0.png"></image>
			</swiper-item>
			<swiper-item>
				<image mode="aspectFill" class="images" src="../../static/images/lancher/lanch1.png"></image>
			</swiper-item>
			<swiper-item>
				<image mode="aspectFill" class="images" src="../../static/images/lancher/lanch2.png"></image>
			</swiper-item>
		</swiper>
		
		
	
	  <view class="btns" v-show="showbtns" @click="surebtn">
		  <text>点击进入</text>
	  </view>
	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showbtns:false
			};
		},
		onShow() {

			var lanch = uni.getStorageSync('lanch')
			var login = uni.getStorageSync('login')
			console.log(lanch)
			if(lanch && !login){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}else if(lanch && login){
				uni.switchTab({
					url:'/pages/home/home'
				})
			}
		},
		methods:{
			scroLanch(event){
				var index = event.detail.current
				console.log(index)
				if(index == 2){
					this.showbtns = true
				}
				else{
					this.showbtns = false
				}
			},
			surebtn(){
				uni.setStorage({
					key:'lanch',
					data:'lanch',
					success() {
						uni.reLaunch({
							url:'/pages/index/index'
						})
					}
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.contain{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.swipers{
		width: 100%;
		height: 100%;
	}

	.images {
		height: 100%;
		width: 100%;
		

	}

	.btns{
		position: absolute;
		bottom: 200px;
		width: 150px;
		height: 46px;
		border: 1px solid #ffffff;
		border-radius: 23px;
		
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 20px;
		
	}

	

</style>

<style>
	page{
      height: 100%;
	  /* 配置底部安全距离 */
	   /* padding-bottom: constant(safe-area-inset-bottom);
	   padding-bottom: env(safe-area-inset-bottom); */
	}
</style> 
