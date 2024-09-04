<template>
	<footer class="footer-container">
		<div class="footer-header">
			<div class="footer-header-overlay"></div>
			<div class="footer-header-overlay-right"></div>
			<div class="footer-header-content">
				<h4>انضم إلى Kuiz اليوم وحوّل مراجعاتك إلى تجربة مشوّقة، ديناميكية، مخصصة لك ولأصدقائك!</h4>
				<div :class="{ _hovred: joinBtnHovered }">
					<router-link :to="{ name: 'register' }" @mouseenter="joinBtnHovered = true" @mouseleave="joinBtnHovered = false"
						>اشترك الان في كويز</router-link
					>
				</div>
			</div>
		</div>
		<div class="footer-content">
			<div class="footer-sitemap">
				<h5>المواد التعليمية</h5>
				<div>
					<div v-for="level of levels" :key="level.level">
						<h6>
							<span>{{ level.level }}</span
							><span><Icon icon="mdi:chevron-down" /></span>
						</h6>
						<div v-for="subject of level.subjects" :key="subject">
							<router-link to="/" >{{ subject }}</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-footer">
			<div class="footer-divider"></div>
			<div class="footer-copyright">
				<div>
					<a href="https://youtube.com" target="_blank"><Icon icon="ri:youtube-fill" /></a>
					<a href="https://www.tiktok.com" target="_blank"><Icon icon="ri:tiktok-fill" /></a>
					<a href="https://www.instagram.com" target="_blank"><Icon icon="ri:instagram-line" /></a>
					<a href="https://www.facebook.com" target="_blank"><Icon icon="ri:facebook-fill" /></a>
				</div>
				<span>&copy; 2024 Kuiz Tous droit réservés</span>
			</div>
		</div>
	</footer>
</template>
<script setup lang="ts">
	import { ref } from 'vue';

	const joinBtnHovered = ref(false);
	const lowLevelSubjects = [
		'الرياضيات',
		'علوم الحيات والارض',
		'الفزياء',
		'التربية التكنولجية',
		'الاعلامية',
		'اللغة العربية',
		'اللغة الفرنسية',
		'اللغة الإنجليزية',
		'التربية الاسلامية',
		'التربية المدنية',
		'التاريخ',
		'الجغرافيا',
	];
	const heightLevelFirstCommunSubjects = [
		'الرياضيات',
		'علوم الحيات والارض',
		'الفزياء',
		'الاعلامية',
		'اللغة العربية',
		'اللغة الفرنسية',
		'اللغة الإنجليزية',
	];
	const heightLevelSecondCommunSubjects = ['التربية الاسلامية', 'التربية المدنية', 'التاريخ', 'الجغرافيا', 'إقتصاد', 'تصرف'];
	const lastSecondaryLevelSubjects = ['ميكانيك', 'الكتريك'];
	const levels = [
		{
			level: 'السابع الاساسي',
			subjects: lowLevelSubjects,
		},
		{
			level: 'الثامن الاساسي',
			subjects: lowLevelSubjects,
		},
		{
			level: 'التاسع الاساسي',
			subjects: lowLevelSubjects,
		},
		{
			level: 'اولى ثانوي',
			subjects: lowLevelSubjects,
		},
		{
			level: 'الثانية ثانوي',
			subjects: [...heightLevelFirstCommunSubjects, ...heightLevelSecondCommunSubjects],
		},
		{
			level: 'الثالثة ثانوي',
			subjects: [...heightLevelFirstCommunSubjects, ...lastSecondaryLevelSubjects, ...heightLevelSecondCommunSubjects],
		},
		{
			level: 'بكالوريا',
			subjects: [...heightLevelFirstCommunSubjects, ...lastSecondaryLevelSubjects, ...heightLevelSecondCommunSubjects],
		},
	];
</script>
<style scoped lang="scss">
	.footer-container {
		.footer-header {
			// height: 150px;
			background: rgba(128, 0, 128, 1);
			position: relative;
			margin-bottom: 8px;
			.footer-header-overlay,
			.footer-header-overlay-right {
				position: absolute;
				background-image: linear-gradient(90deg, #ffffff1f 1px, transparent 1px),
					linear-gradient(180deg, #ffffff1f 1px, transparent 1px);
				background-size: 49px 38px;
				background-position: -5px 0px;
				height: 100%;
				width: 93px;
			}
			.footer-header-overlay {
				left: 0;
			}
			.footer-header-overlay-right {
				right: 0;
			}
			.footer-header-content {
				text-align: center;
				padding: 49px 0 10px;
				color: white;
				font-family: Noto Naskh Arabic;
				h4 {
					font-size: 18px;
					font-weight: 700;
					line-height: 30.65px;
					font-size: 18px;
				}
				div {
					width: max-content;
					margin: 29px auto 0;
					background-image: url(@/assets/learning-bull.svg);
					background-repeat: no-repeat;
					background-position: bottom right;
					background-size: 111px 131px;
					padding: 0px 92px 46px;
					&._hovred {
						background-image: url(@/assets/learning-bull-light.svg);
					}
					a {
						padding: 15px 40px;
						border-radius: 30px;
						border: 2px solid white;
						font-family: Noto Naskh Arabic;
						font-size: 30px;
						font-weight: 700;
						line-height: 51.09px;
						display: block;
					}
				}
			}
		}
		.footer-content {
			padding: 1px 50px;
			background: #FFFBFB;
			margin-bottom: 73px;
			.footer-sitemap {
				padding: 11px 0;
				h5 {
					font-size: 18px;
					font-weight: 500;
					text-align: right;
					margin-bottom: 10px;
					font-family: Noto Naskh Arabic;font-size: 20px;font-weight: 700;line-height: 34.06px;
				}
				> div {
					display: grid;
					grid-template-columns: repeat(7, 1fr);
					text-align: right;
					h6 {
						display: flex;
						align-items: center;
						font-family: Noto Naskh Arabic;
						font-size: 16px;
						font-weight: 700;
						line-height: 27.25px;
						color: #4d4d4d;
					}
					div div {
						margin-top: 8px;
						font-family: Noto Naskh Arabic;font-size: 16px;font-weight: 500;line-height: 27.25px;
						color: #4d4d4d;
					}
				}
			}
		}
		.footer-footer{
			background-color: #fff;
			padding: 1px 50px;
			.footer-divider {
				width: 100%;
				background-color:#800080;
				height: 4px;
				border-radius: 16px;
			}
			.footer-copyright {
				padding: 16px 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				span {
					font-size: 14px;
					direction: ltr;
				}
				div {
					display: flex;
					gap: 6px;
					a {
						width: 32px;
						height: 32px;
						border-radius: 50px;
						background-color:#800080;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 24px;
						font-weight: 600;
						color: white;
					}
				}
			}
		}
	}
</style>
