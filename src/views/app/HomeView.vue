<template>
	<div class="home-container">
		<template v-if="userStore.userRole === 'parent'">
			<section class="add-child-container">
				<h1>مراقبة تقدم ابني</h1>
				<p>
					من خلال النظام المتاح، يمكنك متابعة تقدم ابنك بفعالية. ستتمكن من عرض درجاته في الكويزات، تحليل أدائه في كل كويز، والحصول
					على نظرة شاملة حول تطوره الأكاديمي
				</p>
				<button @click="addChild">إضافة ابني</button>
			</section>
			<section class="child-list-container" v-if="userStore.childs.length">
				<h1>الأبناء المسجلون</h1>
				<div class="child-list">
					<div class="child-item-card" v-for="child of userStore.childs" :key="child.id">
						<div class="child-avatar">
							<img :src="child.avatar" alt="avatr" v-if="child.avatar" />
						</div>
						<div class="child-name">{{ child.name }}</div>
						<div class="child-level">{{ child.level }}</div>
						<div class="child-approve-pending" v-if="child.pending"><Icon icon="hugeicons:clock-05" /> في انتظار الموافقة</div>
					</div>
				</div>
			</section>
			<KDialog v-model="showAddModal" align-center class="h-[339px]">
				<template v-slot="{ close }">
					<AddChildForm :on-close="close" />
				</template>
			</KDialog>
		</template>
		<template v-else>
			<section>
				<h1>النشاطات الأخيرة</h1>
				<div class="flex gap-4">
					<Quiz
						v-for="({ title, number, subject, color, bg, icon, totalQuestion, correctAnswer }, i) of quizs"
						:key="i"
						:bg="bg"
						:icon="icon"
						:title="title"
						:color="color"
						:number="number"
						:subject="subject"
						:total-question="totalQuestion"
						:correct-answers="correctAnswer"
					/>
				</div>
			</section>
			<section>
				<h1>اختر المادة</h1>
				<SubjectsList />
			</section>
		</template>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	import AddChildForm from '@/components/app/parent/AddChildForm.vue';
	import SubjectsList from '@/components/app/SubjectsList.vue';
	import Quiz from '@/components/cards/QuizProgress.vue';
	import KDialog from '@/components/common/KDialog.vue';
	import { useUserStore } from '@/stores/user';

	const userStore = useUserStore();
	const showAddModal = ref(false);

	const quizs: {
		color: string;
		icon: string;
		subject: string;
		number: string;
		title: string;
		totalQuestion: number;
		correctAnswer: number;
		bg: string;
	}[] = [
		{
			title: 'Avencement d’une réaction chimique',
			number: '3',
			icon: '/quiz/chimistry.svg',
			bg: '/quiz/bg/chimistry.svg',
			subject: 'Chimie',
			color: 'rgba(76, 161, 77, 1)',
			totalQuestion: 14,
			correctAnswer: 0,
		},
		{
			title: 'Avencement d’une réaction chimique',
			number: '1',
			icon: '/quiz/chimistry.svg',
			bg: '/quiz/bg/chimistry.svg',
			totalQuestion: 14,
			correctAnswer: 14,
			subject: 'Chimie',
			color: 'rgba(76, 161, 77, 1)',
		},

		{
			title: 'Avencement d’une réaction',
			number: '3',
			icon: '/quiz/svt.svg',
			bg: '/quiz/bg/chimistry.svg',
			totalQuestion: 14,
			correctAnswer: 2,
			subject: 'SVT',
			color: 'rgba(84, 190, 222, 1)',
		},
		{
			title: 'Country vs City',
			number: '1',
			icon: '/quiz/english.svg',
			bg: '/quiz/bg/english.svg',
			totalQuestion: 14,
			correctAnswer: 10,
			subject: 'English',
			color: 'rgba(205, 91, 98, 1)',
		},
	];

	// const _childs = [
	// 	{
	// 		id: '1',
	// 		avatar: '/test-avatar.png',
	// 		name: 'سيرين الهمامي',
	// 		level: 'بكالوريا علوم تجريبية',
	// 		pending: false,
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'سيرين الهمامي',
	// 		level: 'بكالوريا علوم تجريبية',
	// 		pending: true,
	// 	},
	// ];
	const addChild = () => {
		showAddModal.value = true;
	};
</script>

<style scoped lang="scss">
	.home-container {
		section {
			margin-bottom: 32px;
			h1 {
				font-family: Noto Naskh Arabic;
				font-size: 26px;
				font-weight: 400;
				line-height: 44.28px;
				text-align: right;
				color: rgba(77, 77, 77, 1);
			}
			&.add-child-container {
				width: 722px;
				height: 239px;
				top: 123px;
				border-radius: 10px;
				background: #f9f9f9;
				box-shadow: 0px 4px 16px 0px #c1bfbf17;
				padding: 29px 21px;
				h1 {
					font-size: 20px;
					font-weight: 700;
					line-height: 34.06px;
					color: black;
				}
				p {
					font-family: Noto Naskh Arabic;
					font-size: 18px;
					font-weight: 400;
					line-height: 30.65px;
					text-align: right;
					color: black;
					margin: 8px 0 24px;
				}
				button {
					// width: Hug (143px)px;
					height: 44px;
					padding: 10px 40px 10px 40px;
					border-radius: 15px;
					border: 0px 0px 2px 0px;
					background: #ef8114;
					font-family: Noto Naskh Arabic;
					font-size: 16px;
					font-weight: 500;
					line-height: 27.25px;
					color: #fff;
				}
			}
			&.child-list-container {
				padding: 29px 21px;
				h1 {
					font-size: 20px;
					font-weight: 700;
					line-height: 34.06px;
					font-family: Noto Naskh Arabic;
					color: #4d4d4d;
				}
				.child-list {
					display: flex;
					gap: 16px;
					margin-top: 16px;
					.child-item-card {
						width: 236px;
						height: 270px;
						border-radius: 10px;
						border: 1px solid #d9d9d9;
						display: flex;
						flex-direction: column;
						align-items: center;
						padding-top: 32px;
						.child-avatar {
							width: 95px;
							height: 95px;
							overflow: hidden;
							border-radius: 50%;
							background-image: url(@/assets/default-avatar.png);
							background-size: cover;
						}
						.child-name {
							font-family: Noto Naskh Arabic;
							font-size: 20px;
							font-weight: 700;
							line-height: 34.06px;
							text-align: center;
							color: black;
						}
						.child-level {
							font-family: Noto Naskh Arabic;
							font-size: 16px;
							font-weight: 500;
							line-height: 27.25px;
							text-align: center;
							color: #666666;
						}
						.child-approve-pending {
							font-family: Noto Naskh Arabic;
							font-size: 16px;
							font-weight: 400;
							line-height: 27.25px;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #e44b4b;
							margin-top: 12px;
							gap: 8px;
							svg {
								font-size: 24px;
							}
						}
					}
				}
			}
		}
	}
</style>
