<template>
	<div>
		<AuthHeader />
		<div class="verify-email-card">
			<p>يرجى تاكيد البريد الإلكتروني.</p>
			<span>{{ userStore.unverifiedEmail }}</span>
      <div>
        <button @click="resend">إعادة الإرسال</button>
      </div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AuthHeader from '@/components/auth/AuthHeader.vue';
	import { useAuth } from '@/composition/auth';
	import { useUserStore } from '@/stores/user';
	import { ElMessage } from 'element-plus';
	import { onBeforeUnmount } from 'vue';

	const userStore = useUserStore();

	const {sendEmailVerification}= useAuth();

	const resend = async ()=>{
		const {success, error} = await sendEmailVerification();
		if(success){
			ElMessage.success( 'يرجى تاكيد البريد الإلكتروني.');
		}else {
			ElMessage.error(error!);
		}
	}

	ElMessage.closeAll();
	ElMessage.warning({ message: 'يرجى تاكيد البريد الإلكتروني.', duration: 0 });
	onBeforeUnmount(() => {
		ElMessage.closeAll();
	});
</script>

<style scoped lang="scss">
	.verify-email-card {
		margin: auto;
		width: 700px;
		// height: 400px;
		border-radius: 40px;
		border: 1px solid rgba(217, 217, 217, 1);
		box-shadow: 3px 3px 8px 6px rgba(0, 0, 0, 0.03);
		padding: 30px 100px;

		p {
			font-family: Noto Naskh Arabic;
			font-size: 26px;
			font-weight: 700;
			line-height: 37.47px;
			text-align: center;
			color: #4d4d4d;
			padding: 24px 0;
		}
    button{
      color: #800080;
      &:hover{
        text-decoration: underline;
      }
    }
	}
</style>
