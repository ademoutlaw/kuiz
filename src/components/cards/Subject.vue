<template>
	<div class="card-container" :style="{ '--subject-color': subject.color, '--subject-bg': `url(${subject.bg})` }">
		<RouterLink class="card-body" :to="{ name: 'subject', params: { id: subject.id } }">
			<div class="card-icon">
				<img :src="subject.icon" alt="" />
			</div>
			<div class="card-title">
				<h3>{{ subject.title }}</h3>
			</div>
			<div class="card-quiz">
				<span>{{ subject.quiz }} Quiz</span>
			</div>
			<div class="card-progress">
				<span class="card-progress-bar" :style="{ width: `${subject.progress}%` }"></span>
				<span class="card-progress-label" :style="{ width: `${subject.progress}%` }">{{ subject.progress }}%</span>
			</div>
		</RouterLink>
	</div>
</template>
<script setup lang="ts">
	defineProps<{ subject: { id: string; color: string; title: string; quiz: number; progress: number; icon: string; bg: string } }>();
</script>
<!--  -->
<style scoped lang="scss">
	.card-container {
		padding: 0 0 9px 9px;
		/* flex-grow: 1; */
		width: 300px;
		height: 300px;
		position: relative;
		box-sizing: content-box;
		.card-body {
			background-color: var(--subject-color);
			// background-image: url(/subjects/bg/physics.svg);
			background-image: var(--subject-bg);
			color: white;
			width: 100%;
			height: 100%;
			border-radius: 40px;
			/* background: red; */
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 18px 25px;
			.card-icon {
				background-color: white;
				height: 100px;
				width: 100px;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				img {
					width: 75px;
				}
			}
			.card-title {
				font-family: Noto Naskh Arabic;
				font-size: 40px;
				font-weight: 700;
				line-height: 68.12px;
			}
			.card-quiz {
				background: rgba(255, 255, 255, 0.2);
				border-radius: 5px;
				padding: 6px;
				width: 167px;
				height: 40px;
				text-align: center;
				direction: ltr;
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 700;
				line-height: 27.25px;
			}
			.card-progress {
				width: 100%;
				height: 14px;
				background: rgba(217, 217, 217, 1);
				border-radius: 50px;
				margin-top: 38px;
				position: relative;
				direction: ltr;
				.card-progress-bar {
					display: block;
					background: white;
					border-radius: 50px;
					height: 100%;
				}
				.card-progress-label {
					position: absolute;
					bottom: 8px;
					text-align: right;
					font-family: Noto Naskh Arabic;
					font-size: 16px;
					font-weight: 700;
					line-height: 27.25px;
				}
			}
		}
		&::before {
			content: '';
			border-radius: 0 0 0 40px;
			border: 5px solid var(--subject-color);
			border-top: 1px solid transparent;
			border-right: 1px solid transparent;
			box-sizing: border-box;
			position: absolute;
			left: 0;
			bottom: 0;
			right: 25px;
			top: 25px;
			pointer-events: none;
		}
	}
</style>
