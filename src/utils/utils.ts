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
