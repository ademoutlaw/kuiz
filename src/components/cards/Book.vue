<template>
	<div class="book-card-container" :style="containerStyle" :class="{ small }">
		<div class="book-card">
			<div class="grid-overlay"></div>
			<div class="right-side">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="book-content">
				<div class="book-number">{{ number }}</div>
				<div class="book-title">{{ title }}</div>
				<router-link :to="{ name: 'about' }" class="book-more-details" v-if="!hideMore">إقرأ المزيد</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	const book = defineProps<{
		hideMore?: boolean;
		small?: boolean;
		containerBgColor?: string;
		bgColor?: string;
		number: string;
		title: string;
		description?: string;
	}>();

	const containerStyle = computed(() => ({
		'--container-bg-color': book.containerBgColor || '#fefaf6',
		'--bg-color': book.bgColor || 'red',
	}));
</script>

<style scoped lang="scss">
	// --container-bg-color: beige;
	.book-card-container {
		background-color: var(--container-bg-color);
		width: 447px;
		height: 534px;
		padding-bottom: 5px;
		flex-shrink: 0;
		&.small {
			width: 320px;
			height: 380px;
			.book-card {
				.book-content {
					padding: 56px 47px;
				}
			}
		}
		.book-card {
			width: 100%;
			height: 100%;
			background-color: var(--bg-color);
			overflow: hidden;
			border-radius: 40px;
			position: relative;
			box-shadow: -1px 3px 2px #0000003b;
			.grid-overlay {
				position: absolute;
				width: 100%;
				height: 100%;
				background-image: linear-gradient(90deg, #ffffff5f 1px, transparent 1px),
					linear-gradient(180deg, #ffffff5f 1px, transparent 1px);
				background-size: 49px 49px;
				top: 0;
				left: 0;
				pointer-events: none;
			}
			.right-side {
				position: absolute;
				top: 75px;
				bottom: 75px;
				right: 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				div {
					height: 25px;
					background-color: var(--container-bg-color);
					width: 39px;
					border-radius: 50px 0px 0px 50px;
					box-shadow: inset 2px 3px 2px #0000003b;
				}
			}
			.book-content {
				padding: 50px 90px 37px;
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				.book-number {
					background-color: white;
					display: flex;
					align-items: center;
					width: 60px;
					height: 60px;
					justify-content: center;
					border-radius: 10px;
					color: var(--bg-color);
					font-family: Inter;
					font-size: 40px;
					font-weight: 700;
					line-height: 48.41px;
					flex-shrink: 0;
				}
				.book-title {
					color: white;
					height: 100%;
					padding-top: 8px;
					font-family: Inter;
					font-size: 40px;
					font-weight: 700;
					line-height: 48.41px;
					text-align: center;
				}
				.book-more-details {
					text-decoration: underline;
					color: white;
					font-family: Inter;
					font-size: 20px;
					font-weight: 400;
					line-height: 24.2px;
				}
			}
		}
	}
</style>
