<template>
	<div class="grid-overlay-container">
		<div class="grid-overlay"></div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.grid-overlay-container {
		position: absolute;
		width: calc(100% - 160px);
		height: calc(100% - 28px);
		overflow: hidden;
		top: 14px;
		left: 80px;
		pointer-events: none;
		.grid-overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(90deg, rgba(255, 220, 255, 0.24) 1px, transparent 1px),
				linear-gradient(180deg, rgba(255, 220, 255, 0.24) 1px, transparent 1px);
			background-size: 70px 55px;
			top: -14px;
			left: -17px;
		}
	}
</style>
