export const ENDPOINTS: { [key in EndpointType]: string } = {
	// General API endpoints
	'users.me': '/api/users/me',
	'users.subjects': '/api/users/subjects',
	'users.subject': '/api/users/subjects/{id}',
	'levels.all': '/api/levels',
	'branches.all': '/api/branches',
	'optionalSubjects.all': '/api/optional-subjects',
	// createProduct: '/api/products/create',

	// Authentication endpoints
	'auth.login': '/auth/login',
	'auth.register': '/auth/register',
	'auth.logout': '/auth/logout',
	'auth.email.verification': '/auth/email/verification',
	// refreshToken: '/auth/refresh',
	// logout: '/auth/logout',
};

export const API_PREFIX = '/api';
export const AUTH_PREFIX = '/auth';
export const API_BASE_URL = 'http://localhost:8000';
export const ASSETS_BASE_URL = 'http://localhost:8000/images';
