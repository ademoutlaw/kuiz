<template>
	<header class="flex items-center px-8">
		<div class="header-logo">
			<router-link :to="{ name: 'home' }">
				<img src="@/assets/logo.png" />
			</router-link>
		</div>
		<div class="flex justify-between items-center w-full gap-8">
			<ul class="header-menu">
				<li><router-link :to="{ name: 'content' }">محتوانا</router-link></li>
				<li><router-link :to="{ name: 'about' }"> من نحن </router-link></li>
				<li><router-link :to="{ name: 'guid' }">دليل المستخدم</router-link></li>
			</ul>
			<KSearch />
			<RightToolbar guest-page />
		</div>
	</header>
</template>
<!--  -->
<script setup lang="ts">
	import KSearch from '@/components/common/KSearch.vue';
	import RightToolbar from '@/components/common/RightToolbar.vue';
</script>
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
			margin: 0 24px 0 0;
			gap: 32px;
			flex-shrink: 0;
			font-size: 18px;
			font-weight: 500;
			line-height: 40.87px;
			color: rgba(77, 77, 77, 1);
			li:hover {
				color: rgba(209, 69, 202, 1);
			}
			&:not(:hover) {
				.router-link-active.router-link-exact-active {
					color: rgba(209, 69, 202, 1);
				}
			}
		}
	}
</style>
