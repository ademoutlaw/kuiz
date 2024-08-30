<template>
	<div>
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script setup lang="ts">
	import Header from '../components/landing/Header.vue';
	import Footer from '../components/landing/Footer.vue';
</script>

<style scoped></style>
