<template>
	<div>
		<section class="hero">
			<Grid />
			<div class="hero-content">
				<div class="hero-body">
					<h1 class="hero-title">
						<span>مع كويز، كويزييي</span>
						<span class="hero-title-underline">و انجح. </span>
					</h1>
					<div class="hero-description">
						قل وداعًا للأساليب التقليدية المملة! مع كويز، استمتع بكويزات ديناميكية ومخصصة تتناسب مع كل مادة دراسية.
					</div>
					<div class="hero-action">
						<button>إشترك الأن في كويز</button>
					</div>
				</div>
				<div class="hero-img">
					<img src="./../assets/hero.svg" alt="hero" />
				</div>
			</div>
		</section>
		<section class="partner">
			<Grid />
			<div class="partner-content">
				<h1 class="partner-title">كويز شريكك في التعلم من السنة السابعة أساسي حتى البكالوريا.</h1>
				<div class="partner-description">
					كويزات مبتكرة لكل مستوى دراسي، من السنة السابعة أساسي حتى البكالوريا، لتحويل عملية المراجعة إلى تجربة ممتعة وتعزيز نجاحك
					بشكل استثنائي.
				</div>
				<div class="partner-go">
					<span :class="{'cursor-pointer':level!==''}" @click="level = ''">كويز</span>
					<span><Icon icon="carbon:chevron-left" /></span>
					<template  v-if="level">
						<span>مسارك الدراسي</span>
						<span class="_circle" ><Icon icon="mdi:chevron-left" /></span>
					</template>
				</div>
				<div class="partner-actions-container">
					<span>اختار مسارك الدراسي :</span>
					<div class="partner-actions _3-actions" v-if="level === 'primary'">
						<div class="partner-action-container">
							<div class="partner-action">
								<div class="partner-action-title">السابعة أساسي</div>
							</div>
						</div>
						<div class="partner-action-container">
							<div class="partner-action">
								<div class="partner-action-title">الثامنة أساسي</div>
							</div>
						</div>
						<div class="partner-action-container">
							<div class="partner-action">
								<div class="partner-action-title">التاسعة أساسي</div>
							</div>
						</div>
					</div>
					<div class="partner-actions _4-actions" v-else-if="level === 'secondary'">
						<div class="partner-action-container">
							<div class="partner-action">
								<div class="partner-action-title">أولى ثانوي</div>
							</div>
						</div>
						<div class="partner-action-container">
							<div class="partner-action">
								<div class="partner-action-title">الثانية ثانوي</div>
							</div>
						</div>
						<div class="partner-action-container">
							<div class="partner-action">
								<div class="partner-action-title">الثالثة ثانوي</div>
							</div>
						</div>
						<div class="partner-action-container">
							<div class="partner-action">
								<div class="partner-action-title">البكالوريا</div>
							</div>
						</div>
					</div>
					<div class="partner-actions" v-else>
						<div class="partner-action-container" @click="level = 'primary'">
							<div class="partner-action cursor-pointer">
								<div class="partner-action-icon">
									<img src="./../assets/first-level.svg" alt="" />
								</div>
								<div class="partner-action-title">تعليم اعدادي</div>
							</div>
						</div>
						<div class="partner-action-container" @click="level = 'secondary'">
							<div class="partner-action cursor-pointer">
								<div class="partner-action-icon">
									<img src="./../assets/second-level.svg" alt="" />
								</div>
								<div class="partner-action-title">تعليم ثانوي</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="why-quiz">
			<h3>لماذا كويز؟</h3>
			<BooksSlider />
		</section>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import BooksSlider from './../components/landing/BooksSlider.vue';
	import Grid from './../components/landing/Grid.vue';

	const level = ref('');
</script>

