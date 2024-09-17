<template>
	<el-dialog v-model="show" :show-close="false" class="k-dialog">
		<template #header="{ close, titleId }">
			<button @click="close" :id="titleId">
				<Icon icon="material-symbols:close-rounded" />
			</button>
		</template>
		<slot :close="close"></slot>
	</el-dialog>
</template>

<script setup lang="ts">
	const show = defineModel();
	const close = () => {
		show.value = false;
	};
</script>
