<template>
	<div class="level-container">
		<h1>اختر المادة</h1>
		<SubjectsList />
	</div>
</template>
<script setup lang="ts">
	import SubjectsList from '@/components/app/SubjectsList.vue';
</script>

<style scoped lang="scss">
	.level-container {
		h1 {
			font-family: Noto Naskh Arabic;
			font-size: 26px;
			font-weight: 400;
			line-height: 44.28px;
			text-align: right;
			color: rgba(77, 77, 77, 1);
		}
	}
</style>
