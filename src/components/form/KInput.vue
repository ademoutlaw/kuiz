<template>
  <el-form-item :label="label" :required="required" :prop="prop" label-position="top">
		<el-input v-model="model" :id="id" :placeholder="placeholder" :type="type" />
	</el-form-item>
</template>

<script setup lang="ts">
	const model = defineModel();
	defineProps<{
		id?: string;
		prop?: string;
		label?: string;
		placeholder?: string;
		required?: boolean;
    type?: string;
	}>();
</script>

<style scoped>

</style>
