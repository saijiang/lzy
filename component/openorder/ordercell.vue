<template>
	<view class="containts">
		
		<view class="topviews">
			<view class="imageview">
				<image class="logoicon"></image>
			</view>
			<view class="meview">
				<view>
					<text>品名: </text>
					<text>PE弯头->1->2->A40</text>
				</view>
				<view>
					<text>仓库: </text>
					<text>仓库1</text>
					<text>当前库存: </text>
					<text>100</text>
				</view>
				<view class="unitview">
					<view class="unit1">
						<text class="inputtitle">单价</text>
						<input class="inputstyle"/>
					</view>
					<view class="unit2">
						<text>¥12</text>
					</view>

					
				</view>
			</view>
		</view>
		
		<view class="botviews">
			<view class="bot1">
				<text class="inputtitles">数量:</text>
				<input class="inputs"/>
				<text>个</text>
			</view>
			<view class="bot2">
				<text class="inputtitles2">折扣值:</text>
				<input class="inputs2" />
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	
	data() {
		return {

		};
	},
	mounted() {

		
	},
	methods:{



	}
 }
</script>

<style lang="scss" scoped>

.containts{
	background-color: white;
	padding: 5px;
}

.topviews{
	display: flex;
	flex-direction: row;
	align-items: center;
	.imageview{
		width: 50px;
		height: 50px;
		background-color: yellowgreen;
		margin-right: 5px;
		.logoicon{
			width: 50px;
			height: 50px;
			background-color: green;
		}
	}
	.meview{
		flex: 1;
		.unitview{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			.unit1{
				display: flex;
				flex-direction: row;
				flex: 1;
				.inputtitle{
					width: 50px;
				}
				.inputstyle{
					border: 0.5px solid #828282;
					box-sizing: border-box;
				}
			}
			.unit2{
				flex: 1;
				display: flex;
				flex-direction: row-reverse;
				margin-right: 10px;
			}
			
		}
	}
	
}

.botviews{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 5px;
	.bot1{
		display: flex;
		flex-direction: row;
		.inputtitles{
			width: 40px;
		}
		.inputs{
			border: 0.5px solid #828282;
			box-sizing: border-box;
			width: 60px;
		}
	}
	.bot2{
		display: flex;
		flex-direction: row;
		margin-left: 30px;
		.inputtitles2{
			width: 60px;
		}
		.inputs2{
			border: 0.5px solid #828282;
			box-sizing: border-box;
			width: 60px;
		}
	}
}

</style>