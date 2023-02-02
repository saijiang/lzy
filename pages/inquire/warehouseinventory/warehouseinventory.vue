<template>
	<view>
		<uni-table border stripe emptyText="暂无更多数据" >
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center" sortable>
					<text style="color: #000000;font-weight: 500;">仓库名称</text>
				</uni-th>
				<uni-th align="center">
					<view class="number-views" @click="handleNumberAction">
						<text class="number-title">数量(xxx)</text>
						<image :class="numberheader == 'down' ? 'number-icon-down' : 'number-icon-up' " src="../../../static/images/arrow-icon.png"></image>
					</view>
				</uni-th>
				<uni-th align="center">
					<view class="number-views" @click="handleInventoryAction">
						<text class="number-title">库存占比</text>
						<image :class="inventoryheader == 'down' ? 'number-icon-down' : 'number-icon-up' " src="../../../static/images/arrow-icon.png"></image>
					</view>
				</uni-th>
				<uni-th align="center">
					<view class="number-views" @click="handleAmountAction">
						<text class="number-title">成本额度(xxx)</text>
						<image :class="amountheader == 'down' ? 'number-icon-down' : 'number-icon-up' " src="../../../static/images/arrow-icon.png"></image>
					</view>
				</uni-th>
				<uni-th align="center">
					<view class="number-views" @click="handleRatioAction">
						<text class="number-title">成本占比</text>
						<image :class="ratioheader == 'down' ? 'number-icon-down' : 'number-icon-up' " src="../../../static/images/arrow-icon.png"></image>
					</view>
				</uni-th>
			
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="(item,index) in tabledata">
				<uni-td>{{item.name}}</uni-td>
				<uni-td>{{item.number}}</uni-td>
				<uni-td>{{item.inventory}}</uni-td>
				<uni-td>{{item.amount}}</uni-td>
				<uni-td>{{item.ratio}}</uni-td>
			
			</uni-tr>
		<!-- 	<uni-tr>
				<uni-td>2020-10-21</uni-td>
				<uni-td>HanMeiMei</uni-td>
				<uni-td>北京市海淀区</uni-td>
				<uni-td>2020-10-20</uni-td>
				<uni-td>Jeson</uni-td>
				
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-22</uni-td>
				<uni-td>LiLei</uni-td>
				<uni-td>北京市海淀区</uni-td>
				<uni-td>2020-10-20</uni-td>
				<uni-td>Jeson</uni-td>
				
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-23</uni-td>
				<uni-td>Danner</uni-td>
				<uni-td>北京市海淀区</uni-td>
				<uni-td>2020-10-20</uni-td>
				<uni-td>Jeson</uni-td>
			
			</uni-tr> -->
		
		</uni-table>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				numberheader:'down',
				inventoryheader:'down',
				amountheader:'down',
				ratioheader:'down',
				tabledata:[]
			};
		},
		onLoad() {
		  this.tabledata = [
			  {'name':'标题1','number':'1','inventory':'2','amount':'4','ratio':'5'},
			  {'name':'标题2','number':'2','inventory':'3','amount':'4','ratio':'6'},
			  {'name':'标题3','number':'3','inventory':'2','amount':'5','ratio':'6'},
			  {'name':'标题4','number':'4','inventory':'4','amount':'8','ratio':'7'},
			  {'name':'标题5','number':'5','inventory':'5','amount':'9','ratio':'8'}
		  ]	
		},
		methods:{
			onNavigationBarButtonTap(e){
				
			},
			// 点击数量表头
			handleNumberAction(){
				this.numberheader = this.numberheader == 'down' ? 'up' : 'down'
			},
			// 点击库存占比表头
			handleInventoryAction(){
				this.inventoryheader = this.inventoryheader == 'down' ? 'up' : 'down'
			},
			// 点击成本额度表头
			handleAmountAction(){
				this.amountheader = this.amountheader == 'down' ? 'up' : 'down'
			},
			// 点击成本额度表头
			handleRatioAction(){
				this.ratioheader = this.ratioheader == 'down' ? 'up' : 'down'
			}
			
			
		}
		
	}
</script>

<style lang="scss" scoped>


.number-views{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	.number-title{
		flex: 1;
		word-wrap: break-word;
		word-break: break-all;
		color: #000000;
		font-weight: 500;
	}
}
.number-icon-down{
	width: 15px;
	height: 15px;
	transform: rotate(90deg);
}
.number-icon-up{
	width: 15px;
	height: 15px;
	transform: rotate(-90deg);
}


</style>
