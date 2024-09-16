<template>
	<div class="profile-container">
		<div class="profile-right">
			<div class="profile-photo-uploader"><img src="@/assets/add-photo.svg" alt="" @click="openPictureModal" /></div>
			<button class="profile-password-changer" @click="openPasswordModal">تغيير كلمة السر</button>
			<button class="profile-delete">غلق الحساب</button>
		</div>
		<div class="profile-left">
			<el-form label-position="top" label-width="auto" :rules="rules" ref="formRef" :model="form" @submit.prevent="submit">
				<h1>معلومات شخصية</h1>
				<div class="form-row">
					<KInput label="الاسم" prop="firstname" preset v-model="form.firstname" id="firstname" placeholder="الاسم" />
					<KInput label="اللقب" prop="lastname" preset v-model="form.lastname" id="lastname" placeholder="اللقب" />
				</div>
				<!-- <div class="form-row">
					<el-form-item label="تاريخ الميلاد" prop="birthday" required>
						<el-input v-model="form.birthday" id="birthday" type="date" placeholder="تاريخ الميلاد" />
					</el-form-item>
					<el-form-item label="ولاية" required prop="birthplace">
						<el-input v-model="form.birthplace" id="birthplace" placeholder="ولاية" />
					</el-form-item>
				</div> -->
				<div class="form-row">
					<KInput label="رقم الهاتف" preset v-model="form.mobile" id="mobile" placeholder="رقم الهاتف" disabled />
					<KInput
						label="(Email) البريد الإلكتروني"
						preset
						v-model="form.email"
						id="email"
						placeholder="البريد الإلكتروني"
						disabled
					/>
				</div>
				<h1 class="mt-6">معلومات أكاديمية</h1>
				<div class="form-row">
					<el-form-item label="المؤسسة التعليمية" prop="institution" class="k-form-item preset">
						<el-select v-model="form.institution" id="institution" placeholder="المؤسسة التعليمية">
							<el-option value="public" label="تعليم عمومي" />
							<el-option value="private" label="تعليم خاص" />
							<el-option value="free" label="تعليم حر" />
						</el-select>
					</el-form-item>
					<SelectLevel :institution="form.institution" v-model="form.level" preset />
				</div>
				<div class="form-row" v-if="['2', '3', '4'].includes(form.level)">
					<SelectBranch :level="form.level" preset />
					<SelectOptionalSubject :branch="form.branch" preset v-if="'4' === form.level" />
					<div class="form-col" v-else></div>
				</div>
				<div class="form-action">
					<button id="update-btn" type="submit">حفظ التعديل</button>
				</div>
			</el-form>
		</div>
		<ChangePictureModal v-model="showPictureModal" />
		<PasswordFormModal v-model="showPasswordModal" />
	</div>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue';
	import KInput from '@/components/common/form/KInput.vue';
	import SelectLevel from '@/components/common/SelectLevel.vue';
	import SelectBranch from '@/components/common/SelectBranch.vue';
	import SelectOptionalSubject from '@/components/common/SelectOptionalSubject.vue';
	import PasswordFormModal from '@/components/app/profile/PasswordFormModal.vue';
	import ChangePictureModal from '@/components/app/profile/ChangePictureModal.vue';
	const _form = {
		firstname: 'adem',
		lastname: 'ferjani',
		birthplace: 'تونس',
		birthday: '1998-10-26',
		mobile: '22114455',
		email: 'isme@mail.com',
		institution: 'معهد حي بوقطفة2',
		level: '4',
		optionalSubject: '',
		branch: '',
	};
	const form = reactive<any>({ ..._form });
	const rules = reactive({
		firstname: [
			{ required: true, message: 'Please input Activity name', trigger: 'blur' },
			{ min: 3, message: 'Length should be >3', trigger: 'blur' },
		],
		lastname: [
			{ required: true, message: 'Please input Activity lastname', trigger: 'blur' },
			{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
		],
		level: [
			// { required: true, message: 'Please input Activity name', trigger: 'blur' },
			{
				validator: (_rule: any, _value: any, callback: any) => {
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
	const showPasswordModal = ref(false);
	const openPasswordModal = () => {
		showPasswordModal.value = true;
	};
	const showPictureModal = ref(false);
	const openPictureModal = () => {
		showPictureModal.value = true;
	};
	const submit = () => {
		console.log(form);
	};
</script>

<style scoped lang="scss">
	.profile-container {
		display: flex;
		gap: 56px;
		.profile-right {
			width: 200px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 6px;
			flex-shrink: 0;
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
				img {
					opacity: 0;
					transition: opacity 0.2s;
				}
				&:hover img {
					opacity: 1;
				}
			}
			.profile-password-changer {
				width: 166px;
				height: 44px;
				padding: 10px;
				border-radius: 15px;
				border: 1px solid #ef8114;
				color: #ef8114;
			}
			.profile-delete {
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 400;
				line-height: 27.25px;
				text-align: center;
				color: #e03131;
			}
		}
		.profile-left {
			width: 100%;
			max-width: 758px;
			padding-bottom: 20px;
			h1 {
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 500;
				line-height: 30.65px;
				text-align: right;
				color: #ef8114;
				padding-bottom: 24px;
			}
			.form-action {
				button {
					background: #ef8114;
					color: white;
					// width: Hug (174px)px;
					// height: 44px;
					padding: 10px 40px 10px 40px;
					border-radius: 15px;
				}
			}
		}
	}
</style>
