<template>
	<header class="flex items-center px-8">
		<div class="header-logo">
			<router-link :to="{ name: 'home' }">
				<img src="@/assets/logo.png" />
			</router-link>
		</div>
		<ul class="header-menu">
			<li><router-link :to="{ name: 'content' }">محتوانا</router-link></li>
			<li><router-link :to="{ name: 'about' }"> من نحن </router-link></li>
			<li><router-link :to="{ name: 'guid' }">دليل المستخدم</router-link></li>
		</ul>
		<div class="header-search">
			<input type="text" placeholder="ابحث عن Quiz..." />
			<div>
				<img src="@/assets/search.svg" alt="search" />
			</div>
		</div>
		<div class="header-sign-btns">
			<router-link :to="{ name: 'login' }" class="header-login-btn">تسجيل دخول</router-link>
			<router-link :to="{ name: 'register' }" class="header-register-btn">اشترك الان</router-link>
		</div>
		<div class="header-lang-setting">
			<div class="header-lang-flag"></div>
			<div class="header-lang">عربية</div>
		</div>
	</header>
</template>
<!--  -->
<script setup lang="ts"></script>
<style scoped lang="scss">
	header {
		height: 128px;
		position: sticky;
		top: 0;
		z-index: 500;
		background-color: white;
		.header-logo {
			flex-shrink: 0;
			width: 81px;
		}
		.header-menu {
			display: flex;
			margin: 0 24px 0 32px;
			gap: 32px;
			flex-shrink: 0;
			font-size: 18px;
			font-weight: 500;
			line-height: 40.87px;
			color: rgba(77, 77, 77, 1);
			.router-link-active.router-link-exact-active {
				color: rgba(209, 69, 202, 1);
			}
		}
		.header-search {
			width: 100%;
			height: 38px;
			border-radius: 30px;
			overflow: hidden;
			position: relative;
			border: 1px solid rgba(217, 217, 217, 1);
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
		.header-sign-btns {
			display: flex;
			flex-shrink: 0;
			margin: 0 10px;
			gap: 16px;
			.header-login-btn {
				background: #FFDCFF3D;
				color: rgba(166, 0, 166, 1);
				border-radius: 15px;
				padding: 2px 25px;
				font-size: 16px;
				font-weight: 500;
				line-height: 34.06px;
			}
			.header-register-btn {
				background-color: #d145ca;
				color: white;
				border-radius: 15px;
				padding: 2px 23px;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				font-size: 16px;
				font-weight: 500;
				line-height: 34.06px;
			}
		}
		.header-lang-setting {
			display: flex;
			flex-shrink: 0;
			align-items: center;
			gap: 8px;
			.header-lang-flag {
				background-image: url(@/assets/tn-flag.svg);
				width: 24px;
				height: 24px;
				background-size: contain;
			}
			.header-lang {
				color: rgba(102, 102, 102, 1);
				font-size: 14px;
				font-weight: 400;
				line-height: 64px;
			}
		}
	}
	nav {
		width: 100vw;
		background-color: rgb(55, 255, 0);
	}
</style>
