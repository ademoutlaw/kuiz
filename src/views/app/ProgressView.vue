<template>
	<div class="progress-container">
		<div class="progress-content">
			<h1>تقدمي</h1>
			<div class="progress-card" v-for="i of 5" :key="i">
				<div class="progress-card-subject">
					<h4>المادة</h4>
					<div class="_footer">
						<div class="_icon">
							<img src="/subjects/chimistry.svg" alt="" />
						</div>
						<div class="_subject">Chimie</div>
					</div>
				</div>
				<div class="progress-card-progress">
					<h4>التقدم</h4>
					<div class="_footer">
						<div class="progress-bar-container">
							<div class="progress-bar">
								<span :style="{ width: `${40}%` }"></span>
							</div>
							<span>%38</span>
						</div>
						<div class="quiz-count">10/75 كويز</div>
					</div>
				</div>
				<div class="progress-card-points">
					<h4>النقاط</h4>
					<div class="_footer">
						<div>
							<div>
								<img src="@/assets/champion-cup.svg" alt="" />
							</div>
							<span>250 نقطة</span>
						</div>
						<button>مواصلة كويز</button>
					</div>
				</div>
			</div>
		</div>
		<div class="progress-aside">
			<div class="progress-aside-points">
				<div class="_header">يمكنك الحصول على الهدايا بالنقاط التي جمعتها</div>
				<div class="_body">
					<div>
						<img src="@/assets/champion-cup.svg" alt="" />
					</div>
					<span>250 نقطة</span>
				</div>
				<div class="_footer"><img src="@/assets/pink.svg" />الهدايا</div>
			</div>
			<div class="progress-aside-week">
				<div class="week-ctrl">
					<span><Icon icon="mdi:chevron-right" /></span>
					<span>أكتوبر</span>
					<span><Icon icon="mdi:chevron-left" /></span>
				</div>
				<div class="week-days">
					<div v-for="d of days" :key="d.value" :class="{ _today: d.value === 20 }">
						<div class="_name">{{ d.name }}</div>
						<div class="_value">{{ d.value }}</div>
					</div>
				</div>
			</div>
			<div class="progress-aside-stats">
				<div class="stats-header">
					<div class="stats-title">الساعات المستغرقة</div>
					<div class="stats-subjects">
						<div><span class="_circle" style="color: #54bede"></span> <span class="_title">SVT</span></div>
						<div><span class="_circle" style="color: #4ca14d"></span> <span class="_title">Chimie</span></div>
						<div><span class="_circle" style="color: #cd5b62"></span> <span class="_title">English</span></div>
						<div><span class="_circle" style="color: #cb7400"></span> <span class="_title">Maths</span></div>
					</div>
				</div>
				<div class="stats-body">
					<div v-for="d of days" :key="d.value">
						<div class="_day">
							<div class="_title">{{ d.name }}</div>
							<div
								class="_box"
								v-for="(s, i) of d.stats"
								:key="i"
								:style="{ background: s.color, height: `${s.height}px` }"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	const days = [
		{
			name: 'إثن',
			value: 17,
			stats: [
				{ color: '#54BEDE', height: 61 },
				{ color: '#CB7400', height: 30 },
			],
		},
		{ name: 'ثلث', value: 18, stats: [{ color: '#4CA14D', height: 40 }] },
		{ name: 'أربع', value: 19, stats: [{ color: '#54BEDE', height: 40 }] },
		{ name: 'خمي', value: 20, stats: [{ color: '#CD5B62', height: 31 }] },
		{ name: 'جمع', value: 21, stats: [{ color: '#54BEDE', height: 40 }] },
		{ name: 'سبت', value: 22, stats: [{ color: 'gray', height: 2 }] },
		{ name: 'أحد', value: 23, stats: [{ color: 'gray', height: 2 }] },
	];
</script>

