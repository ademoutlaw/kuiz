import { createRouter, createWebHistory } from 'vue-router';

import AppView from '@/views/app/AppView.vue';
import LandingView from '@/views/LandingView.vue';
import AuthView from '@/views/auth/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import AppHomeView from '@/views/app/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import SubjectView from '@/views/app/SubjectView.vue';
import RegisterView from '@/views/auth/Register.vue';
import LoginView from '@/views/auth/Login.vue';
import ForgetPasswordView from '@/views/auth/ForgetPassword.vue';
import LevelView from '@/views/app/LevelView.vue';
import GuidView from '@/views/GuidView.vue';
import ContentView from '@/views/ContentView.vue';
import ProgressView from '@/views/app/ProgressView.vue';
import { useUserStore } from '@/stores/user';
import ProfileView from '@/views/app/ProfileView.vue';
import VerifyEmailMessage from '@/views/auth/VerifyEmailMessage.vue';
import { useAuth } from '@/composition/auth';

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'public',
			beforeEnter: async () => {
				const { loadUser } = useAuth();
				await loadUser();
				const userStore = useUserStore();
				if (userStore.isLoggedIn) {
					router.replace({ name: 'appHome' });
					return;
				}
			},
			children: [
				{
					path: '/',
					name: 'landing',
					component: LandingView,
					children: [
						{
							path: '/',
							name: 'home',
							component: HomeView,
						},
						{
							path: '/about',
							name: 'about',
							component: AboutView,
						},
						{
							path: '/guid',
							name: 'guid',
							component: GuidView,
						},
						{
							path: '/content',
							name: 'content',
							component: ContentView,
						},
					],
				},
				{
					path: '/auth',
					name: 'auth',
					beforeEnter: (to: any) => {
						const userStore = useUserStore();
						if (!userStore.isAuthenticated || (userStore.hasToverifyEmail && to.name === 'verifyEmail')) return;
						router.replace({ name: 'home' });
					},
					children: [
						{
							path: '',
							name: 'sign',
							component: AuthView,
							children: [
								{
									path: 'register',
									name: 'register',
									component: RegisterView,
								},
								{
									path: 'login',
									name: 'login',
									component: LoginView,
								},
							],
						},

						{
							path: 'forget-password',
							name: 'forgetPassword',
							component: ForgetPasswordView,
						},
						{
							path: 'verify-email',
							name: 'verifyEmail',
							component: VerifyEmailMessage,
							beforeEnter: () => {
								const userStore = useUserStore();
								console.log('beforeEnter verifyEmail', userStore.hasToverifyEmail);
								if (userStore.hasToverifyEmail) return;
								router.replace({ name: 'home' });
							},
						},
					],
				},
			],
		},
		{
			path: '/',
			name: 'app',
			component: AppView,
			beforeEnter: async () => {
				const { loadUser } = useAuth();
				await loadUser();
				const userStore = useUserStore();
				if (userStore.isLoggedIn) return;
				if (userStore.hasToverifyEmail) {
					router.replace({ name: 'verifyEmail' });
					return;
				}
				router.replace({ name: 'login' });
			},
			children: [
				{
					path: 'home',
					name: 'appHome',
					component: AppHomeView,
				},
				{
					path: 'subjects',
					children: [
						{
							path: '',
							name: 'level',
							component: LevelView,
						},

						{
							path: ':id',
							name: 'subject',
							component: SubjectView,
						},
					],
				},
				{
					path: 'progress',
					name: 'progress',
					component: ProgressView,
				},
				{
					path: 'profile',
					name: 'profile',
					component: ProfileView,
				},
			],
		},
	],
	scrollBehavior() {
		// always scroll to top
		return { top: 0 };
	},
});

export default router;
