<template>
	<div class="register-form-container">
		<el-form
			label-position="top"
			label-width="auto"
			:rules="rules"
			ref="formRef"
			:model="form"
			@submit.prevent="submitForm"
			@validate="onFormValidate"
		>
			<div class="form-row">
				<KInput v-model="form.firstname" id="firstname" placeholder="الاسم" label="الاسم" prop="firstname" required />
				<KInput v-model="form.lastname" id="lastname" placeholder="اللقب" label="اللقب" prop="lastname" required />
			</div>
			<template v-if="role === 'student'">
				<div class="form-row">
					<el-form-item label="المؤسسة التعليمية" required prop="institution" class="k-form-item">
						<el-select v-model="form.institution" id="institution" placeholder="المؤسسة التعليمية">
							<el-option value="public" label="تعليم عمومي" />
							<el-option value="private" label="تعليم خاص" />
							<el-option value="free" label="تعليم حر" />
						</el-select>
					</el-form-item>
					<SelectLevel :institution="form.institution" v-model="form.level" />
				</div>
				<div class="form-row" v-if="['2', '3', '4'].includes(form.level)">
					<SelectBranch :level="form.level" v-model="form.branch" />
					<SelectOptionalSubject :branch="form.branch" v-model="form.optionalSubject" v-if="'4' === form.level" />
					<div class="form-col" v-else></div>
				</div>
			</template>
			<div class="form-row">
				<KInput
					v-model="form.mobile"
					id="mobile"
					placeholder="رقم الهاتف"
					label="رقم الهاتف"
					prop="mobile"
					required
					:error="mobileError"
				/>
				<KInput
					v-model="form.email"
					id="email"
					placeholder="البريد الإلكتروني"
					label="(Email) البريد الإلكتروني"
					prop="email"
					required
					:error="emailError"
				/>
			</div>
			<div class="form-row">
				<div class="form-col">
					<KInput
						v-model="form.password"
						id="password"
						required
						type="password"
						placeholder="كلمة السّر"
						label="كلمة السّر"
						prop="password"
					/>
					<PasswordCheker v-model="passwordValid" :blured="passwordBlured" :password="form.password" />
				</div>
				<KInput
					label="تأكيد كلمة السّر"
					prop="rePassword"
					v-model="form.rePassword"
					id="confirm_password"
					type="password"
					placeholder="تأكيد كلمة السّر"
					required
				/>
			</div>
			<div class="form-action">
				<button id="register-btn" type="submit" :disabled="disabledSubmitBtn">إشترك الأن</button>
				<div>هل لديك حساب بالفعل؟ <router-link :to="{ name: 'login' }">تسجيل الدخول</router-link></div>
			</div>
		</el-form>
	</div>
</template>