<style scoped lang="scss">
	.progress-container {
		display: flex;
		gap: 10px;
		.progress-content {
			width: 100%;
			// width: 1242px;
			border-radius: 20px;
			background: #fefaf666;
			h1 {
				font-family: Noto Naskh Arabic;
				font-size: 30px;
				font-weight: 400;
				line-height: 51.09px;
				color: #4d4d4d;
			}
			.progress-card {
				margin-top: 49px;
				border-radius: 10px;
				background: #ffffff;
				box-shadow: 0px 4px 16px 0px #c1bfbf17;
				display: flex;
				padding: 24px 40px;
				> div {
					h4 {
						font-family: Noto Naskh Arabic;
						font-size: 20px;
						font-weight: 700;
						line-height: 34.06px;
						color: #808080;
					}
					._footer {
					}
				}
				.progress-card-subject {
					margin-left: 70px;
					h4 {
						text-align: center;
					}
					._footer {
						._icon {
							width: 50px;
							height: 50px;
							border-radius: 50%;
							border: 2px solid #489d53;
							margin: 16px 0 6px;
							display: flex;
							justify-content: center;
							align-items: center;
						}
						._subject {
							font-family: Noto Naskh Arabic;
							font-size: 14px;
							font-weight: 700;
							line-height: 23.84px;
							text-align: center;
							color: #4ca14d;
						}
					}
				}
				.progress-card-progress {
					width: 100%;
					._footer {
						margin-top: 27px;
					}
					.progress-bar-container {
						width: 100%;
						display: flex;
						align-items: center;
						gap: 6px;
						margin: 14px 0 32px;
						.progress-bar {
							width: 100%;
							height: 12px;
							background: #d9d9d9;
							border-radius: 50px;
							border: 2px solid #d9d9d9;
							span {
								display: block;
								height: 100%;
								background-color: #4ca14d;
								border-radius: 50px;
							}
						}
						> span {
							font-family: Noto Naskh Arabic;
							font-size: 14px;
							font-weight: 400;
							// line-height: 23.84px;
							text-align: center;
						}
					}
					.quiz-count {
						font-family: Noto Naskh Arabic;
						font-size: 16px;
						font-weight: 500;
						line-height: 27.25px;
						text-align: right;
						color: #2b2523;
					}
				}
				.progress-card-points {
					margin-right: 70px;
					._footer {
						margin-top: 25px;
						display: flex;
						align-items: center;
						gap: 60px;
						div div {
							display: flex;
							justify-content: center;
						}
						span {
							display: block;
							width: max-content;
							padding-top: 6px;
						}
						button {
							// width: Hug (125px)px;height: Hug (44px)px;
							height: 44px;
							padding: 10px 10px 10px 10px;
							border-radius: 15px;
							background: #ef8114;
							color: white;
							width: 125px;
						}
					}
				}
			}
		}
		.progress-aside {
			width: 440px;
			.progress-aside-points {
				background: #fff9ff;
				width: 439px;
				height: 300px;
				border-radius: 20px;
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				padding: 32px;
				._header {
					text-align: center;
					font-family: Noto Naskh Arabic;
					font-size: 20px;
					font-weight: 400;
					line-height: 34.06px;
					text-align: center;
				}
				._body {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					height: 100%;
					div {
						width: 82px;
						margin-bottom: 24px;
						img {
							width: 100%;
						}
					}
				}
				._footer {
					color: #d145ca;
					font-family: Noto Naskh Arabic;
					font-size: 16px;
					font-weight: 700;
					line-height: 27.25px;
					text-align: right;
					width: 100%;
					display: flex;
				}
			}
			.progress-aside-week {
				background: #fdf2e866;
				margin: 16px 0;
				width: 439px;
				height: 154px;
				padding: 12px 39px 30px;
				.week-ctrl {
					width: 292px;
					height: 34px;
					display: flex;
					justify-content: space-between;
					margin: 0 auto 12px;
				}
				.week-days {
					display: flex;
					> div {
						flex-grow: 1;
						display: flex;
						flex-direction: column;
						align-items: center;
						// border:1px solid #489d53;

						._name {
							font-family: Noto Naskh Arabic;
							font-size: 20px;
							font-weight: 500;
							line-height: 34.06px;
							text-align: center;
							color: #666666;
						}
						._value {
							font-family: Noto Naskh Arabic;
							font-size: 16px;
							font-weight: 500;
							line-height: 27.25px;
							text-align: center;
							width: 32px;
							height: 32px;
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: 50%;
							background-color: white;
						}
						&._today {
							._value {
								background-color: #800080;
								color: white;
							}
						}
					}
				}
			}
			.progress-aside-stats {
				background: #fff9ff;
				width: 439px;
				height: 345px;
				border-radius: 20px;
				padding: 16px 30px;
				display: flex;
				flex-direction: column;
				.stats-header {
					display: flex;
					justify-content: space-between;
					.stats-title {
						font-family: Noto Naskh Arabic;
						font-size: 20px;
						font-weight: 500;
						line-height: 34.06px;
						text-align: left;
						color: #666666;
					}
					.stats-subjects {
						text-align: left;
						direction: ltr;
						width: 150px;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						div {
							width: 67px;
						}
						._circle {
							display: inline-block;
							background-color: currentColor;
							height: 12px;
							width: 12px;
							border-radius: 50%;
						}
						._title {
							font-family: Noto Naskh Arabic;
							font-size: 14px;
							font-weight: 500;
							line-height: 23.84px;
							text-align: left;
						}
					}
				}
				.stats-body {
					display: flex;
					height: 100%;
					justify-content: space-between;
					._day {
						display: flex;
						flex-direction: column-reverse;
						width: 50px;
						height: 100%;
						align-items: center;
						justify-content: flex-start;
						gap: 6px;
					}
					._box {
						width: 50px;
						border-radius: 7px;
					}
				}
			}
		}
	}
</style>
