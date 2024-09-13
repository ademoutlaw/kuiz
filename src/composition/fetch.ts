import axios from 'axios';
import { AUTH_PREFIX, API_BASE_URL } from '@/constants/endpoints';
import HttpError from '@/utils/httpError';

import { useUserStore } from '@/stores/user';
import { getEndpoint } from '@/utils/apiEndpoints';
import { ElMessage } from 'element-plus';
// import type { EndpointType } from '@/types/endpoint';

// setUnauthorizedCallback(() => {
// 	useUserStore().setUser(null);
// 	// router.replace({ name: 'login' });
// });

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	withCredentials: true,
});

async function getXsrfToken() {
	await axiosInstance.get('/sanctum/csrf-cookie');
	const cookie = `; ${document.cookie}`;
	const parts = cookie.split(`; XSRF-TOKEN=`);
	if (parts.length === 2) {
		return decodeURIComponent(parts[1].split(';')[0]);
	}
	return null;
}

let initialized = false;

export const useFetch = () => {
	if (!initialized) {
		axiosInstance.interceptors.request.use(
			async config => {
				if (config.method === 'post' && config.url?.startsWith(AUTH_PREFIX)) {
					config.headers['X-XSRF-TOKEN'] = await getXsrfToken();
				}
				return config;
			},
			error => {
				return Promise.reject(error);
			}
		);

		axiosInstance.interceptors.response.use(
			response => response,
			error => {
				// Handle the error (e.g., showing an error message, retrying the request)
				console.error('Error response:', error.response, error.status, error.message);
				if (error.status === 401) {
					useUserStore().clearUser();
				} else if (error.status === 403 && error.response.data.message === 'Your email address is not verified.') {
					ElMessage.warning({ message: 'يرجى تاكيد البريد الإلكتروني.', duration: 0 });
				}
				return Promise.reject(HttpError.create(error));
			}
		);
		initialized = true;
	}
	const post = async (endpoint: EndpointType, data: any = {}, urlParams = {}) => {
		const url = getEndpoint(endpoint, urlParams);
		const response = await axiosInstance.post(url, data);
		return response.data;
	};

	const put = async (endpoint: EndpointType, data: any, urlParams = {}) => {
		const url = getEndpoint(endpoint, urlParams);
		const response = await axiosInstance.put(url, data);
		return response.data;
	};

	const patch = async (endpoint: EndpointType, data: any, urlParams = {}) => {
		const url = getEndpoint(endpoint, urlParams);
		const response = await axiosInstance.patch(url, data);
		return response.data;
	};

	const deleteApi = async (endpoint: EndpointType, query: { [key: string]: string | Array<string> } | null = null, urlParams = {}) => {
		const url = getEndpoint(endpoint, urlParams);
		const response = await axiosInstance.delete(url, { params: query });
		return response.data;
	};

	const get = async (endpoint: EndpointType, query: { [key: string]: string | Array<string> } | null = null, urlParams = {}) => {
		const url = getEndpoint(endpoint, urlParams);
		const response = await axiosInstance.get(url, { params: query });
		return response.data;
	};

	return {
		get,
		post,
		put,
		patch,
		delete: deleteApi,
	};
};
