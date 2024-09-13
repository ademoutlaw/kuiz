<template>
	<div class="header-account-container">
		<div class="header-sign-btns" v-if="!userStore.isAuthenticated">
			<router-link :to="{ name: 'login' }" class="header-login-btn">تسجيل دخول</router-link>
			<router-link :to="{ name: 'register' }" class="header-register-btn">اشترك الان</router-link>
		</div>
		<div v-else>
			<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					<div class="avatar">{{ firstChar }}</div>
					<el-icon class="el-icon--right"><arrow-down /></el-icon>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item @click="goToProfile">الملف الشخصي</el-dropdown-item>
						<el-dropdown-item @click="signout">تسجيل الخروج</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useRouter } from 'vue-router';
	import { ArrowDown } from '@element-plus/icons-vue';
	import { useUserStore } from '@/stores/user';
	import { useAuth } from '@/composition/auth';

	const { logout } = useAuth();

	const router = useRouter();

	const userStore = useUserStore();

	const firstChar = 'A';
  const goToProfile = ()=>{
    router.push({name:'profile'})
  }
	const signout = () => {
		logout();
		router.replace({ name: 'home' });
	};
</script>

<style scoped lang="scss">
  .header-account-container{
    display: flex;
    min-width: 100px;
    justify-content: center;
    /* width: max-content; */
    flex-shrink: 0;
    .header-sign-btns {
			display: flex;
			flex-shrink: 0;
			margin: 0 10px;
			gap: 16px;
			.header-login-btn {
				background: rgba(255, 220, 255, 0.24);
				color: rgba(166, 0, 166, 1);
				border-radius: 15px;
				padding: 10px 40px;

				font-size: 20px;
				font-weight: 700;
				line-height: 34.06px;
			}
			.header-register-btn {
				background-color: #d145ca;
				color: white;
				border-radius: 15px;
				padding: 10px 40px;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				font-family: Noto Naskh Arabic;
				font-size: 20px;
				font-weight: 700;
				line-height: 34.06px;
			}
		}
    .el-dropdown-link {
				display: flex;
				align-items: center;
				outline: none;
				gap: 6px;
				.avatar {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					background: rgba(128, 0, 128, 1);
					font-family: Noto Naskh Arabic;
					font-size: 20px;
					font-weight: 700;
					line-height: 34.06px;
					text-align: center;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
  }
</style>
