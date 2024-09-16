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
import HelpView from '@/views/app/HelpView.vue';

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'public',
			beforeEnter: () => {
				const userStore = useUserStore();
				if (!userStore.isAuthenticated) return;
				router.replace({ name: 'appHome' });
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
					children: [
						{
							path: 'forget-password',
							name: 'forgetPassword',
							component: ForgetPasswordView,
						},
						{
							path: '/',
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
					],
				},
			],

			// component: AppView,
		},
		{
			path: '/',
			name: 'app',
			component: AppView,
			beforeEnter: () => {
				const userStore = useUserStore();
				if (userStore.isAuthenticated) return;
				router.replace({ name: 'home' });
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
				{
					path: 'help',
					name: 'help',
					component: HelpView,
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
