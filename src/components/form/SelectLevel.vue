<template>
	<el-form-item label="المستوى الدراسي" required prop="level">
		<el-select v-model="level" id="level" placeholder="المستوى الدراسي">
			<el-option value="7">7</el-option>
			<el-option value="8">8</el-option>
			<el-option value="9">9</el-option>
			<el-option value="1">1</el-option>
			<el-option value="2">2</el-option>
			<el-option value="3">3</el-option>
			<el-option value="4">4</el-option>
		</el-select>
	</el-form-item>
</template>

<script setup lang="ts">
	const level = defineModel();
</script>

<style scoped></style>
