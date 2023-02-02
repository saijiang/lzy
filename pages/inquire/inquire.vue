<template>
	<view>
		<uni-list>
			<uni-list-item v-for="(item,index) in lists" :key="index" clickable @click="handleListItme(item)">
				<template v-slot:body>
					<view class="centerview">
						<image class="logimage" :src="item.icon"></image>
						<text>{{item.title}}</text>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
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
			this.lists = this.$ld.iquarlist
		},
		methods:{
			handleListItme(item){
				if(item.title == '仓库库存报表'){
					uni.navigateTo({
						url:'/pages/inquire/warehouseinventory/warehouseinventory'
					})
				}
				else if(item.title == '产品库存报表'){
					
				}
			}
		}
		
	}
</script>

<style lang="less">
	
   .centerview{
		display: flex;
		align-items: center;
	}
	
  .logimage{
	  width: 40px;
	  height: 40px;
	  border-radius: 20px;
	  margin-left: 10px;
	  margin-right: 20px;
	  // background-color: aqua;
  }
</style>
