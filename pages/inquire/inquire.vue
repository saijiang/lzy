<template>
	<view>
		<uni-list>
			<uni-list-item v-for="(item,index) in lists" :key="index">
				<template v-slot:body>
					<view class="centerview">
						<image class="logimage"></image>
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
	  margin-left: 20px;
	  margin-right: 10px;
	  background-color: aqua;
  }
</style>
