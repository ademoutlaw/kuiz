<template>
	<div class="profile-container">
		<div class="profile-right">
			<div class="profile-photo-uploader"><img src="@/assets/add-photo.svg" alt="" /></div>
			<button class="profile-password-changer">تغيير كلمة السر</button>
			<button class="profile-delete">غلق الحساب</button>
		</div>
		<div class="profile-left">
			<el-form label-position="top" label-width="auto" :rules="rules" ref="formRef" :model="form">
				<div class="form-row">
					<el-form-item label="الاسم" prop="firstname">
						<el-input v-model="form.firstname" id="firstname" placeholder="الاسم" />
					</el-form-item>
					<el-form-item label="اللقب" required>
						<el-input v-model="form.lastname" id="lastname" placeholder="اللقب" />
					</el-form-item>
				</div>
				<div class="form-row">
					<el-form-item label="المؤسسة التعليمية" required>
						<el-select v-model="form.institution" id="institution" placeholder="المؤسسة التعليمية">
							<el-option value="hello">t</el-option>
							<el-option value="hello2">t</el-option>
						</el-select>
					</el-form-item>
					<SelectLevel v-model="form.level" />
					<!-- <el-form-item label="المستوى الدراسي" required>
						<el-select v-model="form.level" id="level" placeholder="المستوى الدراسي">
							<el-option value="7">7</el-option>
							<el-option value="8">8</el-option>
							<el-option value="9">9</el-option>
							<el-option value="1">1</el-option>
							<el-option value="2">2</el-option>
							<el-option value="3">3</el-option>
							<el-option value="4">4</el-option>
						</el-select>
					</el-form-item> -->
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
				<div class="form-row">
					<el-form-item label="رقم الهاتف" required>
						<el-input v-model="form.mobile" id="mobile" placeholder="رقم الهاتف" />
					</el-form-item>
					<el-form-item label="(Email) البريد الإلكتروني" required>
						<el-input v-model="form.email" id="email" placeholder="البريد الإلكتروني" />
					</el-form-item>
				</div>

				<div class="form-action">
					<button id="register-btn" type="submit">إشترك الأن</button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { reactive } from 'vue';
	import SelectLevel from '@/components/form/SelectLevel.vue';
	const form = reactive<any>({
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
	const rules = reactive({
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
					console.error('on ccccccccccc');
					callback(new Error('on change'));
				},
				trigger: 'change',
			},
		],
		optionalSubject: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		branch: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		// age: [{ validator: checkAge, trigger: 'blur' }],
	});
</script>

<style scoped lang="scss">
	.profile-container {
		display: flex;
		.profile-right {
			width: 248px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 6px;
			.profile-photo-uploader {
				width: 200px;
				height: 230px;
				background-image: url(@/assets/student-profile.svg);
				background-position: center;
				background-repeat: no-repeat;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid #d9d9d9;
				border-radius: 20px;
			}
			.profile-password-changer {
				width: 200px;
				height: 44px;
				padding: 10px 56px 10px 56px;
				border-radius: 15px;
				border: 1px solid #ef8114;
				color: #ef8114;
			}
			.profile-delete {
				font-family: Noto Naskh Arabic;
				font-size: 20px;
				font-weight: 400;
				line-height: 34.06px;
				text-align: center;
				color: #e03131;
			}
		}
		.profile-left {
			.form-row {
				width: 100%;
				display: flex;
				justify-content: space-between;
				gap: 30px;
				.el-form-item__label {
					font-family: Noto Naskh Arabic;
					font-size: 18px;
					font-weight: 500;
					line-height: 30.65px;
					text-align: right;
					padding: 0 0 8px 0;
					color: black;
					direction: ltr;
				}
				.form-col,
				.el-form-item {
					width: 100%;
					.el-input {
						--el-input-border-radius: 15px;
						.el-input__inner {
							// width: 100%;
							height: 53px;
							// padding: 13px 16px 13px 16px;
							// border-radius: 15px;
							// border: 1px solid rgba(217, 217, 217, 1);
						}
					}
					.el-form-item__error {
						right: 0;
					}
				}
			}
		}
	}
</style>
