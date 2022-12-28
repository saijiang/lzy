<template>
  <view class="scrool-page">
	  
	<view class="header-cont">
		<view class="header1">
			<view class="messelect" @click="handleSelectCustomer">
				<view class="selectinput">
					<text class="titlestyle">单位名称:</text>
					<input placeholder="请选择" disabled="false"/>
				</view>
				<view class="selectinput">
					<text class="titlestyle">单位电话:</text>
					<input placeholder="请选择" disabled="false"/>
				</view>
				<view class="selectinput">
					<text class="titlestyle">单位地址:</text>
					<input placeholder="请选择" disabled="false"/>
				</view>
			</view>
			<view class="arrowhead">
				<image class="arrowicon" src="../../static/images/arrow-icon.png"></image>
			</view>
		</view>
		<view class="header2" @click="handleWarehouse">
			<text class="h2title">发货仓库:</text>
			<text>{{warehouse}}</text>
		</view>
		<view class="header3">
			<view class="selectpeople" @click="handleSalesman">
				<text class="peopletitle">业务员:</text>
				<input class="peoselect" disabled="true" :value="salesman" placeholder="请选择"/>
			</view>
			<view class="selecttimes">
				<text class="timestitles">制单日期:</text>
				<view class="timeselect">
					<picker mode="date" @change="bindDateChange">
						<input disabled="true" :value="seTimesDate" placeholder="请选择"/>
					</picker>
				</view>
				<!-- <input class="timeselect" placeholder="请选择"/> -->
				
				<image class="timeimageicon" src="../../static/images/time-icon.png"></image>
			</view>
			<view class="selectscan" @click="handleScanCode">
				<view class="roundview">扫条码</view>
			</view>
		</view>
		<view class="header4">
			<view v-for="(item,index) in infoTab" :key="index" class="itemstyles">
				<text>{{item}}</text>
			</view>
		</view>
		<view class="header5">
			<input class="inputasssub" placeholder="请输入" ref="codings" v-for="(item,index) in infoTab" :key="index" @input="inputCoding($event,item)"/>
		</view>
	
	</view>
	
    <view class="list-cont">
	      <scroll-view class="scrool-more" style="height: 100%" scroll-y="true" scroll-with-animation="true">
		
		
		  <view lass="list" v-show="!listflag" v-for="(item,index) in list" :key="index" @click="handleSelectActions(item)">
			{{item}}
		   </view>
		   
	
			 <ordercell v-show="listflag" v-for="(item,index) in addlist" class="orderstyle"></ordercell>  
		 
		   
		  
			
	      </scroll-view>
	 </view>

	  <view class="footer">
		<view class="fview1">
			<text class="fview1t">总数量</text>
			<text>0</text>
		</view>
		<view class="fview2">
			<text class="fmoenyt">00</text>
			<text>总金额</text>
			<image class="fimageicon" src="../../static/images/time-icon.png"></image>
		</view>

	 </view>

    <!-- 仓库选择弹框 -->
    <uni-popup ref="pops" type="bottom">
		<view class="bottomv">
			<view class="topview"><text>{{popTitle}}</text></view>
			<scroll-view class="bottomalert" scroll-y="true">
				<uni-list>
					<uni-list-item v-for="(item,index) in tabList" :key="index" clickable @click="popItemAction(item)">
						<template v-slot:body>
							<view class="bottomItme">
								<text>{{item}}</text>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
			</scroll-view>
		</view>
    </uni-popup>






   </view>
</template>

<script>
	
	import ordercell from './ordercell.vue'
	
