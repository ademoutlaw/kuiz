<template>
	<header class="flex items-center justify-between p-8">
		<div class="header-head">
			<h2>مرحبًا بك<span>👋</span></h2>
			<h3>لنبدأ اليوم بكويز جديد</h3>
		</div>
		<KSearch />
		<RightToolbar />
	</header>
</template>
<!--  -->
<script setup lang="ts">
	import KSearch from '@/components/common/KSearch.vue';
	import RightToolbar from '@/components/common/RightToolbar.vue';
</script>
<style scoped lang="scss">
	header {
		height: 75px;
		position: sticky;
		top: 0;
		z-index: 500;
		background-color: white;
		box-sizing: content-box;
		gap: 164px;
		.header-head {
			flex-shrink: 0;
			h2 {
				font-family: Noto Naskh Arabic;
				font-size: 26px;
				font-weight: 400;
				line-height: 44.28px;
				span {
					font-size: 32px;
					font-weight: 400;
					line-height: 38.73px;
				}
			}
			h3 {
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 400;
				line-height: 30.65px;
			}
		}
	}
</style>
