<template>
	<div class="register-container">
		<div class="register-steper">
			<span :class="{ 'is-selected': step === 0 }"></span>
			<span :class="{ 'is-selected': step === 1 }"></span>
		</div>
		<h1>قم بإنشاء حسابك</h1>
		<div class="register-form-container" v-if="step === 0">
			<h4>حدد دورك للتسجيل وابدء في استخدام Kuiz</h4>
			<div class="register-acount-type-container">
				<button @click="accountType = 'parent'" id="register-parent">
					<span> ولي </span>
					<img src="@/assets/parent.svg" alt="" />
				</button>
				<button @click="accountType = 'student'" id="register-student">
					<span> تلميذ </span>
					<img src="@/assets/student.svg" alt="" />
				</button>
			</div>
		</div>
		<div class="register-form-container" v-else>
			<h6>هذا الحقل إجباري</h6>
			<RegisterForm :account-type="accountType" />
			<div class="register-social-network" v-if="accountType === 'parent'">
				<div class="line-or-line"><span>أو</span></div>
				<div class="btns">
					<button id="register-google-btn" @click="submit" ><img src="@/assets/google.svg" alt="google" />سجّل باستخدام جوجل</button>
					<button id="register-facebook-btn" @click="submit" ><img src="@/assets/facebook.svg" alt="facebook" />سجّل باستخدام فيسبوك</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { ElMessage } from 'element-plus';
	import RegisterForm from './../../components/auth/RegisterForm.vue';

	const accountType = ref<'parent' | 'student' | null>(null);

	const step = computed(() => (accountType.value ? 1 : 0));

	const submit = () => {
		ElMessage.error('Oops, this is a error message.');
	};
</script>

<style scoped lang="scss">
	.register-container {
		.register-steper {
			padding: 10px;
			display: flex;
			justify-content: center;
			gap: 10px;
			span {
				background: rgba(217, 217, 217, 0.24);
				width: 11px;
				height: 11px;
				border-radius: 50%;
				&.is-selected {
					background: rgba(209, 69, 202, 0.54);
				}
			}
		}
		h1 {
			text-align: center;
			font-family: Inter;
			font-size: 40px;
			font-weight: 700;
			line-height: 48.41px;
			margin: 7px 0 40px;
		}
		.register-form-container {
			// common
			// account-type
			h4 {
				font-family: Inter;
				font-size: 20px;
				font-weight: 700;
				line-height: 24.2px;
				text-align: center;
				margin-bottom: 72px;
			}
			.register-acount-type-container {
				display: flex;
				justify-content: center;
				gap: 170px;
				button {
					width: 305px;
					height: 370px;
					border-radius: 20px;
					border: 1px solid rgba(217, 217, 217, 1);
					transition: all 200ms;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 20px;
					span {
						color: black;
						font-family: Noto Naskh Arabic;
						font-size: 30px;
						font-weight: 700;
						line-height: 51.09px;
					}

					&#register-parent {
						transform-origin: top right;
					}
					&#register-student {
						transform-origin: top left;
					}

					&:hover {
						transform: scale(1.35);
						background: rgba(239, 129, 20, 0.1);
						border-color: rgba(239, 129, 20, 1);
					}
				}
			}
			// account-form
			h6 {
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 400;
				line-height: 30.65px;
				text-align: right;
				&::before{
					content:"*";
					color:red;
				}
			}
			.row {
				display: flex;
				// background-color: pink;
				padding: 4px 0;
				justify-content: space-between;
				margin-bottom: 32px;
				gap: 30px;
				.col {
					display: flex;
					flex-direction: column;
					width: 507px;
					label {
						position: relative;
						padding-bottom: 6px;
					}
					input {
						width: 100%;
						height: 53px;
						padding: 13px 16px 13px 16px;
						border-radius: 15px;
						border: 1px solid rgba(217, 217, 217, 1);
					}
					select {
						width: 100%;
						height: 53px;
						padding: 13px 16px 13px 16px;
						border-radius: 15px;
						border: 1px solid rgba(217, 217, 217, 1);
					}
				}
			}
			.required::after {
				content: '*';
				color: red;
			}
			.password-checker {
				span {
					font-family: Noto Naskh Arabic;
					font-size: 14px;
					font-weight: 400;
					line-height: 23.84px;
					display: block;
					text-align: center;
					padding: 8px;
				}
				.password-status {
					display: flex;
					justify-content: center;
					gap: 6px;
					div {
						padding: 10px 15px 10px 15px;
						border-radius: 50px;
						background: rgba(250, 250, 250, 1);
						font-family: Noto Naskh Arabic;
						font-size: 14px;
						font-weight: 400;
						line-height: 23.84px;
						text-align: left;
					}
				}
			}
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
					a {
						color: rgba(166, 0, 166, 1);
					}
				}
			}
		}
		.register-social-network {
			.line-or-line {
				position: relative;
				display: flex;
				align-items: center;
				gap: 50px;
				span {
					font-family: Noto Naskh Arabic;
					font-size: 16px;
					font-weight: 400;
					line-height: 27.25px;
					color: rgba(128, 128, 128, 1);
				}
				&::after,
				&::before {
					content: '';
					display: block;
					width: 100%;
					height: 1px;
					border: 1px solid rgba(217, 217, 217, 1);
				}
			}
			.btns {
				display: flex;
				justify-content: center;
				gap: 100px;
				padding: 16px 0 40px;
				button {
					display: flex;
					border: 1px solid rgba(102, 102, 102, 1);
					width: 370px;
					height: 53px;
					border-radius: 15px;
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 10px;
				}
			}
		}
	}
</style>
