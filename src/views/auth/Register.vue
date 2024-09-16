<template>
	<div class="register-container">
		<div class="register-steper">
			<span :class="{ 'is-selected': step === 0 }"></span>
			<span :class="{ 'is-selected': step === 2 }"></span>
		</div>
		<h1>قم بإنشاء حسابك</h1>
		<div class="register-section-container" v-if="showRegisterForm">
			<h6>هذا الحقل إجباري</h6>
			<RegisterForm :role="role" />
			<div class="register-social-network" v-if="role === 'parent'">
				<div class="line-or-line"><span>أو</span></div>
				<div class="btns">
					<button id="register-google-btn" @click="submit"><Icon icon="flat-color-icons:google" />سجّل باستخدام جوجل</button>
					<button id="register-facebook-btn" @click="submit"><Icon icon="logos:facebook" />سجّل باستخدام فيسبوك</button>
				</div>
			</div>
		</div>
		<div class="register-section-container" v-else-if="role">
			<div class="register-method-container">
				<button id="register-email-method-btn" @click="showRegisterForm = true">
					<Icon icon="oui:email" />سجّل باستخدام البريد الإلكتروني
				</button>
				<button id="register-google-method-btn" @click="submit"><Icon icon="flat-color-icons:google" />سجّل باستخدام جوجل</button>
				<button id="register-facebook-method-btn" @click="submit"><Icon icon="logos:facebook" />سجّل باستخدام فيسبوك</button>
			</div>
		</div>
		<div class="register-section-container" v-else>
			<h4>حدد دورك للتسجيل وابدء في استخدام Kuiz</h4>
			<div class="register-role-container">
				<button @click="setRole('parent')" id="register-parent">
					<span> ولي </span>
					<img src="@/assets/parent.svg" alt="" />
				</button>
				<button @click="setRole('student')" id="register-student">
					<span> تلميذ </span>
					<img src="@/assets/student.svg" alt="" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { ElMessage } from 'element-plus';
	import RegisterForm from '@/components/auth/RegisterForm.vue';

	const role = ref<'parent' | 'student' | null>(null);
	const showRegisterForm = ref(false);

	const setRole = (type: 'parent' | 'student') => {
		role.value = type;
		showRegisterForm.value = type === 'student';
	};
	const step = computed(() => (role.value ? (showRegisterForm.value ? 2 : 1) : 0));
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
			font-size: 30px;
			font-weight: 700;
			line-height: 36.31px;
			margin: 20px 0 32px;
		}
		.register-section-container {
			padding: 1px;
			h4 {
				font-family: Inter;
				font-size: 20px;
				font-weight: 700;
				line-height: 24.2px;
				text-align: center;
				margin-bottom: 72px;
			}
			.register-role-container {
				display: flex;
				justify-content: center;
				gap: 94px;
				button {
					width: 180px;
					height: 220px;
					border-radius: 20px;
					border: 1px solid rgba(217, 217, 217, 1);
					transition: all 200ms;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 16px;
					span {
						color: black;
						font-family: Noto Naskh Arabic;
						font-size: 16px;
						font-weight: 700;
						line-height: 27.25px;
					}
					img {
						width: 60px;
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
			.register-method-container {
				display: flex;
				flex-direction: column;
				width: 400px;
				gap: 56px;
				margin: 28px auto;
				button {
					display: flex;
					height: 53px;
					align-items: center;
					justify-content: center;
					gap: 10px;
					font-family: Noto Naskh Arabic;
					font-size: 16px;
					font-weight: 400;
					line-height: 27.25px;
					border-radius: 15px;
					color: #666666;
					border: 1px solid #666666;
					svg {
						font-size: 32px;
					}
				}
			}
			h6 {
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 400;
				line-height: 30.65px;
				text-align: right;
				&::before {
					content: '*';
					color: red;
				}
			}
		}
		.register-social-network {
			.line-or-line {
				position: relative;
				display: flex;
				align-items: center;
				gap: 50px;
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 400;
				line-height: 27.25px;
				color: rgba(128, 128, 128, 1);

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
				gap: 30px;
				padding: 16px 0 40px;
				button {
					display: flex;
					border: 1px solid #666666;
					width: 272px;
					height: 53px;
					border-radius: 15px;
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 10px;
					color: #666666;
					svg {
						font-size: 32px;
					}
				}
			}
		}
	}
</style>
