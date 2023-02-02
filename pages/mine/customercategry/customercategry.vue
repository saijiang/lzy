<template>
	<view>
		<view class="topselect">
			<view class="top-items" v-for="(item,index) in breadcrumblist" :key="index" @click="handlebread(item,index)">
				<text>{{item.name}}</text>
				<image class="top-items-image" v-show="index != breadcrumblist.length -1" src="../../../static/images/arrow-icon.png"></image>
			</view>
		</view>
		<view class="srcviews">
			<scroll-view class="src" scroll-y="true">
				<view class="src-item" v-for="(item,index) in goodlist" @click="handleritem(item)">
					<text class="src-item-name">{{item.name}}</text>
					<image v-show="item.childer" class="src-item-image" src="../../../static/images/arrow-icon.png"></image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodlist:[],
				breadcrumblist:[],// 中间数据源集合
				checkitem:'',
			};
		},
		onLoad() {
			this.goodlist = this.$ld.goodlists
			// 顶部 面包屑与其所在的数据集合绑定
			this.breadcrumblist = [{'name':'全部','arr':this.goodlist}]
		},
		methods:{
			// 导航栏 按钮点击事件
			onNavigationBarButtonTap(e){
				uni.navigateTo({
					url:'/pages/mine/addcustomer/addcustomer'
				})
			},
			// 列表点击
			handleritem(item){
				this.checkitem = item.name // 点击 (选中) 的类别
				if(item.childer){
				 this.goodlist = item.childer
				 var dic = {'name': this.checkitem,'arr':item.childer}
				 this.breadcrumblist.push(dic)
				}
				else{
					// 获取点击的item 返回上一页
					uni.navigateBack({
						delta:1
					})
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
			
		},
		
	}
</script>

<style lang="scss" scoped>


.topselect{
	background-color: white;
	height: 50px;
	display: flex;
	align-items: center;
	flex-direction: row;
	padding-left: 15px;
	.top-items{
		color: #0076ff;
		font-size: 15px;
		display: flex;
		align-items: center;
		.top-items-image{
			width: 15px;
			height: 15px;
		}
	}

}

.srcviews{
	
	.src{
		height: calc(100vh - 50px);
		.src-item{
			height: 40px;
			border-bottom: 1px solid #828282;
			color: #0076ff;
			font-size: 15px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.src-item-name{
				margin-left: 20px;
			}
			.src-item-image{
				height: 15px;
				width: 15px;
				margin-right: 20px;
			}
			
			
		}
	}
	
}



</style>

<style>
	page{
		background-color: #fafafa;
	}
</style>
