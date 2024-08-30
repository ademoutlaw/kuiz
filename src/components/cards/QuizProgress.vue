<template>
	<div class="card-quiz-container" :style="{ '--subject-bg': `url(${bg})` }">
		<div class="card-body">
			<div class="quiz-subject" :style="{ color }">
				<div class="quiz-icon">
					<img :src="icon" alt="quiz-icon" />
				</div>
				<span>{{ subject }}</span>
			</div>
			<div class="quiz-info">
				<div>Quiz N°{{ number }}: {{ title }}</div>
			</div>
			<div class="quiz-footer">
				<div class="quiz-progress">
					<span>{{ correctAnswers }}/{{ totalQuestion }}</span>
					<div class="progress-bar">
						<div :style="{ width: `${progress.value}%`, backgroundColor: progress.color }"></div>
					</div>
				</div>
				<div class="quiz-btn">
					<button>إعادة كويز</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { computed } from 'vue';

	const props = defineProps<{
		title: string;
		color: string;
		number: string;
		subject: string;
		bg: string;
		icon: string;
		totalQuestion: number;
		correctAnswers: number;
	}>();
	const progress = computed(() => {
		const value = (props.correctAnswers / props.totalQuestion) * 100;
		const color = value < 51 ? 'rgba(228, 75, 75, 1)' : value < 100 ? 'rgba(255, 193, 7, 1)' : 'rgba(48, 221, 113, 1)';
		return { value, color };
	});
</script>
<style scoped lang="scss">
	.card-quiz-container {
		--subject-bg: url(/subjects/chimistry-bg.svg);
		border-radius: 10px;
		max-width: 350px;
		width: 100%;
		position: relative;
		overflow: hidden;
		background: rgba(249, 249, 249, 1);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
		background-image: var(--subject-bg);
		background-size: 365px;
		background-repeat: no-repeat;
		background-position: top right;
		.card-body {
			width: 100%;
			height: 100%;
			position: relative;
			direction: ltr;
			padding: 20px;
			display: flex;
			flex-direction: column;
			.quiz-subject {
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
			.quiz-footer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 22px;
				.quiz-progress {
					width: 100%;
					text-align: right;
					span {
						font-family: Noto Naskh Arabic;
						font-size: 14px;
						font-weight: 500;
						line-height: 23.84px;
						text-align: right;
						color: rgba(160, 162, 189, 1);
					}
					.progress-bar {
						width: 100%;
						height: 16px;
						background: rgba(160, 162, 189, 1);
						border: 3px solid rgba(230, 232, 252, 1);
						border-radius: 30px;
						margin-bottom: 22px;
						div {
							border-radius: 30px;
							height: 100%;
							position: relative;
							&::after {
								content: '';
								position: absolute;
								top: 14px;
								right: -7px;
								width: 0;
								height: 0;
								border-top: 0px solid transparent;
								border-left: 7px solid transparent;
								border-bottom: 10px solid rgb(160 162 189);
								border-right: 7px solid transparent;
							}
						}
					}
				}
				.quiz-btn {
					flex-shrink: 0;
					button {
						background: rgba(128, 0, 128, 1);
						color: white;
						padding: 5px 15px;
						border-radius: 15px;
						font-family: Noto Naskh Arabic;
						font-size: 14px;
						font-weight: 700;
						line-height: 23.84px;
					}
				}
			}
		}
	}
</style>
