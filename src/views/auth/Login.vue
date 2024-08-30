<template>
	<div class="login-container">
		<h1>سجّل دخولك إلى Kuiz</h1>

		<div class="login-form-container">
			<el-form label-position="top" label-width="auto" :rules="rules" ref="formRef" :model="form" @submit.prevent="submit">
				<div class="form-row">
					<el-form-item label="البريد الإلكتروني" prop="email" required>
						<el-input v-model="form.email" id="email" placeholder="البريد الإلكتروني" />
					</el-form-item>
				</div>
				<div class="form-row">
					<el-form-item label="كلمة السّر" prop="password" required>
						<el-input v-model="form.password" id="password" type="password" placeholder="كلمة السّر" />
					</el-form-item>
				</div>
				<div>
					<router-link :to="{ name: 'forgetPassword' }">نسيت كلمة السر؟</router-link>
				</div>
				<div class="form-action">
					<button id="register-btn" type="submit">تسجيل الدخول</button>
					<div>ليس لديك حساب بعد؟ <router-link :to="{ name: 'register' }">إشترك هنا</router-link></div>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, reactive, ref } from 'vue';
	import { ElMessage } from 'element-plus';

	import { useUserStore } from '../../stores/user';
	import { useRouter } from 'vue-router';

	const form = reactive({
		email: '',
		password: '',
	});
	const formRef = ref();
	const rules = reactive({});
	const userStore = useUserStore();
	const router = useRouter();

	const submit = () => {
		ElMessage.error('Oops, this is a error message.');
		userStore.setUser('hello world');
		router.replace({ name: 'appHome' });
	};
</script>

<style scoped lang="scss">
	.login-container {
		width: 506px;
		margin: 4px auto;
		h1 {
			text-align: center;
			font-family: Inter;
			font-size: 40px;
			font-weight: 700;
			line-height: 48.41px;
			margin: 7px 0 40px;
		}
		.login-form-container {
			.form-action {
				text-align: center;
				button {
					height: 53px;
					padding: 10px 150px 10px 150px;
					border-radius: 15px;
					border: 0px 0px 2px 0px;
					background: rgba(239, 129, 20, 1);
					font-family: Noto Naskh Arabic;
					font-size: 18px;
					font-weight: 700;
					line-height: 30.65px;
					color: #fff;
				}
				div {
					font-family: Noto Naskh Arabic;
					font-size: 20px;
					font-weight: 400;
					line-height: 34.06px;
					text-align: center;
					padding: 16px 0 30px;
				}
			}
			a {
				color: rgba(166, 0, 166, 1);
			}
		}
	}
</style>
