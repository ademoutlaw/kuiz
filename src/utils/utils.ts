const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

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

export function createEmailInputValidator(requireMsg: string, invalidMsg: string) {
	return createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (!value || !value.length) return callback(requireMsg);
		if (!EMAIL_REGEX.test(value)) return callback(invalidMsg);
		callback();
	});
}
export function createPasswordInputValidator(requireMsg: string, invalidMsg: string) {
	return createFormControlValidator((_rule: any, value: any, callback: any) => {
		if (!value || !value.length) return callback(requireMsg);
		if (!PASSWORD_REGEX.test(value)) return callback(invalidMsg);
		callback();
	});
}
