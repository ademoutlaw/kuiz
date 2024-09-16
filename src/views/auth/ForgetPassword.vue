<template>
	<div class="forget-pass-container">
		<header class="flex items-center justify-between px-14 py-8">
			<div class="forget-pass-header-logo">
				<router-link :to="{ name: 'home' }">
					<img src="@/assets/logo.png" />
				</router-link>
			</div>

			<RightToolbar guest-page no-lang-setter />
		</header>
		<div class="forget-pass-card">
			<EmailForm />
			<OtpForm />
			<PasswordForm />
		</div>
	</div>
</template>

<script setup lang="ts">
	import EmailForm from '@/components/auth/forgetPassword/EmailForm.vue';
	import OtpForm from '@/components/auth/forgetPassword/OtpForm.vue';
	import PasswordForm from '@/components/auth/forgetPassword/PasswordForm.vue';
	import RightToolbar from '@/components/common/RightToolbar.vue';
</script>

<style lang="scss">
	.forget-pass-container {
		.forget-pass-card {
			margin: 72px auto 0;
			width: 600px;
			// height: 400px;
			border-radius: 40px;
			border: 1px solid rgba(217, 217, 217, 1);
			box-shadow: 3px 3px 8px 6px rgba(0, 0, 0, 0.03);
			padding: 75px 46px;
			section {
				h1 {
					font-family: Inter;
					font-size: 30px;
					font-weight: 700;
					line-height: 36.31px;
					text-align: center;
					margin-bottom: 32px;
				}
				p {
					font-family: Noto Naskh Arabic;
					font-size: 18px;
					font-weight: 400;
					line-height: 30.65px;
					text-align: right;
					color: #4d4d4d;
					padding: 0 0 24px 0;
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
					padding: 10px 103px;
					border-radius: 15px;
					background: rgba(128, 0, 128, 1);
					font-family: Noto Naskh Arabic;
					font-size: 16px;
					font-weight: 700;
					line-height: 27.25px;
					text-align: center;
					color: white;
				}
			}
		}
	}
</style>