export default {
	
	data() {
		return {
			infoTab:['编码','条码','品名','规格','型号','颜色','尺码'],
			tabList:[],
			warehouse:'仓库2',
			salesman:'',
			popTitle:'', //选择弹框标题
			seTimesDate:'',// 制单日期
			list: [],
			addlist:['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
			listflag:true
				
			
		};
	},
	mounted() {

		
	},
	components:{
		ordercell
	},
	props:{
	  flagAction:{
		  type:String,
		  default:''
	  }	
	},
	methods:{
      
	  // 选择客户
	  handleSelectCustomer(){
		uni.navigateTo({
			url:'/pages/hsoPage/hsocustomer/hsocustomer?flag='+this.flagAction
		})  
	  },
	  
	  // 发货仓库选择
	  handleWarehouse(){
		  this.tabList = ['产品','加单','开单','结算']
		  this.popTitle = '发货仓库'
		  this.$refs.pops.open() 
	  },
	  // 仓库列表点击选择
	  popItemAction(e){
		  if(this.popTitle == '发货仓库'){
			 // 选择仓库
			 this.warehouse = e
			 this.$refs.pops.close() 
		  }
		  else if(this.popTitle == '业务员'){
			 // 选择业务员
			 this.salesman = e
			 this.$refs.pops.close()  
		  }

	  },
	  // 选择业务员
	  handleSalesman(){
		 this.tabList = ['小李','小张','小王','小孙']
		 this.popTitle = '业务员' 
		 this.$refs.pops.open() 
	  },
	  // 选择时间日期
	  bindDateChange(e){
		  this.seTimesDate = e.detail.value
	  },
	  // 扫描二维码
	  handleScanCode(){
		  uni.scanCode({
		  	scanType:['qrCode'],
			success(e) {
				
			}
		  })
	  },
	  // 编码
	  inputCoding(e,item){
		  // console.log(e.detail.value)
		  // console.log(index) '编码','条码','品名','规格','型号','颜色','尺码'
		  var inputvalues = e.detail.value
		  if(inputvalues){
			 var vs = this.$ld.requirelist(item,inputvalues)
			 if(vs){
			 	 this.listflag = false 
			 }
			 this.list = vs  
		  }
		  else{
			  this.listflag = true 
		  }
 
	  },
	  // 点击选择
	  handleSelectActions(item){
		  // console.log('选择的值',item)
		  this.listflag = true
	  }


	}
 }
</script>

<style lang="scss" scoped>
.scrool-page {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}

.header-cont {
	width: 100%;
	height: 390rpx;
	background: white;
}

.header1{
	border-bottom: 0.5px solid #e0e0e0;
	display: flex;
	.messelect{
		flex: 1;
		.selectinput{
			display: flex;
			margin-top: 6rpx;
			.titlestyle{
				margin-left: 20rpx;
				margin-right: 30rpx;
			}
		}
	}
	.arrowhead{
			width: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center; 
			.arrowicon{
					width: 40rpx;
					height: 40rpx;
					
			}
	}
	
}

.header2{
	border-bottom: 0.5px solid #e0e0e0;
	padding-top: 10rpx;
	padding-bottom: 10rpx;
	.h2title{
		margin-left: 20rpx;
		margin-right: 30rpx;
	}
}

.header3{
	display: flex;
	justify-content: space-between;
	padding-top: 10rpx;
	.selectpeople{
		display: flex;
		.peopletitle{
			width: 55px;
			margin-left: 20rpx;
			margin-right: 20rpx;
		}
		.peoselect{
			flex: 1;
		}
	}
	.selecttimes{
		display: flex;
		.timestitles{
			width: 70px;
			margin-left: 20rpx;
			margin-right: 20rpx;
		}
		.timeselect{
			flex: 1;
		}
		.timeimageicon{
			width: 20px;
			height: 20px;
		}
	}
	.selectscan{
		width: 110px;
		margin-right: 10rpx;
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.roundview{
			height: 30px;
			width: 100%;
			border-radius: 15px;
			padding-top: 3px;
			background-color: #0076ff;
			text-align: center;
			
		}
	}
}

.header4{
	margin-top: 10rpx;
	display: flex;
	justify-content: space-between; 
	background-color: #0076ff;
	height: 60rpx;
	color: #ffffff;
	.itemstyles{
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1; 
	}
}

.header5{
	display: flex;
	justify-content: space-between; 
	align-items: center;
	background-color: #e0e0e0;
	.inputasssub{
		flex: 1;
		text-align: center;
		margin-left: 4rpx;
		margin-right: 4rpx;
	}
}



.list-cont {
	flex: 1;
	position: relative;

	.scrool-more {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	
	.orderstyle{
		margin-top: 8px;
		margin-left: 20px;
		margin-right: 20px;
		background-color: #ffffff;
	}

	.list {
		height: 160rpx;
		line-height: 80rpx;
		text-align: center;
		background: #e0e0e0;
		background-color: red;

	}
}


.footer {
	color: #fff;
	line-height: 80rpx;
	/* 不放大不缩小固定100rpx */
	flex: 0 0 80rpx;
	display: flex;
	justify-content: space-around;
	.fview1{
		background-color: #ffffff;
		flex: 1;
		display: flex;
		align-items: center;
		color: #333333;
		.fview1t{
			margin-left: 10rpx;
			margin-right: 10rpx;
		}
	}
	.fview2{
		background-color: #ffffff;
		flex: 1;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		color: red;
		.fimageicon{
			width: 20px;
			height: 20px;
			margin-right: 10rpx;
		}
		.fmoenyt{
			margin-right: 10rpx;
			margin-left: 10rpx;
		}
	}
	
}


.bottomv{
	height: 350rpx;
	display: flex;
	flex-direction: column;
	background-color: white;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	align-items: center;
	.topview{
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
}

.bottomalert{
		 height: 300rpx;
		 border-radius: 8px;
		 background-color: #ffffff;
}
.bottomItme{
		 display: flex;
		 width: 100%;
}


</style>