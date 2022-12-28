<template>
	<view class="container">
		
		<z-tabs :list="tablist" :current="tabcurrent" :tabsStyle="tabsStyle" @change="ztabchange"></z-tabs>
		<view>
			<allitem v-show="tabcurrent == 0"></allitem>
			
			<allitem v-show="tabcurrent == 1"></allitem>
			<allitem v-show="tabcurrent == 2"></allitem>
			<allitem v-show="tabcurrent == 3"></allitem>
			<allitem v-show="tabcurrent == 4"></allitem>
			<allitem v-show="tabcurrent == 5"></allitem>
			<allitem v-show="tabcurrent == 6"></allitem>
			<allitem v-show="tabcurrent == 7"></allitem>
			<allitem v-show="tabcurrent == 8"></allitem>
			<allitem v-show="tabcurrent == 9"></allitem>
			
<!-- 			<nianitem v-show="tabcurrent == 1"></nianitem>
			<xnitem v-show="tabcurrent == 2"></xnitem>
			<snitem v-show="tabcurrent == 3"></snitem>
			<bjitem v-show="tabcurrent == 4"></bjitem>
			<bmitem v-show="tabcurrent == 5"></bmitem>
			<twitem v-show="tabcurrent == 6"></twitem>
			<witem v-show="tabcurrent == 7"></witem>
			<zitem v-show="tabcurrent == 8"></zitem>
			<ditem v-show="tabcurrent == 9"></ditem> -->
		</view>
		
	</view>
</template>

<script>
	
	import allitem from '../../../component/hcustomer/ahs.vue'
	import nianitem from '../../../component/hcustomer/yhs.vue'
	import xnitem from '../../../component/hcustomer/xhs.vue'
	import snitem from '../../../component/hcustomer/shs.vue'
	import bjitem from '../../../component/hcustomer/jhs.vue'
	import bmitem from '../../../component/hcustomer/mhs.vue'
	import twitem from '../../../component/hcustomer/twhs.vue'
	import witem from '../../../component/hcustomer/whs.vue'
	import zitem from '../../../component/hcustomer/zhs.vue'
	import ditem from '../../../component/hcustomer/dhs.vue'
	
	export default {
		data() {
			return {
				tablist:['全部','年度','上半年','下半年','本季度','本月','最近两周','本周','昨天','今天'],
				tabcurrent:0,
				tabsStyle:{
					"height": "100rpx",
					 "background-color": "#ffffff",
				},
			};
		},
		components:{
			allitem,
			nianitem,
			xnitem,
			snitem,
			bjitem,
			bmitem,
			twitem,
			witem,
			zitem,
			ditem
		},
		methods:{
			onNavigationBarButtonTap(e){
					console.log('vue')
			},
			// tab 切换
			ztabchange(index){
				this.tabcurrent = index
			}
		}
	}
</script>

<style lang="scss" scoped>

.container{
	display: flex;
	flex-direction: column;
}

</style>

<style>
	page{
		background-color: #fafafa;
	}
</style>
