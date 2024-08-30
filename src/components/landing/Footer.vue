<script setup lang="ts">
	const levels = [
		{
			level: 'السابع الاساسي',
			subjects: [
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
			],
		},
		{
			level: 'الثامن الاساسي',
			subjects: [
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
			],
		},
		{
			level: 'التاسع الاساسي',
			subjects: [
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
			],
		},
		{
			level: 'اولى ثانوي',
			subjects: ['السنة ثانية علوم', 'السنة ثانية اداب', 'السنة ثانية اقتصاد و تصرف', 'السنة ثانية تكنولوجيا الإعلامية'],
		},
		{
			level: 'الثانية ثانوي',
			subjects: ['Math', 'science', 'computer', 'computer'],
		},
		{
			level: 'الثالثة ثانوي',
			subjects: ['Math', 'science', 'computer', 'computer'],
		},
		{
			level: 'بكالوريا',
			subjects: ['Math', 'science', 'computer', 'computer'],
		},
	];
</script>

<template>
	<footer class="footer-container">
		<div class="footer-header">
			<div class="footer-header-overlay"></div>
			<div class="footer-header-overlay-right"></div>
			<div class="footer-header-content">
				<h4>انضم إلى Kuiz اليوم وحوّل مراجعاتك إلى تجربة مشوّقة، ديناميكية، مخصصة لك ولأصدقائك!</h4>
				<div>
					<button>اشترك الان في كويز</button>
				</div>
			</div>
		</div>
		<div class="footer-content">
			<div class="footer-sitemap">
				<h5>المواد التعليمية</h5>
				<div>
					<div v-for="level of levels" :key="level.level">
						<h6>{{ level.level }}</h6>
						<div v-for="subject of level.subjects" :key="subject">{{ subject }}</div>
					</div>
				</div>
			</div>
			<div class="footer-divider"></div>
			<div class="footer-copyright">
				<div>
					<div>Y</div>
					<div>T</div>
					<div>I</div>
					<div>F</div>
				</div>
				<span>&copy; 2024 Kuiz Tous droit réservés</span>
			</div>
		</div>
	</footer>
</template>
<style scoped lang="scss">
	.footer-container {
		.footer-header {
			// height: 150px;
			background: rgba(128, 0, 128, 1);
			position: relative;
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
					button {
						padding: 15px 40px;
						border-radius: 30px;
						border: 2px solid white;
						font-family: Noto Naskh Arabic;
						font-size: 30px;
						font-weight: 700;
						line-height: 51.09px;
					}
				}
			}
		}
		.footer-content {
			padding: 10px 50px;
			.footer-sitemap {
				padding: 20px 0;
				h5 {
					font-size: 18px;
					font-weight: 500;
					text-align: right;
					margin-bottom: 20px;
				}
				> div {
					display: grid;
					grid-template-columns: repeat(7, 1fr);
					text-align: right;
					h6 {
						font-size: 18px;
						font-weight: 400;
					}
					div div {
						font-size: 11px;
					}
				}
			}
			.footer-divider {
				width: 100%;
				background-color: rebeccapurple;
				height: 4px;
				border-radius: 16px;
			}
			.footer-copyright {
				padding: 10px 0;
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
					div {
						width: 32px;
						height: 32px;
						border-radius: 50px;
						background-color: rebeccapurple;
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
