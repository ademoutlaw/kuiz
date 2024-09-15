<template>
	<div class="header-search">
		<input type="text" placeholder="ابحث عن Quiz..." />
		<div>
			<img src="@/assets/search.svg" alt="search" />
		</div>
	</div>
</template>
<!--  -->
<script setup lang="ts"></script>
<style scoped lang="scss">
	.header-search {
		width: 100%;
		max-width: 750px;
		height: 38px;
		border-radius: 30px;
		overflow: hidden;
		position: relative;
		border: 1px solid rgba(217, 217, 217, 1);
		transition: border-color 0.2s;
		&:hover {
			border: 1px solid #666666;
		}
		&:focus-within {
			border: 1px solid #ba2a92;
		}
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
			&:focus {
				outline-color: #ba2a92;
			}
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
</style>
