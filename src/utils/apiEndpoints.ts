import { ENDPOINTS } from '@/constants/endpoints';

export function getEndpoint(endpoint: EndpointType, urlParams: { [key: string]: string } = {}) {
	const url = ENDPOINTS[endpoint] || endpoint;
	return url.replace(/\{(.*?)}/g, (_match, key) => {
		if (!urlParams.hasOwnProperty(key)) {
			throw Error(`${key} not defined`);
		}
		return urlParams[key];
	});
}
