<template>
	<section v-if="resetPasswordData.step === 2">
		<h1>تجديد كلمة السّر</h1>
		<el-form label-position="top" :model="form" ref="formRef" :rules="rules" @submit.prevent="submit">
			<div class="form-row">
				<KInput
					label="كلمة السّر"
					prop="password"
					v-model="form.password"
					id="password_form_password_input"
					type="password"
					placeholder="كلمة السّر"
					class="mb-2"
				/>
			</div>
			<PasswordCheker :password="form.password" :blured="passwordBlured" v-model="passwordValid" />

			<div class="form-row">
				<KInput
					label="تأكيد كلمة السّر"
					prop="rePassword"
					v-model="form.rePassword"
					type="password"
					id="password_form_rePassword_input"
					placeholder="تأكيد كلمة السّر"
					class="mt-6 mb-8"
				/>
			</div>
			<div>
				<button class="btn-form" type="submit" id="password_form_submit_btn">تجديد كلمة السر</button>
			</div>
		</el-form>
	</section>
</template>

<script setup lang="ts">
	import { ElMessage, FormInstance, FormRules } from 'element-plus';
	import { reactive, ref } from 'vue';
	import { useAuth } from '@/composition/auth';
	import KInput from '@/components/common/form/KInput.vue';
	import PasswordCheker from '@/components/common/PasswordCheker.vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();
	const { resetPasswordData, resetPassword } = useAuth();
	const formRef = ref<FormInstance>();
	const passwordValid = ref(false);
	const form = reactive({
		password: '',
		rePassword: '',
	});

	const passwordBlured = ref(false);
	let rePasswordBlured = false;

	const validatePassword = (value: string) => {
		if (!passwordBlured.value) return;
		if (!value || !value.length) return '';
		if (!passwordValid.value) return '';
		formRef.value?.validateField('rePassword');
	};
	const validateRepassword = (value: string) => {
		if (!rePasswordBlured) return;
		if (!value || !value.length) return 'يرجى تأكيد كلمة السّر';
		if (value !== form.password) return 'يجب عليك إدخال نفس كلمة السّر';
	};
	const submit = () => {
		passwordBlured.value = true;
		rePasswordBlured = true;
		if (!formRef) return;
		formRef.value?.validate(async valid => {
			if (valid) {
				console.log('submit!');
				const { errors, success } = await resetPassword(form.password);
				if (success) {
					ElMessage.success('تمت العملية بنجاح');
					router.replace({ name: 'login' });
				} else {
					ElMessage.error(errors[0]);
				}
			} else {
				ElMessage.error('يرجى التحقق');
			}
		});
	};
	const rules = reactive<FormRules<{ password: string; rePassword: string }>>({
		password: [
			{
				validator: (_rule: any, value: any, callback: any) => {
					passwordBlured.value = true;
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
	section {
		padding: 0 78px;
	}
</style>
