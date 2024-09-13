import { ref } from 'vue';
import { useFetch } from './fetch';

const subjects = ref<any[]>([]);
const subject = ref<any>({});
export const useUserSubjects = () => {
	const fetch = useFetch();
	const loadSubjects = async () => {
		try {
			const data = await fetch.get('users.subjects');
			console.log(data);
			subjects.value = data;
		} catch (error) {
			console.error(error);
		}
	};
	const loadSubject = async (id: string) => {
		try {
			const data = await fetch.get('users.subject', null, { id });
			console.log(data);
			subject.value = data;
		} catch (error) {
			console.error(error);
		}
	};
	return {
		subjects,
		subject,
		loadSubjects,
		loadSubject,
	};
};
