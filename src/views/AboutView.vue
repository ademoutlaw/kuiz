<template>
	<div class="about-container">
		<div class="about-header">
			<Grid />
			<h1>من نحن؟</h1>
			<p>
				مرحبا بكم في "كويز" منصتكم التعليمية الرائدة التي تهدف إلى تحسين أساليب التعلم التقليدية. نقدم لكم تجربة تفاعلية وفريدة من
				نوعها للتلاميذ من السنة السابعة أساسي حتى البكالوريا.
			</p>
			<p>في "كويز"، نركز على :</p>
		</div>
		<section class="about-content">
			<div class="about-item" v-for="section of sections" :key="section.number">
				<Book
					:number="section.number"
					container-bg-color="white"
					:bg-color="section.bgColor"
					:title="section.title"
					hide-more
					small
				/>
				<div class="about-item-info" :style="{ color: section.bgColor }">{{ section.content }}</div>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
	import Grid from './../components/landing/Grid.vue';
	import Book from './../components/cards/Book.vue';
	type Book = { number: string; bgColor: string; containerBgColor: string; title: string };
	const sections: ({ content: string } & Book)[] = [
		{
			number: '1',
			bgColor: '#01ABE9',
			containerBgColor: '',
			title: 'تغيير الأساليب التقليدية',
			content: `نهدف إلى تقديم كويزات تفاعلية تُحفّز الطلاب على التخلي عن الأساليب القديمة واستبدالها بطرق تعليمية حديثة تُعزز من تفاعلهم مع المواد الدراسية وتُثري تجربتهم التعليمية.`,
		},
		{
			number: '2',
			bgColor: 'rgba(239, 129, 20, 1)',
			containerBgColor: '',
			title: 'تجربة تعليمية مستمرة',
			content: `يمكن للتلاميذ الاستفادة من كويز في أي وقت ومن أي مكان، مما يتيح لهم متابعة تقدمهم وتحسين أدائهم بشكل مستمر.`,
		},
		{
			number: '3',
			bgColor: 'rgba(60, 186, 148, 1)',
			containerBgColor: '',
			title: 'يمكن للأهل متابعة تقدم أبنائهم.',
			content: `ندرك أهمية دور الأهل في دعم عملية التعلم، لذلك نتيح لهم من خلال منصتنا متابعة تقدم أبنائهم. يمكن للآباء الاطلاع على تقارير مفصلة عن أداء أبنائهم ومتابعة تقدمهم الأكاديمي.`,
		},
		{
			number: '4',
			bgColor: 'rgba(113, 81, 180, 1)',
			containerBgColor: '',
			title: 'تقييم شامل وفعّال.',
			content: `نعمل على تقديم كويزات تقييم متقدمة تتيح للتلاميذ قياس تقدمهم وفهمهم بشكل دقيق. يمكن للتلاميذ تتبع تقدمهم وتحديد نقاط القوة والضعف لديهم، مما يساعدهم على تحسين أدائهم الأكاديمي.`,
		},
	];
</script>

<style scoped lang="scss">
	.about-container {
		padding: 0 40px 40px;
		.about-header {
			color: #4d4d4d;
			position: relative;
			padding: 46px 0px;
			h1 {
				text-align: center;
				font-family: Noto Naskh Arabic;
				font-size: 40px;
				font-weight: 700;
				line-height: 68.12px;
				position: relative;
			}
			p {
				font-size: 26px;
				font-weight: 700;
				line-height: 44.28px;
				text-align: right;
				margin-top: 26px;
				position: relative;
			}
		}
		.about-content {
			padding: 10px 0;
			.about-item {
				display: flex;
				margin-bottom: 32px;
				align-items: center;
				.about-item-info {
					padding: 0 24px 0 0;
					font-family: Noto Naskh Arabic;
					font-size: 30px;
					font-weight: 500;
					line-height: 51.09px;
					text-align: right;
					max-width: 850px;
				}
			}
		}
	}
</style>
