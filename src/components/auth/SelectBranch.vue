<template>
	<KSelect :options="options" id="branch" placeholder="شعبة" v-model="branch" prop="branch" label="شعبة" required />
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import KSelect from '@/components/form/KSelect.vue';
	const branch = defineModel();
	const prop = defineProps<{ level: string }>();
	
	const options = computed(() => {
		return (
			{
				'4': [
					{
						label: 'الرياضيات',
						value: 'math',
					},
					{
						label: 'الاقتصاد والتصرف',
						value: 'echo',
					},
					{
						label: 'العلوم التجريبية',
						value: 'science',
					},
					{
						label: 'الاداب',
						value: 'arts',
					},
					{
						label: 'العلوم التقنية',
						value: 'tech',
					},
					{
						label: 'الإعلامية',
						value: 'info',
					},
					{
						label: 'الرياضة',
						value: 'sport',
					},
				],
				'3': [
					{
						label: 'رياضيات',
						value: 'math',
					},
					{
						label: 'علوم تجريبية',
						value: 'sci',
					},
					{
						label: 'علوم التقنية',
						value: 'tech',
					},
					{
						label: 'الإعلامية',
						value: 'info',
					},
					{
						label: 'اقتصاد وتصرف',
						value: 'echo',
					},
					{
						label: 'الآداب',
						value: 'arts',
					},
				],
			}[prop.level] || []
		);
	});
</script>

<style scoped></style>
