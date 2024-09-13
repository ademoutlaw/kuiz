<template>
	<div class="profile-container">
		<div class="profile-right">
			<div class="profile-photo-uploader"><img src="@/assets/add-photo.svg" alt=""  @click="openPictureModal" /></div>
			<button class="profile-password-changer" @click="openPasswordModal">تغيير كلمة السر</button>
			<button class="profile-delete">غلق الحساب</button>
		</div>
		<div class="profile-left">
			<el-form label-position="top" label-width="auto" :rules="rules" ref="formRef" :model="form" @submit.prevent="submit" :disabled="loading">
				<h1>معلومات شخصية</h1>
				<div class="form-row">
					<el-form-item label="الاسم" prop="firstname">
						<el-input v-model="form.firstname" id="firstname" placeholder="الاسم" />
					</el-form-item>
					<el-form-item label="اللقب" required>
						<el-input v-model="form.lastname" id="lastname" placeholder="اللقب" />
					</el-form-item>
				</div>
				<div class="form-row">
					<el-form-item label="تاريخ الميلاد" prop="birthday" required>
						<el-input v-model="form.birthday" id="birthday" type="date" placeholder="تاريخ الميلاد" />
					</el-form-item>
					<el-form-item label="ولاية" required prop="birthplace">
						<el-input v-model="form.birthplace" id="birthplace" placeholder="ولاية" />
					</el-form-item>
				</div>
				<div class="form-row">
					<el-form-item label="رقم الهاتف" required>
						<el-input v-model="form.mobile" id="mobile" placeholder="رقم الهاتف" />
					</el-form-item>
					<el-form-item label="(Email) البريد الإلكتروني" required>
						<el-input v-model="form.email" id="email" readonly placeholder="البريد الإلكتروني" />
					</el-form-item>
				</div>
				<h1>معلومات أكاديمية</h1>
				<div class="form-row">
					<el-form-item label="المؤسسة التعليمية" required prop="institution">
						<el-select v-model="form.institution" id="institution" placeholder="المؤسسة التعليمية">
							<el-option value="public" label="تعليم عمومي" />
							<el-option value="private" label="تعليم خاص" />
							<el-option value="free" label="تعليم حر" />
						</el-select>
					</el-form-item>
					<SelectLevel :institution="form.institution" v-model="form.level" />
				</div>
				<div class="form-row" v-if="levelStore.branches.length>1">
					<SelectBranch v-model="form.branch" />
					<SelectOptionalSubject v-model="form.optionalSubject" v-if="levelStore.optionalSubjects.length" />
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
	import { reactive, ref, watch } from 'vue';
	import SelectLevel from '@/components/auth/SelectLevel.vue';
	import PasswordFormModal from '@/components/app/profile/PasswordFormModal.vue';
	import ChangePictureModal from '@/components/app/profile/ChangePictureModal.vue';
	import SelectBranch from '@/components/auth/SelectBranch.vue';
	import SelectOptionalSubject from '@/components/auth/SelectOptionalSubject.vue';
	import { useProfile } from '@/composition/profile';
	import { useLevelsStore } from '@/stores/levels';
	const levelStore = useLevelsStore();

	const {loading, loadProfile, updateProfile, profile} = useProfile();

	loadProfile();

	
	const form = reactive<RegisterForm>({ 
		firstname: '',
		lastname: '',
		birthplace: '',
		birthday: "1998-10-26",
		mobile: '',
		email: '',
		institution: '',
		level: '',
		branch: '',
		optionalSubject: '',
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
		// level_id: [
		// 	// { required: true, message: 'Please input Activity name', trigger: 'blur' },
		// 	{
		// 		validator: (_rule: any, _value: any, callback: any) => {
		// 			console.error('on ccccccccccc');
		// 			callback(new Error('on change'));
		// 		},
		// 		trigger: 'change',
		// 	},
		// ],
		// optional_subject_id: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		// branch_id: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
		// age: [{ validator: checkAge, trigger: 'blur' }],
	});
	const showPasswordModal = ref(false);

	watch(profile, (value)=>{
		console.log(value)
		// form.value = {...value}
		if(!value) return;
		form.firstname=value.firstname;
		form.lastname=value.lastname;
		form.birthplace=value.birthplace;
		form.birthday=value.birthday;
		form.mobile=value.mobile;
		form.email=value.email;
		form.institution=value.institution;
		form.level=value.level;
		form.branch=value.branch;
		form.optionalSubject=value.optionalSubject;
	}, {immediate:true})
	levelStore.loadLevels(form);
	const openPasswordModal = () => {
		showPasswordModal.value = true;
	};
	const showPictureModal = ref(false);
	const openPictureModal = () => {
		showPictureModal.value = true;
	};
	const submit = async () => {
		console.log(form)
		
		const {success, error} = await updateProfile(form);
		if(success){
			console.log(success)
		}else{
			console.error(error);
		}
	}
</script>

<style scoped lang="scss">
	.profile-container {
		display: flex;
		gap: 80px;
		.profile-right {
			width: 248px;
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
				img{
					opacity: 0;
					transition: opacity 0.2s;
				}
				&:hover img{
					opacity:1;
				}
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
			width: 100%;
			padding-bottom: 20px;
			h1 {
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 500;
				line-height: 30.65px;
				text-align: right;
				color: #ef8114;
				padding-bottom: 32px;
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
