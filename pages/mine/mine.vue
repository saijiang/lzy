<template>
	<view>
		<!-- 顶部 -->
		<view class="topviews">
			<image class="top-logo" src="../../static/images/home/home3.png"></image>
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
					{'icon':'../../static/images/home/home3.png','name':'客户资料'},
					{'icon':'../../static/images/home/home4.png','name':'供应商资料'},
					{'icon':'../../static/images/home/home5.png','name':'供应商类别'},
					{'icon':'../../static/images/home/home6.png','name':'客户类别'},
					{'icon':'../../static/images/home/home7.png','name':'产品分类'},
					{'icon':'../../static/images/home/home8.png','name':'刷新'},
					{'icon':'../../static/images/home/home9.png','name':'退出'},
					{'icon':'../../static/images/home/home10.png','name':'卸载后台'}
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
				else if(name == '客户类别'){
					uni.navigateTo({
						url:'/pages/mine/customercategry/customercategry'
					})
				}
				else if(name == '产品分类'){
					uni.navigateTo({
						url:'/pages/mine/productcategry/productcategry'
					})
				}
				else if(name == '刷新'){
					uni.showToast({
						icon:'none',
						title:'刷新数据库'
					})
				}
				else if(name == '卸载后台'){
					uni.showToast({
						icon:'none',
						title:'卸载后台'
					})
				}
				else if(name == '退出'){
					
					uni.showModal({
						title: '提示',
						content: '是否确认退出',
						success: function (res) {
							if (res.confirm) {
								uni.setStorage({
									key:'login',
									data:'',
									success:function(res){
										uni.reLaunch({
											url:'/pages/index/index'
										})
									}
								})

								// console.log('用户点击确定');
							} else if (res.cancel) {
								// console.log('用户点击取消');
							}
						}
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
		width: 60px;
		height: 60px;
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
