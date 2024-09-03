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

			return true;
		}
		const users = JSON.parse(usersStorage);
		for (const u of users) {
			if (u.email === newUser.email) {
				return false;
			}
		}

		users.push(newUser);
		localStorage.setItem('allUsers', JSON.stringify(users));
		return true;
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
