<template>
	<KSelect :options="options" id="optionalSubject" placeholder="المادة الاختيارية" v-model="subject" prop="optionalSubject" label="المادة الاختيارية" required />
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useLevelsStore } from '@/stores/levels';
	import KSelect from '@/components/form/KSelect.vue';
	const subject = defineModel();
	const levelStore = useLevelsStore();

	const options = computed(() => {
		return levelStore.optionalSubjects.map((level: any) =>({label: level.title, value: level.id}))
	});
	// const communOptions = [
	// 	{
	// 		label: 'اللغة الالمانية',
	// 		value: 'dutch',
	// 	},
	// 	{
	// 		label: 'اللغة الإسبانية',
	// 		value: 'spanish',
	// 	},
	// 	{
	// 		label: 'اللغة الإطالية',
	// 		value: 'italian',
	// 	},
	// 	{
	// 		label: 'اللغة الروسية',
	// 		value: 'russian',
	// 	},
	// 	{
	// 		label: 'اللغة الصينية',
	// 		value: 'chinese',
	// 	},
	// 	{
	// 		label: 'اللغة التركية',
	// 		value: 'turkish',
	// 	},
	// 	{
	// 		label: 'التربية الموسيقية',
	// 		value: 'music',
	// 	},
	// 	{
	// 		label: 'التربية التشكيلية',
	// 		value: 'art',
	// 	},
	// ];
	// const artsOptions = [
	// 	{
	// 		label: 'الرياضيات',
	// 		value: 'math',
	// 	},

	// 	{
	// 		label: 'علوم الحياة و الارض',
	// 		value: 'science',
	// 	},
	// ];
	// const sportsOptions = [
	// 	{
	// 		label: 'التاريخ',
	// 		value: 'history',
	// 	},
	// 	{
	// 		label: 'الجغرافيا',
	// 		value: 'geography',
	// 	},
	// 	{
	// 		label: 'الإعلامية',
	// 		value: 'info',
	// 	},
	// ];
	// const optionsByBranches: { [key: string]: { label: string; value: string }[] } = {
	// 	arts: [...communOptions, ...artsOptions],
	// 	sport: [...sportsOptions],
	// };

	// const options = computed(() => {
	// 	return optionsByBranches[prop.branch] || [...communOptions];
	// });

</script>

<style scoped></style>
