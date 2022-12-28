<template>
	<view class="container">
		
		
		<view class="header">
			<view class="subview" v-for="(item,index) in breadcrumblist" :key="index" @click="handlebread(item,index)">
				<text>{{item.name}}</text>
				<image v-show="index != breadcrumblist.length -1" class="subicon" src="../../../static/images/arrow-icon.png"></image>
			</view>
		</view>
		<view class="ifoview">
			<view class="leftview">
				
				<scroll-view scroll-y="true" class="src">
					<view class="leftitem" v-for="(item,index) in goodlist" :key="index" @click="handleItemAction(item)">
						<text class="textstyle">{{item.name}}</text>
						<image v-show="item.childer" class="arricon" src="../../../static/images/arrow-icon.png"></image>
					</view>
				</scroll-view>

			</view>
			<view class="rightview">
				<view class="topview">
					<view>
						<text>{{checkitem}}</text>
					</view>
					<view class="seclassview">
						<text>排序</text>
						<image class="aimageicon" src="../../../static/images/arrow-icon.png"></image>
					</view>
					<view class="seclassview" @click="handleSerchAction">
						<text>组合搜</text>
						<image class="aimageicon" src="../../../static/images/arrow-icon.png"></image>
					</view>
				</view>
				<view class="botview">
					
					<scroll-view class="botscr" scroll-y="true">
						
						<uni-swipe-action>
							<uni-swipe-action-item 
							v-for="(item,index) in celllist" 
							:key="item" 
							>
								<template v-slot:right>
									<view class="soltview">
										<view @click="swipeClick('删除')" class="solt1"><text>删除</text></view>
										<view @click="swipeClick('编辑')" class="solt2"><text>编辑</text></view>
										<view @click="swipeClick('跟单')" class="solt3"><text>跟单</text></view>
										<view @click="swipeClick('拨号')" class="solt4"><text>拨号</text></view>
										<view @click="swipeClick('拜访情况')" class="solt5"><text class="solttext">拜访情况</text></view>
									</view>
								</template>
								
								<view class="srcview">
									<view class="itemsviews">
										<text class="texts">客户名称: xx刷卡的福晶科技付款时间付款时间可点击</text>
									</view>
									<view class="itemsviews">
										<text class="texts">客户电话: xx</text>
									</view>
									<view class="itemsviews">
										<text class="texts">客户地址: xx</text>
									</view>
									<view class="itemsviews">
										<text class="texts">最近一次: xx</text>
									</view>
									<view class="itemtviews">
										<view class="lviews">
											<text class="ltext">紧急情况:xx</text>
										</view>
										<view class="rviews">
											<text class="rtext">客户等级:xx</text>
										</view>
									</view>
									<view class="itemtviews">
										<view class="lviews">
											<text class="ltext">归属仓库:xx</text>
										</view>
										<view class="rviews">
											<text class="rtext">负责人:xx</text>
										</view>
									</view>
									<view class="itemsviews">
										<text class="texts">拜访情况: xx</text>
									</view>
									
								</view>
								
								
							</uni-swipe-action-item>
						</uni-swipe-action>
						

						
					</scroll-view>
				</view>
			</view>
		</view>
		
		
		<uni-drawer :width="300" ref="cusdrawer" mode="right">
			<view class="drawviews">
				
				<view class="srcviews">
					<scroll-view class="srcs" scroll-y="true">
						<view class="oneview">
							<view class="ynview">
								<text>业务员</text>
							</view>
							<view class="ytview">
								<view class="itemviews" v-for="(item,index) in dlist" :key="index">
									<text>{{item}}</text>
								</view>
							</view>
						</view>
						
						<view class="oneview">
							<view class="ynview">
								<text>紧急度</text>
							</view>
							<view class="ytview">
								<view class="itemviews" v-for="(item,index) in dlist" :key="index">
									<text>{{item}}</text>
								</view>
							</view>
						</view>
						
						<view class="oneview">
							<view class="radiuview">
								<radio-group>
									<radio class="radiobtn">未回访</radio>
									<radio>已回访</radio>
								</radio-group>
							</view>
							<view class="ytview">
								<view class="itemviews" v-for="(item,index) in dlist" :key="index">
									<text>{{item}}</text>
								</view>
							</view>
						</view>
						
						<view class="oneview">
							<view class="inviews">
								<text>用户姓名:</text>
								<input class="inputss"/>
							</view>
							<view class="inviews">
								<text>用户电话:</text>
								<input class="inputss"/>
							</view>
							<view class="inviews">
								<text>用户地址:</text>
								<input class="inputss"/>
							</view>
						</view>
						
						
						
					</scroll-view>
				</view>
				<view class="botombtn">
					<view class="cancelbtn">
						<text>重置</text>
					</view>
					<view class="surbtns">
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
				goodlist:[],
				breadcrumblist:[],// 中间数据源集合
				checkitem:'',
				celllist:['1','2','3','4','5','6','7','8','9','10','11'],
				dlist:['小李123','校长','测试人员','那你说啊','我也不清楚啊','啧啧'],
				ntitle:''

			};
		},
		onLoad(e) {
			this.goodlist = this.$ld.goodlists
			// 顶部 面包屑与其所在的数据集合绑定
			this.breadcrumblist = [{'name':'全部','arr':this.goodlist}]
			this.ntitle = e.flag
		},
		onReady() {
			uni.setNavigationBarTitle({
				title:this.ntitle
			})
		},
		methods:{
			// 导航栏 按钮点击事件
			onNavigationBarButtonTap(e){
				var nu = e.index
				if(nu == 0){
					// 加
					uni.navigateTo({
						url:'/pages/hsoPage/hascusdetailer/hascusdetailer'
					})

				}
				else if(nu == 1){
					// 消息
					uni.navigateTo({
						url:'/pages/hsoPage/hascusmessage/hascusmessage'
					})
				}
			},
			// 左侧分类列表点击事件
			handleItemAction(item){
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
					  this.checkitem = this.breadcrumblist[index].name == '全部' ? '' : this.breadcrumblist[index].name
				  }
			  }
					  
			},
			// 组合搜
			handleSerchAction(){
			  this.$refs.cusdrawer.open()	
			},
			// 侧滑点击事件
			swipeClick(e){
			
				console.log('侧滑',e)
				uni.showToast({
					icon:'none',
					title:'内容'+e
				})
				
			},
		//
			
			
			
			
		}
	}
