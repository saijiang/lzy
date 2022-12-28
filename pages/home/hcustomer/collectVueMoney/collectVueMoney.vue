<template>
	<view class="containers">
		
		<view class="tops">
			<view class="tops-grops">
				<text>金额:</text>
				<input class="tops-grops-inputs"/>
			</view>
			<view class="tops-grops">
				<text>抹零:</text>
				<input class="tops-grops-inputs"/>
			</view>
		</view>
		
		<view class="centers">
            <scroll-view scroll-y="true" class="srcs">
				<view class="srcs-item" v-for="(item,index) in lists">
					<view class="item-left">
						<view class="left-one">
							<text>应收:</text>
							<text class="one-value">9</text>
							<text>实收:</text>
							<text class="one-value">0</text>
							<text>本次应收:</text>
							<input class="one-input"/>
						</view>
						
						<view class="left-one">
							<text>开单时间:</text>
							<text class="one-value">2022/8/8</text>
							<text>业务员:</text>
							<text class="one-value">无</text>
						</view>
						
						<view class="left-one">
							<text>计划收款:</text>
							<text class="one-value">2022/8/8</text>
							<text>制单员:</text>
							<text class="one-value">小李</text>
						</view>
						
						<view class="left-one">
							<text>客户姓名:</text>
							<text class="one-value">王大拿</text>
							<text>客户电话:</text>
							<text class="one-value">12345678900</text>
						</view>
						
						<view class="left-one">
							<text>客户地址:</text>
							<text class="one-value">北京市西城区金融街27号投资广场B座</text>
							<text>付款状态:</text>
							<text class="one-value">无</text>
						</view>
						
						
					</view>
					<view class="item-right" @click="clickitems(item)">
						<image class="item-right-image" :src="imageurl"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="bots">
			<text>支付</text>
		</view>
		
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:['1','2','3','4','5','6','7','8'],
				imageurl:'../../../../static/images/radio_default.png',
			};
		},
		methods:{
			// 点击item 
			clickitems(item){
				if(this.imageurl == '../../../../static/images/radio_default.png'){
					this.imageurl = '../../../../static/images/radio_selected.png'
				}
				else
				  this.imageurl = '../../../../static/images/radio_default.png'
			}
			
			
			
		}
	}
</script>

<style lang="less" scoped>


.containers{
	
	height: 100vh;
	display: flex;
	flex-direction: column;
	.tops{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-left: 20rpx;
		margin-top: 20rpx;
		.tops-grops{
			flex: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			.tops-grops-inputs{
				height: 25px;
				border: 0.5px solid #828282;
				box-sizing: border-box;
				margin-left: 20rpx;
				margin-right: 20rpx;
				flex: 1;
			}
		}
	}
	
	.centers{
		flex: 1;
		position: relative;
		.srcs{
			height: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			.srcs-item{
				margin-top: 20rpx;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
				background-color: white;
				display: flex;
				flex-direction: row;
				.item-left{
					flex: 1;
					padding-left: 20rpx;
					padding-right: 20rpx;
					.left-one{
						display: flex;
						flex-direction: row;
						.one-value{
							margin-left: 6rpx;
							margin-right: 6rpx;
							word-wrap: break-word;
							word-break: break-all;
						}
						.one-input{
							height: 20px;
							border: 0.5px solid #828282;
							box-sizing: border-box;
							flex: 1;
							margin-left: 6rpx;
						}
					}
					
					
					
				}
				.item-right{
					display: flex;
					align-items: center;
					justify-content: center;
					width: 40px;
					.item-right-image{
						width: 22px;
						height: 22px;
					}
				}
			}
		}
		
		
	}
	
	
	.bots{
		margin-left: 50rpx;
		margin-right: 50rpx;
		background-color: blue;
		height: 40px;
		color: white;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	
	
	
	
	
	
}


</style>

<style>
	page{
		background-color: #fafafa;
	}
</style>
