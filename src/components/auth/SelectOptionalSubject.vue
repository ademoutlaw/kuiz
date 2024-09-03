<template>
	<KSelect :options="options" id="otionalSubject" placeholder="شعبة" v-model="subject" prop="otionalSubject" label="شعبة" required />
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import KSelect from '@/components/form/KSelect.vue';
	const subject = defineModel();
	const prop = defineProps<{ branch: string }>();

	const communOptions = [
		{
			label: 'اللغة الالمانية',
			value: 'dutch',
		},
		{
			label: 'اللغة الإسبانية',
			value: 'spanish',
		},
		{
			label: 'اللغة الإطالية',
			value: 'italian',
		},
		{
			label: 'اللغة الروسية',
			value: 'russian',
		},
		{
			label: 'اللغة الصينية',
			value: 'chinese',
		},
		{
			label: 'اللغة التركية',
			value: 'turkish',
		},
		{
			label: 'التربية الموسيقية',
			value: 'music',
		},
		{
			label: 'التربية التشكيلية',
			value: 'art',
		},
	];
	const artsOptions = [
		{
			label: 'الرياضيات',
			value: 'math',
		},

		{
			label: 'علوم الحياة و الارض',
			value: 'science',
		},
	];
	const sportsOptions = [
		{
			label: 'التاريخ',
			value: 'history',
		},
		{
			label: 'الجغرافيا',
			value: 'geography',
		},
		{
			label: 'الإعلامية',
			value: 'info',
		},
	];
	const optionsByBranches: { [key: string]: { label: string; value: string }[] } = {
		arts: [...communOptions, ...artsOptions],
		sport: [...sportsOptions],
	};

	const options = computed(() => {
		return optionsByBranches[prop.branch] || [...communOptions];
	});
</script>

<style scoped></style>
