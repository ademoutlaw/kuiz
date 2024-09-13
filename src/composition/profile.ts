import { ref } from 'vue';
// import { useAuth } from "./auth";
import { useFetch } from './fetch';

export const useProfile = () => {
	const loading = ref(true);
	const profile = ref<RegisterForm | null>(null);
	const fetch = useFetch();

	// const auth = useAuth();

	const updateProfile = async (user: RegisterForm) => {
		const newUser: User = {
			email: user.email,
			firstname: user.firstname,
			lastname: user.lastname,
			mobile: user.mobile,
			institution: user.institution,
			level_id: user.level,
			branch_id: user.branch,
			optional_subject_id: user.optionalSubject,
			role: user.role,
			birthday: user.birthday,
			birthplace: user.birthplace,
		};
		console.log(newUser);
		await fetch.patch('users.me', newUser);
		return {
			success: true,
			error: false,
		};
	};
	const loadProfile = async () => {
		try {
			loading.value = true;
			const data = await fetch.get('users.me');
			loading.value = false;
			profile.value = {
				id: data.id,
				level: data.level_id,
				branch: data.branch_id,
				optionalSubject: data.optional_subject_id,
				firstname: data.firstname,
				lastname: data.lastname,
				mobile: data.mobile,
				email: data.email,
				role: data.role,
				institution: data.institution,
				birthday: '1998-10-26',
				birthplace: 'ولاية',
			};
			console.log(data);
		} catch (err) {
			console.error(err);
		}
	};
	return {
		loading,
		profile,
		loadProfile,
		updateProfile,
	};
};
