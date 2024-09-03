<template>
	<section v-if="resetPasswordData.step === 1">
		<h1>يرجى إدخال الرمز المكون من 6 أرقام</h1>
		<div>
			<p>ابحث عن رمز التحقق في البريد الإلكتروني {{ resetPasswordData.email }}</p>
		</div>
		<div class="otp-inputs-container">
			<div class="otp-inputs">
				<input type="text" tabindex="6" id="otp-input-1" @input="changeInut(1)" ref="otpRef1" v-model="otp1" />
				<input type="text" tabindex="5" id="otp-input-2" @input="changeInut(2)" ref="otpRef2" v-model="otp2" />
				<input type="text" tabindex="4" id="otp-input-3" @input="changeInut(3)" ref="otpRef3" v-model="otp3" />
				<input type="text" tabindex="3" id="otp-input-4" @input="changeInut(4)" ref="otpRef4" v-model="otp4" />
				<input type="text" tabindex="2" id="otp-input-5" @input="changeInut(5)" ref="otpRef5" v-model="otp5" />
				<input type="text" tabindex="1" id="otp-input-6" @input="changeInut(6)" ref="otpRef6" v-model="otp6" />
			</div>
			<button tabindex="7" class="btn-link" id="resend-email-btn">إعادة إرسال الرمز</button>
		</div>
		<div>
			<button class="btn-form" @click="submit" ref="btnRef" id="otp-submit" tabindex="6">تجديد كلمة السر</button>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useAuth } from '@/composition/auth';
import { ElMessage } from 'element-plus';

	const { resetPasswordData, confirmOtp } = useAuth();

	const otpRef1 = ref<any>(null);
	const otpRef2 = ref<any>(null);
	const otpRef3 = ref<any>(null);
	const otpRef4 = ref<any>(null);
	const otpRef5 = ref<any>(null);
	const otpRef6 = ref<any>(null);

	const btnRef = ref<any>(null);

	const otp1 = ref('');
	const otp2 = ref('');
	const otp3 = ref('');
	const otp4 = ref('');
	const otp5 = ref('');
	const otp6 = ref('');

	const focus = (index: number, offset = 1) => {
		if (index < 1) return;
		const inputRef = [btnRef, otpRef1, otpRef2, otpRef3, otpRef4, otpRef5][Math.max(index - offset, 0)];
		inputRef.value?.focus();
	};

	const changeInut = (index: number) => {
		const otps = [otp1, otp2, otp3, otp4, otp5, otp6];
		const otpInput = otps[index - 1];
		if (!otpInput) return;
		if (!/[0-9]/.test(otpInput.value)) {
			console.error('here');
			otpInput.value = '';
			return;
		}
		if (otpInput.value.length > 1) {
			if (index !== 6 || otpInput.value.length > 6) {
				otpInput.value = '';
				return;
			}
			const value = otpInput.value;
			for (let i = 0; i < value.length; i++) {
				otps[5 - i].value = value.charAt(i);
			}
			focus(index, value.length);
			return;
		}
		focus(index);
	};

	const submit = async () => {
		const otp = `${otp6.value}${otp5.value}${otp4.value}${otp3.value}${otp2.value}${otp1.value}`;
		if (otp.length < 6) {
			ElMessage.error('يرجى التحقق');
			return;
		}
		const { error, success } = await confirmOtp(otp);
		if (error) {
			ElMessage.error(error);
		} else {
			otp1.value = '';
			otp2.value = '';
			otp3.value = '';
			otp4.value = '';
			otp5.value = '';
			otp6.value = '';
			ElMessage.success(success!);
		}
	};
</script>

<style scoped lang="scss">
	.forget-pass-container {
		section {
			h1 {
				margin-bottom: 8px;
			}
			.btn-link {
				font-family: Noto Naskh Arabic;
				font-size: 24px;
				font-weight: 500;
				line-height: 40.87px;
				text-align: right;
				color: #800080;
				margin: 24px 0 32px;
			}
		}
	}
</style>
