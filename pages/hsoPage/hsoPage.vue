<template>
	<view>
		
		
		<view class="fcount">
			
			<z-tabs :tabsStyle="tabsStyle" ref="tabs" :list="tabList" :current="currentTab" @change="tabsChange" barWidth="120rpx" barHeight="2px"></z-tabs>
		    <view class="tabview">
				<productpage v-show="currentTab == 0"></productpage>
				<addorder v-show="currentTab == 1"></addorder>
				<openOrder v-show="currentTab == 2" flagAction="客户"></openOrder>
				<lement v-show="currentTab == 3"></lement>
			</view>
			<!-- <view style="height: 100rpx; background-color: blue;"></view> -->
		</view>
		
	
	</view>
	
</template>

<script>
	import scell from '../../component/scell/scell.vue'
	// 开单
	import openOrder from '../../component/openorder/openorder.vue'
	import productpage from '../../component/product/productpage.vue'
	import addorder from '../../component/addorder/addorder.vue'
	import lement from '../../component/lement/lement.vue'
	
	export default {
		data() {
			return {
				tabList:['产品','加单','开单','结算'],
				currentTab:2,
				tabsStyle:{
					"height": "100rpx",
					 "background-color": "#ffffff",
				},
				
				
			};
		},
		components:{
			scell,
			openOrder,
			productpage,
			addorder,
			lement
		},
		methods:{

			onNavigationBarButtonTap(e){
				// console.log('点击销售出库',e)
				uni.navigateTo({
					url:'/pages/saleoutpage/saleoutpage?title='+'销售出库'
				})
			},
			// tab 切换
			tabsChange(index){
				this.currentTab = index
			},
		
				
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor:"#ffffff"
			})
		}
		
	}
</script>

<style lang="less" scoped>

@import url("../../static/font/iconfont.css");

	page{
		width: 100%;
		height: 100%;
	}
	
	.fcount{
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		// background-color: yellow;
	}
	.tabstyles{
		height: 100rpx;
	}
	.tabview{
		flex: 1;
		margin-top: 10rpx;
	}


</style>

<!-- 最重要的是page[当前页面]要设置背景颜色,那么style样式必须是全局的,不能添加scoped否则无效 -->

<style>
	page{
		background-color: #fafafa;
	}
</style>
