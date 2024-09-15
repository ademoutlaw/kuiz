<script setup lang="ts"></script>

<template>
	<nav class="shrink-0 flex flex-col w-32 top-0 sticky h-screen">
		<div class="logo shrink-0">
			<img src="@/assets/white-logo.svg" alt="KUIZ-LOGO" />
		</div>
		<el-scrollbar class="w-full">
			<ul>
				<li>
					<RouterLink :to="{ name: 'appHome' }">
						<div class="item-container">
							<img src="@/assets/home-outline.svg" alt="" />
							<span>الاستقبال</span>
						</div>
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name: 'level' }">
						<div class="item-container">
							<img src="@/assets/question-mark-square.svg" alt="" />
							<span>كويز</span>
						</div>
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name: 'progress' }">
						<div class="item-container">
							<img src="@/assets/star-linear.svg" alt="" />
							<span>التقدم</span>
						</div>
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name: 'profile' }">
						<div class="item-container">
							<img src="@/assets/profile-light.svg" alt="" />
							<span>الملف الشخصي</span>
						</div>
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name: 'about' }"
						><div class="item-container">
							<img src="@/assets/headset-help.svg" alt="" />
							<span>مساعدة</span>
						</div></RouterLink
					>
				</li>
			</ul>
		</el-scrollbar>
	</nav>
</template>
<!--  -->
<style scoped lang="scss">
	nav {
		background: rgba(128, 0, 128, 1);
		.logo {
			margin: 57px auto 28px;
			width: max-content;
		}
		ul {
			padding-top: 30px;
			width: 100%;
			li {
				a {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 21px;
					&::before {
						content: '';
						display: block;
						width: 3px;
						height: 40px;
						border-radius: 15px 0px 0px 15px;
						& ~ a.router-link-active {
							background: rgba(239, 129, 20, 1);
						}
					}
					.item-container {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 90px;
						height: 81px;
						border-radius: 0px 20px 20px 0px;
						font-family: Noto Naskh Arabic;
						font-size: 16px;
						font-weight: 500;
						line-height: 27.25px;
						text-align: center;
						color: white;
						img{
							width:24px;
							margin-bottom: 4px;
						}
					}
					&.router-link-active {
						&::before,
						.item-container {
							background: rgba(239, 129, 20, 1);
						}
					}
				}
			}
		}
	}
</style>
