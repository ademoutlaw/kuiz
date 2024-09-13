<template>
	<div class="forget-pass-container">
		<AuthHeader />
		<div class="forget-pass-card">
			<EmailForm />
			<OtpForm />
			<PasswordForm />
		</div>
	</div>
</template>

<script setup lang="ts">
	import AuthHeader from '@/components/auth/AuthHeader.vue';
import EmailForm from '@/components/auth/forgetPassword/EmailForm.vue';
	import OtpForm from '@/components/auth/forgetPassword/OtpForm.vue';
	import PasswordForm from '@/components/auth/forgetPassword/PasswordForm.vue';
</script>

<style lang="scss">
	.forget-pass-container {
		.forget-pass-card {
			margin: auto;
			width: 700px;
			// height: 400px;
			border-radius: 40px;
			border: 1px solid rgba(217, 217, 217, 1);
			box-shadow: 3px 3px 8px 6px rgba(0, 0, 0, 0.03);
			padding: 30px 100px;

			section {
				h1 {
					font-family: Inter;
					font-size: 40px;
					font-weight: 700;
					line-height: 48.41px;
					text-align: center;
					margin-bottom: 48px;
				}
				p {
					font-family: Noto Naskh Arabic;
					font-size: 22px;
					font-weight: 400;
					line-height: 37.47px;
					text-align: center;
					color: #4d4d4d;
					padding: 24px 0;
				}
				div {
					text-align: center;
					&.form-row {
						text-align: right;
						div {
							text-align: right;
						}
					}
				}
				.btn-form {
					height: 61px;
					padding: 10px 120px;
					border-radius: 15px;
					background: rgba(128, 0, 128, 1);
					font-family: Noto Naskh Arabic;
					font-size: 24px;
					font-weight: 700;
					line-height: 40.87px;
					text-align: center;
					color: white;
				}
				.otp-inputs-container {
					width: max-content;
					margin: auto;
					text-align: right;
					.otp-inputs {
						display: flex;
						justify-content: center;
						gap: 20px;
						input {
							width: 61px;
							height: 61px;
							padding: 0 30px 0 0;
							border-radius: 15px;
							border: 1px solid rgba(217, 217, 217, 1);
						}
					}
					span {
						color: red;
					}
				}
			}
		}
	}
</style>
