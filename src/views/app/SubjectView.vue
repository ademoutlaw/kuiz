<template>
	<div class="subject-container">
		<div class="subject-header-container">
			<div class="subject-header">
				<div class="subject-icon">
					<img :src="subjectIcon" alt="icon" />
				</div>
				<h1 class="subject-title">{{ subjectTitle }}</h1>
			</div>
		</div>
		<div class="subject-chapters-container">
			<div class="subject-chapters-menu">
				<ul>
					<li v-for="i of 15" :key="i" @click="select(i)" :class="{ selected: selected === i }">
						<span :href="`#chapter-${i}`">
							{{ `#chapter-${i}` }}
						</span>
					</li>
				</ul>
			</div>
			<div class="subject-chapters-content" ref="root">
				<div v-for="i of 15" :key="i" :id="`chapter-${i}`" class="subject-chapter-container" ref="itemRefs">
					<h1>{{ `#chapter-${i}` }}</h1>
					<div
						class="subject-chapter-quiz"
						v-intersection-observer="[([{ isIntersecting, isVisible }]: any[])=>{
							observChapter(i, isIntersecting, isVisible)
						},{root}]"
					>
						<div v-for="j of 3" :key="j">
							<div class="quiz-nbr">quiz n°{{ j }}</div>
							<div class="quiz-title">Nombre de Questions : 15 Questions</div>
							<div class="quiz-title">Niveau : avancé</div>
							<button>ابدأ الكويز</button>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="chapter-menu">
				<a :href="`#chapter-${i}`" v-for="i of 5" :key="i">
					<ChapterLabel @click="select(i)" />
				</a>
			</div>
			<div class="chapter-content">
				<Chapter v-for="i of 5" :key="i" ref="div" :index="i" :id="`chapter-${i}`" />
			</div> -->
		</div>
	</div>
</template>
<script setup lang="ts">
	import { vIntersectionObserver } from '@vueuse/components';

	import { ref } from 'vue';

	const selected = ref(1);
	let ignoreFirst = false;
	const selections: boolean[] = [];

	function observChapter(j: any, isIntersecting: any, isVisible: any) {
		console.log(j, isIntersecting, isVisible);
		selections[j - 1] = isIntersecting;
		// if (isIntersecting && !selections[selected.value - 1]) {
		// 	selected.value = j;
		// }
		if (isIntersecting) {
			if (!ignoreFirst) {
				selected.value = j;
			}
			if (selected.value !== j) {
				ignoreFirst = false;
			}
		}
	}

	const subjectTitle = 'Chimie';
	const subjectIcon = '/subjects/chimistry.svg';

	const itemRefs = ref<any[]>([]);
	const root = ref(null);

	const select = (i: number) => {
		console.log(i);
		selected.value = i;
		ignoreFirst = true;
		const t = itemRefs.value[i - 1];
		console.log(t);
		if (t) {
			t.scrollIntoView({ behavior: 'smooth' });
			console.log(t.innerHTML);
		}
	};
</script>

<style scoped lang="scss">
	.subject-container {
		margin-top: -24px;
		/* position: relative;
		position: sticky;
		top: 100px;
		height: calc(100vh - 100px); */
		direction: ltr;
		.subject-header-container {
			position: sticky;
			top: 127px;
			background-color: white;
			padding-bottom: 40px;
			.subject-header {
				background: rgba(76, 161, 77, 1);
				background-image: url(/subject-header.png);
				height: 240px;
				border-radius: 20px;
				display: flex;
				align-items: center;
				justify-content: start;
				gap: 10px;
				padding: 62px;

				.subject-icon {
					width: 100px;
					height: 100px;
					border-radius: 50%;
					background-color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					img {
						width: 75px;
						// height: 100%;
						// object-fit: contain;
					}
				}
				.subject-title {
					color: white;
					font-family: Noto Naskh Arabic;
					font-size: 80px;
					font-weight: 700;
					line-height: 136.24px;
					text-align: left;
				}
			}
		}
		.subject-chapters-container {
			display: flex;
			.subject-chapters-menu {
				position: sticky;
				top: 407px;
				height: calc(100vh - 240px - 127px - 40px);
				overflow-y: scroll;
				width: 398px;
				flex-shrink: 0;
				ul {
					width: 100%;
					li {
						font-family: Noto Naskh Arabic;
						font-size: 18px;
						font-weight: 700;
						line-height: 30.65px;
						text-align: left;
						height: 79px;
						margin-bottom: 12px;
						display: flex;
						align-items: center;
						justify-content: flex-start;
						padding: 0 16px;
						cursor: pointer;
						&.selected,
						&:hover {
							background-color: #fcf9f9;
						}
					}
				}
			}
			.subject-chapters-content {
				width: 100%;
				margin-left: 32px;
				.subject-chapter-container {
					scroll-margin-top: 407px;
					border: 1px solid rgba(230, 230, 230, 1);
					padding-bottom: 16px;
					margin-bottom: 16px;
					h1 {
						padding: 20px;
						color: black;
						font-family: Noto Naskh Arabic;
						font-size: 18px;
						font-weight: 700;
						line-height: 30.65px;
						text-align: left;
					}
					.subject-chapter-quiz {
						display: flex;
						justify-content: center;
						gap: 20px;
						> div {
							width: 250px;
							padding: 10px 30px;
							background: rgba(249, 249, 249, 1);
							background-image: url(/subject-quiz.svg);
							box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.07);
							border-radius: 16px;
							.quiz-nbr {
								font-family: Noto Naskh Arabic;
								font-size: 18px;
								font-weight: 500;
								line-height: 30.65px;
								text-align: left;
							}
							.quiz-title {
								font-family: Noto Naskh Arabic;
								font-size: 16px;
								font-weight: 500;
								line-height: 27.25px;
								text-align: left;
							}
							button {
								// width: Fill (279px)px;height: Hug (44px)px;
								padding: 10px 30px 10px 30px;
								border-radius: 15px;
								background: rgba(239, 129, 20, 1);
								font-family: Noto Naskh Arabic;
								font-size: 14px;
								font-weight: 700;
								line-height: 23.84px;
								text-align: center;
								color: white;
								width: 100%;
							}
						}
					}
				}
			}
		}
	}
	.chapter {
		/* position: sticky;
		top: 0; */
		top: 0;
	}
	.chapter-menu {
		position: sticky;
		top: 130px;
		height: calc(100vh - 130px);
	}
	.chapter-content {
		width: 100%;
	}
</style>
