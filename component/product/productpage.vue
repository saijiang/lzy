<template>
	
	
	<view class="contain">
		
		 <view class="header">
			 <view class="leftview">
				 
				 <view class="breadview" v-for="(item,index) in breadcrumblist" :key="index" @click="handlebread(item,index)">
					 <text>{{item.name}}</text>
					 <image v-show="index != breadcrumblist.length -1" class="imageicons" src="../../static/images/arrow-icon.png"></image>
				 </view>

			 </view>
			 <view class="rightview">
				<uni-search-bar class="searchstyle" bgColor="#eeeeee" placeholder="搜索" @input="searchAction"></uni-search-bar>
			 </view>
		 </view>
		 
		 <view class="containers">
			 <view class="lefts">
				<scroll-view scroll-y="true" class="scrviews">
					 
					<view v-for="(item, index) in goodlist" :key="index" class="items" @click="handleItmeClass(item)">
						<text class="titlename">{{item.name}}</text>
						<image v-show="item.childer" class="arricon" src="../../static/images/arrow-icon.png"></image>
					 </view>
					
					
				 </scroll-view>
			 </view>
			 
			 <view class="rights">
				 <view class="topsearchview">
					 <view>
						 <text>{{checkitem}}</text>
					</view>
					 <view class="seclassview" @click="handletosort">
						 <text>排序</text>
						 <image class="aimageicon" src="../../static/images/arrow-icon.png"></image>
					 </view>
					 <view class="seclassview" @click="combinedSearch">
						 <text>组合搜</text>
						 <image class="aimageicon" src="../../static/images/arrow-icon.png"></image>
					 </view>
				 </view>
				 <scroll-view scroll-y="true" class="goodsrc">
	
					<view class="itemsview" v-for="(item, index) in goodlist" :index="index" :key="index">
						<view class="imgaeview">
							<image class="imageicon"></image>
						</view>
						<view class="mesview">
							<text class="texts">品名: 0523</text>
							<text class="texts">单位: 套</text>
							<text class="texts">价格: 0.0</text>
						</view>
					</view>

				 </scroll-view>
			 </view>
			 
		 </view>
		 
		 <uni-drawer ref="showRight" mode="right" :width="300">
			 <view class="drawerview">
				 
				 <scroll-view scroll-y="true" class="scrdrawer">
					 
					 <view class="drawer1">
						 <view class="searchviews">
							 <view class="titles">
								 <text>规格</text>
							 </view>
							 <view class="searchbar">
								<uni-search-bar class="search-bar"  placeholder="搜索"></uni-search-bar>
							 </view>
						 </view>
						 <view class="searchclass">
							 <view v-for="(item,index) in goodlist" class="guitem">
								  <text>{{item.name}}</text>
							 </view>
						 </view>
					 </view>
					 
					 <view class="drawer1">
						 <view class="searchviews">
							 <view class="titles">
								 <text>颜色</text>
							 </view>
							 <view class="searchbar">
								<uni-search-bar class="search-bar"  placeholder="搜索"></uni-search-bar>
							 </view>
						 </view>
						 <view class="searchclass">
							 <view v-for="(item,index) in goodlist" class="guitem">
								  <text>{{item.name}}</text>
							 </view>
						 </view>
					 </view>
					 
					 <view class="btnsview">
						 <view class="canview" @click="cancelAction">
							 <text>重置</text>
						 </view>
						 <view class="sureview" @click="sureAction">
							 <text>确认</text>
						 </view>
					 </view>
				
				 </scroll-view>
				 
				 
			 </view>
		 </uni-drawer>
		 
		 
	</view>
	
	
</template>

<script>
export default {
	
	data() {
		return {
			
			goodlist:[],
			breadcrumblist:[],// 中间数据源集合
			checkitem:''

		};
	},
	mounted() {

      this.goodlist = this.$ld.goodlists
	  // 顶部 面包屑与其所在的数据集合绑定
	  this.breadcrumblist = [{'name':'全部','arr':this.goodlist}]
		
	},
	methods:{

      // 搜索
	  searchAction(e){
		 console.log(e)
	  },
	  // 左列表点击分类事件
	  handleItmeClass(item){
		 console.log(item)
		 this.checkitem = item.name // 点击 (选中) 的类别
		  
		 if(item.childer){
			 this.goodlist = item.childer
			 var dic = {'name': this.checkitem,'arr':item.childer}
			 this.breadcrumblist.push(dic)
		 }

	  },
	  // 面包屑点击事件
	  handlebread(item,index){
		  // console.log(index)
		  if(this.breadcrumblist.length == 1){
			  if(index == 0) return
		  }
		  else{
			  if(index == this.breadcrumblist.length - 1)return
			  else{
				  this.breadcrumblist = this.breadcrumblist.splice(0,index+1)
				  this.goodlist = this.breadcrumblist[index].arr
			  }
		  }
		  
	  },
	  // 组合搜索
	  combinedSearch(){
		  this.$refs.showRight.open()
	  },
	  // 排序
	  handletosort(){
		  
	  },
	  
	  // 组合搜索 重置
	  cancelAction(){
		  
	  },
	   // 组合搜索 确认
	   sureAction(){
		   this.$refs.showRight.close() 
	   }
	  
	  
	  

	}
 }
