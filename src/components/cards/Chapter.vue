<script setup lang="ts">
	import Quiz from './Quiz.vue';
	defineProps<{ index: number }>();
</script>

<template>
	<div class="card-container">
		<div class="card-body">
			<div>chapter</div>
			<div class="w-full flex flex-wrap">
				<Quiz v-for="i of 5" :index="index" :key="i" />
			</div>
		</div>
	</div>
</template>
<!--  -->
<style scoped lang="scss">
	.card-container {
		border: 2px solid green;
		border-radius: 6px;
		overflow: hidden;
		width: 100%;
	}

	.card-body {
		background-color: greenyellow;
		width: 100%;
		height: 100%;
	}
</style>
