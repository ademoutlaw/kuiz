const EMAIL_REGEXP =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
const MOBILE_REGEXP = /^\d{8}$/i;
const LOGIN_REGEXP = new RegExp(`(${EMAIL_REGEXP.source})|(${MOBILE_REGEXP.source})`);

type RegExpKey = 'email' | 'password' | 'mobile' | 'login';

const REGEXPS: { [key: string]: RegExp } = {
	email: EMAIL_REGEXP,
	password: PASSWORD_REGEXP,
	mobile: MOBILE_REGEXP,
	login: LOGIN_REGEXP,
};

export function createFormControlValidator(cb: (rule: any, value: any, callback: any) => void) {
	let blured = false;
	function onchange(_rule: any, value: any, callback: any) {
		if (blured) {
			cb(_rule, value, callback);
		}
	}
	function onblur(_rule: any, value: any, callback: any) {
		blured = true;
		cb(_rule, value, callback);
	}

	return [
		{ validator: onblur, trigger: 'blur' },
		{ validator: onchange, trigger: 'change' },
	];
}

export function createRequiredInputValidator(msg: string) {
	return createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (!value || !value.length) return callback(msg);
		callback();
	});
}
export function createInputValidatorByCustomValidation(requiredMsg: string, invalidMsg: string, validator: (value: any) => boolean) {
	return createFormControlValidator((_rule: any, val: any, callback: any) => {
		if (!val || !val.length) return callback(requiredMsg);
		if (!validator(val)) return callback(invalidMsg);
		callback();
	});
}
export function createInputValidatorByRegex(requiredMsg: string, invalidMsg: string, regExpKey: RegExpKey) {
	return createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (!value || !value.length) return callback(requiredMsg);
		const regex = REGEXPS[regExpKey];
		if (regex && !regex.test(value)) return callback(invalidMsg);
		callback();
	});
}
// export function createEmailInputValidator(requireMsg: string, invalidMsg: string) {
// 	return createFormControlValidator((_rule: any, value: any, callback: any) => {
// 		if (!value || !value.length) return callback(requireMsg);
// 		if (!EMAIL_REGEX.test(value)) return callback(invalidMsg);
// 		callback();
// 	});
// }
// export function createPasswordInputValidator(requireMsg: string, invalidMsg: string) {
// 	return createFormControlValidator((_rule: any, value: any, callback: any) => {
// 		if (!value || !value.length) return callback(requireMsg);
// 		if (!PASSWORD_REGEX.test(value)) return callback(invalidMsg);
// 		callback();
// 	});
// }
