<template>
	<el-dialog v-model="show" :show-close="false" class="password-form-modal rounded-[40px] w-[494px] h-[495px] p-0">
		<template #header="{ close, titleId }">
			<button @click="close" :id="titleId">
				<Icon icon="material-symbols:close-rounded" />
			</button>
			<!-- <div class="modal-header">
			</div> -->
		</template>
		<div class="modal-body h-full">
			<el-scrollbar>
				<el-form class="pt-2" :rules="rules" :model="form" ref="formRef" @submit.prevent="submit">
					<div class="form-row">
						<KInput
							type="password"
							v-model="form.currentPassword"
							prop="currentPassword"
							id="current-password-input"
							label="كلمة السر الحالية"
							required
						/>
					</div>
					<div class="form-row">
						<div class="form-col">
							<KInput
								type="password"
								v-model="form.newPassword"
								prop="newPassword"
								id="new-password-input"
								label="كلمة السر الجديدة"
								required
							/>
							<PasswordCheker :blured="passwordBlured" :password="form.newPassword" v-model="isValidPassword" />
						</div>
					</div>
					<div class="form-row">
						<KInput
							type="password"
							v-model="form.rePassword"
							prop="rePassword"
							id="new-rePassword-input"
							label="تأكيد كلمة السر"
							required
						/>
					</div>
					<div class="form-row">
						<div class="form-footer">
							<button class="form-btn" type="submit">تغيير كلمة السر</button>
							<button class="form-back-btn" @click="show = false" type="button">رجوع</button>
						</div>
					</div>
				</el-form>
			</el-scrollbar>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
	const show = defineModel();
	import KInput from '@/components/common/form/KInput.vue';
	import PasswordCheker from '@/components/common/PasswordCheker.vue';
	import { useAuth } from '@/composition/auth';
	import { createFormControlValidator } from '@/utils/utils';
	import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
	import { reactive, ref, watch } from 'vue';

	const { changePassword } = useAuth();

	const form = reactive({
		currentPassword: '',
		newPassword: '',
		rePassword: '',
	});
	const isValidPassword = ref(false);
	const passwordBlured = ref(false);
	const formRef = ref<FormInstance>();
	const validatePassword = createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (!value) {
			callback('يرجى إدخال كلمة السّر');
		} else {
			callback();
		}
	});
	const validateNewPassword = createFormControlValidator((_rule: any, _value: any, callback: any) => {
		passwordBlured.value = true;
		if (!isValidPassword.value) {
			callback('');
		} else {
			if (form.rePassword !== '') {
				if (!formRef.value) return;
				formRef.value.validateField('rePassword');
			}
			callback();
		}
	});
	const validateRePassowrd = createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (value === '') {
			callback('يرجى تأكيد كلمة السّر');
		} else if (value !== form.newPassword) {
			callback('يجب عليك إدخال نفس كلمة السّر');
		} else {
			callback();
		}
	});
	const rules = reactive<FormRules<typeof form>>({
		currentPassword: validatePassword,
		newPassword: validateNewPassword,
		rePassword: validateRePassowrd,
	});
	const submit = () => {
		formRef.value?.validate(async valid => {
			if (valid) {
				try {
					const { success, errors } = await changePassword(form);
					if (success) {
						ElMessage.success('success');
						show.value = false;
					} else {
						for (const error of errors) {
							ElMessage.error(error);
						}
					}
				} catch (error) {
					console.error(error);
				}
			} else {
				ElMessage.error('يرجى التحقق من بيانات الدخول');
			}
		});
	};
	watch(show, () => {
		if (!show.value) {
			passwordBlured.value = false;
			formRef.value?.resetFields();
		}
	});
</script>

<style lang="scss">
	.password-form-modal {
		max-height: 75vh;
		padding-top: 50px;
		.el-dialog__header {
			height: 0px;
			padding: 0;
			button {
				position: absolute;
				top: 24px;
				left: 24px;
				font-size: 24px;
				color: #4d4d4d;
			}
		}
		.modal-body {
			max-height: 420px;
			height: calc(75vh - 70px);
		}
		.el-form {
			width: 350px;
			margin: auto;
		}
		.el-form-item {
			margin-bottom: 24px;
		}
		.form-footer {
			button {
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 400;
				line-height: 27.25px;
				text-align: center;
			}
			.form-back-btn {
				margin-right: 20px;
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 500;
				line-height: 27.25px;
				text-align: center;
				color: #808080;
			}
		}
	}
</style>
