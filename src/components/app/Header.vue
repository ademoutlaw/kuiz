<template>
	<header class="flex items-center px-8 py-4">
		<div class="header-head">
			<h2>مرحبًا بك</h2>
			<h3>لنبدأ اليوم بكويز جديد</h3>
		</div>

		<div class="header-search">
			<input type="text" placeholder="ابحث عن Quiz..." />
			<div>
				<img src="@/assets/search.svg" alt="search" />
			</div>
		</div>

		<div class="header-actions">
			<div class="header-action">
				<img src="@/assets/champion-cup.svg" alt="gift" />
			</div>
			<div class="header-action">
				<img src="@/assets/bell.svg" alt="notif" />
			</div>
			<HeaderAccount />
			<!-- <div>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						<div class="avatar">{{ firstChar }}</div>
						<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>الملف الشخصي</el-dropdown-item>
							<el-dropdown-item @click="logout">تسجيل الخروج</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div> -->
			<!-- <div class="header-lang" @click="logout">logout</div> -->
		</div>
	</header>
</template>
<!--  -->
<script setup lang="ts">
	import HeaderAccount from '../HeaderAccount.vue';
</script>
<style scoped lang="scss">
	header {
		height: 95px;
		position: sticky;
		top: 0;
		z-index: 500;
		background-color: white;
		box-sizing: content-box;
		.header-head {
			flex-shrink: 0;
			h2 {
				font-family: Noto Naskh Arabic;
				font-size: 32px;
				font-weight: 400;
				line-height: 54.5px;
			}
			h3 {
				font-family: Noto Naskh Arabic;
				font-size: 24px;
				font-weight: 400;
				line-height: 40.87px;
			}
		}
		.header-search {
			width: 100%;
			height: 50px;
			border-radius: 30px;
			overflow: hidden;
			position: relative;
			border: 1px solid rgba(217, 217, 217, 1);
			margin: 22px 164px;
			input {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: transparent;
				padding-right: 50px;
				padding-left: 7px;
				text-align: right;
				border-radius: 30px;
			}
			div {
				position: absolute;
				top: 0;
				right: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 43px;
			}
		}
		.header-actions {
			display: flex;
			flex-shrink: 0;
			align-items: center;
			width: 160px;
			gap: 8px;
			.header-action {
				margin-left: 16px;
			}
			.header-bell {
				background-image: url(@/assets/bell.svg);
				width: 36px;
				height: 100%;
			}
			.header-lang {
				color: rgba(102, 102, 102, 1);
				font-size: 14px;
				font-weight: 400;
				line-height: 64px;
			}
			.el-dropdown-link {
				display: flex;
				align-items: center;
				outline: none;
				gap: 6px;
				.avatar {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					background: rgba(128, 0, 128, 1);
					font-family: Noto Naskh Arabic;
					font-size: 20px;
					font-weight: 700;
					line-height: 34.06px;
					text-align: center;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>
