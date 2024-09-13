<template>
	<div class="auth-container">
		<div class="auth-fixed-side">
			<div class="auth-fixed-side_content">
				<Grid />
				<h1>
					<span>كويزييي </span>
					<span class="title-underline"> و إنجح.</span>
				</h1>
			</div>
		</div>
		<div class="auth-content">
			<div class="auth-header">
				<div class="auth-header-logo">
					<router-link :to="{ name: 'home' }">
						<img src="@/assets/logo.png" />
					</router-link>
				</div>
				<router-link :to="{ name: 'home' }">
					<span src="@/assets/logo.png">رجوع<Icon icon="mdi:chevron-left" /></span>
				</router-link>
			</div>
			<div><router-view /></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Grid from './../../components/landing/Grid.vue';
</script>

<style lang="scss">
	.auth-container {
		display: flex;
		flex-direction: row-reverse;
		.auth-fixed-side {
			height: 100vh;
			background: rgba(128, 0, 128, 1);
			width: 656px;
			position: sticky;
			top:0;
			.auth-fixed-side_content{
				position: relative;
				height: 100%;
				h1 {
					position: relative;
					font-family: Inter;
					font-size: 150px;
					font-weight: 700;
					line-height: 181.53px;
					text-align: center;
					display: flex;
					flex-direction: column;
					height: 100%;
					justify-content: center;
					color: #fff;
					.title-underline {
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
							background-position: top center;
							background-position-y: -59px;
							background-size: 284px;
						}
					}
				}
			}
		}
		.auth-content {
			width: 100%;
			padding: 0 50px;
			min-height: 100vh;
			// overflow-y: scroll;
			.auth-header {
				padding: 45px 0px 16px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				img {
					width: 90px;
				}
				span {
					display: flex;
					align-items: center;
					font-family: Noto Naskh Arabic;
					font-size: 20px;
					font-weight: 500;
					line-height: 34.06px;
					text-align: left;
					color: #800080;
				}
			}
		}
	}
</style>
