import { reactive } from 'vue';

const resetPasswordData = reactive({
	step: 0,
	email: '',
	token: '',
});

export const useAuth = () => {
	const requestResetPassword = (email: string) => {
		console.log(email);
		resetPasswordData.step = 1;
		resetPasswordData.email = email;
	};

	const confirmOtp = async (otp: string) => {
		console.log(otp);
		resetPasswordData.step = 2;
		resetPasswordData.token = '';
		return {
			error: null,
			success: 'good token',
		};
	};

	const changePassword = (password: string) => {
		console.log(password);
	};

	return {
		resetPasswordData,
		requestResetPassword,
		confirmOtp,
		changePassword,
	};
};
