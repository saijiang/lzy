<template>
	<view class="container">
		<view class="tviews">
			<view class="titems">
				<text class="title1">销售额总计:xxx</text>
				<text class="title2">实销额总计:xxx</text>
			</view>
			<view class="titems">
				<text class="title1">退货额总计:xxx</text>
				<text class="title2">欠款额总计:xxx</text>
			</view>
		</view>
		
		<view class="srcviews">
			<scroll-view class="scr" scroll-y="true">
				<view class="sitems" v-for="(item,index) in lists">
					<view class="onviews">
						<text>客户姓名:</text>
						<text class="metitle">xxx</text>
					</view>
					<view class="onviews">
						<text>客户电话:</text>
						<text class="metitle">xxxx</text>
					</view>
					<view class="twoviews">
						<view class="subtviews">
							<view class="sonviews">
								<text>销售额:</text>
								<text class="smetitle">xxx</text>
							</view>
							<view class="sonviews">
								<text>实销额:</text>
								<text class="smetitle">xxx</text>
							</view>
						</view>
						<view class="subtviews">
							<view class="sonviews">
								<text>退货额:</text>
								<text class="smetitle">xxx</text>
							</view>
							<view class="sonviews">
								<text>欠款额:</text>
								<text class="smetitle">xxx</text>
							</view>
						</view>
					</view>
					<view class="thrviews">
						<view class="btnviews" @click="btnclick(item)">
							<text>收款</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		
	</view>
</template>

<script>
export default {
	
	data() {
		return {
           lists:[1,2,3,4,5,6,7,8,9]
		};
	},
	mounted() {

		
	},
	methods:{

		btnclick(item){
			console.log(item)
			uni.navigateTo({
				// url:'/pages/home/hcustomer/collectMoney/collectMoney'
				url:'/pages/home/hcustomer/collectVueMoney/collectVueMoney'
			})
		}


	}
 }
</script>

<style lang="scss" scoped>

.container{
	display: flex;
	flex-direction: column;
	height: calc(100vh - 100rpx);
	.tviews{
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
		padding-bottom: 20rpx;
		height: 100rpx;
		justify-content: space-between;
		align-items: center;
		.titems{
			display: flex;
			flex-direction: column;
			flex: 1;
			margin-left: 20rpx;
			.title1{
				word-break: break-all;
				word-wrap: break-word;
				margin-bottom: 10rpx;
			}
			.title2{
				word-break: break-all;
				word-wrap: break-word;
			}
		}
		
	}
	
	.srcviews{
		flex: 1;
		height: calc(100% - 140rpx - 100rpx);
		.scr{
			height: 100%;
			.sitems{
				background-color: white;
				border-radius: 5px;
				margin-bottom: 10px;
				margin-left: 20px;
				margin-right: 20px;
				padding-bottom: 20px;
				.onviews{
					display: flex;
					flex-direction: row;
					padding-top: 10px;
					padding-left: 20px;
					padding-right: 20px;
					.metitle{
						word-wrap: break-word;
						word-break: break-all;
						margin-left: 5px;
						margin-right: 5px;
					}
				}
				.twoviews{
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					padding-top: 10px;
					padding-left: 20px;
					padding-right: 20px;
					.subtviews{
						flex: 1;
						.sonviews{
							display: flex;
							flex-direction: row;
							padding-bottom: 10px;
							.smetitle{
								word-wrap: break-word;
								word-break: break-all;
								margin-left: 5px;
								margin-right: 5px;
							}
						}
					}
				}
				.thrviews{
					display: flex;
					flex-direction: row-reverse;
					.btnviews{
						background-color: blue;
						margin-right: 20px;
						height: 30px;
						border-radius: 15px;
						width: 80px;
						display: flex;
						align-items: center;
						justify-content: center;
						text-align: center;
						color: white;
						font-size: 16px;
					}
				}
			
			}
		}

	}
	
	
	
	
}

</style>