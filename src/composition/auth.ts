import { reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import { useFetch } from './fetch';

const resetPasswordData = reactive({
	step: 0,
	email: '',
	token: '',
});

export const useAuth = () => {
	const userStore = useUserStore();
	const { setUser, clearUser, setAuthenticated, setUnverifiedEmail } = userStore;

	const fetch = useFetch();

	const loadUser = async (force = false) => {
		try {
			if (force) {
				const data = await fetch.get('users.me');
				console.log(data);
				setUser(data);
				setAuthenticated(true);
			} else {
				if (userStore.isAuthenticated) {
					if (userStore.isLoggedIn) {
						fetch.get('users.me').then(data => {
							console.log(data);
							setUser(data);
							setAuthenticated(true);
						});
					} else {
						const data = await fetch.get('users.me');
						console.log(data);
						setUser(data);
						setAuthenticated(true);
					}
				}
			}
		} catch (error: any) {
			// setUser(null);
			console.error(error);
			// console.error(error.status);
			// console.error(error.message);
			// console.error(error.data);
			// if (error.data?.message === 'Unauthenticated.') {
			// } else if (error.data?.message === 'Your email address is not verified.') {
			// 	enableVerifyEmailMessage();
			// }
		}
	};

	const requestResetPassword = (email: string) => {
		console.log(email);
		resetPasswordData.step = 1;
		resetPasswordData.email = email;
	};

	const confirmOtp = async (otp: string) => {
		console.log(otp);

		if (otp === '123456') {
			resetPasswordData.step = 2;
			resetPasswordData.token = '';
			return {
				error: null,
				success: 'تمت العملية بنجاح',
			};
		}
		return {
			error: 'يرجى التحقق',
			success: null,
		};
	};

	const changePassword = (password: string) => {
		console.log(password);
	};

	const login = async (email: string, password: string) => {
		try {
			await fetch.post('auth.login', { email, password });
			const data = await fetch.get('users.me');
			console.log(data);
			setUser(data);
			setAuthenticated(true);
			return {
				error: null,
				success: true,
			};
		} catch (error: any) {
			if (typeof error.data?.errors === 'object') {
				if (Object.keys(error.data.errors).includes('bad_credentials')) {
					return {
						error: 'bad_credentials',
						success: false,
					};
				}
			} else if (error.data?.message === 'Your email address is not verified.') {
				setAuthenticated(true);
				setUnverifiedEmail(email);
				return {
					error: 'unverified_email',
					success: false,
				};
			}
			return {
				error: 'error',
				success: false,
			};
		}
	};

	const register = async (user: RegisterForm) => {
		// const newUser = { ...user, email: user.email.toLowerCase(), name: `${user.firstname} ${user.lastname}` };
		const newUser: User = {
			email: user.email,
			firstname: user.firstname,
			lastname: user.lastname,
			password: user.password,
			mobile: user.mobile,
			institution: user.institution,
			level_id: user.level,
			branch_id: user.branch,
			optional_subject_id: user.optionalSubject,
			role: user.role,
		};
		try {
			await fetch.post('auth.register', newUser);
			setAuthenticated(true);
			setUnverifiedEmail(user.email);
			return {
				success: 'تم تسجيل الدخول بنجاح',
				errors: [],
			};
		} catch (error: any) {
			// if is 403 and error message is UnverifiedEmail
			// setUnverifiedEmail(user.email)
			console.error(error);
			console.error(error.data);
			// let sameEmail = true;
			// let sameMobile = true;
			const errors: { field: keyof RegisterForm; message: string }[] = [];
			for (const err in error.data.errors) {
				console.log(err);
				if ('email' === err) {
					errors.push({
						field: 'email',
						message: 'هذا البريد الإلكتروني مستخدم بالفعل. جرّب بريد الإلكتروني آخر.',
					});
				} else if ('mobile' === err) {
					errors.push({
						field: 'mobile',
						message: 'هذا رقم الهاتف مستخدم بالفعل. جرّب رقم الهاتف آخر.',
					});
				}
			}
			return {
				success: '',
				errors,
			};
		}
	};

	const logout = async () => {
		try {
			await fetch.get('auth.logout');
			clearUser();
			return { success: true };
		} catch (error: any) {
			console.log(error);
			return { error, success: false };
		}
	};

	const sendEmailVerification = async () => {
		try {
			await fetch.post('auth.email.verification');
			return {
				error: null,
				success: true,
			};
		} catch (error: any) {
			return {
				error: 'error',
				success: false,
			};
		}
	};

	return {
		resetPasswordData,
		requestResetPassword,
		confirmOtp,
		changePassword,
		login,
		register,
		loadUser,
		logout,
		sendEmailVerification,
	};
};
