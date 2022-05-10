<template>
	<view class="content">
		<u-button text="月落">画画</u-button>
	</view>
</template>

<script>
// import uButton from "uView-ui/components/u-button/u-button.vue";
export default {
	// components: { uButton },
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