<script setup lang="ts">
	import { computed, reactive, ref } from 'vue';
	import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
	import { createFormControlValidator, createInputValidatorByRegex, createRequiredInputValidator } from '@/utils/utils';
	import SelectLevel from '@/components/common/SelectLevel.vue';
	import KInput from '@/components/common/form/KInput.vue';
	import SelectBranch from '@/components/common/SelectBranch.vue';
	import { useRouter } from 'vue-router';
	import { useAuth } from '@/composition/auth';
	import SelectOptionalSubject from '@/components/common/SelectOptionalSubject.vue';
	import PasswordCheker from '../common/PasswordCheker.vue';

	interface RegisterForm {
		firstname: string;
		lastname: string;
		mobile: string;
		email: string;
		password: string;
		rePassword: string;
		institution: string;
		level: string;
		optionalSubject: string;
		branch: string;
		role?: string;
	}

	const props = defineProps<{ role: 'parent' | 'student' | null }>();

	const { register } = useAuth();
	const router = useRouter();
	const emailError = ref('');
	const mobileError = ref('');
	const passwordBlured = ref(false);
	const passwordValid = ref(false);
	const formHasSubmitted = ref(false);
	const validationSet = ref(new Set());
	const disabledSubmitBtn = computed(() => formHasSubmitted.value && validationSet.value.size > 0);
	const form = reactive<RegisterForm>({
		firstname: '',
		lastname: '',
		mobile: '',
		email: '',
		password: '',
		rePassword: '',
		institution: '',
		level: '',
		optionalSubject: '',
		branch: '',
		role: props.role!,
	});
	const formRef = ref<FormInstance>();

	const validatePassword = createFormControlValidator((_rule: any, _value: any, callback: any) => {
		passwordBlured.value = true;
		if (!passwordValid.value) {
			callback('يرجى إدخال كلمة السّر');
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
		} else if (value !== form.password) {
			callback('يجب عليك إدخال نفس كلمة السّر');
		} else {
			callback();
		}
	});

	const rules = reactive<FormRules<RegisterForm>>({
		firstname: createRequiredInputValidator('يرجى إدخال الاسم'),
		lastname: createRequiredInputValidator('يرجى إدخال اللقب'),
		institution: createRequiredInputValidator('يرجى إدخال المؤسسة التعليمية'),
		level: createFormControlValidator((_rule: any, value: any, callback: any) => {
			if (value === '' || (form.institution === 'free' && value !== '4')) {
				callback('يرجى إدخال المستوى الدراسي');
			} else {
				callback();
			}
		}),
		branch: createFormControlValidator((_rule: any, value: any, callback: any) => {
			if (value === '' && (form.level === '4' || form.level === '3')) {
				callback('يرجى إدخال الشعبة');
			} else {
				callback();
			}
		}),
		optionalSubject: createFormControlValidator((_rule: any, value: any, callback: any) => {
			if (value === '' && (form.level === '4' || form.level === '3')) {
				callback('يرجى إدخال المادة الاختيارية');
			} else {
				callback();
			}
		}),
		mobile: createInputValidatorByRegex('يرجى إدخال رقم الهاتف', 'يرجى إدخال رقم الهاتف', 'mobile'),
		email: createInputValidatorByRegex('يرجى إدخال البريد الإلكتروني (Email)', 'يرجى إدخال البريد الإلكتروني (Email)', 'email'),
		password: validatePassword,
		rePassword: validateRePassowrd,
	});

	const submitForm = () => {
		if (!formRef) return;
		formHasSubmitted.value = true;
		formRef.value?.validate(valid => {
			if (valid) {
				const { success, errors } = register(form);
				if (success) {
					ElMessage.success('تم تسجيل الدخول بنجاح');
					router.replace({ name: 'login' });
				} else {
					for (const error of errors) {
						if (error.isEmailError) {
							emailError.value = error.message;
						} else if (error.isMobileError) {
							mobileError.value = error.message;
						}
						ElMessage.error(error.message);
					}
				}
			} else {
				ElMessage.error('يرجى التحقق من بيانات الدخول');
			}
		});
	};
	const onFormValidate = (prop: string, isValid: boolean) => {
		if (prop === 'mobile') {
			mobileError.value = '';
		}
		if (prop === 'email') {
			emailError.value = '';
		}
		if (isValid) {
			validationSet.value.delete(prop);
		} else {
			validationSet.value.add(prop);
		}
	};
</script>

<style scoped lang="scss">
	.register-form-container {
		.form-action {
			text-align: center;
			margin-top: 32px;
			button {
				height: 53px;
				padding: 10px 150px 10px 150px;
				border-radius: 15px;

				background: rgba(239, 129, 20, 1);
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 700;
				line-height: 30.65px;
				color: #fff;
				&:disabled {
					background-color: #ccc;
				}
			}
			div {
				font-family: Noto Naskh Arabic;
				font-size: 20px;
				font-weight: 400;
				line-height: 34.06px;
				text-align: center;
				padding: 16px 0 30px;
				a {
					color: rgba(166, 0, 166, 1);
				}
			}
		}
	}
</style>
