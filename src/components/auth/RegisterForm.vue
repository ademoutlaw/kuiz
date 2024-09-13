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
			<template v-if="accountType === 'student'">
				<div class="form-row">
					<el-form-item label="المؤسسة التعليمية" required prop="institution">
						<el-select v-model="form.institution" id="institution" placeholder="المؤسسة التعليمية">
							<el-option value="public" label="تعليم عمومي" />
							<el-option value="private" label="تعليم خاص" />
							<el-option value="free" label="تعليم حر" />
						</el-select>
					</el-form-item>
					<SelectLevel v-model="form.level" />
				</div>
				<div class="form-row" v-if="levelStore.branches.length>1">
					<SelectBranch v-model="form.branch" />
					<SelectOptionalSubject v-model="form.optionalSubject" v-if="levelStore.optionalSubjects.length" />
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
					:error="formError.mobile"
				/>
				<KInput
					v-model="form.email"
					id="email"
					placeholder="البريد الإلكتروني"
					label="(Email) البريد الإلكتروني"
					prop="email"
					required
					:error="formError.email"
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
					<div class="password-checker">
						<div class="password-status">
							<div :class="{ 'is-valid': password.hasLength, 'is-invalid': passwordBlured }">8 أحرف أو أكثر</div>
							<div :class="{ 'is-valid': password.hasNumber, 'is-invalid': passwordBlured }">1رقم</div>
							<div :class="{ 'is-valid': password.hasLowerCase, 'is-invalid': passwordBlured }">1 Minuscule</div>
							<div :class="{ 'is-valid': password.hasUpperCase, 'is-invalid': passwordBlured }">1 Majuscule</div>
						</div>
					</div>
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
	import { createFormControlValidator, createInputValidatorByRegex, createRequiredInputValidator } from '../../utils/utils';
	import SelectLevel from './SelectLevel.vue';
	import KInput from '../form/KInput.vue';
	import SelectBranch from './SelectBranch.vue';
	import SelectOptionalSubject from './SelectOptionalSubject.vue';
	import { useRouter } from 'vue-router';
	import { useAuth } from '@/composition/auth';
	import { useLevelsStore } from '@/stores/levels';

	const props = defineProps<{ accountType: 'parent' | 'student' | undefined }>();

	const { register } = useAuth();
	const levelStore = useLevelsStore();
	const router = useRouter();
	// const emailError = ref('');
	// const mobileError = ref('');
	const passwordBlured = ref(false);
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
		role: props.accountType,
	});
	const formError = reactive<Partial<RegisterForm>>({
		mobile: '',
		email: '',
		institution: '',
		level: '',
		optionalSubject: '',
		branch: '',
	});
	
	levelStore.loadLevels(form);
	const formRef = ref<FormInstance>();
	const password = computed(() => {
		const pswd = form.password!;
		const validation = {
			hasLength: pswd.length >= 8,
			hasNumber: /[0-9]/.test(pswd),
			hasLowerCase: /[a-z]/.test(pswd),
			hasUpperCase: /[A-Z]/.test(pswd),
		};
		return {
			...validation,
			isValid: validation.hasLength && validation.hasNumber && validation.hasLowerCase && validation.hasUpperCase,
		};
	});

	const validatePassword = createFormControlValidator((_rule: any, _value: any, callback: any) => {
		passwordBlured.value = true;
		if (!(password.value.hasLength && password.value.hasNumber && password.value.hasLowerCase && password.value.hasUpperCase)) {
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
		formRef.value?.validate(async (valid) => {
			if (valid) {
				const { success, errors } = await register(form);
				if (success) {
					ElMessage.success('تم تسجيل الدخول بنجاح');
					router.replace({ name: 'verifyEmail' });
				} else {
					for (const error of errors) {
						if(formError.hasOwnProperty(error.field)){
							formError[error.field] = error.message;
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
		if(prop==='mobile'){
			formError.mobile = '';
		}
		if(prop==='email'){
			formError.email = '';
		}
		if (isValid) {
			validationSet.value.delete(prop);
		} else {
			validationSet.value.add(prop);
		}
	};

</script>

<style lang="scss">
	.register-form-container {
		.password-checker {
			margin-top: 32px;
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
		.el-select__wrapper,
		.el-input__wrapper {
			max-width: 507px;
		}
	}
</style>
