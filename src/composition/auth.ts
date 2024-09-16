import { reactive } from 'vue';
import { useUserStore } from '@/stores/user';

const resetPasswordData = reactive({
	step: 0,
	email: '',
	token: '',
});

export const useAuth = () => {
	const { setUser, user: currentUser } = useUserStore();
	const requestResetPassword = async (email: string) => {
		const usersStorage = localStorage.getItem('allUsers');
		const users = JSON.parse(usersStorage!);
		for (const user of users) {
			if (user.email === email) {
				resetPasswordData.step = 1;
				resetPasswordData.email = email;
				return {
					success: true,
					errors: [],
				};
			}
		}
		return {
			success: false,
			errors: ['لا يوجد حساب مسجل بهذا البريد'],
		};
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

	const changePassword = async ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) => {
		if (currentUser.password === currentPassword) {
			const usersStorage = localStorage.getItem('allUsers');
			const users = JSON.parse(usersStorage!);
			for (const user of users) {
				if (user.email === currentUser.email) {
					user.password = newPassword;
					localStorage.setItem('allUsers', JSON.stringify(users));
					return {
						success: true,
						errors: [],
					};
				}
			}
			return {
				success: false,
				errors: ['error'],
			};
		}
		return {
			success: false,
			errors: ['wrong password'],
		};
	};
	const resetPassword = async (password: string) => {
		const usersStorage = localStorage.getItem('allUsers');
		const users = JSON.parse(usersStorage!);
		for (const user of users) {
			if (user.email === resetPasswordData.email) {
				user.password = password;
				localStorage.setItem('allUsers', JSON.stringify(users));
				return {
					success: true,
					errors: [],
				};
			}
		}
		return {
			success: false,
			errors: ['error'],
		};
	};

	const login = (email: string, password: string) => {
		const usersStorage = localStorage.getItem('allUsers');
		if (!usersStorage) return false;
		const users = JSON.parse(usersStorage);
		for (const user of users) {
			if (user.email === email.toLowerCase()) {
				if (user.password === password) {
					setUser(user);
					return true;
				}
				// error
				return false;
			}
		}
	};

	const register = (user: User) => {
		const newUser = { ...user, email: user.email.toLowerCase(), name: `${user.firstname} ${user.lastname}` };
		const usersStorage = localStorage.getItem('allUsers');
		if (!usersStorage) {
			localStorage.setItem('allUsers', JSON.stringify([newUser]));

			return {
				success: 'تم تسجيل الدخول بنجاح',
				errors: [],
			};
		}
		const users = JSON.parse(usersStorage);
		let sameEmail = false;
		for (const u of users) {
			if (u.email === newUser.email) {
				sameEmail = true;
				break;
			}
		}
		let sameMobile = false;
		for (const u of users) {
			if (u.mobile === newUser.mobile) {
				sameMobile = true;
				break;
			}
		}
		const errors = [];
		if (sameEmail) {
			errors.push({
				message: 'هذا البريد الإلكتروني مستخدم بالفعل. جرّب بريد الإلكتروني آخر.',
				isEmailError: true,
			});
		}
		if (sameMobile) {
			errors.push({
				message: 'هذا رقم الهاتف مستخدم بالفعل. جرّب رقم الهاتف آخر.',
				isMobileError: true,
			});
		}
		if (errors.length > 0) {
			return {
				success: '',
				errors,
			};
		}

		users.push(newUser);
		localStorage.setItem('allUsers', JSON.stringify(users));
		return {
			success: 'تم تسجيل الدخول بنجاح',
			errors: [],
		};
	};

	return {
		resetPasswordData,
		requestResetPassword,
		confirmOtp,
		changePassword,
		resetPassword,
		login,
		register,
	};
};
