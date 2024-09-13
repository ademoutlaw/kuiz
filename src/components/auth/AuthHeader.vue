<script setup lang="ts">
import HeaderAccount from '../HeaderAccount.vue';
</script>

<template>
  <div class="auth-header-container">
			<div class="auth-header-logo">
				<router-link :to="{ name: 'home' }">
					<img src="@/assets/logo.png" />
				</router-link>
			</div>
			<HeaderAccount />
			<!-- <div class="auth-header-actions">
				<router-link :to="{ name: 'login' }" class="header-login-btn">تسجيل دخول</router-link>
				<router-link :to="{ name: 'register' }" class="header-register-btn">اشترك الان</router-link>
			</div> -->
		</div>
</template>


<style scoped lang="scss">
.auth-header-container {
			display: flex;
			justify-content: space-between;
			// height: 158px;
			position: sticky;
			top: 0;
			z-index: 500;
			background-color: white;
			align-items: center;
			padding: 37px 51px;
			.auth-header-logo {
				flex-shrink: 0;
			}
			// .auth-header-actions {
			// 	display: flex;
			// 	flex-shrink: 0;
			// 	margin: 0 10px;
			// 	gap: 16px;
			// 	.header-login-btn {
			// 		background: rgba(255, 220, 255, 0.24);
			// 		color: rgba(166, 0, 166, 1);
			// 		border-radius: 15px;
			// 		padding: 10px 40px;
			// 		font-size: 20px;
			// 		font-weight: 700;
			// 		line-height: 34.06px;
			// 	}
			// 	.header-register-btn {
			// 		background-color: #d145ca;
			// 		color: white;
			// 		border-radius: 15px;
			// 		padding: 10px 40px;
			// 		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			// 		font-family: Noto Naskh Arabic;
			// 		font-size: 20px;
			// 		font-weight: 700;
			// 		line-height: 34.06px;
			// 	}
			// }
		}
</style>
