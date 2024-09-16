<template>
	<el-form-item :label="label" :required="required" :prop="prop" label-position="top" class="k-form-item" :class="{ preset }">
		<el-select v-model="model" :id="id" :placeholder="placeholder">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
		</el-select>
	</el-form-item>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	const model = defineModel();
	const props = defineProps<{
		id?: string;
		prop?: string;
		label?: string;
		placeholder?: string;
		required?: boolean;
		preset?: boolean;
		options: string[] | { label: string; value: string }[];
	}>();

	const options = computed(() => props.options.map(option => (typeof option === 'string' ? { label: option, value: option } : option)));
</script>

<style scoped></style>
