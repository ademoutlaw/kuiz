<template>
	<div class="content-container">
		<div class="content-header">
			<Grid />
			<h1>محتوانا</h1>
			<p>كويزات، من السنة السابعة أساسي حتى البكالوريا</p>
		</div>
		<div class="content-body-container">
			<div class="content-btn">&gt;</div>
			<div class="content-btn-right">&lt;</div>
			<div class="content-body">
				<Quiz
					v-for="({ title, number, subject, color, level, bg, icon }, i) of quizs"
					:key="i"
					:bg="bg"
					:icon="icon"
					:title="title"
					:color="color"
					:number="number"
					:subject="subject"
					:level="level"
				/>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import Grid from './../components/landing/Grid.vue';
	import Quiz from './../components/cards/Quiz.vue';
	const quizs: { title: string; color: string; number: string; subject: string; level: string; bg: string; icon: string }[] = [
		{
			title: 'Avencement d’une réaction chimique',
			number: '3',
			icon: '/subjects/chimistry.svg',
			bg: '/subjects/chimistry-bg.svg',
			level: 'Bac ScExp',
			subject: 'Chimie',
			color: 'rgba(76, 161, 77, 1)',
		},
		{
			title: 'Avencement d’une réaction chimique',
			number: '1',
			icon: '/subjects/chimistry.svg',
			bg: '/subjects/chimistry-bg.svg',
			level: 'Bac Math',
			subject: 'Chimie',
			color: 'rgba(76, 161, 77, 1)',
		},
		{
			title: 'Country vs City',
			number: '1',
			icon: '/subjects/english.svg',
			bg: '/subjects/english-bg.svg',
			level: 'Bac Letters',
			subject: 'English',
			color: 'rgba(205, 91, 98, 1)',
		},
		{
			title: 'Avencement d’une réaction',
			number: '3',
			icon: '/subjects/svt.svg',
			bg: '/subjects/chimistry-bg.svg',
			level: 'Bac Math',
			subject: 'SVT',
			color: 'rgba(84, 190, 222, 1)',
		},
		{
			title: 'Country vs City',
			number: '1',
			icon: '/subjects/english.svg',
			bg: '/subjects/english-bg.svg',
			level: 'Bac Letters',
			subject: 'English',
			color: 'rgba(205, 91, 98, 1)',
		},
	];
</script>
<style scoped lang="scss">
	.content-container {
		padding: 0 0px;
		.content-header {
			color: rgba(77, 77, 77, 1);
			position: relative;
			padding: 46px 0px 95px;
			h1 {
				text-align: center;
				font-family: Noto Naskh Arabic;
				font-size: 50px;
				font-weight: 700;
				line-height: 85.15px;
				position: relative;
			}
			p {
				font-size: 30px;
				font-weight: 700;
				line-height: 51.09px;
				text-align: center;
				margin-top: 26px;
				position: relative;
			}
		}
		.content-body-container {
			position: relative;
			margin: 0 20px;
			padding: 30px 50px;
			.content-btn,
			.content-btn-right {
				position: absolute;
				width: 45px;
				height: 45px;
				border-radius: 50%;
				background: white;
				top: 50%;
				transform: translate(0, -50%);
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0px 4px 8px #0000004a;
				cursor: pointer;
			}
			.content-btn {
				left: 0px;
			}
			.content-btn-right {
				right: 0;
			}
			.content-body {
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				gap: 20px;
				// div {
				// 	width: 200px;
				// 	height: 120px;
				// }
			}
		}
	}
</style>
