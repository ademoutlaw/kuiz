import { reactive } from 'vue';
import { useUserStore } from '@/stores/user';

const resetPasswordData = reactive({
	step: 0,
	email: '',
	token: '',
});

export const useAuth = () => {
	const { setUser } = useUserStore();
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
		login,
		register,
	};
};
