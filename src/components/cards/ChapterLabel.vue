<script setup lang="ts"></script>

<template>
	<div class="card-container">
		<div class="card-body">chapter label</div>
	</div>
</template>
<!--  -->
<style scoped lang="scss">
	.card-container {
		border: 2px solid blue;
		border-radius: 6px;
		overflow: hidden;
		width: 280px;
		height: 40px;
	}

	.card-body {
		background-color: skyblue;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}
</style>
