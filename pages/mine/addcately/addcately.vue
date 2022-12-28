<template>
	<view>
		
		<view class="tops">
			<text class="tops-title">产品分类</text>
			<input class="tops-inputs"/>
		</view>
		
		<view class="tops">
			<text class="tops-title">上级分类</text>
			<text class="tops-select">{{selectInfo}}</text>
		</view>
		
		<view class="seviews">
			<view v-for="(item,index) in listItem" :key="index" class="seviews-list" @click="handleCategry(item,index)">
				<text>{{item.title}}</text>
				<image v-show="index != listItem.length - 1" class="seviews-list-icon" src="../../../static/images/arrow-icon.png"></image>
			</view>
		</view>
		
		<scroll-view scroll-y="true" class="src">
			<view class="src-items" v-for="(item,index) in goodlist" :key="index" @click="handleItem(item)">
				<text src-items-titles>{{item.name}}</text>
				<image v-show="item.childer" class="src-items-icons" src="../../../static/images/arrow-icon.png"></image>
			</view>
		</scroll-view>
		

	
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listItem:[],
				goodlist:[],
				selectInfo:'',
				minddleList:[] // 设置一个中间数组
				
			};
		},
		onLoad() {
			
			this.goodlist = this.$ld.goodlists
			this.listItem = [{'title':'全部','arr':this.goodlist}]
			
		},
		methods:{
			// 点击选择的分类
			handleCategry(item,index){
				console.log(item,index)
			},
			// 点击列表
			handleItem(item){
				
				if(item.childer){
				    this.selectInfo = item.name
					this.goodlist = item.childer
					this.listItem.push({'title':item.name,'arr':item.childer})
				}
				else{
					this.selectInfo = item.name
				}
			}
			
			
		},
		
	}
</script>

<style lang="scss" scoped>

.tops{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	height: 50px;
	.tops-title{
		color: #0076ff;
		font-size: 15px;
		margin-left: 20px;
	}
	.tops-inputs{
		width: 120px;
		height: 35px;
		border-bottom: 1px solid #828282;
		box-sizing: border-box;
		margin-right: 20px;
	}
	.tops-select{
		color: #0076ff;
		font-size: 15px;
		margin-right: 20px;
	}
	
}

.seviews{
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 50px;
	background-color: white;
	padding-left: 20px;
	.seviews-list{
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #0076ff;
		font-size: 15px;
		.seviews-list-icon{
			width: 15px;
			height: 15px;
			margin-left: 3px;
			margin-right: 3px;
		}
	}
}


.src{
	height: calc(100vh - 150px);
	.src-items{
		height: 50px;
		border-bottom: 1px #828282 solid;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
		.src-items-icons{
			width: 15px;
			height: 15px;
			margin-right: 20px;
		}
		.src-items-titles{
			font-size: 15px;
			color: #0076ff;
			margin-left: 20px;
		}
		
	}
	
}

</style>

<style>
	page{
		background-color: #fafafa;
	}
</style>
