<template>
	<section v-if="resetPasswordData.step === 0">
		<h1>نسيت كلمة السر؟</h1>
		<el-form label-position="top" :model="form" ref="formRef" :rules="rules" @submit.prevent="submit">
			<div class="form-row">
				<KInput
					label="البريد الإلكتروني"
					prop="email"
					v-model="form.email"
					id="email_form_input"
					placeholder="البريد الإلكتروني"
					class="mb-2"
				/>
			</div>
			<div>
				<p>سنرسل رمز التحقق إلى هذا البريد الإلكتروني إذا كان هناك حساب Kuiz موجود يتطابق مع هذه المعلومات.</p>
			</div>
			<div>
				<button class="btn-form" type="submit" id="email_form_submit_btn">تجديد كلمة السر</button>
			</div>
			<div><router-link :to="{ name: 'login' }" id="email_form_back_link">رجوع</router-link></div>
		</el-form>
	</section>
</template>

<script setup lang="ts">
	import { ElMessage, FormInstance, FormRules } from 'element-plus';
	import { reactive, ref } from 'vue';
	import { useAuth } from '@/composition/auth';
	import KInput from '@/components/common/form/KInput.vue';
	const { resetPasswordData, requestResetPassword } = useAuth();

	let blured = false;
	const validate = (value: string) => {
		if (!blured) return;
		if (!value || !value.length) return 'required';
		if (value.length < 4) return 'invalid';
	};
	const formRef = ref<FormInstance>();
	const rules = reactive<FormRules<{ email: string }>>({
		email: [
			{
				validator: (_rule: any, value: any, callback: any) => {
					blured = true;
					callback(validate(value));
				},
				trigger: 'blur',
			},
			{
				validator: (_rule: any, value: any, callback: any) => {
					callback(validate(value));
				},
				trigger: 'change',
			},
		],
	});
	const form = reactive({
		email: '',
	});
	const submit = () => {
		blured = true;
		if (!formRef) return;
		formRef.value?.validate(async valid => {
			if (valid) {
				console.log('submit!');
				const { errors, success } = await requestResetPassword(form.email);
				if (success) {
					ElMessage.success('تمت العملية بنجاح');
				} else {
					for (const error of errors) {
						ElMessage.error(error);
					}
				}
			} else {
				ElMessage.error('يرجى التحقق');
			}
		});
	};
</script>

<style scoped>
	a {
		margin-top: 24px;
		display: inline-block;
		font-family: Noto Naskh Arabic;
		font-size: 16px;
		font-weight: 500;
		line-height: 27.25px;
		text-align: center;
		color: #808080;
	}
</style>
