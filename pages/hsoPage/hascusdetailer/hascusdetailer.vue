<template>
	<view class="container">
		<scroll-view class="src" scroll-y="true">
			
			<view class="viewsone">
				<text>单位名称:</text>
				<input class="inputone"/>
			</view>
			
			<view class="viewstwo">
				<text>单位电话:</text>
				<input class="inputtwo"/>
				<view class="upviews">
					<text>提交客户</text>
				</view>
			</view>
			
			<view class="viewsone">
				<text>单位地址:</text>
				<input class="inputone"/>
			</view>
			
			<view class="viewsone" @click="loadingcangku">
				<text>下单仓库:</text>
				<input class="disableput" v-model="cangk" placeholder="请选择" disabled="true"/>
			</view>
			
			<view class="viewsone">
				<text>收款账户:</text>
				<input class="disableput" placeholder="请选择" disabled="true"/>
			</view>
			
			<view class="viewsthree">
				<view class="onev">
					<text>等级名称:</text>
					<input class="oinputs" placeholder="请选择" disabled="true"/>
				</view>
				<view class="twov">
					<text>负责人:</text>
					<input class="tinputs" placeholder="请选择" disabled="true"/>
				</view>
			</view>
			
			<view class="viewsthree">
				<view class="onev">
					<text>总共金额:</text>
					<text class="oinputs">0</text>
				</view>
				<view class="twov">
					<text>已兑金额:</text>
					<text class="tinputs">0</text> 
				</view>
			</view>
			
			<view class="viewsone">
				<text>下单密码:</text>
				<input class="inputone"/>
			</view>
			
			<view class="viewsone">
				<text>唯一标识:</text>
				<text class="tinputs"></text>
			</view>
			
			<view class="viewsone">
				<text>办会员:</text>
				<input class="disableput" placeholder="请选择" disabled="true"/>
			</view>
			
			<view class="viewsthour">
				<text>客户分类</text>
				<text class="custext">xx</text>
				<image class="imageicon" src="../../../static/images/arrow-icon.png"></image>
			</view>
			
			<view class="viewsfive">
				<radio>是否提醒</radio>
				<view @click="selectTTime">
					<input  v-show="ttime ? false : true" class="inputs" placeholder="请选择提醒时间" disabled="true"/>
					<text v-show="ttime ? true : false">{{ttime}}</text>
				</view>
				
				<view class="btns" @click="handleRecorderAction">
					<text>语音</text>
				</view>
			</view>
			
			<view class="viewssix">
				<input class="inputs" placeholder="请输入跟文本"/>
			</view>
			
		</scroll-view>
		
		
		<uni-popup ref="pops" type="center" :isMaskClick="false">
			<view class="popsview">
				
				<view class="lviews">
					<image class="tm"></image>
					<arprogress class="circless" :percent="percent">
						<image style="width: 30px;height: 30px;background-color: green;"></image>
					</arprogress>
					<image @click="closeAction" class="tm" src="../../../static/images/close_icons.png"></image>
				</view>
				
				
				<view class="tviews">
					
					<text class="tt">录音</text>
					<u-button class="btns" :text="btntitle" @click="luyin"></u-button>
					<u-button class="btns" text="播放" @click="playVoice"></u-button>
				</view>
				

				

			</view>
		</uni-popup>
		
		<luch-audio :src="voicePath" :play.sync="audioPlay"></luch-audio>
		
		<u-datetime-picker 
		:show="show"
		 mode="datetime"
		 v-model="newtime"
		 closeOnClickOverlay
		 @confirm="confirm"
		 @cancel="cancel"
		 ></u-datetime-picker>
		 
		 <u-picker
		 :show="show1"
		 :columns="columns1"
		 @cancel="pickcancel"
		 @confirm="pickconfirm"
		 ></u-picker>
		 
		
		
	</view>
</template>

