<template>
	<view>
		
		<view class="views">
		   <view class="inputviews">
					 <text class="inputtitles">当前币值</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
				 <view class="inputviews">
					 <text class="inputtitles">当前积分</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
		</view>
		
		<view class="views">
		   <view class="inputviews">
					 <text class="inputtitles">允许抵扣</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
				 <view class="inputviews">
					 <text class="inputtitles">使用积分</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
		</view>
		
		<view class="views">
		   <view class="inputviews">
					 <text class="inputtitles">获得积分</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
				 <view class="inputviews">
					 <text class="inputtitles">本单金额</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
		</view>
		
		<view class="views">
		   <view class="inputviews">
					 <text class="inputtitles">使用币值</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
				 <view class="inputviews">
					 <text class="inputtitles">获得币值</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
		</view>
		
		
		<view class="views">
		   <view class="inputviews">
					 <text class="inputtitles">本单费用</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
				 <view class="inputviews">
					 <text class="inputtitles">本单优惠</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
		</view>
		
		<view class="views">
		   <view class="inputviews">
					 <text class="inputtitles">本单应付</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
				 <view class="inputviews">
					 <text class="inputtitles">费用名称</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
		</view>
		
		<view class="views">
		   <view class="inputviews">
					 <text class="inputtitles">本单实付</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
				 <view class="inputviews">
					 <text class="inputtitles">本单欠款</text>
					 <textarea auto-height="true" class="inputstyle"></textarea>
				 </view>
		</view>
		
		<view class="viewone">
		   <view class="inputviews">
				 <text class="inputtitles">之前欠款</text>
				 <textarea auto-height="true" class="inputstyle"></textarea>
		   </view>

		</view>
		
	
		   <view class="ssviews">
				 <text class="inputtitles">收款账户</text>
				 <view class="seviews">
					 <text class="setexts">1</text>
					 <image class="seimageicon" src="../../static/images/arrow-icon.png"></image>
				 </view>
				
		   </view>
		   
		   <view class="ssviews">
				 <text class="inputtitles">计划收款日期</text>
				 <picker mode="date" style="flex: 1;" @change="bindCollectionAction">
					 <view class="seviews">
					 	 <text class="setexts">{{sdate}}</text>
					 	 <image class="setimeimage" src="../../static/images/time-icon.png"></image>
					 </view>
				 </picker>
		
		   </view>
		   
		   <view class="ssviews">
				 <text class="inputtitles">计划送货日期</text>
	
				 <picker mode="date" style="flex: 1;" @change="bindDeliverAction">
					 <view class="seviews">
					 	 <text class="setexts">{{odate}}</text>
					 	 <image class="setimeimage" src="../../static/images/time-icon.png"></image>
					 </view>
				 </picker>
		   </view>
		   
		   
		   <view class="btnview">
			   <button class="btns">确定开单</button>
		   </view>
		

		
		
		
		
		
		
		

	</view>
</template>

<script>
export default {
	
	data() {
		return {
			
			sdate:'',
			odate:''
			

		};
	},
	mounted() {

		
	},
	methods:{
		// 收款时间
		bindCollectionAction(e){
			this.sdate = e.detail.value
		},
		// 送货时间
		bindDeliverAction(e){
			this.odate = e.detail.value
		}
		


	}
 }
</script>

<style lang="scss" scoped>

.views{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 20rpx;
	margin-right: 20rpx;
	.inputviews{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20rpx;
		.inputtitles{
			width: 130rpx;
		}
		.inputstyle{
			border: 0.5px solid #828282;
			box-sizing: border-box;
			min-height: 20px;
			width: 200rpx;
		}
	}
	
}


.viewone{
	display: flex;
	flex-direction: row;
	margin-left: 20rpx;
	margin-right: 20rpx;
	.inputviews{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20rpx;
		.inputtitles{
			width: 130rpx;
		}
		.inputstyle{
			border: 0.5px solid #828282;
			box-sizing: border-box;
			min-height: 20px;
			width: 200rpx;
		}
		
		
		
		
	}
}


.ssviews{
	display: flex;
	margin-left: 20rpx;
	margin-top: 20rpx;
	width: 400rpx;
	justify-content: space-around;
	.inputtitles{
		// width: 130rpx;
		margin-right: 6rpx;
	}
	.seviews{
		border: 0.5px solid #828282;
		box-sizing: border-box;
		min-height: 20px;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.setexts{
			flex: 1;
			margin-left: 10rpx;
			margin-right: 10rpx;
			word-break: break-all;
		}
		.seimageicon{
			width: 20rpx;
			height: 20rpx;
			transform: rotate(90deg);
			margin-right: 4rpx;
		}
		.setimeimage{
			width: 30rpx;
			height: 30rpx;
			margin-right: 4rpx;
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