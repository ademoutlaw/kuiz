<template>
	<div class="forget-pass-container">
		<section v-if="step === 0">
			<h1>نسيت كلمة السر؟</h1>
			<el-form label-position="top">
				<div class="form-row">
					<el-form-item label="البريد الإلكتروني" prop="email">
						<el-input v-model="email" id="email" placeholder="البريد الإلكتروني" />
					</el-form-item>
				</div>
				<div>
					<p>سنرسل رمز التحقق إلى هذا البريد الإلكتروني إذا كان هناك حساب Kuiz موجود يتطابق مع هذه المعلومات.</p>
				</div>
				<div>
					<button @click="step++">تجديد كلمة السر</button>
				</div>
				<div><router-link :to="{ name: 'login' }">رجوع</router-link></div>
			</el-form>
		</section>
		<section v-else-if="step === 1">
			<h1>يرجى إدخال الرمز المكون من 6 أرقام</h1>
			<div><p>ابحث عن رمز التحقق في البريد الإلكتروني w**@gmail.com</p></div>
			<div class="otp-inputs-container">
				<div class="otp-inputs">
					<input type="text" id="otp-input-1" />
					<input type="text" id="otp-input-2" />
					<input type="text" id="otp-input-3" />
					<input type="text" id="otp-input-4" />
					<input type="text" id="otp-input-5" />
					<input type="text" id="otp-input-6" />
				</div>
				<span>إعادة إرسال الرمز</span>
			</div>
			<div>
				<button @click="step++">تجديد كلمة السر</button>
			</div>
		</section>
		<section v-else>
			<div>change password</div>
			<div>
				<button>تجديد كلمة السر</button>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const step = ref(0);
	const email = ref('');
</script>

<style scoped lang="scss">
	.forget-pass-container {
		margin: auto;
		width: 700px;
		// height: 400px;
		border-radius: 40px;
		border: 1px solid rgba(217, 217, 217, 1);
		box-shadow: 3px 3px 8px 6px rgba(0, 0, 0, 0.03);
		padding: 30px 100px;
		section {
			h1 {
				font-family: Inter;
				font-size: 40px;
				font-weight: 700;
				line-height: 48.41px;
				text-align: center;
			}
			div {
				text-align: center;
			}
			button {
				height: 61px;
				padding: 10px 120px;
				border-radius: 15px;
				background: rgba(128, 0, 128, 1);
				font-family: Noto Naskh Arabic;
				font-size: 24px;
				font-weight: 700;
				line-height: 40.87px;
				text-align: center;
				color: white;
			}
			.otp-inputs-container {
				width: max-content;
				margin: auto;
				text-align: right;
				.otp-inputs {
					display: flex;
					justify-content: center;
					gap: 20px;
					input {
						width: 61px;
						height: 61px;
						padding: 0 30px 0 0;
						border-radius: 15px;
						border: 1px solid rgba(217, 217, 217, 1);
					}
				}
				span {
					color: red;
				}
			}
		}
	}
</style>
