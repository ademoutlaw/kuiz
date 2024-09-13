import type { AxiosError } from 'axios';

export default class HttpError extends Error {
	status: number;
	data: any;
	constructor(status: number, message: string, data: any) {
		super();
		this.status = status;
		this.name = 'HttpError';
		this.message = message;
		this.data = data;
	}
	static create(error: AxiosError | Error) {
		if (error && error.name === 'AxiosError') {
			const axiosError = error as AxiosError<{ message: string }>;
			const data = axiosError.response?.data;
			const message = data?.message || axiosError.response!.statusText;
			return new HttpError(axiosError.response!.status, message, data);
		}
		return error;
	}
}