</script>

<style lang="scss" scoped>


.container{
	height: 100vh;
	display: flex;
	flex-direction: column;
	.header{
		height: 50px;
		background-color: white;
		display: flex;
		align-items: center;
		.subview{
			display: flex;
			flex-direction: row;
			align-items: center;
			color: #0076ff;
			.subicon{
				height: 28rpx;
				width: 28rpx;
				margin-left: 10rpx;
				margin-right: 10rpx;
			}
		}
	}
	
	.ifoview{
		flex: 1;
		display: flex;
		flex-direction: row;
		height: calc(100vh - 50px);
		.leftview{
			width: 100px;
			height: 100%;
			background-color: gainsboro;
			.src{
				height: 100%;
				.leftitem{
					min-height: 50px;
					border-bottom: 0.5px #828282 solid;
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					align-items: center;
					// justify-content: center;
					.textstyle{
						word-break: break-all;
						flex: 1;
						margin-left: 10rpx;
					}
					.arricon{
						width: 28rpx;
						height: 28rpx;
						margin-left: 10rpx;
						margin-right: 10rpx;
					}
				}
			}

		}
		.rightview{
			flex: 1;
			display: flex;
			flex-direction: column;
			height: 100%;
			.topview{
			  height: 40px;
			  background-color: #ffffff;
			  border-top: 0.5px #828282 solid;
			  border-bottom: 0.5px #828282 solid;
			  box-sizing: border-box;
			  display: flex;
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
			.botview{
				// flex: 1;
				height: calc(100vh - 90px);
				// background-color: red;
				.botscr{
					height: 100%;
					.soltview{
						margin-top: 20rpx;
						padding-bottom: 10rpx;
						display: flex;
						flex-direction: row;
						color: white;
						.solt1{
							background-color: #0076ff;
							width: 40px;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.solt2{
							background-color: goldenrod;
							width: 40px;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.solt3{
							background-color: #0076ff;
							width: 40px;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.solt4{
							background-color: red;
							width: 40px;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.solt5{
							background-color: rebeccapurple;
							width: 40px;
							display: flex;
							align-items: center;
							justify-content: center;
							.solttext{
								word-wrap: break-word;
								word-break: break-all;
								text-align: center;
							}
						}
						
					}
					.srcview{
						background-color: white;
						margin-top: 20rpx;
						padding-top: 10rpx;
						padding-bottom: 10rpx;
						padding-left: 20rpx;
						padding-right: 20rpx;
						.itemsviews{
							display: flex;
							align-items: center;
							.texts{
								word-break: break-all;
								word-wrap: break-word;
							}
						}
						.itemtviews{
							display: flex;
							flex-direction: row;
							justify-content: space-around;
							align-items: center;
							.lviews{
								flex: 1;
								// background-color: rebeccapurple;
								.ltext{
									word-break: break-all;
									word-wrap: break-word;
								}
							}
							.rviews{
								flex: 1;
								.rtext{
									word-break: break-all;
									word-wrap: break-word;
								}
							}
						}
					}
				}
			}
		}
	}
	
	
}

.drawviews{
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	.srcviews{
		flex: 1;
		position: relative;
		left: 0;
		right: 0;
		top: 0;
		.srcs{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			.oneview{
				border: 0.5px solid orangered;
				margin: 20rpx;
				padding-bottom: 10rpx;
				display: flex;
				flex-direction: column;
				.ynview{
					color: #333333;
					margin-top: 10rpx;
					margin-left: 10rpx;
					margin-bottom: 10rpx;
				}
				.radiuview{
					margin-top: 10rpx;
					margin-left: 10rpx;
					margin-bottom: 10rpx;
					.radiobtn{
						margin-right: 30rpx;
					}
				}
				.ytview{
					display: flex;
					flex-direction: row;
					// justify-content: space-around;
					flex-wrap: wrap;
					.itemviews{
						border: 0.5px solid #828282;
						display: flex;
						align-items: center;
						justify-content: center;
						padding-top: 6rpx;
						padding-bottom: 6rpx;
						padding-left: 12rpx;
						padding-right: 12rpx;
						margin: 10rpx;
						
					}
				}
				
				.inviews{
					display: flex;
					flex-direction: row;
					margin-top: 20rpx;
					padding-left: 10rpx;
					padding-right: 10rpx;
					.inputss{
						border: 0.5px solid #828282;
						margin-left: 10rpx;
						height: 25rpx;
						flex: 1;
					
					}
				}
				
			}
		}

	}
	.botombtn{

		height: 50px;
		border-top: 0.5px solid #828282;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 16px;
		.cancelbtn{
			background-color: #F2F2F2;
			color: #0076ff;
			height: 36px;
			border-radius: 18px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100px;
			margin-left: 20px;
		}
		.surbtns{
			background-color: #0076ff;
			color: white;
			height: 36px;
			border-radius: 18px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100px;
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
