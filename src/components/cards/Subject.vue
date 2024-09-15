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
		<div class="card-vector">
			<svg width="203" height="203" viewBox="0 0 203 203" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.75571 2.75073V160C2.75571 182.091 20.6643 200 42.7557 200H199.792"
					:stroke="subject.color"
					stroke-width="5"
					stroke-linecap="round"
				/>
			</svg>
		</div>
	</div>
</template>
<script setup lang="ts">
	defineProps<{ subject: { id: string; color: string; title: string; quiz: number; progress: number; icon: string; bg: string } }>();
</script>
<!--  -->
<style scoped lang="scss">
	.card-container {
		padding: 0 0 7px 7px;
		/* flex-grow: 1; */
		width: 230px;
		height: 231px;
		position: relative;
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
			padding: 16px 25px;
			.card-icon {
				background-color: white;
				height: 75px;
				width: 75px;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				flex-shrink: 0;
				padding: 10px;
				img {
					width: 100%;
				}
			}
			.card-title {
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 700;
				line-height: 30.65px;
				margin: 4px 0 16px;
			}
			.card-quiz {
				background: rgba(255, 255, 255, 0.2);
				border-radius: 5px;

				width: 126px;
				height: 30px;
				text-align: center;
				direction: ltr;
				font-family: Noto Naskh Arabic;
				font-size: 14px;
				font-weight: 700;
				line-height: 23.84px;
				flex-shrink: 0;
			}
			.card-progress {
				width: 100%;
				height: 7px;
				background: rgba(217, 217, 217, 1);
				border-radius: 50px;
				margin-top: 29px;
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
					font-size: 14px;
					font-weight: 700;
					line-height: 23.84px;
				}
			}
		}
		.card-vector {
			position: absolute;
			left: 0;
			bottom: 0;
			pointer-events: none;
		}
	}
</style>
