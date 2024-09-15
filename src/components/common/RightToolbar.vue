<template>
	<div class="right-toolbar" :class="{ guest }">
		<template v-if="guest">
			<router-link :to="{ name: 'login' }" class="right-toolbar__login-btn">تسجيل دخول</router-link>
			<router-link :to="{ name: 'register' }" class="right-toolbar__register-btn">اشترك الان</router-link>
			<div class="header-lang-setting" @click="loggedIn = !loggedIn">
				<div class="header-lang-flag"></div>
				<div class="header-lang">عربية</div>
			</div>
		</template>
		<template v-else>
			<div class="right-toolbar__item" @click="loggedIn = !loggedIn">
				<img src="@/assets/champion-cup.svg" alt="gift" />
			</div>
			<div class="right-toolbar__item">
				<img src="@/assets/bell.svg" alt="notif" />
			</div>
			<div>
				<el-dropdown trigger="click" class="custom_el-dropdown">
					<span class="el-dropdown-link">
						<div class="avatar">{{ firstChar }}</div>
						<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu class="custom_el-dropdown-menu">
							<el-dropdown-item @click="goToProfile">
								<div class="text-2xl pl-2">
									<Icon icon="iconamoon:profile-light" />
								</div>
								<span> الملف الشخصي </span>
							</el-dropdown-item>
							<el-dropdown-item @click="logout">
								<div class="text-2xl pl-2">
									<Icon icon="system-uicons:exit-right" />
								</div>
								<span> خروج </span>
							</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</template>
		<!-- <div class="header-lang" @click="logout">logout</div> -->
	</div>
</template>
<!--  -->
<script setup lang="ts">
	import { useRouter } from 'vue-router';
	import { ArrowDown } from '@element-plus/icons-vue';
	import { useUserStore } from '@/stores/user';
	import { computed, ref } from 'vue';

	const props = defineProps<{ guestPage?: boolean }>();

	const loggedIn = ref(false);
	const guest = computed(() => props.guestPage && !loggedIn.value);
	const router = useRouter();

	const userStore = useUserStore();

	const firstChar = 'A';

	const logout = () => {
		userStore.logout();
		router.replace({ name: 'home' });
	};
	const goToProfile = () => {
		router.push({ name: 'profile' });
	};
</script>
<style scoped lang="scss">
	.right-toolbar {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		width: 160px;
		gap: 8px;

		&.guest {
			margin: 0 10px;
			gap: 16px;
			width: auto;
			.right-toolbar__login-btn {
				background: #ffdcff3d;
				color: rgba(166, 0, 166, 1);
				border-radius: 15px;
				padding: 2px 25px;
				font-size: 16px;
				font-weight: 500;
				line-height: 34.06px;
			}
			.right-toolbar__register-btn {
				background-color: #d145ca;
				color: white;
				border-radius: 15px;
				padding: 2px 23px;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				font-size: 16px;
				font-weight: 500;
				line-height: 34.06px;
				transition: background-color 0.2s;
				&:hover {
					background-color: #ba68c8;
				}
			}
		}

		&__item {
			margin-left: 16px;
		}
		.header-bell {
			background-image: url(@/assets/bell.svg);
			width: 36px;
			height: 100%;
		}
		.header-lang {
			color: rgba(102, 102, 102, 1);
			font-size: 14px;
			font-weight: 400;
			line-height: 64px;
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

	.header-lang-setting {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		gap: 8px;
		.header-lang-flag {
			background-image: url(@/assets/tn-flag.svg);
			width: 24px;
			height: 24px;
			background-size: contain;
		}
		.header-lang {
			color: rgba(102, 102, 102, 1);
			font-size: 14px;
			font-weight: 400;
			line-height: 64px;
		}
	}
</style>
<style lang="scss">
	.custom_el-dropdown-menu {
		padding: 0;
		overflow: hidden;
		--el-dropdown-menuItem-hover-fill: #e6e6e6;
		--el-dropdown-menuItem-hover-color: #666666;
		--el-text-color-regular: #666666;
		--el-border-radius-base: 5px;
		--el-font-size-base: 16px;
		.el-dropdown-menu__item {
			padding: 7px 12px;
		}
	}
</style>
