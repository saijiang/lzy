<template>
	
	<view class="container">
		<z-tabs :list="tablist" :current="tabcurrent" :tabsStyle="tabsStyle" @change="ztabchange" barHeight="2px" barWidth="120rpx"></z-tabs>
		<view class="inforviews">
			<productorder v-show="tabcurrent == 0"></productorder>
			<openorder v-show="tabcurrent == 1" flagAction="供应商"></openorder>
			<lementorder v-show="tabcurrent == 2"></lementorder>
		</view>
	
	</view>

</template>

<script>
	
	import openorder from '../../component/openorder/openorder.vue'
	import productorder from '../../component/product/productpage.vue'
	import lementorder from '../../component/lement/lement.vue'
	
	export default {
		data() {
			return {
		      tablist:['产品','开单','结算'],
			  tabcurrent:1,
			  tabsStyle:{
			  	"height": "100rpx",
			  	 "background-color": "#ffffff",
			  },
			  
			};
		},
		components:{
			openorder,
			productorder,
			lementorder
		},
		methods:{
			onNavigationBarButtonTap(e){
				uni.navigateTo({
					url:'/pages/saleoutpage/saleoutpage?title='+'采购入库'
				})
			},
			// z-tab 切换
			ztabchange(index){
			  this.tabcurrent = index
			}
			
		}
	}
</script>

<style lang="less" scoped>

.container{
	display: flex;
	flex-direction: column;
	height: 100vh;
	.inforviews{
		flex: 1;
	}
}

</style>

<style>
	page{
		background-color: #fafafa;
	}
</style>
