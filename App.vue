<script>
	export default {
		onLaunch: function() {
			console.log('App Launch---初始化完成时触发（全局只触发一次）')
		},
		onShow: function() {
			console.log('App Show---启动，或从后台进入前台显示')
		},
		onHide: function() {
			console.log('App Hide---从前台进入后台')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
