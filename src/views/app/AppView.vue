<template>
	<div>
		<div class="flex items-stretch">
			<SideBar />
			<div class="w-full">
				<Header />
				<div class="px-8 pt-6">
					<router-view />
				</div>
			</div>
		</div>
	</div>
	<!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script setup lang="ts">
	import Header from '@/components/app/Header.vue';
	import SideBar from '@/components/app/SideBar.vue';
</script>
