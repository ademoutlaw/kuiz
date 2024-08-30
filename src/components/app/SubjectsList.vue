<template>
	<div class="flex flex-wrap gap-3 py-4">
		<Subject v-for="subject of subjects" :key="subject.id" :subject="subject" />
	</div>
</template>

<script setup lang="ts">
	import Subject from '@/components/cards/Subject.vue';
	const subjects: { id: string; color: string; title: string; quiz: number; progress: number; icon: string; bg: string }[] = [
		{
			id: '1',
			color: 'rgba(40, 123, 161, 1)',
			title: 'Physique',
			progress: 0,
			quiz: 75,
			icon: '/subjects/physics.svg',
			bg: '/subjects/bg/physics.svg',
		},
		{
			id: '2',
			color: 'rgba(76, 161, 77, 1)',
			title: 'Chimie',
			progress: 0,
			quiz: 65,
			icon: '/subjects/chimistry.svg',
			bg: '/subjects/bg/chimistry.svg',
		},
		{
			id: '3',
			color: 'rgba(204, 116, 0, 1)',
			title: 'Math',
			progress: 0,
			quiz: 65,
			icon: '/subjects/math.svg',
			bg: '/subjects/bg/math.svg',
		},
		{
			id: '4',
			color: 'rgba(84, 190, 222, 1)',
			title: 'SVT',
			progress: 0,
			quiz: 65,
			icon: '/subjects/svt.svg',
			bg: '/subjects/bg/physics.svg',
		},
		{
			id: '5',
			color: 'rgba(76, 100, 161, 1)',
			title: 'Informatique',
			progress: 0,
			quiz: 65,
			icon: '/subjects/computer.svg',
			bg: '/subjects/bg/physics.svg',
		},
		{
			id: '6',
			color: 'rgba(255, 192, 0, 1)',
			title: 'فلسفة',
			progress: 0,
			quiz: 65,
			icon: '/subjects/philo.svg',
			bg: '/subjects/bg/philo.svg',
		},
		{
			id: '7',
			color: 'rgba(127, 66, 29, 1)',
			title: 'Italian',
			progress: 0,
			quiz: 65,
			icon: '/subjects/french.svg',
			bg: '/subjects/bg/english.svg',
		},
		{
			id: '8',
			color: 'rgba(58, 126, 129, 1)',
			title: 'العربية',
			progress: 0,
			quiz: 65,
			icon: '/subjects/english.svg',
			bg: '/subjects/bg/english.svg',
		},
		{
			id: '9',
			color: 'rgba(205, 91, 98, 1)',
			title: 'English',
			progress: 0,
			quiz: 65,
			icon: '/subjects/english.svg',
			bg: '/subjects/bg/english.svg',
		},
		{
			id: '10',
			color: 'rgba(7, 4, 164, 1)',
			title: 'Français',
			progress: 0,
			quiz: 65,
			icon: '/subjects/french.svg',
			bg: '/subjects/bg/english.svg',
		},
	];
</script>

<style scoped></style>
