import { reactive } from 'vue';
import { useUserStore } from '@/stores/user';

const resetPasswordData = reactive({
	step: 0,
	email: '',
	token: '',
});

export const useAuth = () => {
	const { setUser, user: currentUser, setRequests } = useUserStore();
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

	// const _getRequests = (userEmail: string, userRole: string) => {
	// 	console.log('_getRequests', userEmail, userRole);
	// 	const requestsStorage = localStorage.getItem('allRequests');
	// 	if (!requestsStorage) {
	// 		localStorage.setItem('allRequests', JSON.stringify([]));
	// 		return [];
	// 	}
	// 	const allRequests = JSON.parse(requestsStorage);
	// 	for (const requests of allRequests) {
	// 		const firstRequest = requests[0];
	// 		if (userRole === 'parent') {
	// 			if (firstRequest.parent === userEmail) {
	// 				return requests;
	// 			}
	// 		} else {
	// 			if (firstRequest.student === userEmail) {
	// 				return requests;
	// 			}
	// 		}
	// 	}
	// };
	const _addRequest = (request: any) => {
		// const requestsStorage = localStorage.getItem('allRequests');
		// if (!requestsStorage) {
		// 	localStorage.setItem('allRequests', JSON.stringify([[request]]));
		// 	return { requests: [request], error: null };
		// }
		// const allRequests = JSON.parse(requestsStorage);
		// for (const requests of allRequests) {
		// 	const firstRequest = requests[0];
		// 	if (firstRequest.parent === firstRequest.parent) {
		// 		for (const req of requests) {
		// 			if (req.student === request.student) {
		// 				return { requests: [], error: 'عذراً، هذا الحساب قد تم إضافته بالفعل' };
		// 			}
		// 		}
		// 		requests.push(request);
		// 		localStorage.setItem('allRequests', JSON.stringify(allRequests));
		// 		return { requests, error: null };
		// 	}
		// }
		// localStorage.setItem('allRequests', JSON.stringify([[request]]));
		return { requests: [request], error: null };
	};

	const login = (email: string, password: string) => {
		// console.log('login', email, password);
		// const usersStorage = localStorage.getItem('allUsers');
		// if (!usersStorage) return false;
		// const users = JSON.parse(usersStorage);
		// for (const user of users) {
		// 	if (user.email === email.toLowerCase()) {
		// 		if (user.password === password) {
		// 		}

		// 		setRequests(_getRequests(user.email, user.role));
		// 	}
		// }
		console.log(password);
		setUser({ email });
		return true;
	};

	const addRequest = (student: string) => {
		const usersStorage = localStorage.getItem('allUsers');
		if (!usersStorage) return { error: 'error' };
		const email = currentUser.email;
		const users = JSON.parse(usersStorage);
		for (const user of users) {
			if (user.email === student.toLowerCase() || user.mobile === student) {
				const request = {
					parent: email,
					student: user.email,
					pending: true,
				};
				const { requests, error } = _addRequest(request);
				if (error) {
					return { error };
				}
				setRequests(requests);
				return { error: null };
			}
		}
		return { error: 'عذراً، لا يوجد حساب مرتبط بهذا البريد الإلكتروني أو رقم الهاتف' };
	};

	const register = (user: User) => {
		console.log(user);
		// const newUser = { ...user, email: user.email.toLowerCase(), name: `${user.firstname} ${user.lastname}` };
		// const usersStorage = localStorage.getItem('allUsers');
		// if (!usersStorage) {
		// 	localStorage.setItem('allUsers', JSON.stringify([newUser]));

		// 	return {
		// 		success: 'تم تسجيل الدخول بنجاح',
		// 		errors: [],
		// 	};
		// }
		// const users = JSON.parse(usersStorage);
		// let sameEmail = false;
		// let sameMobile = false;
		// for (const u of users) {
		// 	if (u.email === newUser.email) {
		// 		sameEmail = true;
		// 		if (sameMobile) break;
		// 	}
		// 	if (u.mobile === newUser.mobile) {
		// 		sameMobile = true;
		// 		if (sameEmail) break;
		// 	}
		// }
		// const errors = [];
		// if (sameEmail) {
		// 	errors.push({
		// 		message: 'هذا البريد الإلكتروني مستخدم بالفعل. جرّب بريد الإلكتروني آخر.',
		// 		isEmailError: true,
		// 	});
		// }
		// if (sameMobile) {
		// 	errors.push({
		// 		message: 'هذا رقم الهاتف مستخدم بالفعل. جرّب رقم الهاتف آخر.',
		// 		isMobileError: true,
		// 	});
		// }
		// if (errors.length > 0) {
		// 	return {
		// 		success: '',
		// 		errors,
		// 	};
		// }

		// users.push(newUser);
		// localStorage.setItem('allUsers', JSON.stringify(users));
		return {
			success: 'تم تسجيل الدخول بنجاح',
			errors: [] as any[],
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
		addRequest,
	};
};
