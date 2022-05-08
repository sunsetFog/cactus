<template>
	<view class="content">
        <van-button type="primary">主要按钮</van-button>
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
		this.getCaptchaImage();
	},
	methods: {
		getCaptchaImage(){
			let params = {
				username: 'rafael',
				password: '123456'
			}
			this.$http({
				url: '/sky/user/login',
                method: 'post',
				params: params
			}).then(res=>{
				console.log(res,'图片')
			});
					
		}
	}
}
</script>

<style>
</style>
