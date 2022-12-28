<template>
	<view>
		<!-- 顶部 -->
		<view class="topviews">
			<image class="top-logo"></image>
			<text class="top-title">12345678901</text>
		</view>
		<!-- 内容 -->
		<view>
			<view class="itemviews" v-for="(item,index) in list" :key="index" @click="handleItem(item)">
				<image class="item-logo" :src="item.icon"></image>
				<view class="item-name">
					<text>{{item.name}}</text>
					<image class="item-name-arr" src="../../static/images/arrow-icon.png"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{'icon':'','name':'客户资料'},
					{'icon':'','name':'供应商资料'},
					{'icon':'','name':'供应商类别'},
					{'icon':'','name':'客户类别'},
					{'icon':'','name':'产品分类'},
					{'icon':'','name':'刷新'},
					{'icon':'','name':'退出'},
					{'icon':'','name':'卸载后台'}
					]
			};
		},
		methods:{
			handleItem(item){
				var name = item.name
				if(name == '客户资料'){
					uni.navigateTo({
						url:'/pages/hsoPage/hsocustomer/hsocustomer?flag=客户'
					}) 
				}
				else if(name == '供应商资料'){
					uni.navigateTo({
						url:'/pages/hsoPage/hsocustomer/hsocustomer?flag=供应商'
					}) 
				}
				else if(name == '供应商类别'){
					uni.navigateTo({
						url:'/pages/mine/suplycategly/suplycategly'
					})
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>


.topviews{
	background-color: #0076ff;
	height: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	.top-logo{
		width: 80px;
		height: 60px;
		background-color: yellowgreen;
		margin-left: 20px;
		margin-right: 20px;
	}
	.top-title{
		color: white;
		font-size: 15px;
	}
}

.itemviews{
	display: flex;
	flex-direction: row;
	padding-left: 10px;
	padding-top: 15px;
	
	.item-logo{
		width: 30px;
		height: 30px;
		background-color: #123edc;
	}
	.item-name{
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: #818181 solid 1px;
		box-sizing: border-box;
		padding-bottom: 15px;
		padding-left: 10px;
		padding-right: 15px;
		color: #0076ff;
		.item-name-arr{
			width: 20px;
			height: 20px;
		}
	}
}



</style>
