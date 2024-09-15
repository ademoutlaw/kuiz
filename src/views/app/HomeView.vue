<template>
	<div class="home-container">
		<section>
			<h1>النشاطات الأخيرة</h1>
			<div class="flex gap-4">
				<Quiz
					v-for="({ title, number, subject, color, bg, icon, totalQuestion, correctAnswer }, i) of quizs"
					:key="i"
					:bg="bg"
					:icon="icon"
					:title="title"
					:color="color"
					:number="number"
					:subject="subject"
					:total-question="totalQuestion"
					:correct-answers="correctAnswer"
				/>
			</div>
		</section>
		<section>
			<h1>اختر المادة</h1>
			<SubjectsList />
		</section>
	</div>
</template>
<script setup lang="ts">
	import SubjectsList from '@/components/app/SubjectsList.vue';
	import Quiz from '@/components/cards/QuizProgress.vue';

	const quizs: {
		color: string;
		icon: string;
		subject: string;
		number: string;
		title: string;
		totalQuestion: number;
		correctAnswer: number;
		bg: string;
	}[] = [
		{
			title: 'Avencement d’une réaction chimique',
			number: '3',
			icon: '/quiz/chimistry.svg',
			bg: '/quiz/bg/chimistry.svg',
			subject: 'Chimie',
			color: 'rgba(76, 161, 77, 1)',
			totalQuestion: 14,
			correctAnswer: 0,
		},
		{
			title: 'Avencement d’une réaction chimique',
			number: '1',
			icon: '/quiz/chimistry.svg',
			bg: '/quiz/bg/chimistry.svg',
			totalQuestion: 14,
			correctAnswer: 14,
			subject: 'Chimie',
			color: 'rgba(76, 161, 77, 1)',
		},

		{
			title: 'Avencement d’une réaction',
			number: '3',
			icon: '/quiz/svt.svg',
			bg: '/quiz/bg/chimistry.svg',
			totalQuestion: 14,
			correctAnswer: 2,
			subject: 'SVT',
			color: 'rgba(84, 190, 222, 1)',
		},
		{
			title: 'Country vs City',
			number: '1',
			icon: '/quiz/english.svg',
			bg: '/quiz/bg/english.svg',
			totalQuestion: 14,
			correctAnswer: 10,
			subject: 'English',
			color: 'rgba(205, 91, 98, 1)',
		},
	];
</script>

<style scoped lang="scss">
	.home-container {
		section {
			margin-bottom: 32px;
			h1 {
				font-family: Noto Naskh Arabic;
				font-size: 26px;
				font-weight: 400;
				line-height: 44.28px;
				text-align: right;
				color: rgba(77, 77, 77, 1);
			}
		}
	}
</style>
