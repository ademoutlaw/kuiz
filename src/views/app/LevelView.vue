<template>
	<div class="level-container">
		<h1>النشاطات الأخيرة</h1>
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
			font-size: 30px;
			font-weight: 400;
			line-height: 51.09px;
			text-align: right;
			color: rgba(77, 77, 77, 1);
		}
	}
</style>