<script>
	
	 import arprogress from '@/components/ar-circle-progress/index.vue'
	
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	
	export default {
		data() {
			return {
				cangk:'',
				percent:0,
				btntitle:'开始录音',
				
				show:false,
				newtime:Number(new Date()),
				ttime:'',
				
				timer:null,// 定时器
				
				voicePath:'' ,// 录音文件地址
				audioPlay:false ,// 是否播放 如果true音频会播放，否则暂停
				
				show1:false,
				columns1:[['中国', '美国', '日本']]
				
			};
		},
		components:{
			arprogress
		},
		onLoad(options){

		 
		 // console.log("uni.getRecorderManager()",uni.getRecorderManager())
		 
		 let self = this;
		 
		 recorderManager.onStop(function (res) {
		 
		   console.log('recorder stop' + JSON.stringify(res));
		 
		   self.voicePath = res.tempFilePath;
		   // self.downloadFile(res.tempFilePath); 下载文件
		 
		 });	
		},
		methods:{
			// 选择提醒时间
			selectTTime(){
			 this.show = true	
			},
			// 选择时间
			confirm(e){
				const timeFormat = uni.$u.timeFormat
				 this.show = false
				 this.ttime = timeFormat(e.value, 'yyyy-mm-dd hh:MM')
				 this.newtime = e.value
				 // console.log(e)
			},
			// 取消
			cancel(){
				 this.show = false
			},
			// 下单仓库
			loadingcangku(){
			  this.show1 = true	
			},
			// 下单仓库
			pickcancel(){
			  this.show1 = false	
			},
			// 下单仓库选择
			pickconfirm(e){
				this.show1 = false
				this.cangk = e.value[0]
				console.log(e.value[0])
			},
			// 录音 弹框
			handleRecorderAction(){
			  this.$refs.pops.open()
			 
			},
			// 关闭录音 弹框
			closeAction(){
				this.$refs.pops.close()	
				// this.clearTimer()
				this.stopluyin() // 结束录音
			},
			// 开始录音
			luyin(){
				if(this.btntitle == '开始录音'){
					this.btntitle = '结束录音'
					this.createDownTime()
					recorderManager.start();
				}
				else{
					this.btntitle = '开始录音'
					this.stopluyin();// 结束录音
				}
			},
			//播放录音
			playVoice(){
				// console.log('播放录音');
				// console.log('this.voicePath',this.voicePath);
				if (this.voicePath) {
				
				innerAudioContext.src = this.voicePath;
				
				innerAudioContext.play();
				
				}

			},
			// 录音倒计时
			createDownTime(){
				let that = this
				this.timer = setInterval(function(){
					that.percent++
					if(that.percent == 100){
						that.stopluyin() // 结束录音
						uni.showToast({
							icon:'none',
							title:'录音结束'
						})
						
					}
				},300)
			},
			// 清空定时器
			clearTimer(){
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				}	
			},
			// 结束录音
			stopluyin(){
				this.clearTimer() // 清空定时器
				recorderManager.stop();// 结束录音
			},
			
			downloadFile(url) {
				console.log(url);
				const downloadTask = uni.downloadFile({
					url: url, //文件链接
					success: res => {
						if (res.statusCode === 200) {
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: red => {
									console.log(1, red.savedFilePath);
									uni.showToast({
										icon: 'none',
										mask: true,
										title: '文件已保存：' + red.savedFilePath, //保存路径
										duration: 3000
									});
									setTimeout(() => {
										//打开文档查看
										uni.openDocument({
											filePath: red.savedFilePath,
											success: function(res) {
												console.log('打开文档成功');
											}
										});
									}, 3000);
								}
							});
						}
					},
					fail: err => {
						uni.showToast({
							icon: 'none',
							mask: true,
							title: '失败请重新下载'
						});
					}
				});
			}
				
		},
		onUnload(optation) {
			this.clearTimer()
		}
		
		
		
		
		
		
	}
</script>

<style lang="less" scoped>

.container{
	height: 100vh;
	.src{
		height: 100%;
	
		.viewsone{
			display: flex;
			flex-direction: row;
			padding: 20rpx;
			.inputone{
				border: 0.5px solid #828282;
				box-sizing: border-box;
				margin-left: 10rpx;
				height: 25px;
				flex: 1;
			}
			
			.disableput{
				margin-left: 10rpx;
				height: 25px;
				flex: 1;
			}
				
		}
		
		.viewstwo{
			display: flex;
			flex-direction: row;
			padding: 20rpx;
			.inputtwo{
				border: 0.5px solid #828282;
				box-sizing: border-box;
				margin-left: 10rpx;
				margin-right: 10rpx;
				height: 25px;
				flex: 1;
			}
			.upviews{
				background-color: #0076ff;
				border-radius: 15px;
				height: 30px;
				width: 80px;
				color: white;
				font-size: 14px;
				display: flex;
				align-items: center;
				text-align: center;
				justify-content: center;
			}
		}
		
		.viewsthree{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			padding: 20rpx;
			.onev{
				flex: 1;
				display: flex;
				flex-direction: row;
				.oinputs{
					flex: 1;
					margin-left: 6rpx;
					margin-right: 6rpx;
				}
			}
			.twov{
				flex: 1;
				display: flex;
				flex-direction: row;
				.tinputs{
					flex: 1;
					margin-left: 6rpx;
					margin-right: 6rpx;
				}
			}
			
		}
		
		.viewsthour{
			display: flex;
			flex-direction: row;
			padding: 20rpx;
			background-color: white;
			justify-content: space-between;
			.imageicon{
				height: 20px;
				width: 20px;
			}
			.custext{
				flex: 1;
				text-align: right;
				margin-left: 10rpx;
				margin-right: 10rpx;
			}
		}
		
		.viewsfive{
			display: flex;
			flex-direction: row;
			padding: 20rpx;
			justify-content: space-between;
			.inputs{
				flex: 1;
				margin-left: 20rpx;
				margin-right: 10rpx;
			}
			.btns{
				background-color: blue;
				color: white;
				font-size: 14px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				width: 60px;
				height: 30px;
				border-radius: 15px;
			}
		}
		
		.viewssix{
			display: flex;
			padding: 20rpx;
			.inputs{
				border: 0.5px solid #828282;
				box-sizing: border-box;
				margin-left: 20rpx;
				margin-right: 20rpx;
				height: 25px;
				flex: 1;
				
			}
		}
		
		
		
		
	}
}

.popsview{
	background-color: white;
	height: 180px;
	width: 180px;
	
	.tviews{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20rpx;
		.tt{
			// flex: 1;
			text-align: center;
			font-size: 15px;
			color: #828282;
		}
		.btns{
			color: white;
			background-color: #0076ff;
			width: 100px;
			height: 30px;
			border-radius: 15px;
			// margin-top: 16rpx;
		}

		
	}
	
	.lviews{
		display: flex;
		flex-direction: row;
		.tm{
			width: 25px;
			height: 25px;
			margin-right: 20rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
		}
		.circless{
			margin-top: 20rpx;
		}
		
	}
	
	
}




</style>

<style>
	page{
		background-color: #fafafa;
	}
</style>
