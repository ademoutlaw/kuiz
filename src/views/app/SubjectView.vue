<template>
	<div class="subject-container" >
		<div class="subject-header-container" :style="{'--subject-bg':`url(${formatedSubject.bg})`, '--subject-bg-color':formatedSubject.color}">
			<div class="subject-header">
				<div class="subject-icon">
					<img :src="formatedSubject.icon" alt="icon" />
				</div>
				<h1 class="subject-title">{{ formatedSubject.title }}</h1>
			</div>
		</div>
		<div class="subject-chapters-container">
			<div class="subject-chapters-menu" ref="menuRef">
				<ul>
					<li v-for="i of 15" :key="i" @click="select(i)" :class="{ selected: selected === i }" :id="`menu_chapter_${i}`">
						<span>
							{{ `#chapter-${i}` }}
						</span>
					</li>
				</ul>
			</div>
			<div class="subject-chapters-content">
				<div
					v-for="i of 15"
					:key="i"
					:id="`chapter_${i}`"
					class="subject-chapter-container"
					ref="itemRefs"
					v-intersection-observer="[([{ isIntersecting }]:any)=>{
							observChapter(i, isIntersecting);
						},{rootMargin }]"
				>
					<h1>{{ `#chapter-${i}` }}</h1>
					<div class="subject-chapter-quiz">
						<div v-for="j of 3" :key="j">
							<div class="quiz-nbr">quiz n°{{ j }}</div>
							<div class="quiz-title">Nombre de Questions : 15 Questions</div>
							<div class="quiz-title">Niveau : avancé</div>
							<button>ابدأ الكويز</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { computed, ref, watch } from 'vue';
	import { vIntersectionObserver } from '@vueuse/components';
	import { useUserSubjects } from '@/composition/subject';
	import { useRoute } from 'vue-router';
import { ASSETS_BASE_URL } from '@/constants/endpoints';

	const route = useRoute();
	const {subject, loadSubject} = useUserSubjects();
	const itemRefs = ref<any[]>([]);
	const menuRef = ref<any>(null);
	const selected = ref(1);
	const selections = ref<boolean[]>([]);


	// let timeout: any = null;
	let tempSelected = 1;
	let ignore = true;

	watch(()=>route.fullPath, ()=>{
		loadSubject(route.params.id as string);
	},{immediate: true})
	// function debounceScroll(t:any){
	// 	if(timeout){
	// 		clearTimeout(timeout);
	// 	}
	// 	timeout = setTimeout(()=>{
	// 		menuRef.value.scrollTop= t;
	// 	},600)
	// }
	const rootMargin ="-400px 0px 0px 0px";
	// function selectMenuItem(item:number) {
	// 	if(ignore)return;
	// 	if(selected.value===item) return;
	// 	selected.value = item;
	// 	if(menuRef.value){
	// 		debounceScroll((item-1)*90);
	// 	}
	// }
	function observChapter(j: any, isIntersecting: any) {
		selections.value[j - 1] = isIntersecting;
		if(ignore )return;
		if (isIntersecting && !selections.value[tempSelected - 1]) {
			tempSelected = j;
			return; 
		} 
		if(!isIntersecting &&tempSelected===j){
			for (let i = 0; i < selections.value.length; i++) {
				if(selections.value[i]){
					tempSelected = i+1;
					break;
				}
			}
		}
	}

	const subjectTitle = 'Chimie';
	const subjectIcon = '/subjects/chimistry.svg';

	const formatedSubject = computed(()=>{
		const config = subject.value.design_config?JSON.parse(subject.value.design_config):{};
		return {
		id: subject.value.id,
		color: config.backgroundColor,
		title: subject.value.title,
		progress: 0,
		quiz: 75,
		icon: `${ASSETS_BASE_URL}/${config.icon}`,
		bg: `${ASSETS_BASE_URL}/${config.background}`,
		}
	}) 

	const select = (i: number) => {
		selected.value = i;
		tempSelected = i;
		ignore = true;
		const t = itemRefs.value[i - 1];
		if (t) {
			t.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const onScrollEnd = ()=>{
		console.error("object");
		ignore = false;
		if(selected.value!==tempSelected){
			selected.value = tempSelected;
			if(menuRef.value){
				menuRef.value.scrollTop= (tempSelected-1)*90;
			}
		}
	}
	document.addEventListener('scrollend', onScrollEnd)
</script>

<style scoped lang="scss">
	.subject-container {
		margin-top: -24px;
		direction: ltr;
		.subject-header-container {
			position: sticky;
			top: 127px;
			background-color: white;
			padding-bottom: 40px;
			.subject-header {
				background: var(--subject-bg-color);
				background-image: var(--subject-bg);
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
</style>
