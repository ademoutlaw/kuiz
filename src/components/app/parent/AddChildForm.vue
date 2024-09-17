<!-- <template> -->
<template>
	<div class="add-child-form">
		<h1>إضافة ابني</h1>
		<p>يرجى إضافة البريد الإلكتروني أو رقم الهاتف الخاص بابنكم الذي تم استخدامه لإنشاء حسابه</p>
		<KInput placeholder="البريد الإلكتروني أو رقم الهاتف" v-model="email" :error="emailError" />
		<div class="add-child-btns">
			<button class="_add-child-btn" id="add-child-btn" @click="addChild">إضافة</button>
			<button class="_close-child-btn" id="close-child-modal-btn" @click="onClose">إغلاق</button>
		</div>
		<KDialog v-model="showConfirmModal" align-center class="h-[250px]" @close="closeAll">
			<AddChildConfirm :on-close="closeAll" />
		</KDialog>
	</div>
	<!-- </template> -->
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import KInput from '@/components/common/form/KInput.vue';
	import KDialog from '@/components/common/KDialog.vue';
	import AddChildConfirm from '@/components/app/parent/AddChildConfirm.vue';
	import { useAuth } from '@/composition/auth';
	import { ElMessage } from 'element-plus';
	const props = defineProps<{
		onClose: () => void;
	}>();
	const { addRequest } = useAuth();
	const showConfirmModal = ref(false);
	const email = ref('');
	const emailError = ref('');
	const closeAll = () => {
		showConfirmModal.value = false;
		props.onClose();
	};
	const addChild = () => {
		// addChild logic here
		const { error } = addRequest(email.value);
		if (error) {
			ElMessage.error(error);
			emailError.value = error;
		} else {
			showConfirmModal.value = true;
			ElMessage.success('تمت الإضافة بنجاح!');
		}
	};
</script>

<style scoped lang="scss">
	.add-child-form {
		width: 571px;
		height: 339px;
		padding: 0 32px;
		h1 {
			font-family: Noto Naskh Arabic;
			font-size: 26px;
			font-weight: 500;
			line-height: 44.28px;
			text-align: right;
		}
		p {
			font-family: Noto Naskh Arabic;
			font-size: 18px;
			font-weight: 500;
			line-height: 30.65px;
			text-align: right;
			margin: 16px 0 6px;
		}
		.add-child-btns {
			margin-top: 32px;
			._add-child-btn {
				// width: Hug (118px)px;
				height: 44px;
				padding: 10px 40px 10px 40px;
				border-radius: 15px;
				background: #ef8114;
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 400;
				line-height: 27.25px;
				color: white;
				margin-left: 16px;
			}
			._close-child-btn {
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 400;
				line-height: 27.25px;
				color: #666666;
			}
		}
	}
</style>
