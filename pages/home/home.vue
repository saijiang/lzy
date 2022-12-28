<template>
	<view>
		<uni-grid :column="2" @change="clickItemAction">
			<uni-grid-item v-for="(item, index) in lists" :index="index" :key="index">
				<view class="gridview">
					<image class="icons"></image>
					<text style="color: #0076ff;">{{item.title}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[]
			};
		},
		onLoad() {
			this.lists = this.$ld.homelist
		},
		methods:{
			clickItemAction(e){
				var number = e.detail.index
				var title = this.lists[number].title
				var path = this.lists[number].path
				console.log(path)
			
					uni.navigateTo({
						url:path,
					})
				
			}
		}
		
	}
</script>

<style lang="less">
  .gridview{
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  
  }
  
  .icons{
	 width: 50px;
	 height: 50px;
	 background-color: aqua;
	 margin-bottom: 5px;
  }
</style>
