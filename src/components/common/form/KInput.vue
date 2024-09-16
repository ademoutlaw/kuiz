<template>
	<el-form-item :label="label" :required="required" :prop="prop" label-position="top" class="k-form-item" :class="{ preset }">
		<el-input v-model="model" :id="id" :placeholder="placeholder" :type="type" :disabled="disabled">
			<template #suffix v-if="isPassword">
				<el-icon class="el-input__icon cursor-pointer" @click="toggleShowPassword"
					><Icon icon="clarity:eye-show-line" v-show="!showPassword" /><Icon icon="clarity:eye-hide-line" v-show="showPassword"
				/></el-icon>
			</template>
		</el-input>
	</el-form-item>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';

	const model = defineModel();
	const props = defineProps<{
		id?: string;
		prop?: string;
		label?: string;
		placeholder?: string;
		required?: boolean;
		type?: string;
		preset?: boolean;
		disabled?: boolean;
	}>();
	const showPassword = ref(false);
	const isPassword = computed(() => props.type === 'password');
	const type = computed(() => (props.type == 'password' ? (showPassword.value ? 'text' : 'password') : props.type));
	const toggleShowPassword = () => {
		showPassword.value = !showPassword.value;
	};
</script>
