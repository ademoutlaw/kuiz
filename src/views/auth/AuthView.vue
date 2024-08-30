<template>
	<div class="auth-container">
		<div class="auth-fixed-side">
			<Grid />
			<h1>
				<span>كويزييي </span>
				<span class="title-underline"> و إنجح.</span>
			</h1>
		</div>
		<div class="auth-content">
			<div class="auth-header">
				<div class="auth-header-logo">
					<router-link :to="{ name: 'home' }">
						<img src="@/assets/logo.png" />
					</router-link>
				</div>
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
			position: relative;
			// flex-shrink: 0;
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
		.auth-content {
			width: 100%;
			padding: 0 50px;
			height: 100vh;
			overflow-y: scroll;
			.auth-header {
				padding: 45px 0px 16px;
				img {
					width: 90px;
				}
			}
		}
		.form-row {
			width: 100%;
			display: flex;
			justify-content: space-between;
			gap: 30px;
			.el-form-item__label {
				font-family: Noto Naskh Arabic;
				font-size: 18px;
				font-weight: 500;
				line-height: 30.65px;
				text-align: right;
				padding: 0 0 8px 0;
				color: black;
				direction: ltr;
			}
			.form-col,
			.el-form-item {
				width: 100%;
				.el-input {
					--el-input-border-radius: 15px;
					.el-input__inner {
						// width: 100%;
						height: 53px;
						// padding: 13px 16px 13px 16px;
						// border-radius: 15px;
						// border: 1px solid rgba(217, 217, 217, 1);
					}
				}
				.el-form-item__error {
					right: 0;
				}
			}
		}
	}
</style>
