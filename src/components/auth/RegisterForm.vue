<template>
	<div class="register-form-container">
		<el-form label-position="top" label-width="auto" :rules="rules" ref="formRef" :model="form" @submit.prevent="submitForm">
			<div class="form-row">
				<KInput v-model="form.firstname" id="firstname" placeholder="الاسم" label="الاسم" prop="firstname" required />
				<KInput v-model="form.lastname" id="lastname" placeholder="اللقب" label="اللقب"  prop="lastname" required  />				
			</div>
			<template v-if="accountType === 'student'">
				<div class="form-row">
					<el-form-item label="المؤسسة التعليمية" required>
						<el-select v-model="form.institution" id="institution" placeholder="المؤسسة التعليمية">
							<el-option value="hello">t</el-option>
							<el-option value="hello2">t</el-option>
						</el-select>
					</el-form-item>
					<SelectLevel v-model="form.level" />
				</div>
				<div class="form-row" v-if="['2', '3', '4'].includes(form.level)">
					<SelectBranch :level="form.level" />
					<el-form-item label="المادة الاختيارية" prop="optionalSubject" v-if="'4' === form.level">
						<el-input v-model="form.optionalSubject" id="optional_subject" placeholder="المادة الاختيارية" />
					</el-form-item>
					<div class="form-col" v-else></div>
				</div>
			</template>
			<div class="form-row">
				<KInput v-model="form.mobile" id="mobile" placeholder="رقم الهاتف" label="رقم الهاتف" prop="mobile" required />
				<KInput  v-model="form.email" id="email" placeholder="البريد الإلكتروني" label="(Email) البريد الإلكتروني" prop="email" required />
			</div>
			<div class="form-row">
				<div class="form-col">
					<KInput v-model="form.password" id="password" required type="password" placeholder="كلمة السّر" label="كلمة السّر" prop="password" />
					<div class="password-checker">
						<span>يجب أن تحتوي كلمة السر على:</span>
						<div class="password-status">
							<div :class="{ 'is-valid': password.hasLength }">8 أحرف أو أكثر</div>
							<div :class="{ 'is-valid': password.hasNumber }">1رقم</div>
							<div :class="{ 'is-valid': password.hasLowerCase }">1 Minuscule</div>
							<div :class="{ 'is-valid': password.hasUpperCase }">1 Majuscule</div>
						</div>
					</div>
				</div>
				<KInput label="تأكيد كلمة السّر" prop="rePassword" v-model="form.rePassword" id="confirm_password" type="password" placeholder="تأكيد كلمة السّر" required />
			</div>
			<div class="form-action">
				<button id="register-btn" type="submit">إشترك الأن</button>
				<div>هل لديك حساب بالفعل؟ <router-link :to="{ name: 'login' }">تسجيل الدخول</router-link></div>
			</div>
		</el-form>
	</div>
</template>

<script setup lang="ts">
	import { computed, reactive, ref } from 'vue';
	import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
	import { createEmailInputValidator, createFormControlValidator } from '../../utils/utils';
	import SelectLevel from './SelectLevel.vue';
	import KInput from '../form/KInput.vue';
	import SelectBranch from './SelectBranch.vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composition/auth';

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
	}

	defineProps<{ accountType: 'parent' | 'student' | null }>();

	const { register } = useAuth();
	const router = useRouter();
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
	});
	const formRef = ref<FormInstance>();
	const passwordBlured = ref(false);
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

	const validatePassword = createFormControlValidator((_rule: any, _value: any, callback: any) => {
		passwordBlured.value = true;
		if (!(password.value.hasLength && password.value.hasNumber && password.value.hasLowerCase && password.value.hasUpperCase)) {
			callback(new Error(''));
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
			callback(new Error('Please input the password again'));
		} else if (value !== form.password) {
			callback(new Error("Two inputs don't match!"));
		} else {
			callback();
		}
	});

	const rules = reactive<FormRules<RegisterForm>>({
		firstname: createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (value === '') {
			callback('Please input the first name');
		} else if (value.length<3) {
			callback("Length should be >3");
		} else {
			callback();
		}
	}),
		
		lastname: createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (value === '') {
			callback('Please input the first name');
		} else if (value.length<3) {
			callback("Length should be >3");
		} else {
			callback();
		}
	}),
		level: createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (value === '') {
			callback('يرجى إدخال المستوى الدراسي');
		} else {
			callback();
		}
	}),
		email:createEmailInputValidator('email required', 'email incorrect'),
		password: validatePassword,
		rePassword: validateRePassowrd,
		optionalSubject: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		branch: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		// age: [{ validator: checkAge, trigger: 'blur' }],
	});

	const submitForm = () => {
		if (!formRef) return;
		formRef.value?.validate(valid => {
			if (valid) {
				if(register(form)){
					ElMessage.success('welcome');

					router.replace({ name: 'login' });
				}else{

					ElMessage.error('existing EMail');
				}
			} else {
				ElMessage.error('Fill all required Fields');
			}
		});
	};
</script>

<style lang="scss" scoped>
	.register-form-container {
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
		.form-action {
			text-align: center;
			margin-top: 32px;
			button {
				height: 53px;
				padding: 10px 150px 10px 150px;
				border-radius: 15px;
				border: 0px 0px 2px 0px;
				background: rgba(239, 129, 20, 1);
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 700;
				line-height: 30.65px;
				color: #fff;
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
