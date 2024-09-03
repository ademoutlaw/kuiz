<template>
	<KSelect :options="options" id="level" placeholder="المستوى الدراسي" v-model="level" prop="level" label="المستوى الدراسي" required />
</template>

<script setup lang="ts">
	import KSelect from '@/components/form/KSelect.vue';
	import { computed } from 'vue';
	const level = defineModel();
	const prop = defineProps<{ institution: string }>();

	const options = computed(() => {
		return prop.institution === 'free'
			? [
					{
						label: 'البكالوريا',
						value: '4',
					},
			  ]
			: [
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
			  ];
	});
</script>

<style scoped></style>
