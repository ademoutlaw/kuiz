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
						label: 'السابعة أساسي',
						value: '7',
					},
					{
						label: 'الثامنة أساسي',
						value: '8',
					},
					{
						label: 'التاسعة أساسي',
						value: '9',
					},
					{
						label: 'أولى ثانوي',
						value: '1',
					},
					{
						label: 'الثانية ثانوي',
						value: '2',
					},
					{
						label: 'الثالثة ثانوي',
						value: '3',
					},
					{
						label: 'البكالوريا',
						value: '4',
					},
				],
				'3': [
					{
						label: '3 Al',
						value: '3al',
					},
					{
						label: '3 Am',
						value: '3ajl',
					},
					{
						label: '3 Ax',
						value: '3hal',
					},
				],
			}[prop.level] || []
		);
	});
</script>

<style scoped></style>