<style scoped lang="scss">
	.hero {
		position: relative;
		background-color: #800080;
		padding: 40px 105px;

		.hero-content {
			position: relative;
			display: flex;
			height: 100%;
			justify-content: space-between;
			align-items: center;

			.hero-img {
				display: flex;
				height: 100%;
				justify-content: center;
				align-items: center;
			}
			.hero-body {
				color: white;
				text-align: right;
				height: 100%;
				display: flex;
				flex-direction: column;
				.hero-title {
					font-family: Inter;
					font-size: 100px;
					font-weight: 700;
					line-height: 121.02px;
					text-align: right;
					margin-bottom: 50px;
					span {
						display: block;
					}
					.hero-title-underline {
						position: relative;
						&::after {
							content: '';
							position: absolute;
							width: 100%;
							height: 50px;
							bottom: -55px;
							right: 0;
							background-image: url(/src/assets/underline.svg);
							background-repeat: no-repeat;
							background-position: top right;
							background-position-y: -49px;
						}
					}
					// width: 440px;
				}
				.hero-description {
					margin: 10px 0;
					font-family: Noto Naskh Arabic;
					font-size: 40px;
					font-weight: 500;
					line-height: 68.17px;
					text-align: right;
				}
				.hero-action {
					button {
						padding: 15px 40px;
						border-radius: 30px;
						background: rgba(239, 129, 20, 1);
						border-bottom: 2px solid white;
						box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
						color: white;
						font-family: Noto Naskh Arabic;
						font-size: 30px;
						font-weight: 700;
						line-height: 51.09px;
						text-align: left;
					}
				}
			}
		}
	}
	.partner {
		padding: 32px 275px;
		margin: 24px auto;
		background: rgba(255, 220, 255, 0.16);
		position: relative;
		.partner-content {
			position: relative;
			.partner-title {
				text-align: center;
				font-family: Noto Naskh Arabic;
				font-size: 50px;
				font-weight: 700;
				line-height: 85.15px;
				color: black;
			}
			.partner-description {
				font-family: Noto Naskh Arabic;
				font-size: 30px;
				font-weight: 700;
				line-height: 51.09px;
				text-align: center;
				color: rgba(51, 51, 51, 1);
			}
			.partner-go {
				font-family: Noto Naskh Arabic;
				font-size: 30px;
				font-weight: 700;
				line-height: 51.09px;
				text-align: center;
				margin-top: 34px;
				display: flex;
				justify-content: center;
				align-items: center;
				gap:8px;
				._circle{
					display: inline-block;
					width: 48px;
					height: 48px;
					border-radius: 50%;
					background-color: #fff;
					box-shadow: 0px 4px 4px 0px #00000040;
					margin-right: 8px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			.partner-actions-container {
				span {
					text-align: right;
					width: 100%;
					display: block;
					font-size: 25px;
					font-weight: 500;
				}
				.partner-actions {
					display: flex;
					gap: 94px;
					margin-top: 32px;
					.partner-action-container {
						width: 100%;
						border-bottom: 4px solid white;
						border-radius: 50px;
						box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
						.partner-action {
							color: #800080;
							border: 4px solid currentColor;
							border-radius: 50px;
							width: 100%;
							height: 214px;
							display: flex;
							flex-direction: column;
							align-items: center;
							padding: 22px;
							justify-content: space-between;
							.partner-action-icon {
								font-size: 30px;
								text-align: center;
							}
							.partner-action-title {
								font-size: 40px;
								font-weight: 700;
								text-align: center;
							}
						}
					}
					&._3-actions {
						gap: 94px;
						margin-bottom: 90px;
    				margin-right: -109px;
						.partner-action-container {
							.partner-action {
								height: 150px;
    						width: 340px;
								padding: 51px 0;
								.partner-action-title {
									font-family: Inter;
									font-size: 30px;
									font-weight: 700;
									line-height: 36.31px;
									text-align: center;
								}
							}
						}
					}
					&._4-actions {
						gap: 40px;
						margin-bottom: 90px;
						margin-right: -108px;
						.partner-action-container {
							.partner-action {
								height: 122px;
								width: 269px;
								padding: 38px 3px;
								.partner-action-title {
									font-family: Inter;
									font-size: 30px;
									font-weight: 700;
									line-height: 36.31px;
									text-align: center;
								}
							}
						}
					}
				}
			}
		}
	}
	.why-quiz {
		background: #fefaf6;
		padding: 16px 0px 59px 0;
		h3 {
			width: 100%;
			text-align: center;
			font-size: 50px;
			font-weight: 700;
			line-height: 85.15px;
			margin-bottom: 66px;
		}
	}
</style>
