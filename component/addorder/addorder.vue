<template>
	<view>
		
	  <view class="views">
         <view class="inputviews">
			 <text class="inputtitles">编码:</text>
			 <textarea auto-height="true" class="inputstyle"></textarea>
		 </view>
		 <view class="inputviews">
			 <text class="inputtitles">条码:</text>
			 <textarea auto-height="true" class="inputstyle"></textarea>
		 </view>
	  </view>
	  
	  <view class="views">
	     <view class="inputviews">
	  			 <text class="inputtitles">品名:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  		 <view class="inputviews">
	  			 <text class="inputtitles">规格:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  </view>
	  
	  <view class="views">
	     <view class="inputviews">
	  			 <text class="inputtitles">型号:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  		 <view class="inputviews">
	  			 <text class="inputtitles">颜色:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  </view>
	  
	  <view class="views">
	     <view class="inputviews">
	  			 <text class="inputtitles">尺码:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  		 <view class="inputviews">
	  			 <text class="inputtitles">数量:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  </view>
	  
	  <view class="views">
	     <view class="inputviews">
	  			 <text class="inputtitles">单位:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  		 <view class="inputviews">
	  			 <text class="inputtitles">价格:</text>
	  			 <textarea auto-height="true" class="inputstyle"></textarea>
	  		 </view>
	  </view>
	  
	  <view class="btnview">
		  <button class="btns" @click="handleAdd">加 单</button>
	  </view>
	  
	  
	  
	  
	</view>
</template>

<script>
export default {
	
	data() {
		return {

		};
	},
	mounted() {

		
	},
	methods:{
      
	  // 加单按钮
		handleAdd(){
			
		}
		

	}
 }
</script>

<style lang="scss" scoped>

.views{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	
	.inputviews{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20rpx;
		.inputtitles{
			width: 80rpx;
		}
		.inputstyle{
			border: 0.5px solid #828282;
			box-sizing: border-box;
			min-height: 20px;
			width: 240rpx;
		}
	}
	
}


.btnview{
	margin-top: 40rpx;
	margin-left: 60rpx;
	margin-right: 60rpx;
	.btns{
		background-color: #0076ff;
		border-radius: 5px;
		color: white;
		font-size: 16px;
		font-weight: 500;
	}
}

</style>