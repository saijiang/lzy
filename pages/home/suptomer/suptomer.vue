<template>
	<view>
		<z-tabs :list="tablist" :current="tabcurrent" :tabsStyle="tabsStyle" @change="ztabchange"></z-tabs>
		<alitem v-show="tabcurrent == 0"></alitem>
	</view>
</template>

<script>
	
	import alitem from '../../../component/hcustomer/ahs.vue'
	
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
			alitem
		},
		methods:{
			onNavigationBarButtonTap(e){
				console.log('vue')
			},
			// 切换事件
			ztabchange(e){
				this.tabcurrent = e
			}
			
		}
	}
</script>

<style lang="scss">

</style>
