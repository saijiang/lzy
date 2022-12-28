<template>
	<view class="containers">
		<scroll-view scroll-y="true" class="src">
			<view class="itemviews" v-for="(item,index) in lists" :key="index">
				<view class="leftview">
					<view>
						<text>单位名称: xx放假啥的福建省福建省福建师范技术附件</text>
					</view>
					<view>
						<text>付款状态: cc</text>
					</view>
					<view>
						<text>制单员: cc</text>
					</view>
					<view>
						<text>单位电话: cc</text>
					</view>
				</view>
				<view class="rightview">
					<view>
						<text>开单时间:xx</text>
					</view>
					<view>
						<text>交易金额:xx</text>
					</view>
					<view>
						<text>业务员:xx</text>
					</view>
				</view>
			</view>
		</scroll-view>
		
		
		<uni-drawer ref="saledrawer" mode="right" :width="300">
			<view class="drawerviews">
				<view class="items">
					<text class="titles">客户单位</text>
					<input class="inputss" placeholder="请输入"/>
				</view>
				<view class="items">
					<text class="titles">客户电话</text>
					<input class="inputss" placeholder="请输入"/>
				</view>
				<view class="items">
					<text class="titles">客户地址</text>
					<input class="inputss" placeholder="请输入"/>
				</view>
				<view class="items">
					<text class="titles">业务员</text>
					<input class="inputss" placeholder="请输入"/>
				</view>
				<view class="items">
					<text class="titles">制单员</text>
					<input class="inputss" placeholder="请输入"/>
				</view>
				<view class="itemstime">
					<text class="titless">开单时间</text>
					<view class="timesview">
						
						<picker mode="date" class="inputsview" @change="selectStartTimes">
							<view>
								<input :value="starttime" placeholder="请选择开始时间" disabled="true"/>
							</view>
						</picker>

						<view class="centers">
							<text>~</text>
						</view>
						
						<picker mode="date" class="inputsview" @change="selectEndTimes">
							<view>
								<input :value="endtime" placeholder="请选择结束时间" disabled="true"/>
							</view>
						</picker>

					</view>
				</view>
			
			    <view class="bottomsview">
					<view class="cabtn" @click="cancelBtns">
						<text>重置</text>
					</view>
					<view class="surbtn" @click="checkBtns">
						<text>查询</text>
					</view>
				</view>
			
			</view>
		</uni-drawer>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',],
				starttime:'',
				endtime:'',
				ntitle:''
			};
		},
		onLoad(e) {
		   this.ntitle = e.title
		},
		onReady(e) {
			// 这里动态设置标题 在onload中有可能不会显示
		uni.setNavigationBarTitle({
			title:this.ntitle
		})
		},
		methods:{
			
			onNavigationBarButtonTap(e){
				// console.log('点击筛选',e)
				this.$refs.saledrawer.open()
			},
			// 选择开始时间
			selectStartTimes(e){
				console.log(e)
				this.starttime = e.detail.value
			},
			// 选择结束时间
			selectEndTimes(e){
				this.endtime = e.detail.value
			},
			// 重置
			cancelBtns(){
				this.$refs.saledrawer.close()
			},
			//查询
			checkBtns(){
				this.$refs.saledrawer.close()
			},
			
			
			
		}
		
		
	}
</script>

<style lang="scss" scoped>

.containers{
	height: 100vh;
	.src{
		height: 100%;
		
		.itemviews{
			// background-color: yellowgreen;
			margin-top: 20rpx;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			display: flex;
			.leftview{
				// background-color: gold;
				margin-left: 20rpx;
				margin-right: 6rpx;
				flex: 1;
			}
			.rightview{
				// background-color: rebeccapurple;
				margin-right: 20rpx;
				margin-left: 6rpx;
				flex: 1;
			}
		}
		
		
	}
}


.drawerviews{
	height: 100%;
	position: relative;
	.items{
		display: flex;
		margin-top: 10px;
		margin-bottom: 10px;
		align-items: center;
		.titles{
			width: 80px;
			text-align: left;
			margin-left: 10px;
		}
		.inputss{
			flex: 1;
			margin-right: 10px;
		}
	}
	
	.itemstime{
	
		.titless{
			margin-left: 10px;
			width: 80px;
		}
		.timesview{
			display: flex;
			margin-left: 10px;
			margin-right: 10px;
			margin-top: 10px;
			height: 30px;
			align-items: center;
			
			.inputsview{
			
				height: 100%;
				border-radius: 15px;
				border: 0.5px solid #828282;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.centers{
				margin-left: 10px;
				margin-right: 10px;
			}
		}
	}
	
	.bottomsview{
		position: absolute;
		bottom: 18px;
		left: 0px;
		right: 0px;
		height: 50px;
		border-top: 0.5px solid #828282;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.cabtn{
			flex: 1;
			height: 40px;
			background-color: #828282;
			color: #0076ff;
			font-size: 16px;
			border-radius: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 20px;
			margin-right: 10px;
			
		}
		.surbtn{
			flex: 1;
			height: 40px;
			background-color: #0076ff;
			color: white;
			font-size: 16px;
			border-radius: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 10px;
			margin-right: 20px;
		}
	}
	
	
}




</style>

<style>
	page{
		background-color: #fafafa;
	}
</style>
