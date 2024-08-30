<template>
	<section v-if="resetPasswordData.step === 2">
		<h1>تجديد كلمة السّر</h1>
		<el-form label-position="top" :model="form" ref="formRef" :rules="rules" @submit.prevent="submit">
			<div class="form-row">
				<el-form-item label="كلمة السّر" prop="password">
					<el-input v-model="form.password" id="password_form_password_input" type="password" placeholder="كلمة السّر" />
				</el-form-item>
			</div>
			<div class="password-checker">
				<div class="password-status">
					<div :class="{ 'is-valid': password.hasLength }">8 أحرف أو أكثر</div>
					<div :class="{ 'is-valid': password.hasNumber }">1رقم</div>
					<div :class="{ 'is-valid': password.hasLowerCase }">1 Minuscule</div>
					<div :class="{ 'is-valid': password.hasUpperCase }">1 Majuscule</div>
				</div>
			</div>
			<div class="form-row">
				<el-form-item label="تأكيد كلمة السّر" prop="rePassword">
					<el-input
						v-model="form.rePassword"
						type="password"
						id="password_form_rePassword_input"
						placeholder="تأكيد كلمة السّر"
					/>
				</el-form-item>
			</div>
			<div>
				<button class="btn-form" type="submit" id="password_form_submit_btn">تجديد كلمة السر</button>
			</div>
		</el-form>
	</section>
</template>

<script setup lang="ts">
	import { FormInstance, FormRules } from 'element-plus';
	import { computed, reactive, ref } from 'vue';
	import { useAuth } from '@/composition/auth';

	const { resetPasswordData, changePassword } = useAuth();
	const formRef = ref<FormInstance>();
	const form = reactive({
		password: '',
		rePassword: '',
	});
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

	let passwordBlured = false;
	let rePasswordBlured = false;

	const validatePassword = (value: string) => {
		if (!passwordBlured) return;
		if (!value || !value.length) return 'required';
		if (!password.value.isValid) return '';
		formRef.value?.validateField('rePassword');
	};
	const validateRepassword = (value: string) => {
		if (!rePasswordBlured) return;
		if (!value || !value.length) return 'required';
		if (value !== form.password) return 'not matches';
	};
	const submit = () => {
		passwordBlured = true;
		rePasswordBlured = true;
		if (!formRef) return;
		formRef.value?.validate(valid => {
			if (valid) {
				console.log('submit!');
				changePassword(form.password);
			} else {
				console.log('error submit!');
			}
		});
	};
	const rules = reactive<FormRules<{ password: string; rePassword: string }>>({
		password: [
			{
				validator: (_rule: any, value: any, callback: any) => {
					passwordBlured = true;
					callback(validatePassword(value));
				},
				trigger: 'blur',
			},
			{
				validator: (_rule: any, value: any, callback: any) => {
					callback(validatePassword(value));
				},
				trigger: 'change',
			},
		],
		rePassword: [
			{
				validator: (_rule: any, value: any, callback: any) => {
					rePasswordBlured = true;
					callback(validateRepassword(value));
				},
				trigger: 'blur',
			},
			{
				validator: (_rule: any, value: any, callback: any) => {
					callback(validateRepassword(value));
				},
				trigger: 'change',
			},
		],
	});
</script>

<style scoped lang="scss">
	.password-checker {
		span {
			font-family: Noto Naskh Arabic;
			font-size: 14px;
			font-weight: 400;
			line-height: 23.84px;
			display: block;
			text-align: center;
			padding: 8px;
		}
		.password-status {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 6px;
			div {
				padding: 10px 15px 10px 15px;
				border-radius: 50px;
				background: rgba(250, 250, 250, 1);
				font-family: Noto Naskh Arabic;
				font-size: 14px;
				font-weight: 400;
				line-height: 23.84px;
				text-align: left;
			}
			.is-valid {
				background: green;
			}
		}
	}
</style>
