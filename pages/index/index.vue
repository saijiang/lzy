<template>
	<view>
		<image class="logo"></image>
		<view class="inputview">
			<image class="inputlogo"></image>
			<input placeholder="请输入用户名"/>
		</view>
		<view class="inputview">
			<image class="inputlogo"></image>
			<input placeholder="请输入密码"/>
		</view>
		<button class="btns" @click="loginBtn">登录</button>
		<view class="bview">
			<text style="text-decoration: underline;">忘记密码</text>
			<text style="text-decoration: underline;">注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			loginBtn(){
				uni.switchTab({
					url:'/pages/home/home'
				})
			}
		}
	}
</script>

<style>


	.logo {
		height: 200px;
		width: 100%;
		margin-bottom: 30px;
        background-color: aqua;
	}
	
	.inputview{
		margin-top: 10px;
		margin-left: 30px;
		margin-right: 30px;
		height: 44px;
		display: flex;
		align-items: center;
		border-bottom: #8f8f94 solid 0.5px;
		box-sizing: border-box;
		/* background-color: rebeccapurple; */
	}
	
	.inputlogo{
		width: 20px;
		height: 20px;
		margin-right: 10px;
		background-color: bisque;
	}

	.btns {
		background-color: aquamarine;
		border-radius: 5px;
		margin-left: 30px;
		margin-right: 30px;
		margin-top: 50px;
	}

	.bview {
		margin-left: 30px;
		margin-right: 30px;
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		
	}
</style>
