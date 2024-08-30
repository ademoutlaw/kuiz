<template>
	<div class="register-form-container">
		<el-form label-position="top" label-width="auto" :rules="rules" ref="formRef" :model="form">
			<div class="form-row">
				<el-form-item label="الاسم" prop="firstname">
					<el-input v-model="form.firstname" id="firstname" placeholder="الاسم" />
				</el-form-item>
				<el-form-item label="اللقب" required>
					<el-input v-model="form.lastname" id="lastname" placeholder="اللقب" />
				</el-form-item>
			</div>
			<template v-if="accountType === 'student'">
				<div class="form-row">
					<el-form-item label="المؤسسة التعليمية" required>
						<el-select v-model="form.institution" id="institution" placeholder="المؤسسة التعليمية">
							<el-option value="hello">t</el-option>
							<el-option value="hello2">t</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="المستوى الدراسي" required prop="level">
						<el-select v-model="form.level" id="level" placeholder="المستوى الدراسي">
							<el-option value="7">7</el-option>
							<el-option value="8">8</el-option>
							<el-option value="9">9</el-option>
							<el-option value="1">1</el-option>
							<el-option value="2">2</el-option>
							<el-option value="3">3</el-option>
							<el-option value="4">4</el-option>
						</el-select>
					</el-form-item>
				</div>
				<div class="form-row" v-if="['2', '3', '4'].includes(form.level)">
					<el-form-item label="شعبة" prop="branch">
						<el-input v-model="form.branch" id="branch" placeholder="شعبة*" />
					</el-form-item>

					<el-form-item label="المادة الاختيارية" prop="optionalSubject" v-if="'4' === form.level">
						<el-input v-model="form.optionalSubject" id="optional_subject" placeholder="المادة الاختيارية" />
					</el-form-item>
					<div class="form-col" v-else></div>
				</div>
			</template>
			<div class="form-row">
				<el-form-item label="رقم الهاتف" required>
					<el-input v-model="form.mobile" id="mobile" placeholder="رقم الهاتف" />
				</el-form-item>
				<el-form-item label="(Email) البريد الإلكتروني" required>
					<el-input v-model="form.email" id="email" placeholder="البريد الإلكتروني" />
				</el-form-item>
			</div>
			<div class="form-row">
				<el-form-item label="كلمة السّر" prop="password">
					<el-input v-model="form.password" id="password" type="password" placeholder="كلمة السّر" />
					<div class="password-checker">
						<span>يجب أن تحتوي كلمة السر على:</span>
						<div class="password-status">
							<div :class="{ 'is-valid': password.hasLength }">8 أحرف أو أكثر</div>
							<div :class="{ 'is-valid': password.hasNumber }">1رقم</div>
							<div :class="{ 'is-valid': password.hasLowerCase }">1 Minuscule</div>
							<div :class="{ 'is-valid': password.hasUpperCase }">1 Majuscule</div>
						</div>
					</div>
				</el-form-item>
				<el-form-item label="تأكيد كلمة السّر" prop="rePassword">
					<el-input v-model="form.rePassword" id="confirm_password" type="password" placeholder="تأكيد كلمة السّر" />
				</el-form-item>
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
	import type { FormInstance, FormRules } from 'element-plus';
	import { createFormControlValidator } from '../../utils/utils';

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

	const validatePassword = createFormControlValidator((_rule: any, value: any, callback: any) => {
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
		firstname: [
			{ required: true, message: 'Please input Activity name', trigger: 'blur' },
			{ min: 3, message: 'Length should be >3', trigger: 'blur' },
		],
		lastname: [
			{ required: true, message: 'Please input Activity name', trigger: 'blur' },
			{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
		],
		level: [
			// { required: true, message: 'Please input Activity name', trigger: 'blur' },
			{
				validator: (_rule: any, value: any, callback: any) => {
					console.error('on blur');
					callback();
				},
				trigger: 'change',
			},
		],
		password: validatePassword,
		rePassword: validateRePassowrd,
		optionalSubject: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		branch: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		// age: [{ validator: checkAge, trigger: 'blur' }],
	});

	const submitForm = (formEl: FormInstance | undefined) => {
		if (!formEl) return;
		formEl.validate(valid => {
			if (valid) {
				console.log('submit!');
			} else {
				console.log('error submit!');
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
