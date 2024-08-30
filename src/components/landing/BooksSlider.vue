<template>
	<div class="books-slider-container">
		<div class="books-slider">
			<div class="books-holder" :style="{ translate }">
				<Book :number="book.number" :bg-color="book.bgColor" :title="book.title" v-for="book of books" :key="book.number" />
			</div>
			<div class="books-slider-btn" v-show="slideIdx < maxSlideIdx" @click="next">&gt;</div>
			<div class="books-slider-btn books-slider-btn-right" v-show="slideIdx > 0" @click="prev">&lt;</div>
		</div>
	</div>
	<span></span>
</template>

<script setup lang="ts">
	import Book from './../cards/Book.vue';
	import { computed, ref } from 'vue';

	const books: { number: string; bgColor: string; containerBgColor: string; title: string }[] = [
		{
			number: '1',
			bgColor: '#01ABE9',
			containerBgColor: '',
			title: 'تغيير الأساليب التقليدية',
		},
		{
			number: '2',
			bgColor: 'rgba(239, 129, 20, 1)',
			containerBgColor: '',
			title: 'تجربة تعليمية مستمرة',
		},
		{
			number: '3',
			bgColor: 'rgba(60, 186, 148, 1)',
			containerBgColor: '',
			title: 'يمكن للأهل متابعة تقدم أبنائهم.',
		},
		{
			number: '4',
			bgColor: 'rgba(113, 81, 180, 1)',
			containerBgColor: '',
			title: 'تقييم شامل وفعّال لفهمك لكل مادة.',
		},
	];

	const slideIdx = ref(0);
	const translate = computed(() => `${slideIdx.value * 467}px`);
	const maxSlideIdx = 1;

	const prev = () => {
		if (slideIdx.value > 0) {
			slideIdx.value--;
		}
	};
	const next = () => {
		if (slideIdx.value < maxSlideIdx) {
			slideIdx.value++;
		}
	};
</script>

<style scoped lang="scss">
	.books-slider-container {
		width: 100%;
		padding-right: 77px;
		.books-slider {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 532px;
			.books-holder {
				display: flex;
				position: absolute;
				top: 0;
				right: 0;
				justify-content: end;

				gap: 20px;
				translate: 0;
				transition: translate 500ms;
			}
			.books-slider-btn {
				position: absolute;
				top: 50%;
				left: 100px;
				background-color: white;
				width: 60px;
				height: 60px;
				border-radius: 50%;
				color: black;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: x-large;
				box-shadow: 0px 2px 9px #000000bd;
			}
			.books-slider-btn-right {
				left: unset;
				right: 100px;
			}
		}
	}
</style>