</script>

<style lang="scss" scoped>

.contain{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.header{
	height: 100rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	.leftview{
		
		flex: 1;
		display: flex;
		align-items: center;
		// background-color: yellowgreen;
		.breadview{
		 // background-color: rebeccapurple;
	     color: #0076ff;
		.imageicons{
			width: 20rpx;
			height: 20rpx;
			margin-left: 10rpx;
			margin-right: 10rpx;
		}
		}

		
	}
	.rightview{
		
		flex: 1;
		display: flex;
		align-items: center;
		.searchstyle{
			flex: 1;
		}
	}
}

.containers{
	flex: 1;
	display: flex;
	flex-direction: row;

	.lefts{
		width: 180rpx;
		background-color: gainsboro;
		.scrviews{
			height: calc(100vh - 100rpx   - 100rpx); // - var(--status-bar-height)
			.items{
				min-height: 120rpx;
				border-bottom: 0.5px solid #828282;
				box-sizing: border-box;
				
				margin-right: 10rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				background-color: gainsboro;
				.titlename{
					word-break: break-all;
					margin-left: 10rpx;
					flex: 1;
				}
				.arricon{
					width: 30rpx;
					height: 30rpx;
					margin-right: 10rpx;
					margin-left: 10rpx;
				}
			}
		}
		
	}
	.rights{
		flex: 1;
	.topsearchview{
		height: 100rpx;
		border-bottom: 0.5px solid #828282;
		border-top: 0.5px solid #828282;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		color: #0076ff;
		.seclassview{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.aimageicon{
				height: 20rpx;
				width: 20rpx;
				margin-left: 10rpx;
				transform: rotate(90deg);
			}
		}
	}
	.goodsrc{
			height: calc(100vh - 100rpx   - 100rpx - 100rpx);

			.itemsview{
				border-bottom: 0.5px solid #828282;
				box-sizing: border-box;
				min-height: 180rpx;
				display: flex;
				flex-direction: row;
				.imgaeview{
					width: 120rpx;
					// background-color: greenyellow;
					display: flex;
					align-items: center;
					justify-content: center;
					.imageicon{
						height: 100rpx;
						width: 100rpx;
						background-color: firebrick;
					}
				}
				
				.mesview{
					flex: 1;
					// background-color: blue;
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 40rpx;
					.texts{
						word-break: break-all;
					}
				}
				
			}
		}
	}
}


.drawerview{

	width: 100%;
	height: 100%;
	.scrdrawer{
		height: 100%;
		
		.drawer1{
			border-bottom: 0.5px solid #828282;
			box-sizing: border-box;
			padding-bottom: 20rpx;
			.searchviews{
				display: flex;
				align-items: center;
				.titles{
					width: 50px;
					display: flex;
					text-align: center;
					justify-content: center;
				}
				.searchbar{
					flex-grow: 1;
				}
			}
			.searchclass{
		
				display: flex;
				flex-wrap: wrap;
				.guitem{
					height: 30px;
					border-radius: 15px;
					color: #000000;
					border: 0.5px solid #828282;
					box-sizing: border-box;
					margin-left: 10px;
					margin-right: 5px;
					margin-top: 8px;
					padding-left: 10px;
					padding-right: 10px;
					padding-top: 5px;
					padding-bottom: 5px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				
			}
		
		}
		
		.btnsview{
			height: 90rpx;
			border-bottom: 0.5px solid #828282;
			box-sizing: border-box;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.canview{
				background-color: #0076ff;
				width: 90px;
				height: 60rpx;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ffffff;
				font-size: 16px;
			}
			.sureview{
				background-color: #0076ff;
				width: 90px;
				height: 60rpx;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ffffff;
				font-size: 16px;
			}
		}
			
	}
	
	

}

</style>