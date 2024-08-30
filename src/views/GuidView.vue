<script setup lang="ts">
	import Grid from './../components/landing/Grid.vue';
</script>

<template>
	<div class="guid-container">
		<div class="guid-header">
			<Grid />
			<h1>دليل المستخدم</h1>
			<p>طريقة استخدام منصة كويز</p>
		</div>
		<div class="guid-video-player"></div>
	</div>
</template>

<style scoped lang="scss">
	.guid-container {
		padding: 0 40px 40px;
		.guid-header {
			color: rgba(77, 77, 77, 1);
			position: relative;
			padding: 46px 0px 95px;
			h1 {
				text-align: center;
				font-family: Noto Naskh Arabic;
				font-size: 50px;
				font-weight: 700;
				line-height: 85.15px;
				position: relative;
			}
			p {
				font-size: 30px;
				font-weight: 700;
				line-height: 51.09px;
				text-align: center;
				margin-top: 26px;
				position: relative;
			}
		}
		.guid-video-player {
			margin: -60px auto 0;
			width: 500px;
			height: 375px;
			background-image: url(@/assets/video-player.svg);
			position: relative;
		}
	}
</style>
