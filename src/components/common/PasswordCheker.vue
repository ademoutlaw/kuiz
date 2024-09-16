<template>
	<div class="password-checker">
		<div class="password-status">
			<div :class="{ 'is-valid': password.hasLength, 'is-invalid': blured }">8 أحرف أو أكثر</div>
			<div :class="{ 'is-valid': password.hasNumber, 'is-invalid': blured }">1رقم</div>
			<div :class="{ 'is-valid': password.hasLowerCase, 'is-invalid': blured }">1 Minuscule</div>
			<div :class="{ 'is-valid': password.hasUpperCase, 'is-invalid': blured }">1 Majuscule</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, watch } from 'vue';
	const model = defineModel();
	const form = defineProps<{ password: string; blured: boolean }>();
	const password = computed(() => {
		const validation = {
			hasLength: form.password.length >= 8,
			hasNumber: /[0-9]/.test(form.password),
			hasLowerCase: /[a-z]/.test(form.password),
			hasUpperCase: /[A-Z]/.test(form.password),
		};
		return {
			...validation,
			isValid: validation.hasLength && validation.hasNumber && validation.hasLowerCase && validation.hasUpperCase,
		};
	});
	watch(
		() => password.value.isValid,
		isValid => {
			console.log({ isValid });
			model.value = isValid;
		},
		{ immediate: true }
	);
</script>

<style scoped lang="scss">
	.password-checker {
		// margin-top: 32px;
		.password-status {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 6px;
			div {
				padding: 6px 10px;
				border-radius: 50px;
				background: rgba(250, 250, 250, 1);
				font-family: Noto Naskh Arabic;
				font-size: 12px;
				font-weight: 400;
				line-height: 20.44px;
				text-align: left;
			}
			.is-invalid {
				background-color: #e44b4b;
				color: white;
			}
			.is-valid {
				color: white;
				background: #1ba24d;
			}
		}
	}
</style>
