<script setup lang="ts">
	defineProps<{ title: string; color: string; number: string; subject: string; level: string; bg: string; icon: string }>();
</script>

<template>
	<div class="card-quiz-container" :style="{ '--subject-bg': `url(${bg})` }">
		<div class="card-body">
			<div class="quiz-level" :style="{ color }">
				<div class="quiz-icon">
					<img :src="icon" alt="quiz-icon" />
				</div>
				<span>{{ subject }}</span>
			</div>
			<div class="quiz-info">
				<div>Quiz N°{{ number }}: {{ title }}</div>
				<div>Niveau: {{ level }}</div>
			</div>
			<div class="quiz-btn">
				<button>ابدأ الكويز</button>
			</div>
		</div>
	</div>
</template>
<!--  -->
<style scoped lang="scss">
	.card-quiz-container {
		--subject-bg: url(/subjects/chimistry-bg.svg);
		border-radius: 10px;
		max-width: 280px;
		width: 100%;
		position: relative;
		overflow: hidden;
		background: rgba(249, 249, 249, 1);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
		background-image: var(--subject-bg);
		background-size: cover;
		.card-body {
			width: 100%;
			height: 100%;
			position: relative;
			direction: ltr;
			padding: 20px;
			display: flex;
			flex-direction: column;
			.quiz-level {
				display: flex;
				gap: 4px;
				align-items: center;
				.quiz-icon {
					width: 50px;
					height: 50px;
					border: 2px solid currentColor;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					overflow: hidden;
				}
				span {
					color: currentColor;
					font-family: Noto Naskh Arabic;
					font-size: 14px;
					font-weight: 700;
					line-height: 23.84px;
				}
			}
			.quiz-info {
				height: 100%;
				div {
					font-size: 16px;
					padding: 5px 0;
					font-family: Noto Naskh Arabic;
					font-weight: 500;
					line-height: 27.25px;
					text-align: left;
				}
			}
			.quiz-btn {
				button {
					background: rgba(239, 129, 20, 1);
					width: 100%;
					color: white;
					padding: 10px 30px;
					border-radius: 15px;
				}
			}
		}
	}
</style>
